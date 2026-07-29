document.getElementById('year').textContent = new Date().getFullYear();

/* ===== Navbar scroll + progress bar ===== */
const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
});

/* ===== Hamburger ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
}));

/* ===== Icon set (inline SVG strings) ===== */
const icons = {
  home: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>',
  user: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>',
  gold: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M9 12h6M12 9v6"/></svg>',
  business: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M6 21V8l6-4 6 4v13M10 21v-6h4v6"/></svg>',
  property: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10l9-7 9 7"/><path d="M5 9v11h14V9"/><path d="M9 20v-6h6v6"/></svg>',
  construction: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V11l7-6 7 6v10"/><path d="M9 21v-5h6v5"/></svg>',
  govt: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 10l8-6 8 6M5 10v9h14v-9"/><path d="M9 19v-6M15 19v-6"/></svg>',
  mudra: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
  msme: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>',
  car: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 13l2-6h14l2 6M3 13v5h2m14-5v5h2M5 18h2m10 0h2M5 18a2 2 0 104 0M15 18a2 2 0 104 0"/></svg>',
  bike: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M5.5 17.5L9 8h4l3 4.5h3M9 8L7 5H5"/></svg>',
  education: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 9l10-5 10 5-10 5-10-5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>',
  agri: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2c3 3 3 7 0 10-3-3-3-7 0-10z"/><path d="M12 12v10M6 22h12"/></svg>',
  truck: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="7" width="13" height="10"/><path d="M14 10h4l3 3v4h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></svg>',
  transfer: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 3l4 4-4 4M21 7H9M7 13l-4 4 4 4M3 17h12"/></svg>',
  topup: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 5v14M5 12h14"/></svg>'
};

/* ===== Loan data ===== */
const loans = [
  { icon:'home', name:'Home Loan', desc:'Apne sapno ka ghar khareedne ya banane ke liye best interest rate par loan.' },
  { icon:'user', name:'Personal Loan', desc:'Bina kisi security ke, kisi bhi zaroorat ke liye instant personal loan.' },
  { icon:'gold', name:'Gold Loan', desc:'Apne gold jewellery par turant loan, low interest aur fast disbursal.' },
  { icon:'business', name:'Business Loan', desc:'Apne business ko grow karne ke liye working capital aur expansion loan.' },
  { icon:'property', name:'Loan Against Property (LAP)', desc:'Apni residential ya commercial property par high-value loan.' },
  { icon:'construction', name:'LAP Construction Loan', desc:'Property construction ya renovation ke liye special LAP loan.' },
  { icon:'govt', name:'PMEGP Loan', desc:'Government subsidy scheme ke through naye business ke liye loan.' },
  { icon:'mudra', name:'Mudra Loan', desc:'Chhote business aur startups ke liye collateral-free Mudra loan.' },
  { icon:'msme', name:'MSME Loan', desc:'Micro, Small aur Medium Enterprises ke liye customized business loan.' },
  { icon:'car', name:'Car Loan', desc:'Nayi ya used car khareedne ke liye flexible EMI options ke saath.' },
  { icon:'bike', name:'Bike Loan', desc:'Apni pasandeeda two-wheeler ke liye quick approval loan.' },
  { icon:'education', name:'Education Loan', desc:'India ya videsh me padhai ke liye tension-free education financing.' },
  { icon:'agri', name:'Agriculture Loan', desc:'Kisano ke liye khaad, beej, equipment aur farming zaroorat ke loan.' },
  { icon:'truck', name:'Commercial Vehicle Loan', desc:'Truck, bus ya commercial vehicle purchase ke liye financing.' },
  { icon:'transfer', name:'Balance Transfer Loan', desc:'Apna existing loan lower interest rate par transfer karein.' },
  { icon:'topup', name:'Top-up Loan', desc:'Apne existing loan ke saath extra funds ke liye top-up facility.' }
];
const loanGrid = document.getElementById('loanGrid');
loans.forEach(l => {
  const card = document.createElement('div');
  card.className = 'loan-card';
  card.innerHTML = `<div class="loan-icon">${icons[l.icon]}</div><h3>${l.name}</h3><p>${l.desc}</p><span class="apply-hint">Apply Now <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>`;
  card.addEventListener('click', () => openLoanModal(l.name));
  loanGrid.appendChild(card);
});

