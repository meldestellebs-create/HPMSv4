
// ==================== TAB SWITCHING ====================
function switchTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Remove active from all buttons
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Show selected tab
  document.getElementById(tabName + '-tab').classList.add('active');
  
  // Mark button as active
  event.target.classList.add('active');
}

// ==================== VISUAL UPDATE ====================
function updateVisuals() {
  const startSelect = document.getElementById('start');
  const zielSelect = document.getElementById('ziel');
  
  const startText = startSelect.options[startSelect.selectedIndex]?.text || 'Nicht gewählt';
  const zielText = zielSelect.options[zielSelect.selectedIndex]?.text || 'Nicht gewählt';
  
  // Update visual circles
  const visualStart = document.getElementById('visual-start');
  const visualTarget = document.getElementById('visual-target');
  
  if (startSelect.value) {
    visualStart.textContent = '✓';
  } else {
    visualStart.textContent = '?';
  }
  
  if (zielSelect.value) {
    visualTarget.textContent = '✓';
  } else {
    visualTarget.textContent = '?';
  }
  
  // Update text labels
  document.getElementById('visual-start-text').textContent = startText === '-- Bitte wählen --' ? 'Nicht gewählt' : startText.substring(0, 30) + (startText.length > 30 ? '...' : '');
  document.getElementById('visual-target-text').textContent = zielText === '-- Bitte wählen --' ? 'Nicht gewählt' : zielText.substring(0, 30) + (zielText.length > 30 ? '...' : '');
}

// Add event listeners to selects
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('start').addEventListener('change', updateVisuals);
  document.getElementById('ziel').addEventListener('change', updateVisuals);
});

// ==================== BILDUNGSWEGE DATENBANK ====================

