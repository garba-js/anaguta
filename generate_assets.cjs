const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 1. Archer Icon SVG (crisp vector)
const archerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <defs>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.1" />
    </filter>
  </defs>

  <!-- Bow Strings -->
  <line x1="285" y1="85" x2="150" y2="305" stroke="#D4A346" stroke-width="4.5" />
  <line x1="150" y1="305" x2="435" y2="355" stroke="#D4A346" stroke-width="4.5" />

  <!-- Archer Body Silhouette (Terracotta Brown) -->
  <path d="M 155 305 C 160 338 180 395 218 445 C 242 475 255 480 262 475 C 258 460 245 422 232 380 C 228 368 230 350 238 328 Z" fill="#995838" />
  <path d="M 232 380 C 210 345 190 310 176 278 C 172 260 186 242 205 234 C 224 225 238 238 238 256 C 238 288 252 322 265 358 Z" fill="#A26543" />

  <!-- Drawing Arm -->
  <path d="M 150 305 C 142 295 106 318 42 352 C 24 362 24 378 42 382 C 78 388 132 358 165 325 Z" fill="#A26543" />

  <!-- Head & Neck -->
  <path d="M 205 240 C 192 230 188 204 196 182 C 205 160 228 155 242 168 C 250 178 252 190 248 204 C 250 212 258 215 262 218 C 256 224 246 226 248 232 C 244 238 232 238 228 248 Z" fill="#A26543" />

  <!-- Extended Arm -->
  <path d="M 248 232 C 274 242 332 270 400 240 C 422 230 432 240 425 250 C 400 282 338 288 302 278 C 280 274 266 264 252 256 Z" fill="#A26543" />
  <path d="M 408 238 C 422 234 440 242 440 255 C 430 268 412 264 402 250 Z" fill="#8C4E30" />

  <!-- Traditional Armband (Green, White, Maroon) -->
  <g transform="translate(298, 252) rotate(22)">
    <rect x="0" y="0" width="8" height="26" rx="2" fill="#1D5C22" />
    <rect x="7" y="0" width="7" height="26" fill="#FFFFFF" />
    <rect x="13" y="0" width="8" height="26" rx="2" fill="#800000" />
  </g>

  <!-- Cross-body Strap & Water Gourd -->
  <path d="M 195 290 L 280 395 L 285 390 L 200 285 Z" fill="#5E351F" />
  <ellipse cx="282" cy="410" rx="20" ry="24" fill="#753C1F" />
  <path d="M 276 390 L 288 390 L 286 398 L 278 398 Z" fill="#5E351F" />

  <!-- Arrow -->
  <line x1="142" y1="305" x2="435" y2="198" stroke="#800000" stroke-width="5.5" stroke-linecap="round" />
  <polygon points="142,305 158,310 160,303" fill="#FFFFFF" />
  <polygon points="435,198 420,189 452,193 430,210" fill="#D4A346" />

  <!-- Recurve Green Bow -->
  <path d="M 280 75 C 295 65 305 110 330 128 C 368 155 425 190 432 245 C 438 272 432 308 435 360 C 422 352 414 318 408 282 C 398 238 355 185 318 148 C 295 125 285 88 280 75 Z" fill="#166534" />
