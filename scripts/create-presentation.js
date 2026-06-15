/**
 * Generate the bilingual Short Drama Master v5.0 presentation PPT.
 * 
 * Usage:
 *   npm install -g pptxgenjs
 *   NODE_PATH=$(npm root -g) node scripts/create-presentation.js
 * 
 * Output: ~/Desktop/短剧大师_v5.0_Presentation.pptx (20 slides, dark cinematic theme)
 * 
 * Color palette: dark background #0D1117, gold accent #D4A843, cyan #2D5A7B
 * All slides bilingual: Chinese + English
 * Covers: problem/solution, 4-phase architecture, 14 quality gates, 
 * 20-dim quality matrix, dual-platform engineering, 15 appendices, self-evolution
 */

const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "短剧大师 v5.0";
pres.title = "Short Drama Master v5.0";

const C = {
  bg: "0D1117", bg2: "161B22", gold: "D4A843", cyan: "2D5A7B",
  purple: "6B3A6B", white: "F0F0F0", gray: "8B949E", 
  red: "FF6B35", green: "2EA44F", card: "1C2333", line: "30363D",
};

// Helper: title slide
const titleSlide = (title, subtitle) => {
  const s = pres.addSlide();
  s.background = { color: C.bg };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 2.45, w: 10, h: 0.04, fill: { color: C.gold } });
  s.addText(title, { x: 0.8, y: 1.0, w: 8.4, h: 1.4, fontSize: 40, fontFace: "Arial Black", color: C.white, bold: true, margin: 0 });
  s.addText(subtitle, { x: 0.8, y: 2.7, w: 8.4, h: 0.8, fontSize: 16, fontFace: "Calibri", color: C.gray, margin: 0 });
};

// Helper: section divider
const sectionSlide = (icon, en, zh) => {
  const s = pres.addSlide();
  s.background = { color: C.bg };
  s.addText(icon, { x: 0.8, y: 1.5, w: 2, h: 1.5, fontSize: 64, margin: 0 });
  s.addShape(pres.shapes.LINE, { x: 3.2, y: 1.6, w: 0, h: 1.4, line: { color: C.gold, width: 2 } });
  s.addText(en, { x: 3.6, y: 1.8, w: 5.8, h: 0.7, fontSize: 30, fontFace: "Arial Black", color: C.white, bold: true, margin: 0 });
  s.addText(zh, { x: 3.6, y: 2.6, w: 5.8, h: 0.5, fontSize: 14, fontFace: "Calibri", color: C.gray, margin: 0 });
};

// Helper: stat bar
const statSlide = (title, stats) => {
  const s = pres.addSlide();
  s.background = { color: C.bg };
  s.addText(title, { x: 0.8, y: 0.3, w: 8.4, h: 0.5, fontSize: 24, fontFace: "Arial Black", color: C.white, bold: true, margin: 0 });
  const w = 8.8 / stats.length;
  stats.forEach((st, i) => {
    const x = 0.6 + i * w;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 2.2, w: w - 0.2, h: 0.02, fill: { color: C.gold } });
    s.addText(st.num, { x, y: 1.1, w: w - 0.2, h: 1.0, fontSize: st.big ? 48 : 36, fontFace: "Arial Black", color: C.gold, bold: true, align: "center", margin: 0 });
    s.addText(st.en, { x, y: 2.4, w: w - 0.2, h: 0.5, fontSize: 13, fontFace: "Calibri", color: C.white, align: "center", margin: 0 });
    s.addText(st.zh, { x, y: 2.9, w: w - 0.2, h: 0.4, fontSize: 10, fontFace: "Calibri", color: C.gray, align: "center", margin: 0 });
  });
};

// ========= SLIDES =========

// Slide 1: Title
(() => {
  const s = pres.addSlide();
  s.background = { color: "0A0E14" };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 2.55, w: 10, h: 0.06, fill: { color: C.gold } });
  s.addText("🎬", { x: 0.8, y: 0.7, w: 1.5, h: 0.8, fontSize: 40, margin: 0 });
  s.addText("短剧大师 v5.0", { x: 0.8, y: 1.4, w: 8.4, h: 1.0, fontSize: 48, fontFace: "Arial Black", color: C.white, bold: true, margin: 0 });
  s.addText("SHORT DRAMA MASTER", { x: 0.8, y: 2.3, w: 8.4, h: 0.5, fontSize: 18, fontFace: "Calibri", color: C.gold, charSpacing: 8, margin: 0 });
  s.addText("The World's First Fully Closed-Loop AI Short Drama Creation System\n全球首个全流程闭环的AI微短剧创作系统", { x: 0.8, y: 2.85, w: 8.4, h: 0.8, fontSize: 14, fontFace: "Calibri", color: C.gray, margin: 0 });
  s.addText("From One Sentence → Finished Video  |  一句话 → 成片", { x: 0.8, y: 3.8, w: 8.4, h: 0.5, fontSize: 16, fontFace: "Calibri", color: C.white, bold: true, margin: 0 });
  s.addText("GitHub: woqianfu/hermes-skill-short-drama-master", { x: 0.8, y: 4.8, w: 8.4, h: 0.4, fontSize: 10, fontFace: "Consolas", color: C.gray, margin: 0 });
})();

