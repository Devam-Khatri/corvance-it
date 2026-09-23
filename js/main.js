/* ---------- CONFIG: change contact details here ---------- */
const BRAND = {
  name: 'CORVANCE',
  legal: 'CORVANCE PRIVATE LIMITED',
  web: 'www.corvance.co.in',
  email: 'info@corvance.co.in',
  phone: '9369042097',
  address: 'Capital Tower, Kursi Road, Lucknow 226026'
};
/* --------------------------------------------------------- */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ROUTES = ['home', 'about-us', 'approach', 'ai', 'infrastructure', 'solutions', 'contact'];
const LABEL = { home: 'Home', 'about-us': 'About Us', approach: 'Approach', ai: 'AI & Government', infrastructure: 'Infrastructure', solutions: 'Solutions', contact: 'Contact Us' };
const isPH = v => v.startsWith('[');

/* ---------- brand + contact text ---------- */
$('#yr').textContent = new Date().getFullYear();
$$('[data-legal]').forEach(e => e.textContent = BRAND.legal);
const web = $('[data-web]'); web.textContent = BRAND.web; web.href = 'https://' + BRAND.web;
const mail = $('[data-mail]'); mail.textContent = BRAND.email; if (!isPH(BRAND.email)) mail.href = 'mailto:' + BRAND.email;
const tel = $('[data-tel]'); tel.textContent = BRAND.phone; if (!isPH(BRAND.phone)) tel.href = 'tel:' + BRAND.phone.replace(/\s/g, '');
const wa = $('#whatsapp');
if (wa && !isPH(BRAND.phone)) {
  const digits = BRAND.phone.replace(/\D/g, '');
  const withCountry = digits.length === 10 ? '91' + digits : digits; /* assumes an Indian number when none is given */
  wa.href = `https://wa.me/${withCountry}?text=${encodeURIComponent('Hello CORVANCE, I would like to know more about your services.')}`;
} else if (wa) { wa.remove(); }
$('[data-addr]').textContent = BRAND.address;

/* ---------- nav ---------- */
const linkHTML = ROUTES.map(r => `<a href="#/${r}" data-r="${r}">${LABEL[r]}</a>`).join('');
$('#links').innerHTML = linkHTML; $('#mmenu').innerHTML = linkHTML; $('#flinks').innerHTML = linkHTML;
const burger = $('#burger'), mmenu = $('#mmenu');
function toggleMenu(open) {
  const o = open ?? !mmenu.classList.contains('open');
  mmenu.classList.toggle('open', o); burger.setAttribute('aria-expanded', o);
  document.body.style.overflow = o ? 'hidden' : '';
}
burger.onclick = () => toggleMenu();
mmenu.addEventListener('click', e => { if (e.target.closest('a')) toggleMenu(false); });

