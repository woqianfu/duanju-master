# PPT/PDF 生成避坑指南 / PPT-PDF Generation Pitfalls Guide

> v6.1 迭代中反复踩坑的教训。每次改 PPT 前先读。

## 1. CSS 规则丢失

**症状**：样式不生效（如页脚变成浏览器默认大小）

**原因**：Python 批量替换 HTML 时可能意外删除 CSS 块

**检查**：每次改完执行 `grep '\.class-name' file.html` 确认关键规则存在

**必保规则**：`.footer-bar` `.slide` `.master-detail` `.flow`

## 2. 页面溢出 → 空白残页

**修复顺序**：去英文行 → 缩中文到40字内 → 减卡片padding到5px → 减margin到1px → 减slide padding到34px → print CSS强锁844px+overflow:hidden

## 3. 横向改竖向

所有流程用竖排 `步骤1<br>说明<br>步骤2<br>说明`，不用 `├─` `└─` ASCII树

## 4. 字体层级

页脚 `0.24rem` + `rgba(255,255,255,0.07)`；大师名 `0.92rem`；技能 `0.7rem`；标题 `1.45rem`

## 5. 暗色统一

边框用 `#1a1a28`；flow框用 `rgba(26,26,40,0.5)`；顶部金线 `opacity:0.15`；禁用白色元素

## 6. 生成命令

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --no-sandbox \
  --print-to-pdf="输出.pdf" --no-pdf-header-footer "file://HTML路径"
```

## 7. 生成后检查

- [ ] 页数=slide数
- [ ] 无空白残页
- [ ] footer小且淡
- [ ] 无白色横滚条
