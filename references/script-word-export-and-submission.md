# 剧本格式规范与 Word 导出指南

> 适用于投稿/参赛场景的剧本格式化处理

---

## 一、格式总则

剧本投稿格式要求：**去除一切非必要的装饰符号**，保证评审阅读流畅。

### 必须去除的符号

| 符号 | 原因 | 处理方式 |
|------|------|----------|
| `**` `*` | Markdown 加粗/斜体 | 直接删除，内容保留 |
| `---` | 水平分隔线 | 删除（场景间留空行代替） |
| `###` 等标题标记 | 非剧本格式 | 替换为纯文本标题 |
| `>` 引用线 | 非剧本格式 | 直接删除 |
| `《》` | 书名号可保留，但 `「」` 去除 | `「xxx」` → `xxx` |
| `（竖屏：）` | 冗余场景括号 | 保留内容，去掉括号和"竖屏"标签 |
| `（接上）（接第X集）` | 冗余承接 | 直接删除 |

### 剧本格式标准

```
场景标题：数字. 地点 内景/外景 时间
（示例：1. 莫高窟第61窟 内景 日）

动作描述：叙事段落，首行缩进
（示例：林小禾把扫描仪对准壁画，显示屏上只有噪点。）

角色名：独立一行，加粗
（示例：林小禾）

舞台指示：(动作/语气)，独立一行
（示例：(拍了两下仪器)）

台词：对话文本，独立段落
（示例：又坏了。）
```

### 示例对照

**原始（含符号）：**
`**林小禾**`
（拍了两下仪器）
又坏了。

**清理后：**
```
林小禾
(拍了两下仪器)
又坏了。
```

---

## 二、Markdown 脚本 → Word 文档转换

### 依赖安装

```bash
pip install python-docx
```

### 核心转换参数

| 元素 | 字体 | 字号 | 对齐/缩进 |
|------|------|------|-----------|
| 剧集标题 | 黑体 加粗 | 15pt | 居中 |
| 场景标题 | 宋体 加粗 | 11pt | 左对齐 |
| 动作描述 | 宋体 | 11pt | 首行缩进 24pt，行距 21pt |
| 角色名 | 宋体 加粗 | 12pt | 首行缩进 24pt |
| 舞台指示 | 宋体 | 11pt | 左缩进 36pt |
| 台词 | 宋体 | 12pt | 左缩进 48pt |
| 片头/片尾 | 黑体 加粗 | 12pt | 居中 |
| 下集预告 | 宋体 斜体 | 10pt | 灰色 RGB(100,100,100) |

### 角色名检测

构建角色名集合（`char_set`），逐行匹配：
- 常见角色：林小禾、十七、赵启明、何砚秋、导师、韩瑾、命令行的字
- 含 `(OS)` 后缀的变体也需匹配
- 匹配策略：`t in char_set or any(cn in char_set for cn if t == cn or t.startswith(cn + '('))`

### 台词 vs 动作描述区分规则

```
if line is character name → 角色名行
elif prev was char and line matches (xxx) → 舞台指示
elif prev was char or prev was parenthetical → 台词
else → 动作描述
```

---

## 三、完整转换脚本框架

```python
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
import re

doc = Document()

for section in doc.sections:
    section.top_margin = Cm(2.54)
    section.bottom_margin = Cm(2.54)
    section.left_margin = Cm(3.18)
    section.right_margin = Cm(3.18)

style = doc.styles['Normal']
font = style.font
font.name = '宋体'
font.size = Pt(12)
style.element.rPr.rFonts.set(qn('w:eastAsia'), '宋体')

def set_cn_font(run, font_name, size):
    run.font.size = Pt(size)
    run.font.name = font_name
    run.element.rPr.rFonts.set(qn('w:eastAsia'), font_name)

char_set = {'林小禾', '十七', '赵启明', '何砚秋', '导师', '韩瑾'}

# 段落处理逻辑见第二节的结构映射
# ...

doc.save('输出.docx')
```

---

## 四、比赛投稿辅助

### 材料清单

| 材料 | 格式 | 说明 |
|------|------|------|
| 一句话简介 | 邮件正文 | 1-2句话 |
| 故事大纲 | Word/PDF 附件 | 500字以上 |
| 人物小传 | Word/PDF 附件 | 含戏剧功能标注 |
| 完整剧本 | Word/PDF 附件 | 全数集 |
| 团队简历 | Word/PDF 附件 | 含联系方式 |
| 原创声明 | 附件或邮件正文 | 签字/盖章 |
| 参赛授权书 | 附件(签章扫描) | 打印签字后扫描 |

### 邮件格式

**主题：** `第二届微短剧剧本创作大赛+作品名+作者名`

**正文：**
1. 一句话简介
2. 附件清单
3. 结尾承诺声明（完整录入）：
   > 本人承诺是《xxx》完整著作权的合法权利人，该剧本未公开发表或拍摄；本人同意将该剧本提交到本届大赛中，并授权大赛组委会使用该作品进行相关的评审、展示、宣传等活动，遵守及履行大赛征集公告中各项要求。

**发送至：** wduanju2025@163.com