/* ===== Why Us data ===== */
const whyPoints = [
  { icon:'⚡', title:'Fast Approval', desc:'Kam se kam time me loan approval, bina lambi wait ke.' },
  { icon:'🤝', title:'Trusted Service', desc:'Hazaaron customers ka bharosa, transparent process.' },
  { icon:'🏦', title:'Multiple Banks & NBFCs', desc:'Kai partners se best rate compare karke best deal.' },
  { icon:'⏱️', title:'Low Processing Time', desc:'Kam paperwork, jaldi documentation aur disbursal.' },
  { icon:'🎯', title:'Expert Loan Guidance', desc:'Experienced advisors se sahi loan chunne ki guidance.' }
];
const whyGrid = document.getElementById('whyGrid');
whyPoints.forEach(w => {
  const el = document.createElement('div');
  el.className = 'why-card';
  el.innerHTML = `<div class="why-icon" style="font-size:26px">${w.icon}</div><h3>${w.title}</h3><p>${w.desc}</p>`;
  whyGrid.appendChild(el);
});

/* ===== Reviews data ===== */
const reviews = [
  { name:'Rohit Sharma', loc:'Sector 14, Gurgaon', text:'Home loan ke liye Narwal Finance ne bahut madad ki. Process bilkul smooth tha aur rate bhi best mila.', stars:5 },
  { name:'Priya Verma', loc:'DLF Phase 2, Gurgaon', text:'Business loan ke liye best guidance mili. Team ne har step par support kiya, highly recommended.', stars:5 },
  { name:'Amit Yadav', loc:'Sohna Road, Gurgaon', text:'Gold loan turant mil gaya, bahut kam time me approval ho gaya. Bahut achi service.', stars:4 },
  { name:'Neha Kapoor', loc:'Sector 23, Gurgaon', text:'Personal loan ke liye documentation bhi asaan tha aur team bahut cooperative thi.', stars:5 },
  { name:'Vikas Malik', loc:'Manesar, Gurgaon', text:'Car loan ke liye rates compare karke best option diya. Paisa aur time dono bacha.', stars:4 },
  { name:'Sunita Rani', loc:'Carterpuri, Gurgaon', text:'LAP loan ke liye process transparent tha, koi hidden charges nahi. Bahut satisfied hoon.', stars:5 }
];
const reviewsGrid = document.getElementById('reviewsGrid');
reviews.forEach(r => {
  const el = document.createElement('div');
  el.className = 'review-card';
  const initials = r.name.split(' ').map(n=>n[0]).join('');
  el.innerHTML = `<div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div><p>"${r.text}"</p><div class="review-person"><div class="review-avatar">${initials}</div><div><strong>${r.name}</strong><span>${r.loc}</span></div></div>`;
  reviewsGrid.appendChild(el);
});

