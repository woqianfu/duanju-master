# 参考文件吸收约定（Reference Absorption Convention）

> 本文档规范：外部研究/方法论经午夜自进化审核后，如何吸收到 SKILL.md 主文件并标记完成。

## 生命周期

```
外部来源 → references/<topic>.md（原始存档）
         ↓ 午夜自进化审核通过
         → 提取精华 → 写入 SKILL.md 对应章节
         → 原始文件标 ✅ ABSORBED（保留为来源追溯）
         → changelog.md 记录吸收项
```

## ABSORBED 标记格式

在原始参考文件头部添加吸收状态块：

```markdown
# <原标题> — vX.Y ✅ ABSORBED

> **吸收状态**：✅ 已于 YYYY-MM-DD 吸收到 SKILL.md §<章节号> <章节名>
> **吸收位置**：短剧大师 SKILL.md → §<章节号>
> **本文件保留为历史参考/原始来源追溯**
```

## 吸收后检查清单

```
□ 原始精华完整迁移到 SKILL.md（不遗漏表格/公式/代码块）
□ SKILL.md 新建小节标注版本号（如 `（v6.2.4 新增）`）
□ 来源标注在章节引用块中（`> **来源**：... 吸收日期：YYYY-MM-DD。`）
□ 原始文件标 ✅ ABSORBED
□ changelog.md 记录（含吸收位置 + 来源 + 日期）
```

## 已有吸收案例

| 原始文件 | 吸收到 | 日期 |
|---------|--------|------|
| `five-dimension-combat-prompt.md` | SKILL.md §2.1.1 | 2026-06-24 |
| `appendix-o-three-point-lighting.md` | SKILL.md 附录O.2 | 2026-06-24 |
