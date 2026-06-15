# PPT/PDF设计规范 — 短剧大师™ Presentation Guidelines

> 基于 v6.1 实战验证。竖版暗色影视风 · 中英双语 · 手机比例。

## 尺寸规范

| 参数 | 值 | 说明 |
|------|-----|------|
| 宽度 | 390px | iPhone 14 竖屏宽度 |
| 高度 | 844px | iPhone 14 竖屏高度 |
| @page CSS | `size: 390px 844px; margin: 0` | 嵌入HTML确保Chrome无头渲染精确尺寸 |
| 打印色彩 | `print-color-adjust: exact` | 暗色背景在PDF中保留 |

## 风格规范

| 要素 | 值 |
|------|-----|
| 底色 | `linear-gradient(180deg, #0a0a12, #0d0d18 40%, #0a0a12)` |
| 主金色 | `#D4A843` / 暖金 `#F0C060` |
| 卡片背景 | `#111118` 边框 `#1a1a28` |
| 字体 | PingFang SC / Noto Sans SC |
| 大师卡片 | 三列网格 `grid-template-columns: 1fr 1fr 1fr` |
| 每页断页 | `.slide { break-after: page; page-break-after: always; }` |
| 顶部装饰线 | `linear-gradient(90deg, transparent, gold, transparent)` |

## PDF生成流水线

```bash
# 1. 确保HTML中嵌入了 @page CSS
@page { size: 390px 844px; margin: 0; }

# 2. Chrome无头渲染
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-sandbox \
  --print-to-pdf="输出路径.pdf" \
  --no-pdf-header-footer \
  "file://HTML文件路径"

# 3. 验证
ls -lh 输出路径.pdf  # 预期 1-2MB
```

## 内容排版规则

| 规则 | 说明 |
|------|------|
| 每页大师数量 | 创作军团≤5 / 品控军团≤6 / 技术军团≤6（超过则拆页） |
| 省钱大师位置 | 技术军团末尾，绿色低调，不独立设页 |
| 封面 | 不提省钱大师，只提「十九大师」总数 |
| 双语 | 每页标题中英对照，大师名称中英对照 |

## 已验证页面结构（10页）

```
P1  封面 — 短剧大师™ v6.1 + 一句话
P2  数据总览 — 12个双语统计卡片
P3  创作军团 ①-⑤
P4  品控军团 ⑥-⑪
P5  技术军团 ⑫-⑰
P6  技术军团 ⑱-⑲ + 省钱干货表（6大省钱点）
P7  会审系统
P8  引擎+进化
P9  15大附录
P10 版本历程+结尾
```

## 已验证CSS规则（v6.1实战打磨）

| 问题 | 根因 | 修复 |
|------|------|------|
| 大师英文描述撑出卡片 | flex子元素无宽度约束 | `.master-detail .info { flex:1; min-width:0; }` |
| 矩阵大师溢出 | 英文行44词过长 | 缩至17词，`→`换`/`，省略冗余词 |
| 省钱底部文字浮空 | 无容器框 | 用 `.saving-box`（绿边框卡片）替代裸文字 |
| 页脚不在页面最底部 | `bottom:12px` 偏高 | 改 `bottom:6px` 贴底 |
| @page尺寸Chrome不认 | HTML缺print媒体查询 | 嵌入: `@page{size:390px 844px;margin:0} @media print{...}` |
| 字体手机太小 | 旧最小字号 0.5rem | 全局抬至 ≥0.64rem（skill 0.66rem, table 0.64rem） |
| CSS重复定义 | patch叠加产生 | Python去重脚本：按行检测 `.flow{` 重复→skip |
| 分页后页码残留 | sed `s/镜5→镜6/g` 误触 | Python精确替换 `<!-- PX: -->` + `page-num` 逐页修正 |
| 页脚喧宾夺主 | 字号0.5rem+亮色 | 降为0.32rem+rgba(255,255,255,0.12) — 能看清但不抢眼 |
| 页顶金色横线突兀 | opacity:0.4 | 降为0.15，几乎融入暗色背景 |
| 字体缩放不同步 | 手动改个别元素 | 用Python脚本全局等比缩放（h2/master/skill/table/highlight同步↑） |
| 分页内容过密 | 8个大师挤一页 | ⑫-⑰一页 + ⑱-⑲另一页（用省钱干货表填满空余） |

## 字体比例铁律

| 元素 | 字号 | 比例 | 说明 |
|------|------|------|------|
| 封面标题 | 2.6rem | 基准×4 | |
| 页面标题 h2 | 1.45rem | 基准×2.2 | |
| 大师名称 | 0.92rem | | 加粗+暖金 |
| 大师技能描述 | 0.7rem | | 正文主色 |
| 英文副行 | 0.6rem | | 比中文小一档 |
| 表格正文 | 0.68rem | | |
| 高亮引用 | 0.82rem | | |
| 统计数字 | 1.4rem | | |
| 页脚 | 0.32rem | | rgba(255,255,255,0.12) — 最低调 |
| 页面编号 | 0.56rem | | 右上角 |

> **核心原则**：页脚是背景，内容是主角。页脚越小越淡越好——能看清但绝不抢眼。

── 短剧大师™ · 微短剧全流程一体化创作技能 · DCI:RDCS00ANT.202606159652337429 ──
