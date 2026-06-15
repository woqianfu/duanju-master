# PPT/PDF 生成避坑指南 / PPT-PDF Generation Pitfalls Guide

> v6.1 二十轮迭代积累的全部教训。改 PPT 前必读，每一项都是踩过的坑。

## 1. CSS 规则丢失 — 最隐蔽的 bug

**症状**：样式不生效（如页脚变成浏览器默认大小、卡片无背景）

**原因**：Python `sed`/字符串替换 HTML 时可能意外删除或覆盖 CSS 块。特别是 `replace()` 操作大型文本块时。

**检查**：每次改完 HTML 后执行 `grep '\.footer-bar' file.html | head -3` 确认关键规则存在。

**必保规则清单**：`.footer-bar` `.slide` `.master-detail` `.flow` `.highlight` `.table` `.stat` `.saving-box`

## 2. 页面溢出 → 空白残页

**修复优先级（从轻到重，逐步试）**：
1. 去英文 skill-en 行（最有效，省 ~30% 高度）
2. 缩中文到 40 字以内
3. 减卡片 padding: `9px 10px` → `5px 8px`
4. 减卡片 margin: `4px` → `1px`
5. 减 slide padding: `42px 24px` → `34px 20px`
6. print CSS 三锁：`height:844px !important; max-height:844px !important; overflow:hidden !important`
7. `break-inside:avoid; page-break-inside:avoid` + `break-after:page` 双重锁

## 3. 所有流程竖向，禁止横向 ASCII 树

**禁止**：`├─` `└─` `│` ASCII 树形 → 会产生横向滚动条

**正确**：每个步骤独立一行，每项占两行（标题一行 + 灰色描述一行），不横向拥挤。

## 4. 字体层级（最终版本 v6.1）

| 元素 | 大小 | 颜色 | 备注 |
|------|:--:|------|------|
| 封面标题 h1 | 2.8rem | gold 渐变 | |
| 页面标题 h2 | 1.45rem | `var(--warm-gold)` | |
| 大师名 .name | 0.92rem | `var(--warm-gold)` | |
| 技能描述 .skill | 0.7rem | `var(--text)` | 紧凑页可缩至 0.64rem |
| 表格 .table | 0.68rem | `var(--text)` | |
| 页脚 .footer-bar | **0.45rem** | `rgba(255,255,255,0.13)` | 可见但不抢眼。太大会喧宾夺主，太小(0.24rem)看不见 |
| 卡片数字 .num | 1.5rem | `var(--warm-gold)` | 数据页；大师页用小号 |

## 5. 暗色统一

| 元素 | 颜色/值 |
|------|------|
| 页面背景 | `#050508` |
| 卡片背景 | `#111118` |
| 边框 | `#1a1a28` |
| flow 框边框 | `rgba(26,26,40,0.5)` |
| 顶部装饰线 | gold 渐变 `opacity:0.15` |
| 页脚文本 | `rgba(255,255,255,0.13)` |
| 禁止 | 白色元素、白框、高亮白色文字 |

## 6. 数据页面排版（P2）

数据卡片要大、要散开、要填满页面，不要缩在中间：
- padding: `14px 6px`
- 数字 `1.5rem`（太大 1.8rem 撑出格→缩小）
- 行间距 gap: `8px`，行间 margin: `12px`
- 数字如 `60→15%` 太宽 → 改为 `15%` + 标签 `废片率↓(原60%)`

## 7. 封面页设计（P1）

- 标题 2.8rem 金色渐变
- 核心句独占一行居中
- 三个关键词分色横排：金`十九大师军团` · 紫`精密工程化` · 青`自我进化`
- 下面四条横向亮点条（金/紫/青/绿），各带独立边框

## 8. 终页设计（P10）

- 版本历程用卡片流（stat 排成两行），v6.1 金色高亮
- 双排八项指标
- 结束语中英双语，金色边框卡片框

## 9. 紧凑卡片页（P4/P5 六卡以上）

- 去掉 skill-en 英文行
- 描述用点号 `·` 替代句号，一行写完
- padding: `5px 8px`，margin: `1px 0`，gap: `6px`
- slide padding 缩至 `34px 20px`

## 10. 生成命令

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --no-sandbox \
  --print-to-pdf="输出.pdf" --no-pdf-header-footer "file://HTML路径"
```

必须嵌入的 CSS：
```css
@page { size: 390px 844px; margin: 0; }
@media print {
  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .slide { break-after: page; break-inside: avoid; height: 844px !important; overflow: hidden !important; }
}
```

## 11. 生成后检查清单

- [ ] 页数 = slide 数（无空白残页）
- [ ] 所有 footer 存在（`grep -c 'footer-bar' file.html`）
- [ ] P4、P5 无溢出残页（6 张卡片最容易超）
- [ ] P7 会审、P8 引擎无溢出
- [ ] 无横向滚动条（ASCII 树已改竖向）
- [ ] 数据卡片未撑出格（数字 ≤ 1.5rem）
- [ ] 页脚小且淡但不消失（0.45rem + 0.13 opacity）
- [ ] 无白色或明亮元素破坏暗色主题
- [ ] @page 尺寸 390×844 已嵌入 HTML
- [ ] CSS 规则完整（`.footer-bar` 等关键规则未被误删）
