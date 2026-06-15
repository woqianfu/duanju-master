# PPT/PDF 生成规范 / PPT & PDF Generation Guide

> 短剧大师™ v6.1 配套演示文稿生成标准。每次更新 PPT 时严格遵守。

## 画布参数 / Canvas

| 参数 | 值 |
|------|------|
| 尺寸 | 390 × 844 px（iPhone 14 竖屏比例） |
| 背景 | 暗色影视风 `linear-gradient(180deg, #0a0a12, #0d0d18 40%, #0a0a12)` |
| 字体 | PingFang SC / Noto Sans SC / Microsoft YaHei |
| 主色 | `#D4A843`（暖金）/ `#F0C060`（亮金） |

## 防溢出铁律 / Anti-Overflow Rules

| 规则 | 说明 |
|------|------|
| **一页不超过 7 张卡片** | 6 张紧凑卡 + header + footer = ~780px，安全 |
| **卡片拥挤时去英文行** | 优先保留中文，去掉 `skill-en` 节省 ~20px/卡 |
| **竖排替代横排** | ASCII 树形横排 → `↓` 箭头竖排，杜绝横向滚动条 |
| **单框替代双框** | 两个竖排 flow 合并为一个紧凑框 |
| **Print 锁定高度** | `height: 844px !important; max-height: 844px; overflow: hidden` |
| **Slide padding** | `34px 20px`（拥挤页可降到 `30px 18px`） |
| **卡片 padding** | `5px 8px`，margin `1px 0` |

## 页脚规范 / Footer Rules

| 规则 | 值 |
|------|------|
| 字号 | `0.32rem` — 极细，不喧宾夺主 |
| 颜色 | `rgba(255,255,255,0.12)` — 几乎融入背景 |
| 位置 | `position: absolute; bottom: 6px` — 页面最底部 |

## 暗色一致性 / Dark Theme Consistency

| 禁止 | 替代方案 |
|------|------|
| ❌ 白色边框 `.flow` | ✅ `border: 1px solid rgba(26,26,40,0.5)` |
| ❌ 亮色 emoji | ✅ 可接受，但不要大面积使用 |
| ❌ 页顶金色横线太亮 | ✅ `opacity: 0.15`（原来 0.4） |
| ❌ 版权独立页 | ✅ DCI 编号融入 badge 栏，不独立设页 |

## 内容重点原则 / Content Focus

| 优先级 | 内容 |
|:--:|------|
| 1 | **十九大师逐位展示**（每位中英双行精准技能） |
| 2 | 会审系统 + 四阶段引擎 + 午夜进化 |
| 3 | 省钱大师融为第 19 位，不独立设页 |
| 4 | 版权信息低调处理（封面一行、末尾 badge） |

## PDF 导出命令 / Export Command

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-sandbox \
  --print-to-pdf="/Users/yan/Desktop/短剧大师vX.X_完整功能介绍.pdf" \
  --no-pdf-header-footer \
  "file:///Users/yan/.hermes/skills/短剧大师/assets/短剧大师vX.X_完整功能介绍.html"
```

## HTML 必备 CSS / Required CSS

```css
@page { size: 390px 844px; margin: 0; }
@media print {
  body { background: #050508 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .slide { break-after: page; page-break-after: always; break-inside: avoid; page-break-inside: avoid; margin: 0 !important; border-radius: 0 !important; width: 390px !important; height: 844px !important; min-height: 844px !important; max-height: 844px !important; overflow: hidden !important; }
  .slide:last-child { break-after: auto; page-break-after: auto; }
}
```