</svg>`;

// 2. Full Brand Logo SVG (Emblem + "ANAGUTA TRADOMODERN")
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 680" width="600" height="680">
  <defs>
    <linearGradient id="anagutaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#145A1E" />
      <stop offset="35%" stop-color="#1E7B2B" />
      <stop offset="65%" stop-color="#552219" />
      <stop offset="100%" stop-color="#800000" />
    </linearGradient>
  </defs>

  <g transform="translate(60, 10) scale(0.96)">
    <!-- Bow Strings -->
    <line x1="285" y1="85" x2="150" y2="305" stroke="#D4A346" stroke-width="4.5" />
    <line x1="150" y1="305" x2="435" y2="355" stroke="#D4A346" stroke-width="4.5" />

    <!-- Torso -->
    <path d="M 155 305 C 160 338 180 395 218 445 C 242 475 255 480 262 475 C 258 460 245 422 232 380 C 228 368 230 350 238 328 Z" fill="#995838" />
    <path d="M 232 380 C 210 345 190 310 176 278 C 172 260 186 242 205 234 C 224 225 238 238 238 256 C 238 288 252 322 265 358 Z" fill="#A26543" />

    <!-- Drawing Arm -->
    <path d="M 150 305 C 142 295 106 318 42 352 C 24 362 24 378 42 382 C 78 388 132 358 165 325 Z" fill="#A26543" />

    <!-- Head & Neck -->
    <path d="M 205 240 C 192 230 188 204 196 182 C 205 160 228 155 242 168 C 250 178 252 190 248 204 C 250 212 258 215 262 218 C 256 224 246 226 248 232 C 244 238 232 238 228 248 Z" fill="#A26543" />

    <!-- Extended Arm -->
    <path d="M 248 232 C 274 242 332 270 400 240 C 422 230 432 240 425 250 C 400 282 338 288 302 278 C 280 274 266 264 252 256 Z" fill="#A26543" />
    <path d="M 408 238 C 422 234 440 242 440 255 C 430 268 412 264 402 250 Z" fill="#8C4E30" />

    <!-- Traditional Armband -->
    <g transform="translate(298, 252) rotate(22)">
      <rect x="0" y="0" width="8" height="26" rx="2" fill="#1D5C22" />
      <rect x="7" y="0" width="7" height="26" fill="#FFFFFF" />
      <rect x="13" y="0" width="8" height="26" rx="2" fill="#800000" />
    </g>

    <!-- Cross-body Strap & Water Gourd -->
    <path d="M 195 290 L 280 395 L 285 390 L 200 285 Z" fill="#5E351F" />
    <ellipse cx="282" cy="410" rx="20" ry="24" fill="#753C1F" />
    <path d="M 276 390 L 288 390 L 286 398 L 278 398 Z" fill="#5E351F" />

    <!-- Arrow -->
    <line x1="142" y1="305" x2="435" y2="198" stroke="#800000" stroke-width="5.5" stroke-linecap="round" />
    <polygon points="142,305 158,310 160,303" fill="#FFFFFF" />
    <polygon points="435,198 420,189 452,193 430,210" fill="#D4A346" />

    <!-- Green Bow -->
    <path d="M 280 75 C 295 65 305 110 330 128 C 368 155 425 190 432 245 C 438 272 432 308 435 360 C 422 352 414 318 408 282 C 398 238 355 185 318 148 C 295 125 285 88 280 75 Z" fill="#166534" />
  </g>

  <!-- Typography matching brand guidelines -->
  <text x="300" y="560" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="52" letter-spacing="6" fill="url(#anagutaGrad)">ANAGUTA</text>
  
  <text x="300" y="605" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="24" letter-spacing="10" fill="#C89938">TRADOMODERN</text>
</svg>`;

// 3. Tri-stripe Accent Bar
const triStripeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 36" width="1200" height="36">
  <rect x="0" y="0" width="1200" height="12" fill="#166534" />
  <rect x="0" y="12" width="1200" height="12" fill="#FFFFFF" />
  <rect x="0" y="24" width="1200" height="12" fill="#800000" />
