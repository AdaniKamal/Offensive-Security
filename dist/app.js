const concepts = [
  {
    id: "red-team",
    title: "Red Team",
    short: "Simulates real attackers against people, process, and technology.",
    detail:
      "Red team work tests how well an organization can detect, respond, and recover when an attacker chains multiple weaknesses together. It usually has a wider objective than finding vulnerabilities only."
  },
  {
    id: "pentest",
    title: "Penetration Testing",
    short: "A controlled security test with a defined scope and objective.",
    detail:
      "Penetration testing validates whether vulnerabilities can be exploited and what business impact they may create. The output should include evidence, risk, and practical remediation guidance."
  },
  {
    id: "va",
    title: "Vulnerability Assessment",
    short: "Identifies and prioritizes weaknesses, usually at broader scale.",
    detail:
      "Vulnerability assessment focuses on discovering known weaknesses, misconfigurations, missing patches, and exposed services. It is usually less exploit-heavy than a pentest but important for visibility."
  },
  {
    id: "vm",
    title: "Vulnerability Management",
    short: "Turns findings into tracked risk reduction over time.",
    detail:
      "Vulnerability management is the ongoing process after discovery: validate, prioritize, assign owners, remediate, retest, monitor SLA, and report risk trends to the business."
  }
];

const methods = [
  {
    id: "recon",
    title: "Reconnaissance",
    goal: "Map the target, assets, names, services, and public exposure.",
    label: "Step 01"
  },
  {
    id: "enumeration",
    title: "Scanning & Enumeration",
    goal: "Identify live hosts, ports, technologies, directories, and entry points.",
    label: "Step 02"
  },
  {
    id: "validation",
    title: "Validation",
    goal: "Confirm findings safely and remove obvious false positives.",
    label: "Step 03"
  },
  {
    id: "exploitation",
    title: "Controlled Exploitation",
    goal: "Prove realistic impact within the agreed rules of engagement.",
    label: "Step 04"
  },
  {
    id: "reporting",
    title: "Reporting & Retest",
    goal: "Explain evidence, impact, remediation, and verify fixes.",
    label: "Step 05"
  }
];

const pentestTypes = [
  {
    id: "web",
    title: "Web App",
    desc: "Use this when the target is a website, portal, admin panel, API-backed frontend, or exposed web service."
  },
  {
    id: "network",
    title: "Network",
    desc: "Use this when testing internal or external infrastructure, exposed ports, host services, and network segmentation."
  },
  {
    id: "api",
    title: "API",
    desc: "Use this when testing REST, GraphQL, mobile-backed APIs, tokens, authorization, and object-level access."
  }
];

