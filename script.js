
// ==========================================
// 1. GLOSSAR DATEN (EXAKT AUS DOCX)
// ==========================================
const glossarDaten = [
    { name: "Hauptschulabschluss", full: "Erster allgemeinbildender Schulabschluss", description: "Der Hauptschulabschluss ist der erste allgemeinbildende Schulabschluss in Deutschland. Er wird nach erfolgreichem Abschluss der 9. Klasse erworben und ermöglicht den Zugang zu einer Berufsausbildung oder weiteren schulischen Bildungswegen." },
    { name: "Mittlere Reife", full: "Mittlerer Bildungsabschluss", description: "Die Mittlere Reife (auch Realschulabschluss genannt) wird nach der 10. Klasse erworben. Dieser Abschluss qualifiziert für anspruchsvollere Berufsausbildungen und ermöglicht den Zugang zu weiterführenden Schulen wie Berufskolleg oder beruflichem Gymnasium." },
    { name: "Fachhochschulreife", full: "Fachabitur", description: "Die Fachhochschulreife berechtigt zum Studium an Fachhochschulen und manchen Universitäten. Sie kann an Berufskollegs, Fachoberschulen oder beruflichen Gymnasien erworben werden und kombiniert oft theoretisches Wissen mit praktischen Erfahrungen." },
    { name: "Abitur", full: "Allgemeine Hochschulreife", description: "Das Abitur ist der höchste Schulabschluss in Deutschland und berechtigt zum Studium an allen Universitäten und Hochschulen. Es kann an allgemeinbildenden oder beruflichen Gymnasien erworben werden." },
    { name: "AVdual", full: "Ausbildungsvorbereitung dual", description: "AVdual ist ein Bildungsgang für Jugendliche ohne Ausbildungsplatz. Er kombiniert schulisches Lernen mit praktischen Erfahrungen in Betrieben und bereitet gezielt auf eine Berufsausbildung vor. Gleichzeitig kann der Hauptschulabschluss erworben oder verbessert werden." },
    { name: "VABO", full: "Vorqualifizierungsjahr Arbeit/Beruf mit Schwerpunkt Erwerb von Deutschkenntnissen", description: "Das VABO richtet sich an Jugendliche ohne ausreichende Deutschkenntnisse. Es vermittelt Sprachkenntnisse und berufliche Orientierung, um den Zugang zum deutschen Bildungssystem und Arbeitsmarkt zu erleichtern." },
    { name: "Berufskolleg", full: "Berufliche Vollzeitschule", description: "Das Berufskolleg ist eine berufliche Vollzeitschule, die zur Fachhochschulreife führt und gleichzeitig berufliche Kenntnisse vermittelt. Es gibt verschiedene Fachrichtungen wie Wirtschaft, Technik oder Gesundheit." },
    { name: "Berufliches Gymnasium", full: "Weg zum Abitur mit Profil", description: "Das berufliche Gymnasium führt zur allgemeinen Hochschulreife (Abitur) und verbindet allgemeinbildende Fächer mit berufsbezogenen Schwerpunkten wie Wirtschaft, Technik oder Gesundheit." },
    { name: "Duale Ausbildung", full: "Betriebliche Ausbildung", description: "Die duale Ausbildung kombiniert praktische Arbeit im Betrieb mit theoretischem Unterricht in der Berufsschule. Sie dauert in der Regel 2-3,5 Jahre und führt zu einem anerkannten Berufsabschluss." },
    { name: "Meister/Techniker/Fachwirt", full: "Fortbildungsabschlüsse", description: "Diese Fortbildungsabschlüsse bauen auf einer abgeschlossenen Berufsausbildung auf und qualifizieren für Führungspositionen oder Selbstständigkeit. Sie sind dem Bachelor-Niveau gleichgestellt und ermöglichen auch ein Hochschulstudium." },
    { name: "1BFS", full: "1-jährige Berufsfachschule", description: "Die einjährige Berufsfachschule vermittelt berufliche Grundbildung in bestimmten Berufsfeldern wie Metalltechnik, Bautechnik oder Hauswirtschaft. Sie kann bei einer Ausbildungsplatzzusage als erstes Ausbildungsjahr angerechnet werden. Ohne Hauptschulabschluss wird mit erfolgreichem Abschluss ein gleichwertiger Bildungsstand erworben." },
    { name: "2BFS", full: "2-jährige Berufsfachschule", description: "Die 2BFS baut auf dem Hauptschulabschluss auf und führt zur Fachschulreife (mittlerer Bildungsabschluss). Sie vermittelt berufliche Grundbildung in drei Bereichen: kaufmännisch, gewerblich-technisch oder Ernährung und Gesundheit." },
    { name: "BAS", full: "Berufsaufbauschule", description: "Die Berufsaufbauschule ist die Mittelstufe der Berufsoberschule. Mit Hauptschulabschluss und abgeschlossener Berufsausbildung kann hier in einem Jahr der mittlere Bildungsabschluss (Fachschulreife) erworben werden." },
    { name: "BOS", full: "Berufsoberschule", description: "Die Berufsoberschule richtet sich an Personen mit abgeschlossener Berufsausbildung. Die zweijährige Oberstufe führt zur fachgebundenen Hochschulreife oder -- bei Erwerb einer zweiten Fremdsprache -- zur allgemeinen Hochschulreife." },
    { name: "Modell 9+3", full: "Mittlere Reife durch Ausbildung", description: "Ein besonderer Weg zum mittleren Bildungsabschluss: 9 Jahre Haupt-/Werkrealschule + 3 Jahre Berufsausbildung. Bei einem Notendurchschnitt von mindestens 2,5 (aus Hauptschulabschlussprüfung, Berufsschulabschluss und Prüfung im Ausbildungsberuf) wird ein dem Realschulabschluss gleichwertiger Bildungsstand zuerkannt." },
    { name: "Fachschule", full: "Weiterbildung nach Ausbildung", description: "Fachschulen sind Weiterbildungseinrichtungen für Personen mit abgeschlossener Berufsausbildung. In ein- oder zweijährigen Bildungsgängen qualifizieren sie für Tätigkeiten im mittleren Management oder für die berufliche Selbstständigkeit. An zweijährigen Fachschulen kann auch die Fachhochschulreife erworben werden." },
    { name: "SBBZ", full: "Sonderpädagogische Bildungs- und Beratungszentren", description: "SBBZ sind spezialisierte Schulen für Kinder und Jugendliche mit besonderem Förderbedarf. Sie bieten individuelle Unterstützung und bereiten auf verschiedene Bildungswege vor, einschließlich beruflicher Qualifikation." },
    { name: "BVE", full: "Berufsvorbereitende Einrichtung", description: "Die BVE richtet sich an Jugendliche mit besonderem Förderbedarf und bereitet gezielt auf eine berufliche Tätigkeit vor. Sie ist oft der erste Schritt nach dem SBBZ." },
    { name: "KoBV", full: "Kooperative berufliche Bildung und Vorbereitung", description: "KoBV ermöglicht Menschen mit Behinderung den Übergang von der BVE in eine berufliche Ausbildung oder Beschäftigung durch intensive Begleitung und Unterstützung." }
];

