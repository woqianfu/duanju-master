# 🎬 短剧大师 (Duanju Master) v4.0

微短剧全流程一体化创作技能 — 从一句话创意到小云雀成片。

## 概述

短剧大师是一个 AI 驱动的微短剧创作系统，覆盖从创意到成片的完整流程：

```
一句话创意
  ├─ Phase 1 剧本创作（9层规则 + 875条蒸馏库）
  ├─ Phase 2 剧本升级（武打分级/暗线标注/爆款节奏版）
  ├─ Phase 3 制作交付（小云雀 API 提交）
  └─ Phase 4 SQ 质量管控（SQ0→SQ12 全闭环）
```

## 安装

```bash
# 安装到 Hermes Agent
hermes skills install https://github.com/woqianfu/duanju-master

# 或通过 pip 安装脚本依赖
pip install -r requirements.txt
```

## 快速开始

触发词：`@短剧大师`

```bash
# 搜索蒸馏案例库
python3 assets/short-writing/scripts/search_library.py "霸总 第一屏" --top 5

# 搜索完整剧本库
python3 assets/short-writing/scripts/search_full_scripts.py "杂灵根" --top 3

# 提交到小云雀
export XYQ_ACCESS_KEY="your-key"
python3 scripts/submit_run.py --message "描述"
```

## 结构

```
duanju-master/
├── SKILL.md              # 主技能文件（Hermes Skill）
├── scripts/              # Phase 3 API 脚本
│   ├── submit_run.py     # 提交任务
│   ├── get_thread.py     # 轮询进展
│   ├── upload_file.py    # 上传文件
│   └── download_results.py # 下载结果
├── references/           # 参考附录
│   └── camera-moves-encyclopedia.md  # 运镜百科
└── assets/short-writing/ # 创作资产
    ├── references/       # 10篇创作规则参考
    ├── library/          # 875条蒸馏案例库
    └── scripts/          # 搜索工具
```

## 环境要求

- Python 3.10+
- XYQ_ACCESS_KEY（小云雀 API，可选）

## 许可

MIT
