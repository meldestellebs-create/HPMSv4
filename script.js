
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
    // Ohne Abschluss (allgemeinbildende Schule)
    "ohneAbschluss-hauptschulabschluss": [
        { path: "VAB (Vorqualifizierungsjahr Arbeit/Beruf) → Hauptschulabschluss", duration: "1 Jahr", note: "Im VAB wird berufliche Orientierung geboten und der Hauptschulabschluss kann über eine Prüfung erworben werden." },
        { path: "AVdual → Hauptschulabschluss", duration: "1-2 Jahre", note: "AVdual kombiniert schulisches Lernen mit Betriebspraktika." },
        { path: "Berufsvorbereitende Bildungsmaßnahme (BvB) → Hauptschulabschluss", duration: "1 Jahr", note: "Förderung durch die Agentur für Arbeit möglich." }
    ],
    "ohneAbschluss-berufsabschluss": [
        { path: "AVdual → Berufsausbildung → Berufsabschluss", duration: "4-5 Jahre", note: "Erst Vorbereitung, dann reguläre Ausbildung." },
        { path: "VAB → Berufsausbildung → Berufsabschluss", duration: "4 Jahre", note: "Über Vorqualifizierung in die Ausbildung." },
        { path: "Einstiegsqualifizierung (EQ) → Berufsausbildung → Berufsabschluss", duration: "3,5-4 Jahre", note: "Betriebliches Langzeitpraktikum als Einstieg." }
    ],
    "ohneAbschluss-mittlereReife": [
        { path: "VAB → Hauptschulabschluss → 2-jährige Berufsfachschule → Mittlere Reife", duration: "3-4 Jahre", note: "Schrittweiser Aufbau über Zwischenziele." },
        { path: "AVdual → Hauptschulabschluss → 2BFS → Mittlere Reife", duration: "3-4 Jahre", note: "Kombination aus Vorbereitung und Berufsfachschule." },
        { path: "AVdual → Hauptschulabschluss → Berufsausbildung + Zusatzunterricht → Mittlere Reife", duration: "4-5 Jahre", note: "Mittlere Reife parallel zur Ausbildung erwerben." }
    ],

    // SBBZ (Sonderpädagogische Bildungs- und Beratungszentren)
    "sbbz-bve": [
        { path: "SBBZ → Berufsvorbereitende Einrichtung (BVE)", duration: "1-2 Jahre", note: "Spezialisierte berufliche Vorbereitung mit individueller Förderung." }
    ],
    "sbbz-vabKF": [
        { path: "SBBZ → VAB-KF (Kooperative Form) → VAB Abschluss", duration: "1 Jahr", note: "Förderschulspezifisches Vorqualifizierungsjahr." }
    ],
    "sbbz-sonderberufsschule": [
        { path: "SBBZ → BVE → KoBV (Kooperative berufliche Bildung) → Sonderberufsschule", duration: "3-4 Jahre", note: "Vollständiger Weg für Jugendliche mit besonderem Förderbedarf." }
    ],
    "sbbz-hauptschulabschluss": [
        { path: "SBBZ → VAB → Hauptschulabschluss", duration: "1-2 Jahre", note: "Über Vorqualifizierung zum Hauptschulabschluss." },
        { path: "SBBZ → AVdual → Hauptschulabschluss", duration: "1-2 Jahre", note: "Mit dualer Ausbildungsvorbereitung." }
    ],
    "sbbz-berufsabschluss": [
        { path: "SBBZ → VAB → Berufsausbildung → Berufsabschluss", duration: "4-5 Jahre", note: "Reguläre Ausbildung nach Vorqualifizierung möglich." },
        { path: "SBBZ → Fachpraktiker-Ausbildung → Berufsabschluss", duration: "3 Jahre", note: "Spezialisierte Ausbildung für Menschen mit Behinderung." }
    ],

    // VABO (Vorqualifizierungsjahr)
    "vabo-hauptschulabschluss": [
        { path: "VABO → VAB → Hauptschulabschluss", duration: "2 Jahre", note: "Erst Deutschförderung, dann Hauptschulabschluss." },
        { path: "VABO → AVdual → Hauptschulabschluss", duration: "2-3 Jahre", note: "Mit beruflicher Orientierung kombiniert." }
    ],
    "vabo-berufsabschluss": [
        { path: "VABO → VAB → Berufsausbildung → Berufsabschluss", duration: "5 Jahre", note: "Vollständiger Weg über Sprachförderung." },
        { path: "VABO → AVdual → Berufsausbildung → Berufsabschluss", duration: "5-6 Jahre", note: "Mit dualer Vorbereitung." }
    ],
    "vabo-mittlereReife": [
        { path: "VABO → VAB → Hauptschulabschluss → 2BFS → Mittlere Reife", duration: "4-5 Jahre", note: "Langfristiger Bildungsweg nach Sprachförderung." }
    ],

    // AVdual
    "avdual-hauptschulabschluss": [
        { path: "AVdual → Hauptschulabschluss (direkter Abschluss)", duration: "1-2 Jahre", note: "Direkter Erwerb des Hauptschulabschlusses im AVdual." }
    ],
    "avdual-berufsabschluss": [
        { path: "AVdual → Berufsausbildung → Berufsabschluss", duration: "3-5 Jahre", note: "Optimale Vorbereitung auf Ausbildung." },
        { path: "AVdual mit Hauptschulabschluss → Berufsausbildung → Berufsabschluss", duration: "3-4 Jahre", note: "Mit Abschluss bessere Ausbildungschancen." }
    ],
    "avdual-mittlereReife": [
        { path: "AVdual → Hauptschulabschluss → 2BFS → Mittlere Reife", duration: "3-4 Jahre", note: "Über Berufsfachschule zur Mittleren Reife." },
        { path: "AVdual → Berufsausbildung + Zusatzunterricht → Mittlere Reife", duration: "3-5 Jahre", note: "Mittlere Reife parallel zur Ausbildung (Modell 9+3)." }
    ],

    // Hauptschulabschluss
    "hauptschulabschluss-berufsabschluss": [
        { path: "Duale Berufsausbildung → Berufsabschluss", duration: "2-3,5 Jahre", note: "Klassische betriebliche Ausbildung." },
        { path: "Berufsfachschule (vollzeitschulisch) → Berufsabschluss", duration: "2-3 Jahre", note: "Schulische Berufsausbildung ohne Betrieb." }
    ],
    "hauptschulabschluss-mittlereReife": [
        { path: "2-jährige Berufsfachschule → Mittlere Reife (Fachschulreife)", duration: "2 Jahre", note: "Direkter Weg zur Mittleren Reife." },
        { path: "Berufsausbildung + Zusatzunterricht → Mittlere Reife", duration: "3 Jahre", note: "Modell 9+3: Bei Notendurchschnitt 2,5 wird Mittlere Reife anerkannt." },
        { path: "Werkrealschule Klasse 10 → Mittlere Reife", duration: "1 Jahr", note: "Falls Werkrealschule verfügbar." }
    ],
    "hauptschulabschluss-fachhochschulreife": [
        { path: "Hauptschulabschluss → 2BFS → Mittlere Reife → Berufskolleg I + II → Fachhochschulreife", duration: "4 Jahre", note: "Mehrstufiger Weg über Zwischenabschlüsse." },
        { path: "Hauptschulabschluss → Mittlere Reife → 3-jähriges Berufskolleg → Fachhochschulreife", duration: "5 Jahre", note: "Mit Berufsabschluss kombiniert." }
    ],
    "hauptschulabschluss-abitur": [
        { path: "Hauptschulabschluss → Mittlere Reife → Berufliches Gymnasium (3 Jahre) → Abitur", duration: "5-6 Jahre", note: "Langer, aber möglicher Weg zum Abitur." }
    ],

    // Mittlere Reife
    "mittlereReife-berufsabschluss": [
        { path: "Duale Berufsausbildung → Berufsabschluss", duration: "2,5-3 Jahre", note: "Oft Verkürzung möglich." },
        { path: "Berufsfachschule (vollzeitschulisch) → Berufsabschluss", duration: "2-3 Jahre", note: "Schulische Ausbildung." },
        { path: "Berufskolleg mit Berufsabschluss → Berufsabschluss", duration: "3 Jahre", note: "Kombination aus FH-Reife und Berufsabschluss möglich." }
    ],
    "mittlereReife-fachhochschulreife": [
        { path: "Berufskolleg I + II (2 Jahre) → Fachhochschulreife", duration: "2 Jahre", note: "Direkter Weg zur Fachhochschulreife." },
        { path: "3-jähriges Berufskolleg → Fachhochschulreife + Berufsabschluss", duration: "3 Jahre", note: "Doppelqualifikation." },
        { path: "Fachschule (nach Berufsausbildung) → Fachhochschulreife", duration: "1-2 Jahre", note: "Weiterbildung nach Ausbildung." }
    ],
    "mittlereReife-abitur": [
        { path: "Berufliches Gymnasium (3 Jahre) → Abitur", duration: "3 Jahre", note: "Direkter Weg zum Abitur mit beruflichem Profil." },
        { path: "Berufskolleg → Berufsoberschule → Abitur", duration: "4 Jahre", note: "Über Zwischenschritt BOS." }
    ],
    "mittlereReife-meister": [
        { path: "Mittlere Reife → Berufsausbildung → Berufserfahrung → Meister/Techniker/Fachwirt", duration: "6-8 Jahre", note: "Klassischer Aufstiegsweg im Handwerk/Technik." }
    ],

    // Fachhochschulreife
    "fachhochschulreife-berufsabschluss": [
        { path: "Duale Berufsausbildung → Berufsabschluss", duration: "2-3 Jahre", note: "Oft verkürzte Ausbildung möglich." },
        { path: "Berufskolleg → Berufsabschluss", duration: "1-2 Jahre", note: "Zusatzqualifikation." }
    ],
    "fachhochschulreife-abitur": [
        { path: "Berufsoberschule (BOS) → Abitur", duration: "2 Jahre", note: "Nach Berufsausbildung oder mit Berufserfahrung." }
    ],
    "fachhochschulreife-bachelor": [
        { path: "Fachhochschulreife → Fachhochschule/Duale Hochschule → Bachelor → Master → Promotion", duration: "3-8+ Jahre", note: "Direkter Hochschulzugang für Fachhochschulen." }
    ],
    "fachhochschulreife-meister": [
        { path: "Fachhochschulreife → Berufsausbildung → Berufserfahrung → Meister/Techniker/Fachwirt", duration: "5-7 Jahre", note: "Aufstiegsfortbildung nach Praxisphase." }
    ],

    // Abitur
    "abitur-berufsabschluss": [
        { path: "Duale Berufsausbildung (verkürzt) → Berufsabschluss", duration: "2-2,5 Jahre", note: "Verkürzung durch Abitur möglich." },
        { path: "Berufskolleg → Berufsabschluss", duration: "1-2 Jahre", note: "Zusatzqualifikation neben Studium." }
    ],
    "abitur-bachelor": [
        { path: "Abitur → Universität/Hochschule → Bachelor → Master → Promotion", duration: "3-8+ Jahre", note: "Direkter Zugang zu allen Hochschulen und Universitäten." }
    ],
    "abitur-meister": [
        { path: "Abitur → Berufsausbildung → Berufserfahrung → Meister/Techniker/Fachwirt", duration: "5-7 Jahre", note: "Kombination akademische und berufliche Bildung." }
    ],

    // Meister/Techniker/Fachwirt
    "meister-bachelor": [
        { path: "Meister/Techniker/Fachwirt → Hochschule (ohne Abitur) → Bachelor → Master → Promotion", duration: "3-8 Jahre", note: "Meister/Techniker ermöglichen Hochschulzugang ohne Abitur (gleichwertig)." }
    ]
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