/* ===== Documents data ===== */
const docCategories = {
  'Salaried Employee': ['PAN Card', 'Aadhaar Card', 'Last 3 Months Salary Slip', 'Last 6 Months Bank Statement', 'Form 16 / ITR', 'Passport Size Photographs', 'Address Proof', 'Employment Certificate'],
  'Self-Employed / Business': ['PAN Card', 'Aadhaar Card', 'Business Registration Proof', 'Last 2-3 Years ITR', 'Last 1 Year Bank Statement (Business)', 'GST Registration (if applicable)', 'Office/Shop Address Proof', 'Passport Size Photographs'],
  'Home Loan / LAP / Property': ['Property Documents (Sale Deed/Title)', 'Approved Building Plan', 'PAN & Aadhaar Card', 'Income Proof (Salary/ITR)', 'Bank Statement (6 Months)', 'Property Tax Receipt', 'NOC from Builder/Society', 'Passport Size Photographs'],
  'Vehicle Loan (Car/Bike/Commercial)': ['PAN Card', 'Aadhaar Card', 'Income Proof', 'Bank Statement (3-6 Months)', 'Vehicle Quotation/Invoice', 'Address Proof', 'Passport Size Photographs']
};
const docTabsEl = document.getElementById('docTabs');
const docPanelEl = document.getElementById('docPanel');
const checkIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>';
function renderDocPanel(cat){
  const items = docCategories[cat].map(d => `<li>${checkIcon}<span>${d}</span></li>`).join('');
  docPanelEl.innerHTML = `<ul>${items}</ul>`;
}
Object.keys(docCategories).forEach((cat, i) => {
  const tab = document.createElement('button');
  tab.className = 'doc-tab' + (i===0 ? ' active' : '');
  tab.textContent = cat;
  tab.addEventListener('click', () => {
    docTabsEl.querySelectorAll('.doc-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderDocPanel(cat);
  });
  docTabsEl.appendChild(tab);
});
renderDocPanel(Object.keys(docCategories)[0]);

/* ===== FAQ data ===== */
const faqs = [
  { q:'Loan approve hone me kitna time lagta hai?', a:'Loan type aur documents ke hisaab se, generally 2 se 7 working days me approval ho jata hai. Gold Loan jaise secured loans same day bhi ho sakte hain.' },
  { q:'Kya mujhe multiple banks me apply karna padega?', a:'Nahi, hum aapke liye multiple banks aur NBFCs se best rate compare karke ek hi jagah best option dete hain.' },
  { q:'Kya CIBIL score kam hone par bhi loan milega?', a:'Kam CIBIL score par bhi kuch secured loans (jaise Gold Loan) available hain. Hum aapko sahi option suggest karenge.' },
  { q:'Processing fee kitni lagti hai?', a:'Processing fee loan type aur bank ke hisaab se alag hoti hai. Hum aapko poori transparency ke saath sabhi charges bata denge.' },
  { q:'Kya main apna existing loan transfer kar sakta hoon?', a:'Haan, Balance Transfer facility ke through aap apna existing loan lower interest rate par transfer kar sakte hain.' },
  { q:'Loan ke liye consultation free hai?', a:'Haan, Narwal Finance se initial consultation aur loan guidance bilkul free hai.' }
];
const faqList = document.getElementById('faqList');
faqs.forEach(f => {
  const item = document.createElement('div');
  item.className = 'faq-item';
  item.innerHTML = `<div class="faq-q"><span>${f.q}</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></div><div class="faq-a"><p>${f.a}</p></div>`;
  const qEl = item.querySelector('.faq-q');
  const aEl = item.querySelector('.faq-a');
  qEl.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    faqList.querySelectorAll('.faq-item').forEach(i => { i.classList.remove('open'); i.querySelector('.faq-a').style.maxHeight = null; });
    if(!wasOpen){ item.classList.add('open'); aEl.style.maxHeight = aEl.scrollHeight + 'px'; }
  });
  faqList.appendChild(item);
});

/* ===== EMI Calculator ===== */
const loanAmountEl = document.getElementById('loanAmount');
const interestRateEl = document.getElementById('interestRate');
const loanTenureEl = document.getElementById('loanTenure');
const loanAmountVal = document.getElementById('loanAmountVal');
const interestRateVal = document.getElementById('interestRateVal');
const loanTenureVal = document.getElementById('loanTenureVal');
const emiValueEl = document.getElementById('emiValue');
const principalValueEl = document.getElementById('principalValue');
const interestValueEl = document.getElementById('interestValue');
const totalValueEl = document.getElementById('totalValue');
const donutFill = document.getElementById('donutFill');