// Slide 2: Stats
statSlide("📊 By The Numbers / 数据一览", [
  { num: "2,970+", big: true, en: "Total Rules", zh: "总规则数" },
  { num: "15", big: true, en: "Appendices A-T", zh: "附录" },
  { num: "14", big: true, en: "Quality Gates", zh: "SQ0-SQ12" },
  { num: "20", big: true, en: "Quality Dims", zh: "质量维度" },
  { num: "2", en: "Platforms", zh: "双平台" },
  { num: "875", en: "Case Cards", zh: "蒸馏案例" },
  { num: "321", en: "Scripts", zh: "加密剧本" },
  { num: "136", en: "Expressions", zh: "微表情" },
]);

// Slide 3: Problem
(() => {
  const s = pres.addSlide();
  s.background = { color: C.bg };
  s.addText("💀 The 3 Deadly Sins / AI视频三大死罪", { x: 0.8, y: 0.3, w: 8.4, h: 0.6, fontSize: 22, fontFace: "Arial Black", color: C.white, bold: true, margin: 0 });

  const sins = [
    ["01", "Voodoo Prompting / 玄学提示词", '"8K beautiful cinematic" → model shrugs, gives average of internet'],
    ["02", "No Quality Gates / 无质量闸门", "Bug found only after 60 episodes → 57 hours wasted"],
    ["03", "Platform Fragmentation / 平台碎片化", "Different prompt language per platform, no unified strategy"],
  ];

  sins.forEach((sin, i) => {
    const y = 1.3 + i * 1.35;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y, w: 8.8, h: 1.15, fill: { color: C.card }, shadow: { type: "outer", blur: 6, offset: 2, color: "000000", opacity: 0.25 } });
    s.addText(sin[0], { x: 0.85, y: y + 0.2, w: 0.6, h: 0.7, fontSize: 30, fontFace: "Arial Black", color: C.gold, bold: true, margin: 0 });
    s.addText(sin[1], { x: 1.8, y: y + 0.1, w: 7.2, h: 0.4, fontSize: 15, fontFace: "Calibri", color: C.white, bold: true, margin: 0 });
    s.addText(sin[2], { x: 1.8, y: y + 0.55, w: 7.2, h: 0.4, fontSize: 11, fontFace: "Calibri", color: C.gray, margin: 0 });
  });
})();

// Slides 4-18: Sections and content (abbreviated in reference version)
sectionSlide("💎", "Precision Engineering, Not Voodoo", "精密工程，不是玄学");

// ... remaining slides follow the same pattern as /tmp/create-ppt.js ...

// Slide 20: Closing
(() => {
  const s = pres.addSlide();
  s.background = { color: "0A0E14" };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 2.55, w: 10, h: 0.06, fill: { color: C.gold } });
  s.addText("Built with obsessive precision.\n以偏执的精度构建。", { x: 0.8, y: 1.5, w: 8.4, h: 1.0, fontSize: 28, fontFace: "Arial Black", color: C.white, bold: true, align: "center", margin: 0 });
  s.addText("329 episodes · 875 case cards · 321 scripts · 136 micro-expressions · 15 muscle groups · 20-dim quality matrix", { x: 0.5, y: 2.85, w: 9, h: 0.5, fontSize: 10, fontFace: "Calibri", color: C.gray, align: "center", margin: 0 });
  s.addText("github.com/woqianfu/hermes-skill-short-drama-master", { x: 0.5, y: 3.6, w: 9, h: 0.4, fontSize: 12, fontFace: "Consolas", color: C.gold, align: "center", margin: 0 });
  s.addText("github.com/woqianfu/duanju-master", { x: 0.5, y: 4.0, w: 9, h: 0.4, fontSize: 12, fontFace: "Consolas", color: C.gray, align: "center", margin: 0 });
})();

pres.writeFile({ fileName: `${require('os').homedir()}/Desktop/短剧大师_v5.0_Presentation.pptx` })
  .then(() => console.log("Done"))
  .catch(e => console.error(e));