const toolData = {
  recon: {
    web: [
      tool("Amass", "Maps domains, subdomains, ASN data, and external attack surface.", "Use early when you need a broader picture of owned assets.", "https://github.com/owasp-amass/amass"),
      tool("Subfinder", "Finds valid subdomains from passive sources.", "Use before probing which hosts are alive.", "https://github.com/projectdiscovery/subfinder"),
      tool("Wappalyzer", "Identifies web technologies, frameworks, and analytics tags.", "Use when you need quick technology fingerprinting.", "https://www.wappalyzer.com/")
    ],
    network: [
      tool("WHOIS", "Shows domain registration and ownership metadata.", "Use for external scoping and ownership clues.", "https://www.whois.com/whois/"),
      tool("Shodan", "Searches internet-exposed services and banners.", "Use for external exposure review.", "https://www.shodan.io/"),
      tool("Censys", "Searches certificates, hosts, and exposed services.", "Use to cross-check public infrastructure visibility.", "https://search.censys.io/")
    ],
    api: [
      tool("Postman", "Organizes API collections, requests, variables, and auth flows.", "Use when the client provides API documentation or collections.", "https://www.postman.com/"),
      tool("Swagger UI", "Displays OpenAPI documentation and endpoints.", "Use to understand available methods and parameters.", "https://swagger.io/tools/swagger-ui/"),
      tool("Kiterunner", "Discovers API routes and interesting endpoints.", "Use during authorized API route discovery.", "https://github.com/assetnote/kiterunner")
    ]
  },
  enumeration: {
    web: [
      tool("httpx", "Probes web hosts and collects status, title, tech, and TLS data.", "Use after subdomain discovery to find live targets.", "https://github.com/projectdiscovery/httpx"),
      tool("Wafw00f", "Detects whether a web application firewall may be present.", "Use before deeper web testing to understand filtering behavior.", "https://github.com/EnableSecurity/wafw00f"),
      tool("Feroxbuster", "Brute-forces directories and files on web servers.", "Use to discover hidden paths during authorized testing.", "https://github.com/epi052/feroxbuster")
    ],
    network: [
      tool("Nmap", "Scans hosts, ports, services, versions, and scripts.", "Use for internal and external network enumeration.", "https://nmap.org/"),
      tool("Rustscan", "Fast port scanner that can pass results into Nmap.", "Use when you need quick initial port discovery.", "https://github.com/RustScan/RustScan"),
      tool("NetExec", "Enumerates and validates common internal network services.", "Use in authorized internal assessments.", "https://github.com/Pennyw0rth/NetExec")
    ],
    api: [
      tool("Burp Suite", "Intercepts, modifies, repeats, and tests API requests.", "Use to inspect auth, parameters, and authorization behavior.", "https://portswigger.net/burp"),
      tool("Insomnia", "Builds and tests API requests with environments.", "Use for manual API exploration.", "https://insomnia.rest/"),
      tool("GraphQL Voyager", "Visualizes GraphQL schema relationships.", "Use when GraphQL introspection or schema access is available.", "https://github.com/IvanGoncharov/graphql-voyager")
    ]
  },
  validation: {
    web: [
      tool("Nuclei", "Runs templated checks for known issues and misconfigurations.", "Use to validate known patterns, then manually verify important findings.", "https://github.com/projectdiscovery/nuclei"),
      tool("SSL Labs", "Checks TLS configuration quality.", "Use when reviewing HTTPS exposure and certificate posture.", "https://www.ssllabs.com/ssltest/"),
      tool("Burp Repeater", "Manually modifies and replays HTTP requests.", "Use to confirm whether a web issue is real.", "https://portswigger.net/burp/documentation/desktop/tools/repeater")
    ],
    network: [
      tool("Nmap NSE", "Runs scripts for safe service validation and checks.", "Use to confirm service-level findings.", "https://nmap.org/book/nse.html"),
      tool("OpenVAS", "Runs vulnerability scanning across hosts.", "Use for broader vulnerability validation and prioritization.", "https://www.openvas.org/"),
      tool("TestSSL.sh", "Checks TLS/SSL protocols, ciphers, and certificate issues.", "Use for HTTPS and TLS-enabled network services.", "https://github.com/drwetter/testssl.sh")
    ],
    api: [
      tool("JWT.io", "Decodes JWT headers and claims for review.", "Use to inspect token structure, not to trust sensitive tokens in public tools.", "https://jwt.io/"),
      tool("Autorize", "Burp extension for authorization testing.", "Use to compare access between users and roles.", "https://github.com/Quitten/Autorize"),
      tool("Schemathesis", "Tests APIs using OpenAPI or GraphQL schemas.", "Use for schema-based negative and edge-case testing.", "https://github.com/schemathesis/schemathesis")
    ]
  },
  exploitation: {
    web: [
      tool("Burp Intruder", "Automates controlled payload variation and parameter testing.", "Use carefully within rate limits and agreed scope.", "https://portswigger.net/burp/documentation/desktop/tools/intruder"),
      tool("SQLMap", "Automates SQL injection detection and exploitation checks.", "Use only with authorization and validate impact carefully.", "https://github.com/sqlmapproject/sqlmap"),
      tool("Commix", "Tests command injection scenarios.", "Use when command injection indicators are present.", "https://github.com/commixproject/commix")
    ],
    network: [
      tool("Metasploit", "Framework for exploit validation and post-exploitation modules.", "Use when rules allow exploit proof-of-concept testing.", "https://www.metasploit.com/"),
      tool("Impacket", "Python tools for working with network protocols.", "Use in controlled internal testing and protocol validation.", "https://github.com/fortra/impacket"),
      tool("Responder", "Listens for and analyzes network authentication traffic.", "Use in authorized internal network assessments.", "https://github.com/lgandx/Responder")
    ],
    api: [
      tool("Burp Comparer", "Compares responses between users, roles, or payload changes.", "Use to prove broken access control impact.", "https://portswigger.net/burp/documentation/desktop/tools/comparer"),
      tool("ffuf", "Fuzzes paths, parameters, and values.", "Use for controlled endpoint or parameter discovery.", "https://github.com/ffuf/ffuf"),
      tool("InQL", "Burp extension for GraphQL testing.", "Use when assessing GraphQL endpoints.", "https://github.com/doyensec/inql")
    ]
  },
  reporting: {
    web: [
      tool("Dradis", "Organizes evidence, notes, and reporting output.", "Use when consolidating assessment results.", "https://dradis.com/"),
      tool("Serpico", "Helps generate pentest reports from templates.", "Use when you need repeatable report structure.", "https://github.com/SerpicoProject/Serpico"),
      tool("Markdown", "Keeps evidence and remediation notes readable and portable.", "Use for lightweight reporting and knowledge-base drafts.", "https://www.markdownguide.org/")
    ],
    network: [
      tool("Faraday", "Collaborative platform for security assessment data.", "Use when multiple testers need shared tracking.", "https://github.com/infobyte/faraday"),
      tool("Nessus", "Exports vulnerability evidence and remediation details.", "Use for vulnerability reports and retest comparison.", "https://www.tenable.com/products/nessus"),
      tool("Excel", "Tracks owners, SLA, severity, status, and retest outcome.", "Use for simple vulnerability management handover.", "https://www.microsoft.com/microsoft-365/excel")
    ],
    api: [
      tool("Burp Organizer", "Tracks interesting requests and testing notes.", "Use while building evidence for API findings.", "https://portswigger.net/burp/documentation/desktop/tools/organizer"),
      tool("OpenAPI Diff", "Compares API specification changes.", "Use when retesting changed API behavior.", "https://github.com/OpenAPITools/openapi-diff"),
      tool("DefectDojo", "Manages findings, engagement data, and remediation workflow.", "Use when findings need lifecycle tracking.", "https://github.com/DefectDojo/django-DefectDojo")
    ]
  }
};