/* ---------- icons ---------- */
const ICON = {
  gov: '<path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M2 10l10-6 10 6"/>',
  edu: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/><path d="M22 9v6"/>',
  med: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M12 7.5v9M7.5 12h9"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
  server: '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/>',
  chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="10" y="10" width="4" height="4"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  doc: '<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h7M9 17h7"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M17 14c2.5 0 4.5 2 4.5 4.5"/>',
  network: '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v5M12 12l-6 5M12 12l6 5"/>',
  link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3A4 4 0 0011 18.7l1-1"/>',
  cloud: '<path d="M7 18a4.5 4.5 0 01-.6-8.96A6 6 0 0118 9.5 4 4 0 0117.5 18H7z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
  pin: '<path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>'
};
const ic = n => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICON[n]}</svg>`;
$$('[data-icon]').forEach(e => e.innerHTML = ic(e.dataset.icon));

/* ---------- leadership (About Us) ---------- */
/* Only name + role are shown by default; no biography is invented.
   To add a photo: drop the file in assets/people/ and set img below (e.g. 'assets/people/viplove.jpg').
   Until a photo is set, the initials avatar is shown automatically.
   To add Viplove's bio, fill in the bio field below (leave '' to show nothing). */
const DIRECTOR = [
  {
    name: 'Viplove Chitransh', role: 'Executive Director', img: 'assets/people/viplove.jpg',
    bio: "Viplove Chitransh brings more than 14 years of experience in service assurance, program management and client delivery within the telecom and technology sector. Over the course of his career he has held delivery and operations leadership roles at organisations including Bharti Airtel, HCL Technologies, Reliance Communications, Orange Business Services and Tech Mahindra, working across network operations, SLA management, and large-scale enterprise and government client relationships.\n\nHis experience includes service delivery for major enterprise and government accounts such as Uttar Pradesh Power Corporation Ltd, Sahara India and Jagran Prakashan, with a consistent focus on SLA compliance, risk management, cross-functional coordination and process improvement. As Executive Director of CORVANCE, he draws on this operational background to guide the company's approach to technology delivery for government and enterprise clients."
  }
];
const SHAREHOLDERS = [
  { name: 'Usha Srivastava', role: 'Shareholder & Executive', img: 'assets/people/usha.jpg', bio: '' },
  { name: 'Amita Srivastava', role: 'Shareholder & Executive', img: 'assets/people/amita.jpg', bio: '' }
];
const initials = n => n.split(' ').map(w => w[0]).join('');
const personCard = p => {
  const bioHTML = p.bio ? p.bio.split('\n\n').map(para => `<p class="bio">${para}</p>`).join('') : '';
  return `<div class="person"><div class="avatar"><span class="initials">${initials(p.name)}</span><img src="${p.img}" alt="" onload="this.style.opacity=1" onerror="this.remove()"></div><h3>${p.name}</h3><div class="role">${p.role}</div>${bioHTML}</div>`;
};
$('#director').innerHTML = DIRECTOR.map(personCard).join('');
$('#shareholders').innerHTML = SHAREHOLDERS.map(personCard).join('');

/* ---------- content ---------- */
const FOCUS = [
  { i: 'gov', t: 'AI & Government Innovation', d: 'Practical AI-led solutions for government departments and public institutions.', to: 'ai' },
  { i: 'edu', t: 'Education Technology', d: 'AI, analytics and digital tools to support schools, teachers and education administrators.', to: 'ai', tab: 0 },
  { i: 'med', t: 'Medical & Healthcare Innovation', d: 'Technology for medical education, institutional management, analytics and research.', to: 'ai', tab: 1 },
  { i: 'target', t: 'Skill Development & Employability', d: 'Technology for training, assessment, candidate management and placement.', to: 'ai', tab: 2 },
  { i: 'server', t: 'IT Infrastructure & Deployment', d: 'Networking, hardware and infrastructure projects, delivered with OEM and technology partners.', to: 'infrastructure' }
];
const GOV = [
  { i: 'edu', t: 'Basic Education', d: 'Technology and AI support for schools, teachers, administrators and education authorities.', tab: 0 },
  { i: 'med', t: 'Medical Education & Healthcare', d: 'Digital and AI-enabled support for medical education institutions and their operations.', tab: 1 },
  { i: 'target', t: 'Skill Development', d: 'Technology for training, assessment, candidate management and placement ecosystems.', tab: 2 }
];
const STATS = [
  { n: 5, s: 'core focus areas' },
  { n: 6, s: 'step AI project process' },
  { n: 7, s: 'stage infrastructure process' },
  { n: 2, s: 'main areas of work' }
];
const IDEAS = [
  { t: 'Identify', d: 'Find the real, genuine problem worth solving.' },
  { t: 'Innovate', d: 'Design a practical solution around it.' },
  { t: 'Integrate', d: 'Connect it with existing systems and partners.' },
  { t: 'Implement', d: 'Roll it out, starting with a small, careful trial.' },
  { t: 'Measure', d: 'Track the results against clear indicators.' }
];
const MARQ = [
  ['Artificial Intelligence', 'Data Analytics', 'Dashboards', 'Predictive Analytics', 'Process Automation', 'Digital Monitoring', 'Decision Support', 'Document Intelligence', 'Performance Analytics'],
  ['Network infrastructure', 'Servers & computing', 'Storage', 'Hardware deployment', 'Installation', 'Systems integration', 'Testing & commissioning', 'Project management', 'Technical support']
];
const LADDER = [['One institution', 22], ['A block', 40], ['A district', 58], ['A division', 78], ['A whole state', 100]];

const ABOUT_GOV = ['Basic Education', 'Medical Education & Healthcare', 'Skill Development', 'Government institutions', 'Training ecosystems', 'Public-sector digital infrastructure'];
const PHILOSOPHY = ['What problem are we actually solving?', 'What real, measurable improvement can it create?', 'How can the solution scale, once it works?'];
const CHAIN = ['Government Departments & Institutions', 'AI & Technology Companies', 'OEMs & Technology Partners', 'System Integrators & Implementation Partners', 'End Users'];

const AIFW = [
  ['Discover', 'Understand the problem, the data available, and where things slow down.'],
  ['Analyse', 'Work out where AI or automation can genuinely help.'],
  ['Design', 'Plan the solution, the rollout, and how success will be measured.'],
  ['Pilot', 'Try a small, working version first, and see how it actually performs.'],
  ['Scale', 'If it works well, expand it to more institutions or districts.'],
  ['Measure', 'Track the results with dashboards and clear indicators.']
];
const AIAPPS = [
  { i: 'doc', t: 'Document Processing', d: 'AI-assisted reading, sorting and analysis of documents and records.' },
  { i: 'chart', t: 'Predictive Analytics', d: 'Spotting trends and likely issues early, from approved data.' },
  { i: 'eye', t: 'Monitoring', d: 'Keeping track of programmes and institutions through live dashboards.' },
  { i: 'compass', t: 'Decision Support', d: 'Dashboards and tools that give administrators clear, useful information.' },
  { i: 'gear', t: 'Process Automation', d: 'Automating repetitive administrative and paperwork-heavy tasks.' },
  { i: 'chip', t: 'Knowledge Assistants', d: 'AI assistants that help staff quickly find information in approved documents.' }
];
const RESPONSIBLE = ['Data security', 'Privacy', 'Access control', 'Clear audit trails', 'Human oversight', 'Accuracy', 'Following the rules that apply'];

const SECTORS = [
  {
    name: 'Basic Education', title: 'AI for Basic Education', sub: 'A smarter, more informed education system',
    intro: "Data and AI can help with school administration, monitoring and planning. We're exploring AI-led solutions for the Basic Education system in Uttar Pradesh, in line with departmental requirements and approved frameworks.",
    areas: [
      ['School Monitoring', 'Dashboards that bring together approved data on schools, infrastructure and attendance.'],
      ['Learning Analytics', 'Spotting learning trends and where extra academic support may help.'],
      ['Teacher Support', 'AI tools that help teachers and administrators find the resources they need.'],
      ['Attendance Analytics', 'Understanding attendance patterns to support timely action.'],
      ['Performance Dashboards', 'One clear view of schools, blocks and districts for decision-makers.'],
      ['Resource Planning', 'Better visibility into what resources are needed and where.'],
      ['Query Handling', 'Sorting and routing queries so they reach the right person faster.']
    ],
    flows: [{ t: 'How the pieces connect', items: ['School Data', 'AI & Analytics', 'Dashboards', 'Alerts', 'Decisions'], note: 'The goal is to turn scattered information into something administrators can actually act on.' }],
    blocks: [
      { h: 'Our approach', p: 'AI should support teachers and administrators, not replace them. So every solution is built around:', chips: ['Human oversight', 'Data security', 'Clear explanations', 'Measurable results'] },
      { h: 'What this can lead to', chips: ['Better visibility', 'Faster problem-spotting', 'Data-driven planning', 'Less manual reporting', 'Stronger accountability'] }
    ],
    tag: 'Technology for better education. Clarity for better decisions.'
  },
  {
    name: 'Medical & Healthcare', title: 'AI for Medical Education & Healthcare', sub: 'Better information for medical institutions',
    intro: "We're exploring AI and digital tools that can support medical education institutions, healthcare administration, research and day-to-day operations, with people firmly in charge of the decisions.",
    areas: [
      ['Education Analytics', 'Clear insight into academic performance and institutional activity.'],
      ['Institutional Dashboards', 'One place to monitor approved institutional indicators.'],
      ['Research Intelligence', 'AI tools to help organise and search approved research data.'],
      ['Administrative Automation', 'Automating repetitive paperwork and reporting.'],
      ['Resource Planning', 'Understanding how institutional resources are used.'],
      ['Knowledge Management', 'Secure knowledge tools for authorised staff.'],
      ['Predictive Analytics', 'Spotting operational trends early.']
    ],
    flows: [{ t: 'From data to a decision', items: ['Data', 'AI / Analytics', 'Insights', 'Human review', 'Decision'], note: 'The aim is better information for decision-makers, never to replace their professional judgment.' }],
    blocks: [
      { h: 'AI never replaces professional judgment', p: 'AI in healthcare and medical education has to be handled carefully. Every solution considers:', chips: ['Human oversight', 'Data governance', 'Information security', 'Access control', 'Audit trails', 'Validation', 'Applicable regulations'] },
      { h: 'Our vision', p: 'A future where medical institutions are more data-driven, efficient and responsive, without losing the human judgment at the centre of healthcare.' }
    ],
    tag: 'Better information for institutions. Better decisions for people.'
  },
  {
    name: 'Skill Development', title: 'AI for Skill Development', sub: 'Making training and placement more effective',
    intro: 'Training, assessment, certification and placement all generate a lot of information. We look at how AI and digital tools can turn that into something genuinely useful.',
    areas: [
      ['Centre Monitoring', 'Dashboards tracking how training centres are performing.'],
      ['Candidate Analytics', 'Understanding how candidates are progressing.'],
      ['Assessment Insights', 'Spotting patterns in assessment performance.'],
      ['Employability Matching', 'Connecting skills to relevant job opportunities.'],
      ['Placement Tracking', 'Seeing placement trends by sector, location and role.'],
      ['Quality Monitoring', 'Keeping an eye on training quality over time.'],
      ['AI Learning Assistants', 'Helping candidates and trainers find what they need, faster.']
    ],
    flows: [
      { t: 'How the platform connects', items: ['Candidate Data', 'Training Data', 'Assessment Data', 'Certification', 'Placement Data', 'AI & Analytics', 'Dashboard & Insights'] },
      { t: 'A stronger link between', items: ['Training', 'Assessment', 'Certification', 'Employability', 'Placement'] }
    ],
    blocks: [
      { h: 'Who this helps', rows: [['Administrators', 'Better visibility, faster decisions.'], ['Training providers', 'Clear performance insight.'], ['Candidates', 'Better guidance toward real opportunities.'], ['Industry', 'Clearer view of available skilled talent.']] }
    ],
    tag: 'Turning skill data into real opportunities.'
  }
];

const INFRA = [
  { i: 'network', t: 'Network Infrastructure', l: ['LAN / WAN setup', 'Enterprise networking', 'Switching & routing', 'Wireless networks', 'Structured cabling'] },
  { i: 'server', t: 'Computing Infrastructure', l: ['Servers & workstations', 'Enterprise hardware', 'Storage', 'Data-centre setup', 'Endpoint deployment'] },
  { i: 'gear', t: 'Installation & Deployment', l: ['Site surveys', 'Installation & configuration', 'Commissioning & testing', 'Documentation & handover'] },
  { i: 'users', t: 'Ongoing Support', l: ['Preventive maintenance', 'Technical support', 'Troubleshooting', 'AMC coordination', 'Infrastructure monitoring'] }
];
const OEM_AREAS = ['Networking', 'Computing', 'Storage', 'Cybersecurity', 'Cloud', 'Data Centre', 'Digital Infrastructure'];
const OEM_NAMES = ['Cisco', 'HP', 'Lenovo', 'Dell Technologies', 'HPE', 'and other leading technology manufacturers'];
const LIFE = [
  ['Understand the requirement', "Get clear on what's actually needed, technically and operationally."],
  ['Design the solution', 'Plan the right technical setup for it.'],
  ['Coordinate with partners', 'Bring in the right OEMs, distributors and implementation partners.'],
  ['Handle the commercial side', 'Procurement, quotations and billing, sorted out clearly upfront.'],
  ['Install & deploy', 'Carry out the physical installation, configuration and commissioning.'],
  ['Test & hand over', 'Test everything properly, document it, and hand it over.'],
  ['Support', "Stay on for maintenance and support after it's live."]
];

const CAPS = [
  { i: 'chip', t: 'Artificial Intelligence', l: ['AI strategy & consulting', 'Use-case identification', 'Intelligent automation', 'AI assistants', 'Document intelligence', 'Predictive analytics'] },
  { i: 'chart', t: 'Data & Analytics', l: ['Management dashboards', 'Performance analytics', 'Predictive models', 'Decision-support tools'] },
  { i: 'cloud', t: 'Digital Transformation', l: ['Process digitisation', 'Workflow automation', 'System integration', 'Enterprise applications'] },
  { i: 'edu', t: 'Education Technology', l: ['School & learning analytics', 'Institutional dashboards', 'Teacher-support tools'] },
  { i: 'med', t: 'Medical Technology', l: ['Institutional analytics', 'Medical education technology', 'Research intelligence'] },
  { i: 'target', t: 'Skill Development', l: ['Candidate & training analytics', 'Assessment intelligence', 'Placement intelligence'] },
  { i: 'server', t: 'IT Infrastructure', l: ['Networking & servers', 'Storage & endpoints', 'Installation & testing', 'Ongoing maintenance'] }
];
const DELIVER = [
  ['Consult', 'Understand the challenge.'], ['Design', 'Plan the technology.'], ['Pilot', 'Try a small version first.'],
  ['Deploy', 'Roll it out properly.'], ['Manage', 'Monitor and support it.'], ['Improve', 'Keep making it better.']
];
const OUTCOMES = ['Efficiency', 'Clarity', 'Visibility', 'Room to grow', 'Real, measurable impact'];

const PARTNERS = [
  { i: 'gov', t: 'Government Departments & Institutions', d: 'AI, digital transformation and technology implementation.' },
  { i: 'server', t: 'Technology OEMs', d: 'Infrastructure deployment and project opportunities.' },
  { i: 'link', t: 'System Integrators', d: 'Working together on technology and infrastructure projects.' },
  { i: 'chip', t: 'AI & Technology Companies', d: 'Solution development and technology partnerships.' },
  { i: 'edu', t: 'Educational & Training Institutions', d: 'Education technology, AI and skill-development solutions.' },
  { i: 'users', t: 'Other', d: 'Any other enquiry not listed above.' }
];
const COLLAB = ['AI Innovation', 'Government Technology', 'Digital Transformation', 'Education Technology', 'Medical Technology', 'Skill Development', 'Networking & Infrastructure', 'OEM Deployment', 'System Integration', 'Technology Partnerships'];
const INFO = [
  { i: 'globe', t: 'Website', p: BRAND.web },
  { i: 'mail', t: 'Email', p: BRAND.email },
  { i: 'phone', t: 'Phone', p: BRAND.phone, copy: true },
  { i: 'pin', t: 'Office', p: BRAND.address }
];

/* ---------- render helpers ---------- */
const chk = a => `<ul class="chk">${a.map(x => `<li>${x}</li>`).join('')}</ul>`;
const tagc = a => a.map(x => `<li>${x}</li>`).join('');
const capCard = (s, i) => `<div data-anim="rise" style="--i:${i % 3}"><article class="card"><div class="icon">${ic(s.i)}</div><h3>${s.t}</h3>${chk(s.l)}</article></div>`;
const flow = (items, vertical) => `<div class="flow${vertical ? ' v' : ''}">${items.map((x, k) => `<span class="node">${x}</span>${k < items.length - 1 ? `<i class="arr"></i>` : ''}`).join('')}</div>`;
const steps = a => a.map((s, i) => `<div class="step" data-anim="rise" style="--i:${i}"><div class="dot">${i + 1}</div><h3>${s[0] || s.t}</h3><p>${s[1] || s.d}</p></div>`).join('');

/* ---------- render ---------- */
$$('[data-ladder]').forEach(el => el.innerHTML = LADDER.map(([t, w], k) => `<div class="rung"><b style="--w:${w}%;--k:${k}"></b><span>${t}</span></div>`).join(''));
$('#focus').innerHTML = FOCUS.map((f, i) => `<div data-anim="rise" style="--i:${i % 3}"><a class="card" href="#/${f.to}"${f.tab !== undefined ? ` data-tab="${f.tab}"` : ''}><div class="icon">${ic(f.i)}</div><h3>${f.t}</h3><p>${f.d}</p></a></div>`).join('');
$('#stats').innerHTML = STATS.map((s, i) => `<div class="stat" data-anim="rise" style="--i:${i}"><b data-count="${s.n}">0</b><span>${s.s}</span></div>`).join('');
$('#proc-home').insertAdjacentHTML('beforeend', steps(IDEAS));
$('#about-gov').innerHTML = tagc(ABOUT_GOV);
$('#philosophy').innerHTML = PHILOSOPHY.map((q, i) => `<div data-anim="rise" style="--i:${i}"><article class="card"><div class="icon">0${i + 1}</div><h3>${q}</h3></article></div>`).join('');
$('#chain').innerHTML = flow(CHAIN, true);
$('#aifw').innerHTML = AIFW.map((s, i) => `<div data-anim="rise" style="--i:${i % 3}"><article class="card"><div class="icon">0${i + 1}</div><h3>${s[0]}</h3><p>${s[1]}</p></article></div>`).join('');
$('#aiapps').innerHTML = AIAPPS.map((s, i) => `<div data-anim="pop" style="--i:${i % 3}"><article class="card"><div class="icon">${ic(s.i)}</div><h3>${s.t}</h3><p>${s.d}</p></article></div>`).join('');
$('#responsible').innerHTML = tagc(RESPONSIBLE);
$('#infra').innerHTML = INFRA.map(capCard).join('');
$('#oem-areas').innerHTML = tagc(OEM_AREAS);
$('#oem-names').innerHTML = tagc(OEM_NAMES);
$('#proc-life').insertAdjacentHTML('beforeend', steps(LIFE));
$('#caps').innerHTML = CAPS.map(capCard).join('');
$('#proc-deliver').insertAdjacentHTML('beforeend', steps(DELIVER));
$('#eq').innerHTML = OUTCOMES.map(o => `<span>${o}</span>`).join('<i>+</i>');
$('#collab').innerHTML = tagc(COLLAB);
$('#partners').innerHTML = PARTNERS.map((p, i) => `<div data-anim="rise" style="--i:${i % 3}"><button type="button" class="card pcard" data-p="${i}"><div class="icon">${ic(p.i)}</div><h3>${p.t}</h3><p>${p.d}</p><span class="pick">Select this option</span></button></div>`).join('');
$('#info').innerHTML = INFO.map((x, i) => {
  const inner = `<div class="icon">${ic(x.i)}</div><div><h3>${x.t}</h3><p data-copy-text>${x.p}</p></div>`;
  const body = x.copy && !isPH(x.p)
    ? `<button type="button" class="copy-btn" data-copy="${x.p}">${inner}<span class="copy-hint">Tap to copy</span></button>`
    : inner;
  return `<div data-anim="right" style="--i:${i}"><div class="card">${body}</div></div>`;
}).join('');
document.addEventListener('click', e => {
  const b = e.target.closest('[data-copy]'); if (!b) return;
  const text = b.dataset.copy;
  navigator.clipboard?.writeText(text).then(() => {
    const hint = $('.copy-hint', b); if (!hint) return;
    const prev = hint.textContent;
    hint.textContent = 'Copied!';
    setTimeout(() => { hint.textContent = prev; }, 1600);
  }).catch(() => {});
});
$('#fs').innerHTML = PARTNERS.map(p => `<option>${p.t}</option>`).join('');
$('#fa').innerHTML = COLLAB.map(c => `<option>${c}</option>`).join('');
$$('[data-cta]').forEach(el => el.innerHTML = `<div class="cta" data-anim="pop"><h2>Interested in working with CORVANCE?</h2><p>We welcome the opportunity to discuss your requirements and explore how CORVANCE can assist.</p><a class="btn btn-gold mag" href="#/contact">Contact us</a></div>`);
$$('[data-marq]').forEach(el => {
  const html = MARQ[+el.dataset.marq].map(t => `<span class="pill"><i></i>${t}</span>`).join('');
  el.innerHTML = html + html;
});

/* ---------- sector tabs ---------- */
$('#tabs').innerHTML = SECTORS.map((s, i) => `<button class="tab" role="tab" data-t="${i}">${s.name}</button>`).join('');
function selectTab(n) {
  const s = SECTORS[n]; if (!s) return;
  $$('.tab').forEach((t, i) => { t.classList.toggle('on', i === n); t.setAttribute('aria-selected', i === n); });
  const blocks = s.blocks.map(b => `<div class="blk"><h4>${b.h}</h4>${b.p ? `<p>${b.p}</p>` : ''}${b.chips ? `<ul class="tagc">${tagc(b.chips)}</ul>` : ''}${b.rows ? `<div class="rows">${b.rows.map(r => `<div><b>${r[0]}</b><span>${r[1]}</span></div>`).join('')}</div>` : ''}</div>`).join('');
  const flows = s.flows.map(f => `<div class="blk"><div class="flow-t">${f.t}</div>${flow(f.items)}${f.note ? `<p style="color:var(--muted);margin-top:14px;max-width:64ch">${f.note}</p>` : ''}</div>`).join('');
  $('#sector').innerHTML = `<div class="tabp"><h3>${s.title}</h3><p class="sub2">${s.sub}</p><p class="intro">${s.intro}</p>
    <div class="grid3">${s.areas.map(a => `<article class="card"><h3 style="margin-top:0">${a[0]}</h3><p>${a[1]}</p></article>`).join('')}</div>
    ${flows}${blocks}<p class="tagline">${s.tag}</p></div>`;
}
$('#tabs').addEventListener('click', e => { const b = e.target.closest('.tab'); if (b) selectTab(+b.dataset.t); });
selectTab(0);
document.addEventListener('click', e => { const t = e.target.closest('[data-tab]'); if (t) selectTab(+t.dataset.tab); });

/* ---------- partner cards preselect the form ---------- */
$('#partners').addEventListener('click', e => {
  const c = e.target.closest('.pcard'); if (!c) return;
  $$('.pcard').forEach(x => x.classList.toggle('sel', x === c));
  $('#fs').selectedIndex = +c.dataset.p;
  $('#form').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  setTimeout(() => $('#fn').focus({ preventScroll: true }), 450);
});

/* ---------- typed line ---------- */
(() => {
  const el = $('#typed'), words = ['AI for government.', 'education technology.', 'medical & healthcare innovation.', 'skill development platforms.', 'IT infrastructure & deployment.'];
  if (reduce) { el.textContent = words[0]; return; }
  let w = 0, c = 0, del = false;
  (function tick() {
    const p = words[w]; c += del ? -1 : 1; el.textContent = p.slice(0, c);
    let d = del ? 30 : 62;
    if (!del && c === p.length) { del = true; d = 1600; }
    else if (del && c === 0) { del = false; w = (w + 1) % words.length; d = 350; }
    setTimeout(tick, d);
  })();
})();

/* ---------- network canvas (subtle, light) ---------- */
(() => {
  const cv = $('#net'); if (!cv) return;
  const ctx = cv.getContext('2d');
  let w, h, dpr, nodes = [], run = false, raf;
  function size() {
    const r = cv.getBoundingClientRect(); if (!r.width) return;
    dpr = Math.min(devicePixelRatio || 1, 2); w = r.width; h = r.height;
    cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(46, w * h / 32000));
    nodes = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22, r: 1.2 + Math.random() * 1.3 }));
    if (!run) frame(true);
  }
  function frame(once) {
    ctx.clearRect(0, 0, w, h);
    const maxD = w < 600 ? 95 : 130;
    if (!once) for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }
    for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < maxD) { ctx.strokeStyle = `rgba(169,121,31,${(1 - d / maxD) * .22})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
    }
    for (const n of nodes) { ctx.fillStyle = 'rgba(169,121,31,.4)'; ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 6.283); ctx.fill(); }
    if (!once && run) raf = requestAnimationFrame(() => frame());
  }
  function start() { if (reduce || run) return; run = true; raf = requestAnimationFrame(() => frame()); }
  function stop() { run = false; cancelAnimationFrame(raf); }
  new IntersectionObserver(([e]) => e.isIntersecting && !document.hidden ? start() : stop()).observe(cv);
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : (cv.offsetParent !== null && start()));
  new ResizeObserver(size).observe(cv);
})();

