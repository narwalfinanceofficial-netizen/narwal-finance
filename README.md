# Narwal Finance — Website

"Aapke Sapno Ka Saathi" — Narwal Finance ki official website.

## Folder Structure
```
narwal-finance/
├── index.html      -> Poori website (ek hi page, sections ke saath)
├── style.css        -> Sara design (Dark Blue + Gold + White theme)
├── script.js         -> Sari functionality (EMI calculator, Eligibility checker, FAQ, animations)
├── assets/
│   └── logo.jpg      -> Narwal Finance logo
└── README.md
```

## GitHub Pages Par Upload Kaise Karein

1. GitHub par ek naya repository banayein (e.g. `narwal-finance-website`).
2. Is zip file ke andar ki saari files aur folders (index.html, style.css, script.js, assets/) us repository me upload karein — **zip file ko khud upload mat karein, usme se files nikaal kar upload karein.**
3. Repository ki **Settings** me jaayein → **Pages** section kholein.
4. **Source** me `main` branch aur `/ (root)` folder select karein, phir **Save** karein.
5. 1-2 minute me aapki website live ho jayegi is URL par:
   `https://<aapka-username>.github.io/<repository-name>/`

## Website Me Kya Kya Hai

- Home page — Hero banner, Apply Now / Call Now / WhatsApp buttons
- 16 Loan Services — alag alag cards me
- EMI Calculator — Loan Amount, Interest Rate, Tenure ke saath live calculation
- Loan Eligibility Checker — Income, CIBIL Score, Loan Amount ke basis par
- Documents Required — category ke hisaab se tabs (Salaried, Self-Employed, Home/LAP, Vehicle)
- Why Choose Narwal Finance
- About Us
- Customer Reviews
- FAQ (accordion)
- Contact section — Phone, WhatsApp, Email, Address + Google Map
- Floating WhatsApp button
- Mobile-friendly, fast-loading, smooth animations

## Customize Karna Ho To

- **Logo badalna ho:** `assets/logo.jpg` ko apni nayi image se replace kar dein (same naam rakhein).
- **Phone/Email/Address badalna ho:** `index.html` file me Ctrl+F se number/email search karke sabhi jagah update kar dein.
- **Colors badalne ho:** `style.css` file ke sabse upar `:root { }` section me color codes hain, wahan se change karein.
- **Naye loan/FAQ add karne ho:** `script.js` file me `loans`, `faqs`, `reviews`, `docCategories` arrays me naya item add kar dein.

Koi bhi dikkat ho to bata dijiyega!
