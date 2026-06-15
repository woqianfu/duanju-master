# PPT/PDF 生成实战指南 — 竖版暗色风 · 中英双语 / Vertical Dark Bilingual PDF Guide

> 基于 v6.1 十轮迭代打磨出的稳定方案。每个参数都是踩坑踩出来的。

## 文件架构 / File Architecture

```
assets/短剧大师v6.1_完整功能介绍.html  ← 单文件，自主展示
assets/短剧大师v6.1_完整功能介绍.pdf   ← Chrome无头渲染输出
Desktop/短剧大师v6.1_完整功能介绍.pdf   ← 用户交付副本
```

## HTML 基础设置 / HTML Foundation

### 尺寸 / Dimensions
```css
:root { --slide-w: 390px; --slide-h: 844px; }  /* iPhone 14 竖屏比例 */
.slide { width:390px; min-height:844px; padding:34px 20px; overflow:hidden; }
```

### 配色 / Colors
```css
--gold: #D4A843; --warm-gold: #F0C060;      /* 标题/亮点 */
--bone: #E8DDD0;                              /* 核心正文 */
--text: #ccc; --text-dim: #888;               /* 次级文字 */
--card-bg: #111118; --border: #1a1a28;        /* 卡片 */
--purple: #8B5CF6; --cyan: #06B6D4; --green: #22C55E;
body { background: #050508; }
.slide { background: linear-gradient(180deg,#0a0a12,#0d0d18 40%,#0a0a12); }
```

## 字号体系 — 经过十轮验证 / Font Sizes — Battle-Tested

| 元素 | rem | 说明 |
|------|:--:|------|
| 封面标题 h1 | 2.6 | 手机不遮挡 |
| 页面标题 h2 | 1.45 | 各页统一 |
| 副标题 .en-sub | 0.7 | 英文辅助 |
| 大师名字 .name | 0.92 | 卡片内醒目 |
| 技能描述 .skill | 0.7 | 正文可读 |
| 数据数字 .stat .num | 1.5 | 不撑出格 |
| 数据标签 .stat .label | 0.62 | 紧凑 |
| 流程框 .flow | 0.64 | 等宽字体 |
| 表格 .table | 0.68 | 清晰 |
| 高亮 .highlight | 0.82 | 重点 |
| 页脚 .footer-bar | 0.45 | 不喧宾夺主 |
| 页脚颜色 | rgba(255,255,255,0.13) | 隐约可见 |

## PDF 生成 / PDF Generation

### Chrome 命令
```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-sandbox \
  --print-to-pdf="输出路径.pdf" --no-pdf-header-footer \
  "file:///绝对路径.html"
```

### 防断页 CSS（关键）
```css
@page { size: 390px 844px; margin: 0; bleed: 0; marks: none; }
@media print {
  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .slide {
    break-after: page; page-break-after: always;
    break-inside: avoid; page-break-inside: avoid;
    width: 390px !important; height: 844px !important;
    min-height: 844px !important; max-height: 844px !important;
    overflow: hidden !important;
    margin: 0 !important; border-radius: 0 !important;
  }
  .slide:last-child { break-after: auto; page-break-after: auto; }
}
```

## 常见问题 / Common Pitfalls

### 🐛 空白残页（第二页只有一个页脚）
**原因**：内容超出 844px → Chrome 自动分页。
**修复**：缩减该页内容（去英文行/缩短描述/减小内边距/减小字号）。

### 🐛 页脚过大
**原因**：`.footer-bar` CSS 规则丢失（被之前的编辑误删）。
**修复**：检查 CSS 中 `.footer-bar` 是否存在后再生 PDF。

### 🐛 横向滚动条
**原因**：ASCII 树形文字太宽（`├─...─...─` 超出 390px）。
**修复**：改为竖向布局，每项 `<br>` 换行，不用 ASCII 树。

### 🐛 标题被遮挡（手机上）
**原因**：h1 过大 + padding 挤压。
**修复**：h1 ≤ 2.6rem，减小幻灯片 padding-top。

### 🐛 数据卡片数字撑出格
**原因**：`1.8rem` 时 "3,400+" 或 "60→15%" 太宽。
**修复**：数字 ≤ 1.5rem，长文本拆分到标签行。

### 🐛 装饰线不协调
**不要用** `.slide::before` 的金色渐变线。暗色背景不需要这个。

## 设计原则 / Design Principles

1. **竖向优先**：所有流程/列表用 `<br>` 竖排，不用横向 ASCII 树
2. **先紧后松**：内容宁少勿多，撑满页面从精简开始
3. **页脚克制**：0.45rem + 透明度 0.13，不强眼
4. **中英双语但中文为主**：英文做辅助色（text-dim），中文做正文色
5. **封面重数据**：四个 stat 卡片 + 两排 pill 标签，不堆长句
6. **每次只改一处**：改完→生 PDF→验证，不要一次改多处导致定位困难
7. **git commit 双语**：`中文描述 / English description` 格式
