# 短剧大师版本发布规则 — 硬性规范

> ⚠️ 用户明确要求写死此规则。每次推送前必须执行，少一步视为违规。
> ⚠️ **关键：只在用户说「双仓更新」时才能push。** 其他任何时候（包括本AI主动）不得推送到任何远程仓库。
> ⚠️ **等效确认词**：当 cron 提案列出「待确认项」并说"等待用户决策"时，用户回复 **「全部更新」** 也视为 push 批准，等效于「双仓更新」。注意：此等效仅适用于 cron 提案场景，非 cron 场景仍需「双仓更新」明确指令。
> ⚠️ 双仓更新前必须做脱敏检查：`.gitignore` 已覆盖 `.env`/`__pycache__`/`*.log`/`session-*` 等。推送前先 `git status` 确认无敏感文件。
> 此规则由用户多次纠正后固化：**任何时候更新并向 GitHub 推送前必须执行本流程。**

## 版本号规则

格式 `vX.Y.Z`（如 `v6.3.0`）：

| 位置 | 说明 | 示例 |
|------|------|------|
| X | 大版本号（架构级变更时+1） | 6 |
| Y | 功能版本号（新增大师/军团时+1） | 3 |
| Z | 小版本号（每次提交+1） | 0 |

版本号记录在根目录 `VERSION` 文件（纯文本，仅版本号）。

### 🔥 铁律：每次更新后版本号 +0.1

用户明确要求：**每次更新后，在现有版本号上加 0.1。**
- 示例：v6.3.0 更新后 → v6.3.1 → v6.3.2 → v6.3.3
- 三个位置必须同步：`VERSION` / `SKILL.md` frontmatter / `README.md`
- 每轮提交只允许一次版本递增，禁止跳版本号
- 若一轮包含多次修改（如版本推进 + 省钱基线 + 提交新文件），可合并为一次提交，版本只加一次 0.1

**适用范围**：推送、版本推进、省钱基线更新、新文件提交——每完成一次向用户的更新交付，版本就加 0.1。

## 每次推送前必须更新的文件

| # | 文件 | 更新内容 | 必做？ |
|:-:|------|----------|:-----:|
| 1 | `VERSION` | 写入最新版本号（如 `v6.3.1`） | ✅ |
| 2 | `SKILL.md` | frontmatter `description` 版本号 + 亮点同步 | ✅ |
| 3 | `README.md` | 标题版本号 + 所有 badges 同步 | ✅ |
| 4 | `assets/短剧大师vX.Y.Z_完整功能介绍.html` | 新建，所有新功能/新大师/新亮点同步 | ✅ |
| 5 | `assets/短剧大师vX.Y.Z_完整功能介绍.pdf` | 新建，与 HTML 同步生成 | ✅ |
| 6 | GitHub About 描述 | 双仓库（origin + duanju）同步更新 | ✅ |

## 铁律：外部操作必须用户批准

| 操作 | 必须先批准 | 同意关键词 |
|------|:---------:|-----------|
| git push | ✅ | 「双仓更新」 |
| 小云雀API生成视频 | ✅ | 「跑」 |
| 任何消耗token/积分的行为 | ✅ | 必须明确同意 |
| 故事板→生成 | ✅ | 先出故事板→你看→点头→才生成 |

**违规后果：用户的钱被浪费，信任破裂。此规则不可违反。**

### 三位置同步规则

每次版本号变更必须同步以下三个位置：
1. `VERSION` 文件
2. `SKILL.md` frontmatter description
3. `README.md` 标题 + shields.io badges

commit 格式：`vX.Y.Z: 中文描述 / English description`

两处必须同步，不能只推一个：

```bash
git push origin main    # 主仓库：hermes-skill-short-drama-master
git push duanju main    # 镜像仓库：duanju-master
```

GitHub About 描述（仓库首页右侧简介）也必须同步更新两个仓库。
当前 token 无 repo 写入权限，需手动去 `github.com/woqianfu/<repo>` → 右侧 ✏️ 编辑。

## 脱敏规则

推送前检查以下内容已在 `.gitignore` 中排除或确认不包含私密数据：

- `.env` / `.env.local` — API Key 文件
- `*.log` — 日志文件
- `session-*` — 会话文件
- `personal-*` / `私人-*` / `我的-*` — 个人工作文件
- `__pycache__/` / `*.pyc` — 缓存文件
- `.DS_Store` — 系统文件
- `assets/short-writing/` — 如需脱敏，在 .gitignore 中取消注释

所有 API key 必须通过环境变量传递，不得在代码中硬编码。

## 🚨 推送被拒陷阱（2026-06-26实战验证）

当 `git push origin main` 被拒绝（`! [rejected]`），原因是远程仓库存在本地没有的提交时：

```bash
# ❌ 不要强行 git push --force
# ✅ 正确恢复路径：
git pull --rebase origin main
# 解决可能的冲突 → git add <resolved_files> → git rebase --continue
git push origin main
git push duanju main
```

**常见原因与对策：**

| 拒绝原因 | 处理方式 |
|---------|---------|
| `fetch first` / 远程超前 | `git pull --rebase origin main` → 解决冲突 → 再推送 |
| `forced update` | 检查远程是否有人手动重置。如果是正常并行工作，rebase 即可 |
| 冲突过多无法自动合并 | `git rebase --abort` → 告知用户，等人工处理 |

> 🔑 **预防**：每次 `git commit` 前先 `git fetch origin main` 检查远程是否有新提交。有则先 rebase 再 commit。

## 推送触发规则

**本地只做 `git commit`，不主动 push。** 只有用户说「双仓更新」时才执行推送：

```bash
# 1. 先拉取远程最新（预防冲突）
git fetch origin main

# 2. 如果远程有新提交，rebase 后再 commit
# git pull --rebase origin main

# 3. 提交
git add -A && git commit -m "vX.Y.Z: 中文描述 / English description"

# 4. 推送双仓库（仅在用户说「双仓更新」后执行）
git push origin main && git push duanju main
```

无用户指令不上传。commit message 格式：`vX.Y.Z: 中文要点 / English summary`

## 操作步骤

```bash
# 1. 更新 VERSION（每次+0.1：v6.3.0 → v6.3.1）
echo "v6.3.1" > VERSION

# 2. 更新 SKILL.md frontmatter（版本号 + description 亮点）
# 3. 更新 README.md（标题版本号 + 所有 badges）
# 4. 复制 HTML + 更新内容
cp assets/短剧大师v6.3.0_完整功能介绍.html assets/短剧大师v6.3.1_完整功能介绍.html
# 修改 HTML 内容同步最新功能
# 5. 生成 PDF（Chrome 无头渲染）
# 6. 检查 .gitignore 脱敏

# 7. 本地提交
git add -A && git commit -m "v6.3.1: 功能描述 / English"

# 8. 等用户说「双仓更新」→ 推送
git push origin main && git push duanju main
# 9. 手动更新 GitHub About（两个仓库）
```

## 不执行的后果

- 版本号不一致 → Agent 混淆
- README badges 过时 → 对外展示错误
- 展示文件无新功能 → 客户/用户看不到最新能力
- **用户明确要求写死此规则。不可接受。**
