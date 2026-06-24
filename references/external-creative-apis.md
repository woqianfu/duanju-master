# 外部创意资源 API 速查

> 短剧创作中可直接调用的外部免费 API，无需注册或 API Key。

## 诗泉 · Chinese Poetry API

- **GitHub**: `github.com/palemoky/chinese-poetry-api` (648 ⭐, MIT 协议, Go 语言)
- **在线体验**: `poetry.palemoky.com`
- **数据量**: 37 万余首唐诗/宋词/元曲等 · 1.3 万+诗人 · 11 朝代 · 17 体裁
- **免费**: 无注册、无 API Key、仅基础频率限制
- **特点**: 简繁切换 · REST + GraphQL · 全球边缘网络毫秒级响应

### 常用接口

```bash
# 随机一首诗
curl "https://poetry.palemoky.com/api/poems/random"

# 按作者+体裁+朝代组合过滤
curl "https://poetry.palemoky.com/api/poems/random?author=李白&type=五言绝句&dynasty=唐"

# 搜索（全文/标题/内容）
curl "https://poetry.palemoky.com/api/search?q=春风"

# 元数据接口
curl "https://poetry.palemoky.com/api/authors"
curl "https://poetry.palemoky.com/api/dynasties"
curl "https://poetry.palemoky.com/api/types"
```

### 短剧创作场景

| 场景 | 用法 | 示例接口 |
|------|------|---------|
| 古风短剧开场旁白 | 随机一首应景唐诗做定场 | `random?type=唐诗` |
| 角色台词引用 | 搜索某朝代某诗人的特定意境 | `search?q=离别` |
| 集尾尾钩 | 用禅诗/哲理诗收束情绪 | `random?type=五言绝句` |
| 场景氛围描述 | 从诗词提取画面感→转写为prompt | `search?q=大漠孤烟` |
| 剧名/分集名灵感 | 搜索关键词取诗意命名 | `search?q=xxxx&type=title` |

### 短剧大师集成位置

- **Phase 1 调研阶段**：诗词搜索 → 提取关键词 → 融入暗线/世界观
- **Phase 2 剧本创作**：旁白引用、角色台词典故、尾钩收束
- **SQ4.5 场景质感**：诗词意象 → 视觉 prompt（如「大漠孤烟直」→ `desert smoke column, straight vertical plume, vast golden sands`）

---

> ⚠️ 引用诗词注意朝代版权——古籍无版权，但现代译本需标注来源。
