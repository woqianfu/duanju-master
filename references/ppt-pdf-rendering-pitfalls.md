# PPT/PDF 渲染陷阱 — Chrome Headless 竖屏暗色影视风

> 实战记录：短剧大师™ v6.1→v6.2 HTML→PDF 渲染过程中发现的坑点与修复。

## 1. 渐变背景 → PDF 产生横纹

**症状**：slide 背景使用 `linear-gradient(180deg,#0a0a12,#0d0d18 40%,#0a0a12)`，Chrome headless PDF 在 40% 色阶跳变处渲染出一条可见横纹。

**原因**：PDF 渲染引擎对渐变阶突变敏感，色相差异即使只有 `#0a0a12`→`#0d0d18` 也会在 40% 位置产生一条明显线条，像是被用户描述的「黄线」或「横格」。

**修复**：
- ❌ 移除 `::before` / `::after` 伪元素（如果有）— 不解决问题，问题出在背景渐变
- ✅ 使用纯色背景：`background:#0a0a12;`（或 `#0a0a0a`）
- ✅ 如需质感，在纯黑上用 `background-image:radial-gradient(...)` 代替线性渐变

## 2. `-webkit-background-clip: text` → 手机上变成黑块

**症状**：标题用 `background:linear-gradient(180deg,var(--warm-gold),var(--gold)); -webkit-background-clip:text; -webkit-text-fill-color:transparent;` 实现金色渐变字。桌面浏览器正常，PDF 在手机上打开时文字变成黑色方块，完全不可读。

**原因**：`-webkit-text-fill-color: transparent` 使文字本身透明，靠 `background-clip` 显示渐变背景。移动端 PDF 阅读器不支持 WebKit 专有属性，文字透明 → 无内容 → 渲染成黑块。

**修复**：
- ❌ 不要用 `-webkit-background-clip: text` + `-webkit-text-fill-color: transparent`
- ✅ 直接使用纯色：`color: var(--warm-gold);`
- ✅ 如果需要发光效果，改用 `text-shadow: 0 0 10px rgba(192, 168, 67, 0.5);`

## 3. 多出一个 `</div>` → 产生空白页

**症状**：P1 内容正常，但 PDF 中 P1 后面多出一页，上面只显示 `2: Data -->` 这样的片段。

**原因**：P1 的 slide 闭合 `</div>` 被误删或有多余的 `</div>` 导致 HTML 结构错乱。Chrome headless 遇到不可闭合的 div 会为剩余内容生成额外页面。

**修复**：
- 生成 PDF 前检查 HTML 结构：`python3 -c "from html.parser import HTMLParser; ..."` 
- 确保每个 `.slide` div 有且仅有一个闭合 `</div>`
- 观察 PDF 文件大小：正常 10 页 ~1.6MB，异常（仅 1 页）~357KB

## 4. 封面标题被手机 PDF 裁剪

**症状**：封面 `h1 { font-size: 2.8rem; }` 在手机 PDF 阅读器中标题顶部被裁掉。

**原因**：PDF 页面大小固定（A4/自定义），2.8rem ≈ 44px 在手机竖屏比例下占位过高，slide padding 不足导致溢出。

**修复**：
- 封面标题 ≤ 2.4rem
- 封面 slide 使用 `margin-top: -10px` 上移内容
- 紧凑间距，减少无效 padding

## 5. slide 边框在 PDF 中显示为线条

**症状**：`border: 1px solid var(--border)` 在手机 PDF 中渲染出一条可见横线。

**原因**：PDF 渲染器对 1px 边框的亚像素渲染在不同缩放级别下表现不同。

**修复**：
- ❌ 有边框时可能被解读为「黄线」或「分隔线」
- ✅ 使用 `border:none; border-radius:0;` 彻底移除 slide 边框
- ✅ 通过内间距和内容本身实现视觉分隔

## 总结

| # | 陷阱 | 根本原因 | 正确做法 |
|---|------|---------|---------|
| 1 | 渐变产生横纹 | PDF 渲染渐变跳变敏感 | 纯色背景 |
| 2 | 渐变字变黑块 | 移动端无 `-webkit-background-clip` | 纯色+text-shadow |
| 3 | 多余空白页 | HTML 结构错位 | 验证闭合标签 |
| 4 | 标题被裁 | 字号太大超出视口 | ≤2.4rem |
| 5 | 边框变横线 | PDF 缩放渲染 | border:none |