function formatINR(num){
  return '₹ ' + Math.round(num).toLocaleString('en-IN');
}
function calculateEMI(){
  const P = parseFloat(loanAmountEl.value);
  const annualRate = parseFloat(interestRateEl.value);
  const years = parseFloat(loanTenureEl.value);
  const r = annualRate / 12 / 100;
  const n = years * 12;
  const emi = (P * r * Math.pow(1+r, n)) / (Math.pow(1+r, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - P;

  loanAmountVal.textContent = formatINR(P);
  interestRateVal.textContent = annualRate.toFixed(1) + '%';
  loanTenureVal.textContent = years + ' Years';
  emiValueEl.textContent = formatINR(emi);
  principalValueEl.textContent = formatINR(P);
  interestValueEl.textContent = formatINR(totalInterest);
  totalValueEl.textContent = formatINR(totalPayment);

  const principalPct = P / totalPayment;
  const circumference = 2 * Math.PI * 58;
  const offset = circumference * (1 - principalPct);
  donutFill.style.strokeDasharray = circumference;
  donutFill.style.strokeDashoffset = offset;
}
[loanAmountEl, interestRateEl, loanTenureEl].forEach(el => el.addEventListener('input', calculateEMI));
calculateEMI();

/* ===== Eligibility Checker ===== */
const checkBtn = document.getElementById('checkEligibilityBtn');
const eligResult = document.getElementById('eligResult');
checkBtn.addEventListener('click', () => {
  const income = parseFloat(document.getElementById('income').value);
  const cibil = parseFloat(document.getElementById('cibil').value);
  const desired = parseFloat(document.getElementById('desiredAmount').value);

  if(!income || !cibil || !desired){
    eligResult.innerHTML = `<div class="elig-placeholder"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg><p>Kripya sabhi fields sahi se bharein - Income, CIBIL Score aur Loan Amount.</p></div>`;
    return;
  }

  let multiplier;
  let tier;
  if(cibil >= 750){ multiplier = 60; tier = 'good'; }
  else if(cibil >= 650){ multiplier = 40; tier = 'partial'; }
  else { multiplier = 15; tier = 'low'; }

  const eligibleAmount = income * multiplier;
  let badge, heading, message;

  if(eligibleAmount >= desired && tier === 'good'){
    badge = '<span class="elig-badge good">✓ Strongly Eligible</span>';
    heading = 'Aap Achi Tarah Eligible Hain!';
    message = 'Aapki profile ke hisaab se aap kai loan options ke liye eligible hain. Best rate ke liye humse abhi contact karein.';
  } else if(eligibleAmount >= desired){
    badge = '<span class="elig-badge partial">~ Eligible</span>';
    heading = 'Aap Eligible Ho Sakte Hain';
    message = 'Aap eligible hain, lekin final approval CIBIL score aur documents verification par nirbhar karega. Humse baat karein.';
  } else {
    badge = '<span class="elig-badge partial">~ Partial Eligibility</span>';
    heading = 'Kam Amount Ke Liye Eligible';
    message = 'Aapki desired amount thodi zyada lag rahi hai. Hum aapko sahi loan amount ya category suggest kar sakte hain.';
  }
  if(tier === 'low'){
    badge = '<span class="elig-badge low">! Limited Options</span>';
    heading = 'Secured Loan Options Try Karein';
    message = 'Aapke CIBIL score ke hisaab se, Gold Loan jaisa secured loan behtar option ho sakta hai. Humse guidance lein.';
  }

  eligResult.innerHTML = `<div class="elig-outcome">${badge}<h4>${heading}</h4><div class="elig-amount">${formatINR(eligibleAmount)}</div><p>${message}</p></div>`;
});

/* ===== Contact form -> WhatsApp ===== */
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = contactForm.querySelectorAll('input, textarea');
  const name = inputs[0].value, phone = inputs[1].value, interest = inputs[2].value, msg = inputs[3].value;
  const text = `Namaste, mera naam ${name} hai. Mobile: ${phone}. Interested in: ${interest}. Message: ${msg}`;
  window.open('https://wa.me/919891070468?text=' + encodeURIComponent(text), '_blank');
});

/* ===== Reveal on scroll + counters ===== */
const revealEls = document.querySelectorAll('.reveal, .loan-card, .why-card');
const counterEls = document.querySelectorAll('.stat-num');
let countersStarted = false;

function animateCounters(){
  if(countersStarted) return;
  countersStarted = true;
  counterEls.forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const timer = setInterval(() => {
      current += step;
      if(current >= target){ current = target; clearInterval(timer); }
      el.textContent = current;
    }, 25);
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      if(entry.target.classList.contains('hero-stats')) animateCounters();
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));
const heroStats = document.querySelector('.hero-stats');
if(heroStats) observer.observe(heroStats);

