# Sync Script 双语提交修复指南

> **问题**：`~/.hermes/scripts/sync-skill-to-github.sh` 的 commit message 为纯英文 `"auto-sync YYYY-MM-DD HH:MM"`，违反短剧大师 SKILL.md 的 `GitHub提交双语铁律`（`中文描述 / English description` 格式）。

## 🔴 违规行

```bash
git commit -m "auto-sync $(date '+%Y-%m-%d %H:%M')" 2>/dev/null || true
```

## ✅ 修复后

```bash
git commit -m "每日自动同步 / Daily auto-sync $(date '+%Y-%m-%d %H:%M')" 2>/dev/null || true
```

## 检测方式

```bash
# 查看最近一次 sync 脚本的 commit message
cd ~/.hermes/skills/短剧大师
git log -1 --pretty=format:"%s"

# 如果输出以 "auto-sync" 开头 (无中文前缀) → 未修复
# 如果输出以 "每日自动同步 / Daily auto-sync" 开头 → 已修复
```

## 涉及文件

- `~/.hermes/scripts/sync-skill-to-github.sh`（行7：`git commit -m` 参数）

## 适用范围

该脚本在以下场景被调用：
1. 短剧大师午夜自进化 cron（每日02:30）
2. 短剧大师每日维护 cron（每日03:00）
3. 任何调用 `bash ~/.hermes/scripts/sync-skill-to-github.sh` 的场景

所有场景均须遵守双语铁律。
