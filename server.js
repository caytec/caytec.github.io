const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname, {
  extensions: ['html'],
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    } else if (/\.(css|js|png|jpg|svg|woff2?)$/.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
  }
}));

app.get('/cv', (_req, res) => res.sendFile(path.join(__dirname, 'cv.html')));
app.get('/health', (_req, res) => res.json({ status: 'ok', uptime: process.uptime() }));

app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => {
  console.log(`Portfolio running on port ${PORT}`);
});
