# Cron Workdir 配置说明

> 短剧大师的午夜自进化 cron 需要指向正确的技能目录。

## 正确路径

```
~/.qclaw-hermes/skills/短剧大师/
```

> 注意：技能的 git 仓库（含 .git 目录和双 remote）也在这个路径下。
> 这是唯一的管理目录，不要在其他位置维护副本。

## Git 双仓库同步

```bash
cd ~/.qclaw-hermes/skills/短剧大师

# 推送到两个仓库
git push origin main      # hermes-skill-short-drama-master
git push duanju main      # duanju-master

# 拉取最新
git pull origin main

# 查看状态
git status
git log --oneline -10
```

## 常见问题

### Cron workdir 指向错误路径

症状：cron 执行时报 `workdir not found` 或找不到 SKILL.md

原因：cron job 的 workdir 可能被配置为 `~/.hermes/skills/短剧大师/`，但 Hermes 实际扫描的技能目录是 `~/.qclaw-hermes/skills/`

修复：

```bash
# 查看当前 cron 配置
hermes cron list

# 更新 workdir（如果需要）
hermes cron update <job_id> --workdir ~/.qclaw-hermes/skills/短剧大师
```

### Git 代理配置

如果 GitHub 直连不通，需配置代理：

```bash
git config --global http.proxy http://127.0.0.1:7897
git config --global https.proxy http://127.0.0.1:7897
```

### 技能目录不要用符号链接

Hermes 的技能扫描器对符号链接支持不稳定。始终使用实际目录复制，而非 ln -s。

## 技能目录结构

```
~/.qclaw-hermes/skills/短剧大师/
├── SKILL.md                 # 主技能文件（183KB）
├── assets/short-writing/    # 短剧写作资产
│   ├── library/             # 蒸馏库（319条案例）
│   ├── references/          # 10篇参考文档
│   └── scripts/             # 5个Python脚本
├── references/              # 参考文档
└── scripts/                 # 小云雀API脚本
```