function initGlossary() {
    const container = document.getElementById('glossar-container');
    if(!container) return;
    glossarDaten.sort((a, b) => a.name.localeCompare(b.name));
    glossarDaten.forEach((term) => {
        const item = document.createElement('div');
        item.className = 'accordion-item glossary-term'; 
        item.innerHTML = `<div class="accordion-header" onclick="toggleAccordion(this)">${term.name} <span style="font-size:0.8rem">▼</span></div><div class="accordion-content"><p><strong>${term.full}</strong></p><p>${term.description}</p></div>`;
        container.appendChild(item);
    });
}

function toggleAccordion(header) {
    header.parentElement.classList.toggle('active');
    header.querySelector('span').innerText = header.parentElement.classList.contains('active') ? '▲' : '▼';
}

function filterGlossar() {
    const search = document.getElementById('glossar-search').value.toLowerCase();
    document.querySelectorAll('.glossary-term').forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(search) ? 'block' : 'none';
    });
}

// ==========================================
// 2. VOLLSTÄNDIGE BILDUNGSWEGE LOGIK
// ==========================================
const bildungswege = {
  // ============ OHNE ABSCHLUSS ============
  ohneAbschluss: {
    hauptschulabschluss: [
      {
        title: "VAB (Vorqualifizierungsjahr Arbeit/Beruf)",
        steps: ["Ohne Abschluss", "VAB + Prüfung", "Hauptschulabschluss"],
        duration: "1 Jahr",
        note: "Im VAB wird berufliche Orientierung geboten und der Hauptschulabschluss kann über eine Prüfung erworben werden.",
        recommended: true
      },
      {
        title: "AV (Ausbildungsvorbereitung)",
        steps: ["Ohne Abschluss", "AV + Prüfung", "Hauptschulabschluss"],
        duration: "1 Jahr",
        note: "Die AV bereitet auf eine Berufsausbildung vor und ermöglicht den Erwerb eines dem Hauptschulabschluss gleichwertigen Bildungsstands.",
        recommended: true
      },
      {
        title: "AVdual (Ausbildungsvorbereitung dual)",
        steps: ["Ohne Abschluss", "AVdual + Prüfung", "Hauptschulabschluss"],
        duration: "1-2 Jahre",
        note: "AVdual kombiniert schulisches Lernen mit Betriebspraktika. Der Hauptschulabschluss wird über eine Prüfung erworben.",
        recommended: true
      },
      {
        title: "1-jährige Berufsfachschule (1BFS)",
        steps: ["Ohne Abschluss", "1-jährige Berufsfachschule", "Hauptschulabschluss"],
        duration: "1 Jahr",
        note: "Mit erfolgreichem Abschluss der 1BFS wird ein dem Hauptschulabschluss gleichwertiger Bildungsstand erlangt.",
        recommended: true
      },
      {
        title: "Ausbildung Alltagsbetreuer/in",
        steps: ["Ohne Abschluss", "Berufsfachschule Alltagsbetreuung", "Berufsabschluss + Hauptschulabschluss"],
        duration: "Individuell",
        note: "Die Ausbildung kann ohne Hauptschulabschluss begonnen werden. Der erfolgreiche Abschluss schließt einen dem Hauptschulabschluss gleichwertigen Bildungsstand ein."
      },
      {
        title: "Über duale Ausbildung",
        steps: ["Ohne Abschluss", "Duale Ausbildung", "Berufsabschluss + Hauptschulabschluss"],
        duration: "2-3,5 Jahre",
        note: "Mit dem erfolgreichen Abschluss einer dualen Ausbildung wird ein dem Hauptschulabschluss gleichwertiger Bildungsstand erworben."
      }
    ],
    mittlereReife: [
      {
        title: "Über Hauptschulabschluss und 2BFS",
        steps: ["Ohne Abschluss", "AVdual/VAB/AV", "Hauptschulabschluss", "2-jährige Berufsfachschule", "Mittlere Reife"],
        duration: "3-4 Jahre",
        note: "Zunächst Hauptschulabschluss erwerben, dann über die 2BFS zur Fachschulreife (Mittlere Reife).",
        recommended: true
      },
      {
        title: "Über Hauptschulabschluss und Modell 9+3",
        steps: ["Ohne Abschluss", "AVdual/VAB", "Hauptschulabschluss", "Duale Ausbildung (3 Jahre, Ø 2,5)", "Mittlere Reife"],
        duration: "4-5 Jahre",
        note: "Mit guten Leistungen in der Ausbildung kann ein dem Realschulabschluss gleichwertiger Bildungsstand zuerkannt werden."
      }
    ],
    fachhochschulreife: [
      {
        title: "Über Hauptschul- und Mittlere Reife",
        steps: ["Ohne Abschluss", "Hauptschulabschluss", "Mittlere Reife", "Berufskolleg", "Fachhochschulreife"],
        duration: "5-7 Jahre",
        note: "Mehrstufiger Weg mit Zwischenschritten."
      }
    ],
    abitur: [
      {
        title: "Über alle Zwischenschritte",
        steps: ["Ohne Abschluss", "Hauptschulabschluss", "Mittlere Reife", "Berufliches Gymnasium", "Abitur"],
        duration: "7-9 Jahre",
        note: "Mit jedem Abschluss gibt es immer einen Anschluss - auch bis zum Abitur."
      }
    ],
    berufsabschluss: [
      {
        title: "Direkte duale Ausbildung (ohne Abschluss möglich)",
        steps: ["Ohne Abschluss", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3,5 Jahre",
        note: "In manchen Berufen ist eine Ausbildung auch ohne Schulabschluss möglich.",
        recommended: true
      },
      {
        title: "Über Hauptschulabschluss",
        steps: ["Ohne Abschluss", "AVdual/VAB", "Hauptschulabschluss", "Duale Ausbildung", "Berufsabschluss"],
        duration: "3,5-5,5 Jahre",
        note: "Mit Hauptschulabschluss verbessern sich die Chancen auf einen Ausbildungsplatz deutlich."
      }
    ],
    meister: [
      {
        title: "Über Berufsabschluss zur Aufstiegsfortbildung",
        steps: ["Ohne Abschluss", "Hauptschulabschluss", "Ausbildung", "Berufspraxis", "Meister/Techniker/Fachwirt"],
        duration: "8-12 Jahre",
        note: "Mit Abschluss, immer Anschluss - bis zur höchsten beruflichen Qualifikation."
      }
    ],
    studium: [
      {
        title: "Über Abitur zum Studium",
        steps: ["Ohne Abschluss", "Hauptschulabschluss", "Mittlere Reife", "Abitur", "Studium"],
        duration: "10+ Jahre",
        note: "Auch ohne Schulabschluss ist der Weg bis zum Studium möglich."
      },
      {
        title: "Über berufliche Qualifikation",
        steps: ["Ohne Abschluss", "Hauptschulabschluss", "Ausbildung", "Berufspraxis (3 Jahre)", "Studium ohne Abitur"],
        duration: "9+ Jahre",
        note: "Mit abgeschlossener Berufsausbildung und Berufserfahrung ist ein Studium auch ohne Abitur möglich."
      }
    ]
  },

  // ============ SBBZ ============
  sbbz: {
    bve: [
      {
        title: "Berufsvorbereitende Einrichtung (BVE)",
        steps: ["SBBZ", "BVE"],
        duration: "2 Jahre",
        note: "SBBZ-spezifisches Angebot: Die BVE bereitet auf eine Beschäftigung auf dem allgemeinen Arbeitsmarkt vor.",
        recommended: true
      }
    ],
    vabKF: [
      {
        title: "VAB-KF (Kooperative Form)",
        steps: ["SBBZ", "VAB-KF"],
        duration: "1 Jahr",
        note: "SBBZ-spezifisches Angebot: Vorbereitung auf Ausbildung oder Beschäftigung.",
        recommended: true
      }
    ],
    sonderberufsschule: [
      {
        title: "Sonderberufsschule",
        steps: ["SBBZ", "Sonderberufsschule", "Berufsabschluss"],
        duration: "Individuell",
        note: "SBBZ-spezifisches Angebot: Ausbildung speziell für Menschen mit Behinderung.",
        recommended: true
      }
    ],
    hauptschulabschluss: [
      {
        title: "Direkter Weg über SBBZ",
        steps: ["SBBZ", "Hauptschulabschluss"],
        duration: "Individuell",
        note: "An manchen SBBZ kann der Hauptschulabschluss direkt erworben werden (abhängig vom Förderschwerpunkt).",
        recommended: true
      },
      {
        title: "VAB mit Prüfung",
        steps: ["SBBZ", "VAB + Prüfung", "Hauptschulabschluss"],
        duration: "1 Jahr",
        note: "Im VAB wird berufliche Orientierung geboten und der Hauptschulabschluss kann über eine Prüfung erworben werden."
      },
      {
        title: "AV mit Prüfung",
        steps: ["SBBZ", "AV + Prüfung", "Hauptschulabschluss"],
        duration: "1 Jahr",
        note: "Die AV bereitet auf eine Berufsausbildung vor und ermöglicht den Erwerb des Hauptschulabschlusses."
      },
      {
        title: "AVdual mit Prüfung",
        steps: ["SBBZ", "AVdual + Prüfung", "Hauptschulabschluss"],
        duration: "1-2 Jahre",
        note: "AVdual kombiniert schulisches Lernen mit Betriebspraktika und ermöglicht den Erwerb des Hauptschulabschlusses."
      },
      {
        title: "1-jährige Berufsfachschule",
        steps: ["SBBZ", "1-jährige Berufsfachschule", "Hauptschulabschluss"],
        duration: "1 Jahr",
        note: "Mit erfolgreichem Abschluss der 1BFS wird ein dem Hauptschulabschluss gleichwertiger Bildungsstand erlangt."
      },
      {
        title: "Über duale Ausbildung",
        steps: ["SBBZ", "Duale Ausbildung mit Unterstützung", "Berufsabschluss + Hauptschulabschluss"],
        duration: "2-3,5 Jahre",
        note: "Mit Unterstützung durch Berufsberatung und ggf. Reha-Maßnahmen."
      }
    ],
    mittlereReife: [
      {
        title: "Über Hauptschulabschluss und 2BFS",
        steps: ["SBBZ", "Hauptschulabschluss", "2-jährige Berufsfachschule", "Mittlere Reife"],
        duration: "2+ Jahre",
        note: "Bei entsprechendem Förderschwerpunkt: Zunächst Hauptschulabschluss, dann 2BFS.",
        recommended: true
      },
      {
        title: "Über Ausbildung und Modell 9+3",
        steps: ["SBBZ", "Hauptschulabschluss", "Duale Ausbildung (3 Jahre, Ø 2,5)", "Mittlere Reife"],
        duration: "4+ Jahre",
        note: "Mit guten Leistungen in der Ausbildung kann ein dem Realschulabschluss gleichwertiger Bildungsstand zuerkannt werden."
      }
    ],
    fachhochschulreife: [
      {
        title: "Über Hauptschul- und Mittlere Reife",
        steps: ["SBBZ", "Hauptschulabschluss", "Mittlere Reife", "Berufskolleg", "Fachhochschulreife"],
        duration: "5-7 Jahre",
        note: "Mit entsprechendem Förderschwerpunkt und Unterstützung realistisch erreichbar."
      }
    ],
    abitur: [
      {
        title: "Über alle Bildungsstufen",
        steps: ["SBBZ", "Hauptschulabschluss", "Mittlere Reife", "Berufliches Gymnasium", "Abitur"],
        duration: "6-9 Jahre",
        note: "Mit entsprechendem Förderschwerpunkt (z.B. Hören, Sehen, körperlich-motorische Entwicklung) und Unterstützung möglich."
      }
    ],
    berufsabschluss: [
      {
        title: "Duale Ausbildung mit Unterstützung",
        steps: ["SBBZ", "Hauptschulabschluss", "Duale Ausbildung + Unterstützung", "Berufsabschluss"],
        duration: "3-4 Jahre",
        note: "Mit Unterstützung durch Berufsberatung und ggf. Reha-Maßnahmen, Hilfsmitteln am Arbeitsplatz.",
        recommended: true
      },
      {
        title: "Fachpraktiker-Ausbildung (theoriereduziert)",
        steps: ["SBBZ", "Fachpraktiker-Ausbildung", "Berufsabschluss"],
        duration: "2-3 Jahre",
        note: "SBBZ-spezifisches Angebot: Theoriereduzierte Ausbildung für Menschen mit Lernbehinderung.",
        recommended: true
      },
      {
        title: "Ausbildung im Berufsbildungswerk",
        steps: ["SBBZ", "Berufsbildungswerk", "Berufsabschluss"],
        duration: "2-3,5 Jahre",
        note: "SBBZ-spezifisches Angebot: Spezialisierte Ausbildung mit umfassender Unterstützung.",
        recommended: true
      }
    ],
    meister: [
      {
        title: "Über Ausbildung zur Aufstiegsfortbildung",
        steps: ["SBBZ", "Hauptschulabschluss", "Ausbildung", "Berufspraxis", "Meister/Techniker"],
        duration: "8-12 Jahre",
        note: "Mit entsprechender Unterstützung und abhängig vom Förderschwerpunkt möglich."
      }
    ],
    studium: [
      {
        title: "Über Abitur",
        steps: ["SBBZ", "Hauptschulabschluss", "Mittlere Reife", "Abitur", "Studium mit Unterstützung"],
        duration: "10+ Jahre",
        note: "Abhängig vom Förderschwerpunkt. Hochschulen bieten Unterstützungsangebote für Studierende mit Behinderung."
      }
    ]
  },

  // ============ VABO ============
  vabo: {
    hauptschulabschluss: [
      {
        title: "VABO mit Deutschförderung → VAB",
        steps: ["VABO (Deutschförderung B1)", "VAB + Prüfung", "Hauptschulabschluss"],
        duration: "2 Jahre",
        note: "Nach erfolgreicher Deutschförderung im VABO kann über VAB der Hauptschulabschluss erworben werden.",
        recommended: true
      },
      {
        title: "VABO → AV",
        steps: ["VABO (Deutschförderung B1)", "AV + Prüfung", "Hauptschulabschluss"],
        duration: "2 Jahre",
        note: "Nach dem VABO ermöglicht die AV den Erwerb des Hauptschulabschlusses.",
        recommended: true
      },
      {
        title: "VABO → AVdual",
        steps: ["VABO (Deutschförderung B1)", "AVdual + Prüfung", "Hauptschulabschluss"],
        duration: "2-3 Jahre",
        note: "Nach dem VABO kann über AVdual mit Betriebspraktika der Hauptschulabschluss erworben werden.",
        recommended: true
      },
      {
        title: "VABO → 1BFS",
        steps: ["VABO (Deutschförderung B1)", "1-jährige Berufsfachschule", "Hauptschulabschluss"],
        duration: "2 Jahre",
        note: "Mit ausreichenden Deutschkenntnissen direkter Einstieg in die 1BFS möglich.",
        recommended: true
      },
      {
        title: "VABO → Ausbildung Alltagsbetreuer/in",
        steps: ["VABO (Deutschförderung B1)", "Berufsfachschule Alltagsbetreuung", "Berufsabschluss + Hauptschulabschluss"],
        duration: "2+ Jahre",
        note: "Die Ausbildung kann nach VABO begonnen werden und schließt einen dem Hauptschulabschluss gleichwertigen Bildungsstand ein."
      },
      {
        title: "VABO → Duale Ausbildung",
        steps: ["VABO (Deutschförderung B1)", "Duale Ausbildung", "Berufsabschluss + Hauptschulabschluss"],
        duration: "3,5-5 Jahre",
        note: "Mit erfolgreichem Abschluss einer dualen Ausbildung wird ein dem Hauptschulabschluss gleichwertiger Bildungsstand erworben."
      }
    ],
    mittlereReife: [
      {
        title: "VABO → Hauptschulabschluss → 2BFS",
        steps: ["VABO (Deutschförderung B1)", "AVdual/VAB", "Hauptschulabschluss", "2-jährige Berufsfachschule", "Mittlere Reife"],
        duration: "4-5 Jahre",
        note: "Zunächst Deutsch lernen und Hauptschulabschluss erwerben, dann über die 2BFS zur Mittleren Reife.",
        recommended: true
      },
      {
        title: "VABO → Hauptschulabschluss → Modell 9+3",
        steps: ["VABO (Deutschförderung B1)", "Hauptschulabschluss", "Duale Ausbildung (3 Jahre, Ø 2,5)", "Mittlere Reife"],
        duration: "5-6 Jahre",
        note: "Mit guten Leistungen in der Ausbildung kann ein dem Realschulabschluss gleichwertiger Bildungsstand zuerkannt werden."
      }
    ],
    fachhochschulreife: [
      {
        title: "VABO → Mittlere Reife → Berufskolleg",
        steps: ["VABO (Deutschförderung B1)", "Hauptschulabschluss", "Mittlere Reife", "Berufskolleg", "Fachhochschulreife"],
        duration: "6-8 Jahre",
        note: "Mehrstufiger Weg mit Zwischenschritten."
      }
    ],
    abitur: [
      {
        title: "VABO → Mittlere Reife → Berufliches Gymnasium",
        steps: ["VABO (Deutschförderung B1)", "Hauptschulabschluss", "Mittlere Reife", "Berufliches Gymnasium", "Abitur"],
        duration: "7-9 Jahre",
        note: "Mit jedem Abschluss gibt es immer einen Anschluss."
      }
    ],
    berufsabschluss: [
      {
        title: "VABO → direkt zur Ausbildung",
        steps: ["VABO (Deutschförderung B1)", "Duale Ausbildung", "Berufsabschluss"],
        duration: "3,5-5 Jahre",
        note: "In manchen Berufen ist eine Ausbildung nach VABO direkt möglich. Ggf. mit ausbildungsbegleitenden Hilfen (abH).",
        recommended: true
      },
      {
        title: "VABO → Hauptschulabschluss → Ausbildung",
        steps: ["VABO (Deutschförderung B1)", "AVdual/VAB", "Hauptschulabschluss", "Duale Ausbildung", "Berufsabschluss"],
        duration: "4,5-6,5 Jahre",
        note: "Mit Hauptschulabschluss verbessern sich die Chancen auf einen Ausbildungsplatz."
      }
    ],
    meister: [
      {
        title: "VABO → Ausbildung → Aufstiegsfortbildung",
        steps: ["VABO (Deutschförderung B1)", "Hauptschulabschluss", "Ausbildung", "Berufspraxis", "Meister/Techniker"],
        duration: "9-13 Jahre",
        note: "Mit Abschluss, immer Anschluss - auch für zugewanderte Jugendliche."
      }
    ],
    studium: [
      {
        title: "VABO → Abitur → Studium",
        steps: ["VABO (Deutschförderung B1)", "Hauptschulabschluss", "Mittlere Reife", "Abitur", "Studium"],
        duration: "11+ Jahre",
        note: "Der Weg zum Studium ist auch nach VABO möglich."
      }
    ]
  },

  // ============ AVDUAL (als eigener Startpunkt) ============
  avdual: {
    hauptschulabschluss: [
      {
        title: "Hauptschulabschluss über AVdual",
        steps: ["AVdual + Prüfung", "Hauptschulabschluss"],
        duration: "1-2 Jahre",
        note: "Im AVdual kann der Hauptschulabschluss erworben oder verbessert werden.",
        recommended: true
      }
    ],
    berufsabschluss: [
      {
        title: "Direkt in die Ausbildung",
        steps: ["AVdual", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3,5 Jahre",
        note: "Nach erfolgreichem AVdual-Abschluss kann eine Berufsausbildung begonnen werden.",
        recommended: true
      }
    ]
  },

  // ============ HAUPTSCHULABSCHLUSS ============
  hauptschulabschluss: {
    mittlereReife: [
      {
        title: "2-jährige Berufsfachschule (2BFS)",
        steps: ["Hauptschulabschluss", "2-jährige Berufsfachschule", "Mittlere Reife"],
        duration: "2 Jahre",
        note: "Die 2BFS führt zur Fachschulreife (Mittlere Reife) und vermittelt berufliche Grundbildung.",
        recommended: true
      },
      {
        title: "10. Klasse Werkrealschule",
        steps: ["Hauptschulabschluss", "10. Klasse Werkrealschule", "Werkrealschulabschluss"],
        duration: "1 Jahr",
        note: "Nach Klasse 9 kann die 10. Klasse der Werkrealschule besucht werden."
      },
      {
        title: "10. Klasse Realschule",
        steps: ["Hauptschulabschluss", "10. Klasse Realschule", "Realschulabschluss"],
        duration: "1 Jahr",
        note: "Bei entsprechenden Noten kann die 10. Klasse der Realschule besucht werden."
      },
      {
        title: "10. Klasse Gemeinschaftsschule",
        steps: ["Hauptschulabschluss", "10. Klasse Gemeinschaftsschule", "Realschulabschluss"],
        duration: "1 Jahr",
        note: "Die Gemeinschaftsschule bietet die Möglichkeit, den Realschulabschluss zu erreichen."
      },
      {
        title: "Mit dualer Ausbildung (Modell 9+3)",
        steps: ["Hauptschulabschluss", "Duale Ausbildung (3 Jahre, Ø 2,5)", "Berufsabschluss + Mittlere Reife"],
        duration: "3 Jahre",
        note: "Bei guten Leistungen (Notendurchschnitt 2,5) kann ein dem Realschulabschluss gleichwertiger Bildungsstand zuerkannt werden.",
        recommended: true
      },
      {
        title: "Mit dualer Ausbildung (KMK-Modell)",
        steps: ["Hauptschulabschluss", "Duale Ausbildung (mind. 2 Jahre, Ø 3,0)", "Berufsabschluss + Mittlere Reife"],
        duration: "2-3 Jahre",
        note: "Bei Notenschnitt 3,0 in der Berufsschule und 5 Jahren Fremdsprachenunterricht wird ein dem Realschulabschluss gleichwertiger Bildungsstand zuerkannt."
      },
      {
        title: "Berufsaufbauschule (BAS)",
        steps: ["Hauptschulabschluss", "Duale Ausbildung", "Berufsaufbauschule (1 Jahr)", "Mittlere Reife"],
        duration: "4-5 Jahre",
        note: "Mit abgeschlossener Berufsausbildung kann über die BAS der mittlere Bildungsabschluss erworben werden."
      }
    ],
    fachhochschulreife: [
      {
        title: "Über Mittlere Reife zum Berufskolleg",
        steps: ["Hauptschulabschluss", "2BFS/10. Klasse", "Mittlere Reife", "Berufskolleg", "Fachhochschulreife"],
        duration: "4-5 Jahre",
        note: "Zunächst Mittlere Reife erwerben, dann 2 Jahre Berufskolleg.",
        recommended: true
      },
      {
        title: "Über Ausbildung und BKFH",
        steps: ["Hauptschulabschluss", "Mittlere Reife", "Ausbildung", "BKFH (1 Jahr)", "Fachhochschulreife"],
        duration: "6-8 Jahre",
        note: "Nach Ausbildung kann in einem Jahr die Fachhochschulreife erworben werden."
      }
    ],
    abitur: [
      {
        title: "Über Mittlere Reife zum Beruflichen Gymnasium",
        steps: ["Hauptschulabschluss", "Mittlere Reife", "Berufliches Gymnasium", "Abitur"],
        duration: "5 Jahre",
        note: "Mit Mittlerer Reife Zugang zum dreijährigen beruflichen Gymnasium.",
        recommended: true
      },
      {
        title: "Über Ausbildung zur Berufsoberschule",
        steps: ["Hauptschulabschluss", "Mittlere Reife", "Ausbildung", "Berufsoberschule (2 Jahre)", "Abitur"],
        duration: "7-9 Jahre",
        note: "Mit abgeschlossener Berufsausbildung zur fachgebundenen oder allgemeinen Hochschulreife."
      }
    ],
    berufsabschluss: [
      {
        title: "Duale Ausbildung",
        steps: ["Hauptschulabschluss", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3,5 Jahre",
        note: "Mit Hauptschulabschluss können viele Ausbildungsberufe erlernt werden.",
        recommended: true
      },
      {
        title: "2-jährige Berufsfachschule",
        steps: ["Hauptschulabschluss", "Berufsfachschule (2-jährig)", "Berufsabschluss"],
        duration: "2 Jahre",
        note: "Schulische Berufsausbildung in verschiedenen Berufsfeldern."
      },
      {
        title: "1-jährige Berufsfachschule + Ausbildung",
        steps: ["Hauptschulabschluss", "1-jährige Berufsfachschule", "Duale Ausbildung (verkürzt)", "Berufsabschluss"],
        duration: "3,5-4,5 Jahre",
        note: "Die 1BFS kann als erstes Ausbildungsjahr in Handwerksberufen angerechnet werden."
      }
    ],
    meister: [
      {
        title: "Über Ausbildung zur Aufstiegsfortbildung",
        steps: ["Hauptschulabschluss", "Duale Ausbildung", "Berufspraxis", "Meister/Techniker/Fachwirt"],
        duration: "6-10 Jahre",
        note: "Mit Abschluss, immer Anschluss - bis zur höchsten beruflichen Qualifikation."
      }
    ],
    studium: [
      {
        title: "Über Abitur",
        steps: ["Hauptschulabschluss", "Mittlere Reife", "Abitur", "Studium"],
        duration: "8+ Jahre",
        note: "Der klassische Weg über alle Bildungsstufen."
      },
      {
        title: "Über berufliche Qualifikation (ohne Abitur)",
        steps: ["Hauptschulabschluss", "Mittlere Reife", "Ausbildung", "Berufspraxis (3 Jahre)", "Studium ohne Abitur"],
        duration: "9+ Jahre",
        note: "Für beruflich Qualifizierte ist ein Studium ohne Abitur möglich."
      }
    ]
  },

  // ============ MITTLERE REIFE ============
  mittlereReife: {
    fachhochschulreife: [
      {
        title: "2-jähriges Berufskolleg",
        steps: ["Mittlere Reife", "Berufskolleg (2 Jahre)", "Fachhochschulreife"],
        duration: "2 Jahre",
        note: "Das 2-jährige Berufskolleg führt zur Fachhochschulreife und vermittelt berufliche Kenntnisse.",
        recommended: true
      },
      {
        title: "Berufskolleg I + II",
        steps: ["Mittlere Reife", "Berufskolleg I (1 Jahr)", "Berufskolleg II (1 Jahr)", "Fachhochschulreife + Assistentenabschluss"],
        duration: "2 Jahre",
        note: "Nach BK I kann bei guten Noten ins BK II gewechselt werden."
      },
      {
        title: "Mit dualer Ausbildung + Zusatzunterricht",
        steps: ["Mittlere Reife", "Duale Ausbildung + Zusatzunterricht", "Berufsabschluss + Fachhochschulreife"],
        duration: "3 Jahre",
        note: "Während der Ausbildung kann durch Zusatzunterricht die Fachhochschulreife erworben werden."
      },
      {
        title: "1-jähriges Berufskolleg nach Ausbildung (BKFH)",
        steps: ["Mittlere Reife", "Duale Ausbildung", "Berufskolleg zum Erwerb der FH-Reife (1 Jahr)", "Fachhochschulreife"],
        duration: "4-5 Jahre",
        note: "Nach abgeschlossener Berufsausbildung kann in einem Jahr die Fachhochschulreife erworben werden."
      },
      {
        title: "2-jährige Fachschule",
        steps: ["Mittlere Reife", "Duale Ausbildung", "Fachschule (2 Jahre)", "Fachhochschulreife + Fortbildungsabschluss"],
        duration: "5-7 Jahre",
        note: "An zweijährigen Fachschulen kann die Fachhochschulreife erworben werden."
      }
    ],
    abitur: [
      {
        title: "Berufliches Gymnasium (3-jährig)",
        steps: ["Mittlere Reife", "Berufliches Gymnasium (3 Jahre)", "Abitur"],
        duration: "3 Jahre",
        note: "Das berufliche Gymnasium führt zur allgemeinen Hochschulreife mit beruflichem Schwerpunkt (6 Richtungen verfügbar).",
        recommended: true
      },
      {
        title: "Aufbaugymnasium",
        steps: ["Mittlere Reife", "Aufbaugymnasium (3 Jahre)", "Abitur"],
        duration: "3 Jahre",
        note: "Das Aufbaugymnasium ist speziell für Realschulabsolventen ('Realschulaufsetzer')."
      },
      {
        title: "Allgemeinbildendes Gymnasium",
        steps: ["Mittlere Reife", "Gymnasium Klasse 11-13", "Abitur"],
        duration: "3 Jahre",
        note: "Bei entsprechender Qualifikation ist der Wechsel ans allgemeinbildende Gymnasium möglich."
      },
      {
        title: "Gymnasiale Oberstufe Gemeinschaftsschule",
        steps: ["Mittlere Reife", "Gemeinschaftsschule Oberstufe (3 Jahre)", "Abitur"],
        duration: "3 Jahre",
        note: "Die Gemeinschaftsschule bietet eine gymnasiale Oberstufe an."
      },
      {
        title: "Berufsoberschule (BOS) nach Ausbildung",
        steps: ["Mittlere Reife", "Duale Ausbildung", "Berufsoberschule Oberstufe (2 Jahre)", "Abitur"],
        duration: "5-7 Jahre",
        note: "Mit abgeschlossener Berufsausbildung führt die BOS zur fachgebundenen oder allgemeinen Hochschulreife."
      }
    ],
    berufsabschluss: [
      {
        title: "Duale Ausbildung",
        steps: ["Mittlere Reife", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3,5 Jahre",
        note: "Mit Mittlerer Reife stehen nahezu alle Ausbildungsberufe offen.",
        recommended: true
      },
      {
        title: "Schulische Berufsausbildung",
        steps: ["Mittlere Reife", "Berufsfachschule/Berufskolleg", "Berufsabschluss"],
        duration: "2-3 Jahre",
        note: "Vollzeitschulische Ausbildung z.B. als Erzieher/in, Pflegefachmann/-frau oder technische/r Assistent/in."
      },
      {
        title: "1-jährige Berufsfachschule + Ausbildung",
        steps: ["Mittlere Reife", "1-jährige Berufsfachschule", "Duale Ausbildung (verkürzt)", "Berufsabschluss"],
        duration: "3,5-4,5 Jahre",
        note: "Die 1BFS kann bei Ausbildungsplatzzusage als erstes Ausbildungsjahr angerechnet werden."
      }
    ],
    meister: [
      {
        title: "Über Ausbildung zur Aufstiegsfortbildung",
        steps: ["Mittlere Reife", "Duale Ausbildung", "Berufspraxis", "Meister/Techniker/Fachwirt"],
        duration: "6-9 Jahre",
        note: "Höchste berufliche Qualifikation - gleichgestellt mit Bachelor."
      }
    ],
    studium: [
      {
        title: "Klassischer Weg über Abitur",
        steps: ["Mittlere Reife", "Abitur (3 Jahre)", "Studium"],
        duration: "6+ Jahre",
        note: "Abitur berechtigt zum Studium aller Studiengänge.",
        recommended: true
      },
      {
        title: "Weg über Fachhochschulreife",
        steps: ["Mittlere Reife", "Berufskolleg (2 Jahre)", "Fachhochschulreife", "Studium (FH/DHBW)"],
        duration: "5+ Jahre",
        note: "Studium an Fachhochschulen und Dualen Hochschulen."
      },
      {
        title: "Über berufliche Qualifikation (ohne Abitur)",
        steps: ["Mittlere Reife", "Ausbildung", "Berufspraxis (3 Jahre)", "Studium ohne Abitur"],
        duration: "8+ Jahre",
        note: "Für beruflich Qualifizierte ist ein Studium ohne Abitur möglich."
      }
    ]
  },

  // ============ FACHHOCHSCHULREIFE ============
  fachhochschulreife: {
    abitur: [
      {
        title: "Berufliches Gymnasium Klasse 13",
        steps: ["Fachhochschulreife", "Berufliches Gymnasium Klasse 13", "Abitur"],
        duration: "1 Jahr",
        note: "Mit Fachhochschulreife kann die Klasse 13 des beruflichen Gymnasiums besucht werden.",
        recommended: true
      },
      {
        title: "Berufsoberschule Oberstufe Klasse 2",
        steps: ["Fachhochschulreife + Ausbildung", "Berufsoberschule Klasse 2", "Abitur"],
        duration: "1 Jahr",
        note: "Bei guter Fachhochschulreife und abgeschlossener Ausbildung direkter Einstieg in Klasse 2 der BOS möglich."
      }
    ],
    berufsabschluss: [
      {
        title: "Duale Ausbildung",
        steps: ["Fachhochschulreife", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3 Jahre",
        note: "Eine Berufsausbildung ist auch mit Fachhochschulreife möglich und sinnvoll."
      }
    ],
    meister: [
      {
        title: "Über Ausbildung zur Aufstiegsfortbildung",
        steps: ["Fachhochschulreife", "Duale Ausbildung", "Berufspraxis", "Meister/Techniker/Fachwirt"],
        duration: "6-9 Jahre",
        note: "Höchste berufliche Qualifikation."
      }
    ],
    bachelor: [
      {
        title: "Studium an Hochschule für angewandte Wissenschaften",
        steps: ["Fachhochschulreife", "Hochschule/FH/DHBW", "Bachelor"],
        duration: "3-4 Jahre",
        note: "Die Fachhochschulreife berechtigt zum Studium an Hochschulen für angewandte Wissenschaften und Dualen Hochschulen.",
        recommended: true
      },
      {
        title: "Duales Studium",
        steps: ["Fachhochschulreife", "Duales Studium", "Bachelor + Berufsabschluss"],
        duration: "3-4 Jahre",
        note: "Kombination von Praxis im Betrieb und Theorie an der Hochschule."
      }
    ]
  },

  // ============ ABITUR ============
  abitur: {
    berufsabschluss: [
      {
        title: "Duale Ausbildung",
        steps: ["Abitur", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3 Jahre",
        note: "Viele Abiturienten entscheiden sich bewusst für eine Berufsausbildung, oft mit verkürzter Ausbildungszeit."
      },
      {
        title: "Schulische Berufsausbildung",
        steps: ["Abitur", "Berufsfachschule/Berufskolleg", "Berufsabschluss"],
        duration: "2-3 Jahre",
        note: "Schulische Ausbildungen z.B. als Erzieher/in oder technische/r Assistent/in."
      }
    ],
    meister: [
      {
        title: "Über Ausbildung zur Aufstiegsfortbildung",
        steps: ["Abitur", "Duale Ausbildung", "Berufspraxis", "Meister/Techniker/Fachwirt"],
        duration: "6-9 Jahre",
        note: "Auch mit Abitur kann der Weg über eine Berufsausbildung zur Aufstiegsfortbildung führen."
      }
    ],
    bachelor: [
      {
        title: "Direktes Studium",
        steps: ["Abitur", "Universität/Hochschule", "Bachelor"],
        duration: "3-4 Jahre",
        note: "Mit Abitur können alle Studiengänge an Universitäten und Hochschulen studiert werden.",
        recommended: true
      },
      {
        title: "Duales Studium",
        steps: ["Abitur", "Duales Studium", "Bachelor + Berufsabschluss"],
        duration: "3-4 Jahre",
        note: "Das duale Studium kombiniert Praxis im Betrieb mit Theorie an der Hochschule."
      }
    ]
  }
};

function showPaths() {
    const start = document.getElementById('start').value;
    const ziel = document.getElementById('ziel').value;
    const resultDiv = document.getElementById('result');
    const visStart = document.getElementById('vis-start');
    const visTarget = document.getElementById('vis-target');

    // Visualisierung aktualisieren
    if (start) {
        visStart.textContent = '✓';
        visStart.style.background = '#007bff';
        visStart.style.color = 'white';
    }
    if (ziel) {
        visTarget.textContent = '✓';
        visTarget.style.background = '#28a745';
        visTarget.style.color = 'white';
    }

    if (!start || !ziel) {
        resultDiv.innerHTML = '<div style="padding:1rem; background:#fff3cd; border-left:4px solid #ffc107; border-radius:4px; margin-top:1rem;">⚠️ Bitte wähle sowohl Start als auch Ziel aus.</div>';
        return;
    }

    const key = `${start}-${ziel}`;
    const paths = bildungswege[key];

    if (!paths || paths.length === 0) {
        resultDiv.innerHTML = `
            <div style="padding:1rem; background:#f8d7da; border-left:4px solid #dc3545; border-radius:4px; margin-top:1rem;">
                <strong>❌ Kein direkter Bildungsweg gefunden</strong>
                <p style="margin:0.5rem 0 0 0;">Von diesem Startpunkt zu diesem Ziel gibt es keinen standardisierten Bildungsweg im System Baden-Württemberg. Möglicherweise ist ein Zwischenschritt erforderlich.</p>
            </div>
        `;
        return;
    }

    let html = `
        <div style="background:#d4edda; border-left:4px solid #28a745; padding:1rem; border-radius:4px; margin:1rem 0;">
            <strong>✅ ${paths.length} Bildungsweg${paths.length > 1 ? 'e' : ''} gefunden</strong>
        </div>
        <div style="display:flex; flex-direction:column; gap:1rem;">
    `;

    paths.forEach((pathObj, index) => {
        html += `
            <div class="path-card">
                <div class="path-title">
                    <span style="background:#007bff; color:white; width:32px; height:32px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-weight:bold; margin-right:0.5rem;">${index + 1}</span>
                    Weg ${index + 1}
                    ${pathObj.duration ? `<span class="duration-badge">⏱️ ${pathObj.duration}</span>` : ''}
                </div>
                <div style="color:#555; line-height:1.8; margin:0.75rem 0;">
                    ${pathObj.path}
                </div>
                ${pathObj.note ? `<div style="background:#f8f9fa; padding:0.75rem; border-radius:4px; margin-top:0.5rem; font-size:0.9rem; color:#666;">
                    <strong>ℹ️ Hinweis:</strong> ${pathObj.note}
                </div>` : ''}
            </div>
        `;
    });

    html += '</div>';
    resultDiv.innerHTML = html;
}

function resetPaths() {
    document.getElementById('start').value = '';
    document.getElementById('ziel').value = '';
    document.getElementById('result').innerHTML = '';

    const visStart = document.getElementById('vis-start');
    const visTarget = document.getElementById('vis-target');

    visStart.textContent = '?';
    visStart.style.background = '#ddd';
    visStart.style.color = '#666';
    visTarget.textContent = '?';
    visTarget.style.background = '#ddd';
    visTarget.style.color = '#666';
}

function updateVisuals() {
    const start = document.getElementById('start');
    const ziel = document.getElementById('ziel');
    const visStart = document.getElementById('vis-start');
    const visTarget = document.getElementById('vis-target');

    if (start && start.value) {
        visStart.textContent = '✓';
        visStart.style.background = '#007bff';
        visStart.style.color = 'white';
    } else {
        visStart.textContent = '?';
        visStart.style.background = '#ddd';
        visStart.style.color = '#666';
    }

    if (ziel && ziel.value) {
        visTarget.textContent = '✓';
        visTarget.style.background = '#28a745';
        visTarget.style.color = 'white';
    } else {
        visTarget.textContent = '?';
        visTarget.style.background = '#ddd';
        visTarget.style.color = '#666';
    }
}

// ==========================================
// 3. QUIZ LOGIC
// ==========================================
const quizQuestions = [
    {
        question: "Was machst du gerne in deiner Freizeit?",
        type: "multiple",
        options: [
            { text: "Mit dem Computer arbeiten", value: "it" },
            { text: "Sport treiben oder draußen sein", value: "outdoor" },
            { text: "Basteln oder etwas bauen", value: "handwerk" },
            { text: "Lesen oder schreiben", value: "kommunikation" },
            { text: "Anderen helfen", value: "sozial" }
        ],
        key: "interests"
    },
    {
        question: "Wie arbeitest du am liebsten?",
        type: "single",
        options: [
            { text: "Mit meinen Händen / praktisch", value: "handwerk" },
            { text: "Mit Menschen zusammen", value: "sozial" },
            { text: "Am Computer", value: "it" },
            { text: "Im Büro / am Schreibtisch", value: "buero" }
        ],
        key: "workType"
    },
    {
        question: "Welcher Bereich interessiert dich am meisten?",
        type: "single",
        options: [
            { text: "Technik & Maschinen", value: "technik" },
            { text: "Gesundheit & Pflege", value: "gesundheit" },
            { text: "Wirtschaft & Handel", value: "wirtschaft" },
            { text: "IT & Digitales", value: "it" }
        ],
        key: "field"
    }
];

const QuizApp = {
    currentQ: 0,
    answers: [],
    start: function() {
        this.currentQ = 0;
        this.answers = [];
        document.getElementById('quiz-start').style.display = 'none';
        document.getElementById('quiz-question-container').style.display = 'block';
        this.showQuestion();
    },
    showQuestion: function() {
        const q = quizQuestions[this.currentQ];
        document.getElementById('quiz-question-text').innerText = q.question;
        const c = document.getElementById('quiz-options-container');
        c.innerHTML = '';
        q.options.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = 'quiz-option';
            btn.innerText = opt.text;
            btn.onclick = () => this.handleAnswer(opt.value);
            c.appendChild(btn);
        });
        document.getElementById('quiz-progress-fill').style.width = ((this.currentQ / quizQuestions.length) * 100) + '%';
    },
    handleAnswer: function(val) {
        this.answers.push(val);
        this.currentQ++;
        if (this.currentQ < quizQuestions.length) this.showQuestion();
        else this.showResults();
    },
    showResults: function() {
        document.getElementById('quiz-question-container').style.display = 'none';
        document.getElementById('quiz-results').style.display = 'block';

        // Ergebnis-Logik
        const field = this.answers[2] || 'wirtschaft';
        const workStyle = this.answers[1] || 'handwerk';

        let recommendations = '';
        if (field === 'technik') {
            recommendations = '<li>Industriemechaniker/in</li><li>Elektroniker/in</li><li>Mechatroniker/in</li>';
        } else if (field === 'gesundheit') {
            recommendations = '<li>Gesundheits- und Krankenpfleger/in</li><li>Medizinische/r Fachangestellte/r</li><li>Physiotherapeut/in</li>';
        } else if (field === 'it') {
            recommendations = '<li>Fachinformatiker/in</li><li>IT-Systemelektroniker/in</li><li>Kaufmann/-frau für Digitalisierungsmanagement</li>';
        } else {
            recommendations = '<li>Kaufmann/-frau für Büromanagement</li><li>Einzelhandelskaufmann/-frau</li><li>Industriekaufmann/-frau</li>';
        }

        document.getElementById('quiz-result-list').innerHTML = `
            <div style="background:white; padding:1.5rem; border-radius:8px; border:1px solid #e0e0e0;">
                <h4 style="color:#007bff; margin-bottom:1rem;">🎯 Deine Berufsempfehlungen im Bereich ${field}</h4>
                <p style="margin-bottom:1rem;">Basierend auf deinen Antworten passen folgende Berufe gut zu dir:</p>
                <ul style="line-height:1.8;">${recommendations}</ul>
                <p style="margin-top:1rem; color:#666; font-size:0.9rem;">💡 Tipp: Nutze das Bildungswege-Tool oben, um herauszufinden, welcher Weg dich zu diesen Berufen führt!</p>
            </div>
        `;
    },
    reset: function() {
        document.getElementById('quiz-results').style.display = 'none';
        document.getElementById('quiz-start').style.display = 'block';
        document.getElementById('quiz-progress-fill').style.width = '0%';
    }
};

// ==========================================
// INITIALISIERUNG
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initGlossary();

    const startSelect = document.getElementById('start');
    const zielSelect = document.getElementById('ziel');

    if (startSelect) startSelect.addEventListener('change', updateVisuals);
    if (zielSelect) zielSelect.addEventListener('change', updateVisuals);

    // Initiale Visualisierung
    updateVisuals();
});