function tool(name, does, when, link) {
  return { name, does, when, link };
}

let selectedConcept = concepts[0].id;
let selectedMethod = methods[0].id;
let selectedType = pentestTypes[0].id;

const conceptGrid = document.querySelector("#conceptGrid");
const conceptDetail = document.querySelector("#conceptDetail");
const methodList = document.querySelector("#methodList");
const typeTabs = document.querySelector("#typeTabs");
const selectedStepLabel = document.querySelector("#selectedStepLabel");
const toolTitle = document.querySelector("#tool-title");
const selectedTypeDesc = document.querySelector("#selectedTypeDesc");
const toolsGrid = document.querySelector("#toolsGrid");

let conceptTimer;
const conceptCycleMs = 5200;

function moveToNextConcept() {
  const currentIndex = concepts.findIndex((item) => item.id === selectedConcept);
  const nextIndex = (currentIndex + 1) % concepts.length;

  selectedConcept = concepts[nextIndex].id;
  renderConcepts();
}

function restartConceptCycle() {
  window.clearInterval(conceptTimer);
  conceptTimer = window.setInterval(moveToNextConcept, conceptCycleMs);
}

function renderConcepts() {
  conceptGrid.innerHTML = concepts
    .map(
      (concept, index) => `
        <button class="concept-card ${concept.id === selectedConcept ? "active" : ""}" data-concept="${concept.id}">
          <span class="concept-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="concept-card-copy">
            <strong>${concept.title}</strong>
            <span>${concept.short}</span>
          </span>
        </button>
      `
    )
    .join("");

  const concept = concepts.find((item) => item.id === selectedConcept);
  const conceptIndex = concepts.findIndex((item) => item.id === selectedConcept) + 1;

  conceptDetail.innerHTML = `
    <span class="detail-number">${String(conceptIndex).padStart(2, "0")}</span>
    <p class="detail-kicker">Scope</p>
    <h3>${concept.title}</h3>
    <p>${concept.detail}</p>
  `;
}

function renderMethods() {
  methodList.innerHTML = methods
    .map(
      (method, index) => `
        <button class="method-button ${method.id === selectedMethod ? "active" : ""}" data-method="${method.id}">
          <span class="step-number">${String(index + 1).padStart(2, "0")}</span>
          <span>
            <strong>${method.title}</strong>
            <span>${method.goal}</span>
          </span>
        </button>
      `
    )
    .join("");
}

function renderTypes() {
  typeTabs.innerHTML = pentestTypes
    .map(
      (type) => `
        <button class="type-tab ${type.id === selectedType ? "active" : ""}" role="tab" aria-selected="${type.id === selectedType}" data-type="${type.id}">
          ${type.title}
        </button>
      `
    )
    .join("");
}

function renderTools() {
  const method = methods.find((item) => item.id === selectedMethod);
  const type = pentestTypes.find((item) => item.id === selectedType);
  const tools = toolData[selectedMethod][selectedType];

  selectedStepLabel.textContent = method.label;
  toolTitle.textContent = `${method.title} for ${type.title}`;
  selectedTypeDesc.textContent = type.desc;

  toolsGrid.innerHTML = tools
    .map(
      (item) => `
        <article class="tool-card">
          <header>
            <h4>${item.name}</h4>
            <span class="badge">Tool</span>
          </header>
          <p><strong>What it does:</strong> ${item.does}</p>
          <p><strong>When to use:</strong> ${item.when}</p>
          <a href="${item.link}" target="_blank" rel="noreferrer">Open reference</a>
        </article>
      `
    )
    .join("");
}

function renderAll() {
  renderConcepts();
  renderMethods();
  renderTypes();
  renderTools();
}

document.addEventListener("click", (event) => {
  const conceptButton = event.target.closest("[data-concept]");
  const methodButton = event.target.closest("[data-method]");
  const typeButton = event.target.closest("[data-type]");

  if (conceptButton) {
    selectedConcept = conceptButton.dataset.concept;
    renderConcepts();
    restartConceptCycle();
  }

  if (methodButton) {
    selectedMethod = methodButton.dataset.method;
    renderMethods();
    renderTools();
  }

  if (typeButton) {
    selectedType = typeButton.dataset.type;
    renderTypes();
    renderTools();
  }
});

renderAll();
restartConceptCycle();
