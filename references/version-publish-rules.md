# 短剧大师版本发布规则 — 硬性规范

> ⚠️ 用户明确要求写死此规则。每次推送前必须执行，少一步视为违规。

## 每次推送前必须更新的文件

| 文件 | 更新内容 | 必做？ |
|------|----------|--------|
| `VERSION` | 写入最新版本号（如 `v6.2.5`） | ✅ |
| `SKILL.md` | frontmatter `description` 版本号 + 亮点同步 | ✅ |
| `README.md` | 标题版本号 + 所有 badges 同步 | ✅ |
| `assets/短剧大师vX.Y.Z_完整功能介绍.html` | 新建文件，所有页面内容同步 | ✅ |
| `assets/短剧大师vX.Y.Z_完整功能介绍.pdf` | 新建文件，与 HTML 同步生成 | ✅ |
| `GitHub About 描述` | 两个仓库都要更新（main + duanju） | ✅ |

## 双仓库同步规则

每次推送必须推送到 **两个仓库**，不能只推一个：

```bash
git push origin main    # 主仓库：hermes-skill-short-drama-master
git push duanju main    # 镜像仓库：duanju-master
```

两个仓库的 About 描述也必须同步更新（当前 token 无写入权限，需手动去 GitHub.com 改）。
| **GitHub About 描述** | 通过 GitHub API 或网页手动更新（`gh repo edit` / `Settings→About`）| ✅ |

## 步骤

```bash
# 1. 更新 VERSION
echo "v6.2.5" > VERSION

# 2. 更新 SKILL.md frontmatter
#    打开 SKILL.md 第1-3行，改 version + description

# 3. 更新 README.md
#    改标题版本号 + 所有 shields.io badges

# 4. 生成 HTML + PDF
#    cp assets/短剧大师v6.2.4_完整功能介绍.html assets/短剧大师v6.2.5_完整功能介绍.html
#    然后修改内容 + 生成 PDF

# 5. 更新 GitHub About 描述（如 token 有写入权限）
#    curl -X PATCH -H "Authorization: token \$GITHUB_TOKEN" \\
#      https://api.github.com/repos/woqianfu/hermes-skill-short-drama-master \\
#      -d '{"description":"🎬 短剧大师™ vX.Y.Z — ..."}'
#    无写入权限则手动在 GitHub 网页 About 栏编辑

# 6. git add -A && git commit -m "vX.Y.Z: ..."
# 6. git push origin main && git push duanju main
```

## 不更新的后果

- 版本号不一致 → Agent 混淆
- README badges 过时 → 对外展示错误
- 展示文件无新功能 → 用户/客户看不到最新能力
- **GitHub About 描述**过时 → 仓库首页展示错误信息，受众第一眼看到的就是错的内容
- **不可接受。每次推送都必须执行上述流程。**