const paths = {
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

// ==================== AUTOMATISCHE WEGE-ABLEITUNG UND ERGÄNZUNG ====================
// Funktion zur Ergänzung fehlender Wege durch logische Ableitung
function erweiterePathsMitAbleitungen() {
  // Äquivalenz-Gruppen definieren
  const aequivalenzGruppen = {
    ohneAbschluss: ['ohneAbschluss'],  // Basis
    // Weitere Gruppen werden unten manuell verarbeitet
  };
  
  // VABO-spezifische Ergänzungen - VABO braucht immer +1 Jahr für Deutschförderung
  // Fehlende Wege für VABO ergänzen, basierend auf ohneAbschluss
  const ohneAbschlussPaths = paths.ohneAbschluss;
  
  // Prüfe und ergänze fehlende VABO-Wege
  for (const ziel in ohneAbschlussPaths) {
    if (!paths.vabo[ziel]) {
      paths.vabo[ziel] = [];
    }
    
    // Kopiere nur die wichtigsten 2-3 Wege von ohneAbschluss zu VABO
    const relevantePaths = ohneAbschlussPaths[ziel].filter(p => p.recommended).slice(0, 2);
    if (relevantePaths.length === 0 && ohneAbschlussPaths[ziel].length > 0) {
      // Falls keine empfohlenen Wege, nimm die ersten 2
      relevantePaths.push(...ohneAbschlussPaths[ziel].slice(0, 2));
    }
    
    relevantePaths.forEach(originalPath => {
      // Verbesserte Duplikatsprüfung: Prüfe auf ähnliche Steps
      const existiert = paths.vabo[ziel].some(existingPath => {
        // Vergleiche die zweiten Steps (nach VABO)
        if (existingPath.steps.length < 2 || originalPath.steps.length < 2) return false;
        const existingSecondStep = existingPath.steps[1].toLowerCase();
        const originalSecondStep = originalPath.steps[1].toLowerCase();
        // Prüfe ob die Steps sehr ähnlich sind
        return existingSecondStep.includes(originalSecondStep.substring(0, 10)) || 
               originalSecondStep.includes(existingSecondStep.substring(0, 10));
      });
      
      if (!existiert) {
        // Erstelle VABO-Version mit angepassten Steps
        const vaboPath = {
          title: "VABO → " + originalPath.title,
          steps: ["VABO (Deutschförderung B1)", ...originalPath.steps.slice(1)],
          duration: erhoeheZeit(originalPath.duration, 1),
          note: "Nach VABO-Deutschförderung: " + originalPath.note,
          recommended: originalPath.recommended
        };
        paths.vabo[ziel].push(vaboPath);
      }
    });
  }
  
  // SBBZ-spezifische Ergänzungen
  for (const ziel in ohneAbschlussPaths) {
    if (!paths.sbbz[ziel]) {
      paths.sbbz[ziel] = [];
    }
    
    // Nur realistische Wege für SBBZ (nicht alle ohneAbschluss-Wege)
    // Ziele die SBBZ erreichen kann: hauptschulabschluss, mittlereReife, berufsabschluss
    // und mit Unterstützung auch fachhochschulreife, abitur
    const sbbzRealistische = ['hauptschulabschluss', 'mittlereReife', 'berufsabschluss', 'fachhochschulreife'];
    
    if (sbbzRealistische.includes(ziel) || ziel.includes('bve') || ziel.includes('vabKF') || ziel.includes('sonderberufsschule')) {
      const relevantePaths = ohneAbschlussPaths[ziel].filter(p => p.recommended).slice(0, 2);
      if (relevantePaths.length === 0 && ohneAbschlussPaths[ziel].length > 0) {
        relevantePaths.push(...ohneAbschlussPaths[ziel].slice(0, 2));
      }
      
      relevantePaths.forEach(originalPath => {
        // Verbesserte Duplikatsprüfung für SBBZ
        const existiert = paths.sbbz[ziel].some(existingPath => {
          // Vergleiche die zweiten Steps (nach SBBZ)
          if (existingPath.steps.length < 2 || originalPath.steps.length < 2) return false;
          const existingSecondStep = existingPath.steps[1].toLowerCase();
          const originalSecondStep = originalPath.steps[1].toLowerCase();
          // Prüfe ob die Steps sehr ähnlich sind
          return existingSecondStep.includes(originalSecondStep.substring(0, 10)) || 
                 originalSecondStep.includes(existingSecondStep.substring(0, 10));
        });
        
        if (!existiert && paths.sbbz[ziel].length < 6) { // Maximal 6 Wege pro Ziel für SBBZ
          const sbbzPath = {
            title: originalPath.title + " (mit Unterstützung)",
            steps: ["SBBZ", ...originalPath.steps.slice(1)],
            duration: originalPath.duration,
            note: "Mit individueller Förderung und Unterstützung: " + originalPath.note,
            recommended: originalPath.recommended
          };
          paths.sbbz[ziel].push(sbbzPath);
        }
      });
    }
  }
}

// Hilfsfunktion zur Zeiterhöhung
function erhoeheZeit(dauer, jahre) {
  if (!dauer) return dauer;
  const match = dauer.match(/(\d+)(-(\d+))?\s*Jahre?/);
  if (match) {
    const min = parseInt(match[1]) + jahre;
    const max = match[3] ? parseInt(match[3]) + jahre : null;
    return max ? `${min}-${max} Jahre` : `${min} Jahre`;
  }
  return dauer;
}

// Wege erweitern beim Laden
erweiterePathsMitAbleitungen();

// ==================== SHOW PATHS FUNCTION ====================
function showPaths() {
  const start = document.getElementById("start").value;
  const ziel = document.getElementById("ziel").value;
  const resultDiv = document.getElementById("result");
  
  if (!start || !ziel) {
    resultDiv.innerHTML = `
      <div class="results-container">
        <div class="results-header">⚠️ Bitte Auswahl treffen</div>
        <div class="results-content">
          <div class="info-box">
            <p><strong>Hinweis:</strong> Bitte wähle sowohl deinen Start als auch dein Ziel aus, um die verfügbaren Bildungswege anzuzeigen.</p>
          </div>
        </div>
      </div>
    `;
    return;
  }
  
  const availablePaths = paths[start]?.[ziel];
  
  if (!availablePaths || availablePaths.length === 0) {
    resultDiv.innerHTML = `
      <div class="results-container">
        <div class="results-header">ℹ️ Zwischenschritte erforderlich</div>
        <div class="results-content">
          <div class="info-box">
            <p><strong>Für dieses Ziel sind Zwischenschritte notwendig.</strong></p>
            <p style="margin-top: 12px;"><strong>💡 Tipp:</strong> Wähle zunächst einen Zwischenschritt als Ziel aus (z.B. erst Hauptschulabschluss, dann Mittlere Reife). Mit Abschluss, immer Anschluss!</p>
          </div>
        </div>
      </div>
    `;
    return;
  }
  
  let html = `
    <div class="results-container">
      <div class="results-header">
        ✨ ${availablePaths.length} ${availablePaths.length === 1 ? 'Weg gefunden' : 'Wege gefunden'}
      </div>
      <div class="results-content">
  `;
  
  availablePaths.forEach((path, index) => {
    html += `
      <div class="path-card">
        <div class="path-card-header">
          <div class="path-number-badge">${index + 1}</div>
          <div class="path-title">${path.title}</div>
          ${path.duration ? `<div class="duration-badge">⏱️ ${path.duration}</div>` : ''}
        </div>
        <div class="path-steps">
    `;
    
    path.steps.forEach((step, stepIndex) => {
      html += `<span class="step">${step}</span>`;
      if (stepIndex < path.steps.length - 1) {
        html += `<span class="arrow">→</span>`;
      }
    });
    
    html += `</div>`;
    
    if (path.note) {
      html += `
        <div class="path-note">
          <strong>ℹ️ Hinweis:</strong> ${path.note}
        </div>
      `;
    }
    
    html += `</div>`;
  });
  
  html += `
      <div class="info-box">
        <p><strong>💡 Wichtig:</strong> Die angezeigten Wege sind die häufigsten Bildungspfade. Es können je nach individueller Situation auch weitere Möglichkeiten bestehen.</p>
        <p style="margin-top: 10px;"><strong>Beratung nutzen:</strong> Für persönliche Bildungsberatung wende dich an die Berufsberatung der Agentur für Arbeit oder die Schulsozialarbeit.</p>
      </div>
    </div>
  </div>
  `;
  
  resultDiv.innerHTML = html;
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function reset() {
  document.getElementById("start").value = "";
  document.getElementById("ziel").value = "";
  document.getElementById("result").innerHTML = "";
  updateVisuals();
}

// ==================== BERUFSWAHL QUIZ ====================
let quizStarted = false;
let currentQuestion = 0;
let answers = {
  interests: [],
  workType: '',
  field: '',
  activities: []
};

const quizQuestions = [
  {
    question: "Was machst du gerne in deiner Freizeit?",
    type: "multiple",
    options: [
      { text: "Mit dem Computer arbeiten", value: "computer" },
      { text: "Sport treiben oder draußen sein", value: "sport" },
      { text: "Basteln oder etwas bauen", value: "handwerk" },
      { text: "Lesen oder schreiben", value: "kommunikation" },
      { text: "Anderen helfen", value: "sozial" },
      { text: "Kochen oder backen", value: "gastronomie" }
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
      { text: "Im Büro / am Schreibtisch", value: "buero" },
      { text: "Draußen / in Bewegung", value: "outdoor" }
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
      { text: "Kreatives & Gestaltung", value: "kreativ" },
      { text: "Natur & Umwelt", value: "natur" },
      { text: "IT & Digitales", value: "it" }
    ],
    key: "field"
  },
  {
    question: "Was würdest du gerne machen?",
    type: "multiple",
    options: [
      { text: "Dinge reparieren", value: "reparieren" },
      { text: "Verkaufen & beraten", value: "verkauf" },
      { text: "Pflegen & betreuen", value: "pflege" },
      { text: "Programmieren", value: "programmieren" },
      { text: "Gestalten & designen", value: "design" },
      { text: "Organisieren & planen", value: "organisation" }
    ],
    key: "activities"
  }
];

function startQuiz() {
  quizStarted = true;
  currentQuestion = 0;
  answers = { interests: [], workType: '', field: '', activities: [] };
  document.getElementById('quiz-start').style.display = 'none';
  document.getElementById('quiz-progress-section').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  document.getElementById('quiz-progress').style.width = progress + '%';
  
  let html = `
    <div class="quiz-question">
      <div class="quiz-question-number">Frage ${currentQuestion + 1} von ${quizQuestions.length}</div>
      <h3>${question.question}</h3>
      <div class="quiz-options">
  `;
  
  question.options.forEach((option, index) => {
    html += `
      <div class="quiz-option" onclick="selectOption(${index}, '${question.type}', '${question.key}')">
        ${option.text}
      </div>
    `;
  });
  
  html += `
      </div>
      <div class="button-group" style="margin-top: 25px;">
        ${currentQuestion > 0 ? '<button class="btn btn-secondary" style="flex: 1;" onclick="previousQuestion()">⬅️ Zurück</button>' : ''}
        <button class="btn btn-primary" style="flex: 2;" onclick="nextQuestion()">
          ${currentQuestion === quizQuestions.length - 1 ? '🎯 Ergebnis anzeigen' : '➡️ Weiter'}
        </button>
      </div>
      <button class="btn btn-secondary" style="margin-top: 15px; width: 100%;" onclick="restartQuiz()">
        🔄 Von vorne beginnen
      </button>
    </div>
  `;
  
  document.getElementById('quiz-content').innerHTML = html;
}

function selectOption(index, type, key) {
  const options = document.querySelectorAll('.quiz-option');
  const question = quizQuestions[currentQuestion];
  const value = question.options[index].value;
  
  if (type === 'single') {
    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');
    answers[key] = value;
  } else {
    options[index].classList.toggle('selected');
    if (options[index].classList.contains('selected')) {
      if (!answers[key].includes(value)) {
        answers[key].push(value);
      }
    } else {
      answers[key] = answers[key].filter(v => v !== value);
    }
  }
}

function nextQuestion() {
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResults();
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

function showResults() {
  const berufe = getMatchingBerufe();
  
  let html = `
    <div style="background: var(--bg-white); padding: 40px; border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
      <h2 style="color: var(--primary-blue); margin-bottom: 25px; font-size: 2rem;">🎯 Diese Berufe könnten zu dir passen:</h2>
  `;
  
  berufe.forEach(beruf => {
    html += `
      <div class="beruf-card">
        <h4>${beruf.name}</h4>
        <p>${beruf.beschreibung}</p>
        <div class="beruf-info">
          <span class="beruf-tag">📚 ${beruf.abschluss}</span>
          <span class="beruf-tag">⏱️ ${beruf.dauer}</span>
          ${beruf.chancen ? '<span class="beruf-tag">✨ Gute Chancen</span>' : ''}
        </div>
      </div>
    `;
  });
  
  html += `
      <div class="info-box" style="margin-top: 25px;">
        <p><strong>💡 Nächster Schritt:</strong> Wechsle zum Tab "Bildungswege finden", um herauszufinden, wie du zu deinem Wunschberuf kommst!</p>
      </div>
      <button class="btn btn-primary" style="width: 100%; margin-top: 25px;" onclick="restartQuiz()">
        🔄 Quiz neu starten
      </button>
    </div>
  `;
  
  document.getElementById('quiz-content').innerHTML = html;
}

function restartQuiz() {
  document.getElementById('quiz-start').style.display = 'block';
  document.getElementById('quiz-progress-section').style.display = 'none';
  document.getElementById('quiz-content').innerHTML = '';
  document.getElementById('quiz-progress').style.width = '0%';
}

function getMatchingBerufe() {
  const berufeDB = {
    technik: [
      { name: "Elektroniker/in", beschreibung: "Installiere elektrische Anlagen und halte sie instand.", abschluss: "Mittlere Reife", dauer: "3,5 Jahre", chancen: true },
      { name: "Industriemechaniker/in", beschreibung: "Stelle Maschinen und Anlagen her und warte sie.", abschluss: "Hauptschulabschluss", dauer: "3,5 Jahre", chancen: true },
      { name: "KFZ-Mechatroniker/in", beschreibung: "Repariere und warte Fahrzeuge.", abschluss: "Mittlere Reife", dauer: "3,5 Jahre", chancen: true }
    ],
    gesundheit: [
      { name: "Medizinische/r Fachangestellte/r", beschreibung: "Unterstütze Ärzte bei der Behandlung und Betreuung von Patienten.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true },
      { name: "Pflegefachmann/frau", beschreibung: "Pflege und betreue kranke und ältere Menschen.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true },
      { name: "Zahnmedizinische/r Fachangestellte/r", beschreibung: "Assistiere bei zahnärztlichen Behandlungen.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true }
    ],
    wirtschaft: [
      { name: "Kaufmann/frau für Büromanagement", beschreibung: "Organisiere und bearbeite bürowirtschaftliche Aufgaben.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true },
      { name: "Industriekaufmann/frau", beschreibung: "Steuere betriebswirtschaftliche Abläufe in Unternehmen.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true },
      { name: "Kaufmann/frau im Einzelhandel", beschreibung: "Verkaufe Waren und berate Kunden.", abschluss: "Hauptschulabschluss", dauer: "3 Jahre", chancen: true }
    ],
    kreativ: [
      { name: "Mediengestalter/in", beschreibung: "Gestalte digitale und Print-Medien.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: false },
      { name: "Friseur/in", beschreibung: "Schneide, färbe und style Haare.", abschluss: "Hauptschulabschluss", dauer: "3 Jahre", chancen: true },
      { name: "Tischler/in", beschreibung: "Stelle Möbel und andere Holzprodukte her.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true }
    ],
    it: [
      { name: "Fachinformatiker/in", beschreibung: "Entwickle Software oder betreue IT-Systeme.", abschluss: "Hochschulreife", dauer: "3 Jahre", chancen: true },
      { name: "IT-System-Elektroniker/in", beschreibung: "Plane und installiere IT-Systeme.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true }
    ],
    natur: [
      { name: "Gärtner/in", beschreibung: "Pflege Pflanzen und gestalte Außenanlagen.", abschluss: "Hauptschulabschluss", dauer: "3 Jahre", chancen: true },
      { name: "Landwirt/in", beschreibung: "Erzeuge pflanzliche und tierische Produkte.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: false }
    ],
    gastronomie: [
      { name: "Koch/Köchin", beschreibung: "Bereite Speisen zu und plane Menüs.", abschluss: "Hauptschulabschluss", dauer: "3 Jahre", chancen: true },
      { name: "Hotelfachmann/frau", beschreibung: "Betreue Gäste in Hotels und gastronomischen Betrieben.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true }
    ]
  };
  
  const field = answers.field || 'wirtschaft';
  return berufeDB[field] || berufeDB.wirtschaft;
}

// Enter key support
document.addEventListener('DOMContentLoaded', function() {
  const selects = document.querySelectorAll('select');
  selects.forEach(select => {
    select.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        showPaths();
      }
    });
  });
});