/* =========================================================
   LOAN APPLICATION MODAL
   ========================================================= */

/* IMPORTANT: Replace const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvgzkae'; below with your own
   Formspree endpoint ID after signing up (free) at
   https://formspree.io using narwalfinanceofficial@gmail.com
   Steps are in the README.md file. */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvgzkae';';

/* Common fields on every loan application */
const commonFields = [
  { label:'Full Name', name:'Full Name', type:'text', placeholder:'Aapka poora naam', required:true },
  { label:'Mobile Number', name:'Mobile Number', type:'tel', placeholder:'10-digit mobile number', required:true },
  { label:'Email (optional)', name:'Email', type:'email', placeholder:'Aapki email id', required:false },
  { label:'City', name:'City', type:'text', placeholder:'Aapka shehar', required:true }
];

/* Loan-specific extra fields */
const loanFormFields = {
  'Home Loan': [
    { label:'Required Loan Amount (₹)', name:'Required Loan Amount', type:'number', required:true },
    { label:'Property Value (₹)', name:'Property Value', type:'number', required:true },
    { label:'Employment Type', name:'Employment Type', type:'select', options:['Salaried','Self-Employed / Business'], required:true }
  ],
  'Personal Loan': [
    { label:'Monthly Income (₹)', name:'Monthly Income', type:'number', required:true },
    { label:'Required Loan Amount (₹)', name:'Required Loan Amount', type:'number', required:true },
    { label:'Purpose of Loan', name:'Purpose', type:'text', placeholder:'Jaise: Medical, Wedding, Travel', required:false }
  ],
  'Gold Loan': [
    { label:'Approx. Gold Weight (grams)', name:'Gold Weight (grams)', type:'number', required:true },
    { label:'Required Loan Amount (₹)', name:'Required Loan Amount', type:'number', required:true }
  ],
  'Business Loan': [
    { label:'Business Type', name:'Business Type', type:'text', placeholder:'Jaise: Retail, Manufacturing', required:true },
    { label:'Annual Turnover (₹)', name:'Annual Turnover', type:'number', required:true },
    { label:'Required Loan Amount (₹)', name:'Required Loan Amount', type:'number', required:true }
  ],
  'Loan Against Property (LAP)': [
    { label:'Property Value (₹)', name:'Property Value', type:'number', required:true },
    { label:'Required Loan Amount (₹)', name:'Required Loan Amount', type:'number', required:true }
  ],
  'LAP Construction Loan': [
    { label:'Property Value (₹)', name:'Property Value', type:'number', required:true },
    { label:'Construction Estimate Cost (₹)', name:'Construction Estimate Cost', type:'number', required:true }
  ],
  'PMEGP Loan': [
    { label:'Business Idea / Type', name:'Business Idea', type:'text', required:true },
    { label:'Required Loan Amount (₹)', name:'Required Loan Amount', type:'number', required:true }
  ],
  'Mudra Loan': [
    { label:'Business Type', name:'Business Type', type:'text', required:true },
    { label:'Required Loan Amount (₹)', name:'Required Loan Amount', type:'number', required:true }
  ],
  'MSME Loan': [
    { label:'Business Type', name:'Business Type', type:'text', required:true },
    { label:'Annual Turnover (₹)', name:'Annual Turnover', type:'number', required:true },
    { label:'Required Loan Amount (₹)', name:'Required Loan Amount', type:'number', required:true }
  ],
  'Car Loan': [
    { label:'Car Model', name:'Car Model', type:'text', placeholder:'Jaise: Maruti Swift', required:true },
    { label:'On-Road Price (₹)', name:'On-Road Price', type:'number', required:true },
    { label:'Down Payment Available (₹)', name:'Down Payment Available', type:'number', required:false }
  ],
  'Bike Loan': [
    { label:'Bike Model', name:'Bike Model', type:'text', required:true },
    { label:'On-Road Price (₹)', name:'On-Road Price', type:'number', required:true }
  ],
  'Education Loan': [
    { label:'Course Name', name:'Course Name', type:'text', required:true },
    { label:'Institute Name', name:'Institute Name', type:'text', required:true },
    { label:'Required Loan Amount (₹)', name:'Required Loan Amount', type:'number', required:true }
  ],
  'Agriculture Loan': [
    { label:'Land Area (in Acres)', name:'Land Area (Acres)', type:'number', required:true },
    { label:'Required Loan Amount (₹)', name:'Required Loan Amount', type:'number', required:true }
  ],
  'Commercial Vehicle Loan': [
    { label:'Vehicle Type', name:'Vehicle Type', type:'text', placeholder:'Jaise: Truck, Bus', required:true },
    { label:'Required Loan Amount (₹)', name:'Required Loan Amount', type:'number', required:true }
  ],
  'Balance Transfer Loan': [
    { label:'Current Bank / NBFC Name', name:'Current Bank/NBFC', type:'text', required:true },
    { label:'Outstanding Loan Amount (₹)', name:'Outstanding Loan Amount', type:'number', required:true }
  ],
  'Top-up Loan': [
    { label:'Existing Loan Bank/NBFC', name:'Existing Loan Bank', type:'text', required:true },
    { label:'Existing Loan Amount (₹)', name:'Existing Loan Amount', type:'number', required:true },
    { label:'Top-up Amount Required (₹)', name:'Top-up Amount Required', type:'number', required:true }
  ]
};

