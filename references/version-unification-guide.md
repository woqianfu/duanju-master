# 短剧大师™ 版本统一指南

## 版本号规则

格式：`v<主>.<次>.<小>`

- **主版本** — 重大架构变更
- **次版本** — 新功能/新增大师
- **小版本** — 每次 git push +1

## 小版本递增规则

每次 commit + push 前：

1. 更新根目录 `VERSION` 文件（纯文本，仅包含版本号，如 `v6.2.1`）
2. 检查 `SKILL.md` frontmatter `description:` 中的版本号
3. 检查 `README.md` 中提到的版本号
4. 检查 `assets/` 中的文件名版本号
5. commit message 首行标注版本号

## 强制检查

```bash
grep -oh 'v6\.[0-9]\.[0-9]' SKILL.md README.md references/*.md assets/
# 所有输出必须一致，不许有多个版本号同时存在
```

## 版本文件位置

`VERSION` — 技能根目录，仅包含一行版本字符串。
