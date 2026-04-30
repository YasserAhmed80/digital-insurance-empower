import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';

// Strip the first background <rect> (the full-canvas fill) from an SVG string
function stripBackground(svg) {
  // Removes <rect width="NNN" height="NNN" ... fill="..."/> that covers the full canvas
  return svg.replace(/<rect\s[^>]*\b(fill="url\(#bg\)"|fill="#[0-9a-fA-F]{3,6}")\s*\/?>/g, (match) => {
    // Only strip if it looks like a full-canvas background (no x/y offset, or starts canvas)
    if (/\bx=/.test(match) && !/\bx="0"/.test(match)) return match;
    if (/\by=/.test(match) && !/\by="0"/.test(match)) return match;
    return '<!-- bg stripped -->';
  });
}

function exportPng(src, out, width, transparent = false) {
  let svg = readFileSync(resolve(src), 'utf-8');
  if (transparent) svg = stripBackground(svg);
  mkdirSync(dirname(resolve(out)), { recursive: true });
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: width } });
  const png = resvg.render().asPng();
  writeFileSync(resolve(out), png);
  console.log(`✓  ${out}  (${width}px wide)`);
}

// ── Standard exports (with backgrounds) ─────────────────────────────────────
console.log('\n── Standard ──');
exportPng('Social_Media/linkedin_banner.svg',      'Social_Media/linkedin_banner.png',      1128);
exportPng('Social_Media/linkedin_launch_post.svg', 'Social_Media/linkedin_launch_post.png', 1200);
exportPng('Social_Media/logo_image_800.svg',       'Social_Media/logo_image_800.png',       800);
exportPng('Logos/main_logo.svg',              'Logos/main_logo.png',              1000);
exportPng('Logos/main_logo_white.svg',        'Logos/main_logo_white.png',        1000);
exportPng('Logos/stacked_logo.svg',           'Logos/stacked_logo.png',           480);
exportPng('Logos/brand_icon.svg',             'Logos/brand_icon.png',             400);
exportPng('Logos/ite_monogram.svg',           'Logos/ite_monogram.png',           800);
exportPng('Logos/favicon.svg',                'Logos/favicon.png',                64);

// ── Transparent exports ──────────────────────────────────────────────────────
console.log('\n── Transparent ──');
exportPng('Logos/main_logo.svg',     'Logos/transparent/main_logo.png',     1000, true);
exportPng('Logos/main_logo_white.svg','Logos/transparent/main_logo_white.png',1000, true);
exportPng('Logos/stacked_logo.svg',  'Logos/transparent/stacked_logo.png',  480,  true);
exportPng('Logos/brand_icon.svg',    'Logos/transparent/brand_icon.png',    400,  true);
exportPng('Logos/ite_monogram.svg',  'Logos/transparent/ite_monogram.png',  800,  true);
exportPng('Logos/favicon.svg',       'Logos/transparent/favicon.png',       64,   true);