/* ---------- counters + reveal ---------- */
function count(el) {
  const to = +el.dataset.count;
  if (reduce) { el.textContent = to; return; }
  const t0 = performance.now(), dur = 1200;
  (function step(t) {
    const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(to * e);
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in'); io.unobserve(e.target);
  $$('[data-count]', e.target).forEach(count);
}), { threshold: .15, rootMargin: '0px 0px -6% 0px' });
$$('[data-anim]').forEach(el => io.observe(el));

/* ---------- pointer effects: cursor glow + magnetic buttons ---------- */
const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
document.addEventListener('pointermove', e => {
  if (!fine || reduce) return;
  const cur = $('#cursor'); cur.style.opacity = 1; cur.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
  const m = e.target.closest?.('.mag');
  if (m) { const r = m.getBoundingClientRect(); m.style.transform = `translate(${((e.clientX - r.left - r.width / 2) * .22).toFixed(1)}px,${((e.clientY - r.top - r.height / 2) * .32).toFixed(1)}px)`; }
});
document.addEventListener('pointerout', e => {
  const m = e.target.closest?.('.mag'); if (m && !m.contains(e.relatedTarget)) m.style.transform = '';
});
document.documentElement.addEventListener('mouseleave', () => { $('#cursor').style.opacity = 0; });