</svg>`;

// 4. Square PWA Icon SVG
function getPwaIconSvg(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <defs>
    <radialGradient id="pwaBg_${size}" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#EFE8DB" />
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="${size}" height="${size}" rx="${Math.round(size * 0.16)}" fill="url(#pwaBg_${size})" />
  <rect x="0" y="0" width="${size}" height="${size}" rx="${Math.round(size * 0.16)}" fill="none" stroke="#C89938" stroke-width="${Math.round(size * 0.02)}" />

  <!-- Tri-Stripe Edge Accent on Bottom -->
  <path d="M 0 ${size - 18} L ${size} ${size - 18} L ${size} ${size - 12} L 0 ${size - 12} Z" fill="#166534" />
  <path d="M 0 ${size - 12} L ${size} ${size - 12} L ${size} ${size - 6} L 0 ${size - 6} Z" fill="#FFFFFF" />
  <path d="M 0 ${size - 6} L ${size} ${size - 6} L ${size} ${size} L 0 ${size} Z" fill="#800000" />

  <!-- Emblem Scaled & Centered -->
  <g transform="translate(${size * 0.06}, ${size * 0.03}) scale(${size / 530})">
    <!-- Bow Strings -->
    <line x1="285" y1="85" x2="150" y2="305" stroke="#D4A346" stroke-width="4.5" />
    <line x1="150" y1="305" x2="435" y2="355" stroke="#D4A346" stroke-width="4.5" />

    <!-- Torso -->
    <path d="M 155 305 C 160 338 180 395 218 445 C 242 475 255 480 262 475 C 258 460 245 422 232 380 C 228 368 230 350 238 328 Z" fill="#995838" />
    <path d="M 232 380 C 210 345 190 310 176 278 C 172 260 186 242 205 234 C 224 225 238 238 238 256 C 238 288 252 322 265 358 Z" fill="#A26543" />

    <!-- Drawing Arm -->
    <path d="M 150 305 C 142 295 106 318 42 352 C 24 362 24 378 42 382 C 78 388 132 358 165 325 Z" fill="#A26543" />

    <!-- Head & Neck -->
    <path d="M 205 240 C 192 230 188 204 196 182 C 205 160 228 155 242 168 C 250 178 252 190 248 204 C 250 212 258 215 262 218 C 256 224 246 226 248 232 C 244 238 232 238 228 248 Z" fill="#A26543" />

    <!-- Extended Arm -->
    <path d="M 248 232 C 274 242 332 270 400 240 C 422 230 432 240 425 250 C 400 282 338 288 302 278 C 280 274 266 264 252 256 Z" fill="#A26543" />
    <path d="M 408 238 C 422 234 440 242 440 255 C 430 268 412 264 402 250 Z" fill="#8C4E30" />

    <!-- Traditional Armband -->
    <g transform="translate(298, 252) rotate(22)">
      <rect x="0" y="0" width="8" height="26" rx="2" fill="#1D5C22" />
      <rect x="7" y="0" width="7" height="26" fill="#FFFFFF" />
      <rect x="13" y="0" width="8" height="26" rx="2" fill="#800000" />
    </g>

    <!-- Cross-body Strap & Water Gourd -->
    <path d="M 195 290 L 280 395 L 285 390 L 200 285 Z" fill="#5E351F" />
    <ellipse cx="282" cy="410" rx="20" ry="24" fill="#753C1F" />
    <path d="M 276 390 L 288 390 L 286 398 L 278 398 Z" fill="#5E351F" />

    <!-- Arrow -->
    <line x1="142" y1="305" x2="435" y2="198" stroke="#800000" stroke-width="5.5" stroke-linecap="round" />
    <polygon points="142,305 158,310 160,303" fill="#FFFFFF" />
    <polygon points="435,198 420,189 452,193 430,210" fill="#D4A346" />

    <!-- Green Bow -->
    <path d="M 280 75 C 295 65 305 110 330 128 C 368 155 425 190 432 245 C 438 272 432 308 435 360 C 422 352 414 318 408 282 C 398 238 355 185 318 148 C 295 125 285 88 280 75 Z" fill="#166534" />
  </g>
</svg>`;
}

async function run() {
  console.log('Rendering assets with Sharp...');

  // 1. logo.png
  await sharp(Buffer.from(logoSvg))
    .png()
    .toFile('/images/logo.png');
  console.log('Created /images/logo.png');

  // 2. logo-icon.jpg (with warm oatmeal cream background #EFE8DB)
  await sharp(Buffer.from(archerSvg))
    .flatten({ background: '#EFE8DB' })
    .jpeg({ quality: 95 })
    .toFile('/images/logo-icon.jpg');
  console.log('Created /images/logo-icon.jpg');

  // 3. tri-stripe.png
  await sharp(Buffer.from(triStripeSvg))
    .png()
    .toFile('/images/tri-stripe.png');
  console.log('Created /images/tri-stripe.png');

  // 4. icon-192.png
  await sharp(Buffer.from(getPwaIconSvg(192)))
    .resize(192, 192)
    .png()
    .toFile('/images/icon-192.png');
  console.log('Created /images/icon-192.png');

  // 5. icon-512.png
  await sharp(Buffer.from(getPwaIconSvg(512)))
    .resize(512, 512)
    .png()
    .toFile('/images/icon-512.png');
  console.log('Created /images/icon-512.png');

  // Copy all into /public/images/
  const files = ['logo.png', 'logo-icon.jpg', 'tri-stripe.png', 'icon-192.png', 'icon-512.png'];
  for (const f of files) {
    fs.copyFileSync(`/images/${f}`, `/public/images/${f}`);
  }
  console.log('All image assets copied to /public/images/');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
