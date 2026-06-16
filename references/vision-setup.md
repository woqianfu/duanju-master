# 视觉能力配置 / Vision Setup

> 短剧大师™ 的 deepseek-chat 模型不支持视觉。如需看图（审查截图/PDF），需配置辅助视觉模型。

## 配置步骤

```bash
# 1. 确保 OpenRouter API Key 已取消注释
# 编辑 ~/.hermes/.env，去掉 OPENROUTER_API_KEY 前面的 #

# 2. 配置辅助视觉模型
hermes config set auxiliary.vision.provider openrouter
hermes config set auxiliary.vision.model anthropic/claude-sonnet-4

# 3. 重开会话使配置生效
# 在会话中输入 /reset
```

## 注意事项

- 视觉工具集需新会话才能加载，配置后 `/reset` 方可使用
- 验证：`hermes tools list | grep vision` 应显示 `enabled`
- 如 401 Unauthorized，检查 `.env` 中 key 未被注释

## 当前状态 (2026-06-15)

- 视觉工具集：已启用
- 辅助模型：`openrouter` / `anthropic/claude-sonnet-4`
- 需 `/reset` 生效