/* ---------- scroll effects ---------- */
let tick = false;
function onScroll() {
  tick = false;
  const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
  $('#progress').style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  $('#nav').classList.toggle('solid', y > 30);
  $('#top').classList.toggle('show', y > 600);
  if (!reduce) $$('.orb').forEach(o => { if (o.offsetParent) o.style.setProperty('--py', (y * (+o.dataset.speed || .1)).toFixed(1) + 'px'); });
  $$('.proc').forEach(proc => {
    if (proc.offsetParent === null) return;
    const r = proc.getBoundingClientRect(), p = Math.max(0, Math.min(1, (innerHeight * .78 - r.top) / r.height)), st = $$('.step', proc);
    proc.style.setProperty('--p', p.toFixed(3));
    st.forEach((s, i) => s.classList.toggle('on', p * st.length > i + .15));
  });
}
addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, { passive: true });
addEventListener('resize', onScroll);
$('#top').onclick = () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });

/* ---------- contact form ---------- */
(() => {
  const form = $('#form');
  const bad = (id, msg) => { const f = $('#' + id).closest('.f'); f.classList.remove('bad'); void f.offsetWidth; f.classList.add('bad'); $('.err', f).textContent = msg; };
  const ok = id => { const f = $('#' + id).closest('.f'); f.classList.remove('bad'); const e = $('.err', f); if (e) e.textContent = ''; };
  form.addEventListener('submit', e => {
    e.preventDefault(); let good = true;
    if (!$('#fn').value.trim()) { bad('fn', 'Please enter your full name.'); good = false; } else ok('fn');
    if (!/^\S+@\S+\.\S+$/.test($('#fe').value.trim())) { bad('fe', 'Please enter a valid email address.'); good = false; } else ok('fe');
    if ($('#fm').value.trim().length < 10) { bad('fm', 'Please provide further detail regarding your requirement.'); good = false; } else ok('fm');
    if (!good) return;
    const btn = $('#send'); btn.disabled = true; btn.textContent = 'Submitting...';

    const name = $('#fn').value.trim(), from = $('#fe').value.trim(), org = $('#fc').value.trim();
    const type = $('#fs').value, area = $('#fa').value, msg = $('#fm').value.trim(), first = name.split(' ')[0];

    setTimeout(() => {
      /* No backend is connected yet. Until one is, submitting opens the visitor's email
         app with the message pre-filled, addressed to BRAND.email above.
         Once a form service or server endpoint is available, replace this block with
         the relevant fetch()/API call. */
      if (isPH(BRAND.email)) {
        $('#formcard').innerHTML = `<div class="done"><h3>Enquiry form not yet connected</h3><p>An official email address has not been configured for this form yet. In the meantime, please contact CORVANCE directly using the details opposite.</p></div>`;
        return;
      }
      const subject = encodeURIComponent(`Website enquiry from ${name}${org ? ' (' + org + ')' : ''}`);
      const bodyLines = [`Name: ${name}`, `Email: ${from}`, org && `Organisation: ${org}`, `Contacting as: ${type}`, `Area of interest: ${area}`, '', msg].filter(Boolean);
      const body = encodeURIComponent(bodyLines.join('\n'));
      window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
      $('#formcard').innerHTML = `<div class="done"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="30"/><path d="M38 51l9 9 17-19"/></svg><h3>Thank you, ${first}.</h3><p>Your email application should now open with your enquiry pre-filled. If it does not open automatically, please email us directly at ${BRAND.email}.</p></div>`;
    }, 500);
  });
})();

/* ---------- router with page fade ---------- */
let current = null;
function routeFromHash() { const r = (location.hash.replace(/^#\/?/, '') || 'home'); return ROUTES.includes(r) ? r : 'home'; }
function setPage(r) {
  $$('.page').forEach(p => p.hidden = p.id !== 'page-' + r);
  $$('[data-r]').forEach(a => a.classList.toggle('act', a.dataset.r === r));
  scrollTo({ top: 0, behavior: 'instant' });
  const pl = $('#page-' + r + ' [data-play]');
  if (pl) { pl.classList.remove('play'); void pl.offsetWidth; pl.classList.add('play'); }
  current = r; document.title = (r === 'home' ? '' : LABEL[r] + ' | ') + BRAND.legal;
  requestAnimationFrame(onScroll);
}
function go() {
  const r = routeFromHash();
  if (r === current) return;
  const page = $('#page-' + r);
  if (current === null || reduce || !page) { setPage(r); return; }
  page.style.opacity = 0;
  setPage(r);
  requestAnimationFrame(() => { page.style.transition = 'opacity .35s ease'; page.style.opacity = 1; });
}
addEventListener('hashchange', go);
go();