const loanModal = document.getElementById('loanModal');
const modalTitle = document.getElementById('modalTitle');
const modalFields = document.getElementById('modalFields');
const modalLoanType = document.getElementById('modalLoanType');
const loanApplyForm = document.getElementById('loanApplyForm');
const modalSuccess = document.getElementById('modalSuccess');
const modalSubmitBtn = document.getElementById('modalSubmitBtn');

function buildFieldHTML(field){
  const req = field.required ? 'required' : '';
  if(field.type === 'select'){
    const opts = field.options.map(o => `<option value="${o}">${o}</option>`).join('');
    return `<div><label>${field.label}</label><select name="${field.name}" ${req}><option value="">Select...</option>${opts}</select></div>`;
  }
  return `<div><label>${field.label}</label><input type="${field.type}" name="${field.name}" placeholder="${field.placeholder || ''}" ${req}></div>`;
}

function openLoanModal(loanName){
  modalTitle.textContent = 'Apply for ' + loanName;
  modalLoanType.value = loanName;
  const specificFields = loanFormFields[loanName] || [];
  const allFieldsHTML = [...commonFields, ...specificFields].map(buildFieldHTML).join('');
  modalFields.innerHTML = allFieldsHTML;
  loanApplyForm.style.display = 'block';
  modalSuccess.classList.remove('show');
  loanModal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeLoanModal(){
  loanModal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

document.getElementById('modalClose').addEventListener('click', closeLoanModal);
document.getElementById('modalCloseSuccess').addEventListener('click', closeLoanModal);
loanModal.addEventListener('click', (e) => { if(e.target === loanModal) closeLoanModal(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape' && loanModal.classList.contains('open')) closeLoanModal(); });

loanApplyForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  modalSubmitBtn.disabled = true;
  modalSubmitBtn.textContent = 'Sending...';

  const formData = new FormData(loanApplyForm);
  formData.append('_subject', 'Naya Loan Application: ' + modalLoanType.value);

  try{
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if(response.ok){
      loanApplyForm.reset();
      loanApplyForm.style.display = 'none';
      modalSuccess.classList.add('show');
    } else {
      throw new Error('Submit failed');
    }
  } catch(err){
    /* Fallback: open WhatsApp with the details if the email service isn't set up yet */
    const details = [...formData.entries()].map(([k,v]) => `${k}: ${v}`).join('\n');
    const waText = `Naya Loan Application\nLoan Type: ${modalLoanType.value}\n${details}`;
    window.open('https://wa.me/919891070468?text=' + encodeURIComponent(waText), '_blank');
    loanApplyForm.reset();
    loanApplyForm.style.display = 'none';
    modalSuccess.classList.add('show');
  } finally {
    modalSubmitBtn.disabled = false;
    modalSubmitBtn.textContent = 'Submit Application';
  }
});
