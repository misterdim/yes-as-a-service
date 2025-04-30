const express = require('express');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Global rate limiter: 10 requests per minute per IP
const limiter = rateLimit({
  windowMs: 10 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false
});

// Apply rate limiter to everything
app.use(limiter);

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Load reason files
const yesReasons = JSON.parse(fs.readFileSync(path.join(__dirname, 'yes_reasons.json'), 'utf8'));
const funnyReasons = JSON.parse(fs.readFileSync(path.join(__dirname, 'yes_reasons_funny.json'), 'utf8'));
const corporateReasons = JSON.parse(fs.readFileSync(path.join(__dirname, 'yes_reasons_corporate.json'), 'utf8'));
const sarcasticReasons = JSON.parse(fs.readFileSync(path.join(__dirname, 'yes_reasons_sarcastic.json'), 'utf8'));

app.get('/yes', (req, res) => {
  const mode = req.query.mode;
  let list;

  switch (mode) {
    case 'fun':
      list = funnyReasons;
      break;
    case 'corporate':
      list = corporateReasons;
      break;
    case 'sarcastic':
      list = sarcasticReasons;
      break;
    default:
      list = yesReasons;
  }

  const randomReason = list[Math.floor(Math.random() * list.length)];
  res.json({ yes: randomReason });
});

app.listen(PORT, () => {
  console.log(`Yes-as-a-service running on port ${PORT}`);
});
