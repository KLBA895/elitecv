export function parseBasicCVText(text: string) {
  const clean = (value: string) =>
    value.replace(/\s+/g, " ").replace(/[\uFFFD￾]/g, "").trim();

  const lines = text
    .split(/\r?\n/)
    .map((line) => clean(line))
    .filter(Boolean);

  const email =
    text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] || "";

  const phone =
    text
      .match(/(\+?\d[\d\s().-]{7,}\d)/)?.[0]
      ?.replace(/\s+/g, " ")
      .trim() || "";

  const linkedinRaw =
    text.match(/(linkedin\.com\/[^\s]+|in\/[^\s]+)/i)?.[0] || "";

  const linkedin = linkedinRaw.replace(/^https?:\/\/(www\.)?/i, "");

  const blockedNameWords =
    /skills|profile|experience|education|languages|expertise|strengths|projects|kompetenzen|erfolge|ausbildung|sprachen|berufserfahrung/i;

  const nameLine =
    lines.find((line) => {
      if (blockedNameWords.test(line)) return false;

      const compact = line.replace(/\s+/g, " ").trim();

      return /^[A-ZÄÖÜ][A-Za-zÄÖÜäöüàáâèéêìíîòóôùúûçñ]+(\s+[A-ZÄÖÜ][A-Za-zÄÖÜäöüàáâèéêìíîòóôùúûçñ]+){1,2}$/.test(
        compact
      );
    }) || "";

  const nameParts = nameLine.split(/\s+/);

  const firstName =
    nameParts[0]?.length > 1 && nameParts[0]?.length < 30 ? nameParts[0] : "";

  const lastNameRaw = nameParts.slice(1).join(" ");

  const lastName =
    lastNameRaw.length > 1 && lastNameRaw.length < 40 ? lastNameRaw : "";

  const titleLine =
    lines.find((line) =>
      /^(senior business analyst|business analyst|project manager|head of operations|operations manager|principal consultant|consultant|director|coo|cfo|ceo)$/i.test(
        line
      )
    ) || "";

  const targetTitle = titleLine || "";

  const locationLine =
    lines.find(
      (line) =>
        !line.includes("//") &&
        !/analyst|manager|consultant|project|experience|skills/i.test(line) &&
        /\b\d{4}\s+(zürich|zurich|bern|basel|luzern|zug|winterthur|st\. gallen|geneva|genève)\b/i.test(
          line
        )
    ) || "";

  const locationMatch = locationLine.match(
    /\b\d{4}\s+(zürich|zurich|bern|basel|luzern|zug|winterthur|st\. gallen|geneva|genève)\b/i
  );
  const location = locationMatch ? locationMatch[0] : "";

  const lowerLines = lines.map((line) => line.toLowerCase());

  const sectionStart = (names: string[]) =>
    lowerLines.findIndex((line) =>
      names.some(
        (name) =>
          line === name ||
          line.includes(name)
      )
    );

  const findSection = (names: string[]) => {
    const start = sectionStart(names);

    if (start === -1) {
      return "";
    }

    const stopWords = [
      "working experience",
      "working experience (excerpt)",
      "work experience",
      "professional experience",
      "employment history",
      "berufserfahrung",
      "arbeitserfahrung",

      "education",
      "academic education",
      "academic background",
      "ausbildung",
      "studium",

      "further education",
      "continuing education",
      "certificates",
      "certifications",
      "weiterbildung",
      "weiterbildungen",
      "zertifikate",

      "languages",
      "language skills",
      "sprachen",

      "skills",
      "essential skills",
      "specific software knowledge",
      "software knowledge",
      "it skills",
      "it-kenntnisse",
      "it kenntnisse",
      "tools",
      "expertise",
      "fachkenntnisse",
      "kompetenzen",

      "strengths",
      "personal strengths",
      "persönliche kompetenzen",
      "stärken",

      "projects",
      "projekte",

      "profile",
      "profil",
      "about me",
    ];

    let end = lines.length;

    for (let i = start + 1; i < lowerLines.length; i++) {
      if (
        stopWords.some(
          (word) =>
            lowerLines[i] === word ||
            lowerLines[i] === word.replace(/[()]/g, "")
        )
      ) {
        end = i;
        break;
      }
    }

    return lines.slice(start + 1, end).join("\n");
  };

  /* ─── Sprachen ───────────────────────────────────────────────────────────── */

  const languageText = findSection([
    "languages",
    "language skills",
    "sprachen",
  ]);

  const languages = languageText
    .split("\n")
    .map((line, index) => {
      const cleaned = clean(line.replace(/^[-•]\s*/, ""));
      const parts = cleaned.split(/[:\-–—]/).map(clean);

      return {
        id: `lang-${index + 1}`,
        language: parts[0] || "",
        level: parts.slice(1).join(" – ") || "",
      };
    })
    .filter(
      (item) =>
        item.language &&
        !/working experience|work experience|education|skills|expertise|strengths|projects|profile/i.test(
          item.language
        )
    );

  /* ─── IT-Kenntnisse ──────────────────────────────────────────────────────── */

  const skillsText = findSection([
    "specific software knowledge",
    "software knowledge",
    "it skills",
    "it-kenntnisse",
    "it kenntnisse",
    "tools",
  ]);

  const itSkills = skillsText
    .split(/\n|,|;/)
    .map((item) => clean(item.replace(/^[-•]\s*/, "")))
    .filter(
      (item) =>
        Boolean(item) &&
        !/working experience|work experience|education|languages|strengths|projects|profile/i.test(
          item
        )
    )
    .map((item, index) => {
      const parts = item.split(/[:\-–—]/).map(clean);

      return {
        id: `it-${index + 1}`,
        name: parts[0] || item,
        level: parts.slice(1).join(" – ") || "",
      };
    });

  /* ─── Berufserfahrung ────────────────────────────────────────────────────── */

  const workText = findSection([
    "working experience",
    "working experience excerpt",
    "work experience",
    "professional experience",
    "professional background",
    "employment history",
    "career history",
    "berufserfahrung",
    "arbeitserfahrung",
    "weitere berufserfahrungen",
  ]);

  const workLines = workText
    .split("\n")
    .map(clean)
    .filter(Boolean)
    .filter(
      (line) =>
        !/essential skills|specific software knowledge|languages|education|profile|expertise/i.test(
          line
        )
    );

  const workExperience: any[] = [];
  let currentJob: any | null = null;

  const isBulletLine = (line: string) =>
    line.startsWith("•") ||
    line.startsWith("") ||
    line.startsWith("-");

  const dateRangeRegex =
    /(\d{4})\s*[–—-]?\s*(\d{4}|heute|today|present|aktuell)/i;

  const inlineJobRegex =
    /(\d{4})\s*[–—-]?\s*(\d{4}|heute|today|present|aktuell)\s*(?:\/\/|\||-|–|—)?\s*(.*?)\s*(?:\/\/|\||-|–|—)\s*(.*)/i;

  for (const line of workLines) {
    const inlineMatch = line.match(inlineJobRegex);

    if (inlineMatch) {
      if (currentJob) {
        workExperience.push(currentJob);
      }

      currentJob = {
        id: `work-${workExperience.length + 1}`,
        from: inlineMatch[1] || "",
        to: inlineMatch[2] || "",
        functionTitle: clean(inlineMatch[3] || ""),
        company: clean(inlineMatch[4] || ""),
        location: "",
        responsibilities: [],
        achievements: [],
      };

      continue;
    }

    const dateMatch = line.match(dateRangeRegex);

    if (dateMatch && line.length < 50) {
      if (currentJob) {
        workExperience.push(currentJob);
      }

      currentJob = {
        id: `work-${workExperience.length + 1}`,
        from: dateMatch[1] || "",
        to: dateMatch[2] || "",
        functionTitle: "",
        company: "",
        location: "",
        responsibilities: [],
        achievements: [],
      };

      continue;
    }

    if (!currentJob) {
      continue;
    }

    if (isBulletLine(line)) {
      currentJob.responsibilities.push(
        clean(line.replace(/^[-•]\s*/, ""))
      );
      continue;
    }

    if (!currentJob.functionTitle) {
      currentJob.functionTitle = line;
      continue;
    }

    if (!currentJob.company) {
      currentJob.company = line;
      continue;
    }
  }

  if (currentJob) {
    workExperience.push(currentJob);
  }

  const cleanedWorkExperience = workExperience
    .map((job, index) => ({
      ...job,
      id: `work-${index + 1}`,
      functionTitle: clean(job.functionTitle || ""),
      company: clean(job.company || ""),
      location: clean(job.location || ""),
      responsibilities: (job.responsibilities || [])
        .map(clean)
        .filter(Boolean),
      achievements: (job.achievements || [])
        .map(clean)
        .filter(Boolean),
    }))
    .filter(
      (job) =>
        job.from &&
        (job.functionTitle || job.company)
    );

  /* ─── Ausbildung ──────────────────────────────────────────────────────────── */

  const educationText = findSection([
    "education",
    "education and training",
    "education training",
    "academic education",
    "academic background",
    "academic qualifications",
    "qualifications",
    "studies",
    "studium",
    "ausbildung",
  ]);

  const educationLines = educationText
    .split("\n")
    .map(clean)
    .filter(Boolean)
    .filter(
      (line) =>
        !/working experience|work experience|skills|languages|profile|strengths/i.test(
          line
        )
    );

  const education: any[] = [];
  let currentEducation: any | null = null;

  const educationDateRegex =
    /(\d{4})\s*[–—-]\s*(\d{4}|heute|today|present|aktuell)/i;

  const degreeRegex =
    /\b(master|bachelor|mba|msc|m\.sc|bsc|b\.sc|phd|doktor|doctor|diplom|eidg\.?|efz|hf|fh|cas|das|mas|certificate|degree)\b/i;

  const institutionRegex =
    /\b(universität|university|hochschule|college|academy|akademie|fachhochschule|eth|epfl|hsg|zhaw|fhnw|hwz|digicomp)\b/i;

  const pushEducation = () => {
    if (!currentEducation) {
      return;
    }

    const hasContent =
      currentEducation.degree ||
      currentEducation.field ||
      currentEducation.institution;

    if (hasContent && currentEducation.degree) {
      education.push({
        ...currentEducation,
        id: `edu-${education.length + 1}`,
      });
    }

    currentEducation = null;
  };

  for (const line of educationLines) {
    const dateMatch = line.match(educationDateRegex);
    const lineWithoutDate = clean(
      line.replace(educationDateRegex, "")
    );

    const looksLikeDegree = degreeRegex.test(line);
    const looksLikeInstitution = institutionRegex.test(line);

    if (looksLikeDegree) {
      if (currentEducation?.degree) {
        pushEducation();
      }

      currentEducation = {
        id: "",
        institution: "",
        location: "",
        from: dateMatch?.[1] || "",
        to: dateMatch?.[2] || "",
        degree: lineWithoutDate || line,
        field: "",
      };

      continue;
    }

    if (!currentEducation) {
      continue;
    }

    if (dateMatch) {
      currentEducation.from =
        currentEducation.from || dateMatch[1] || "";

      currentEducation.to =
        currentEducation.to || dateMatch[2] || "";

      if (!lineWithoutDate) {
        pushEducation();
        continue;
      }
    }

    if (
      looksLikeInstitution &&
      !currentEducation.institution
    ) {
      currentEducation.institution =
        lineWithoutDate || line;
      continue;
    }

    if (!currentEducation.field) {
      currentEducation.field =
        lineWithoutDate || line;
      continue;
    }

    if (!currentEducation.institution) {
      currentEducation.institution =
        lineWithoutDate || line;
    }
  }

  pushEducation();

  const cleanedEducation = education.filter((item) => {
    const combined =
      `${item.degree} ${item.field} ${item.institution}`.toLowerCase();

    return (
      Boolean(item.degree) &&
      !/business analysis for|defined interfaces|led business|strengths|simona gilardi/i.test(
        combined
      )
    );
  });

  /* ─── Ergebnis ────────────────────────────────────────────────────────────── */

  return {
    personal: {
      firstName,
      lastName,
      email,
      phone,
      location,
      linkedin,
      targetTitle,
      targetPosition: "",
      targetIndustry: "",
      photo: "",
    },

    profile: {
      rawText: "",
      why: "",
      how: "",
      what: "",
    },

    strengths: [],
    achievements: [],

    workExperience: cleanedWorkExperience,
    education: cleanedEducation,
    certificates: [],
    languages,
    itSkills,
    projects: [],
  };
}
