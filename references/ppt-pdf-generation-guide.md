# 短剧大师™ PPT/PDF 生成指南

> 竖版暗色影视风 · 手机比例 · 中英双语 · Chrome无头渲染

## 参数标准

| 参数 | 值 |
|------|------|
| 尺寸 | **390×844px** (iPhone 14 比例) |
| 边距 | `padding: 40px 22px` |
| 配色 | 暗底 `#0a0a0f→#0d0d18` + 金色 `#D4A843` + 白色半透文字 |
| 字体 | PingFang SC / Noto Sans SC |
| 封面标题 | 2.4rem 金色渐变 background-clip |
| 大师卡片 | `font-size: 0.88rem` 标题, `0.7rem` 技能描述 |
| 页脚 | `0.32rem` rgba(255,255,255,0.12) 极淡 |
| 页顶金线 | `opacity: 0.15` 几乎融入背景 |

## CSS 关键规则

```css
/* 打印尺寸锁定 */
@page { size: 390px 844px; margin: 0; }

/* 严格断页 — 杜绝空白残页 */
@media print {
  .slide {
    break-after: page; break-inside: avoid;
    max-height: 844px !important; overflow: hidden !important;
    height: 844px !important; /* 强制高度 — 防Chrome在边界处拆出空白页 */
    width: 390px !important;
  }
  .slide:last-child { break-after: auto; }
  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
```

## Chrome 无头渲染命令

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-sandbox \
  --print-to-pdf="输出路径.pdf" \
  --no-pdf-header-footer \
  "file://HTML文件路径"
```

## 常见问题

| 问题 | 原因 | 修复 |
|------|------|------|
| 页内容被截断出现空白残页 | Chrome按内容高度自动分页 | 加 `break-inside:avoid` + `max-height:844px` + `overflow:hidden` |
| 页脚离底部太远 | `bottom:12px` 过高 | 降到 `bottom:6px` |
| 大师卡片英文溢出 | 英文行太长 | 缩短到≤17词，用`/`替代`→` |
| 页顶金线太抢眼 | `opacity:0.4` | 降到 `0.15` |
| 省钱底部浮字不美观 | 无容器包裹 | 用 `.saving-box` 带边框卡片包裹 |
| 6卡页面溢出产生空白残页 | 双行描述+大padding撑破844px | ①去英文行只留中文单行 ②padding:9px→5px, margin:4px→1px ③slide padding:40px→34px |
| flow横排树形图出滑道 | `├─│└─` 横向字符过长 | 改竖排箭头式：每步独立`<strong>标题</strong><br><span>副文本</span>`，`↓`连接 |
| flow边框太亮不融暗色 | `#1a1a28`在暗底上显突兀 | 改为`rgba(26,26,40,0.5)`半透明融入背景 |

## 版本同步规则

- README.md 版本badge必须与SKILL.md一致
- HTML文件名含版本号: `短剧大师vX.X_完整功能介绍.html`
- PDF文件名同步: `短剧大师vX.X_完整功能介绍.pdf`
- 每次PPT修改后同步更新 `assets/` 下HTML和PDF
- GitHub commit 必须中英双语格式

> 更新日期: 2026-06-15 · v6.1 实战验证
