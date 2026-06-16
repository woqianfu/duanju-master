# 短剧大师Agent行为准则补充

> 以下规则是基于实战教训的补充，嵌入SKILL.md的Agent行为准则章节。

## 省钱数据铁律

所有省钱计算器中的基线数据必须来自**用户实际支出**，禁止拍脑袋估算。

- **当前实际数据**：每集约720积分 ≈ ¥72（标准API定价，非Mini特惠价）
- **Mini会员3.8折后**：约¥27/集
- 任何时候使用省钱数据，必须确认用户当前使用的定价方案

## 微信公众号发布坑点

通过草稿箱API发布图文消息时：

- **title**：不能含™®©等特殊符号（否则 `45003 title size out of limit`）
- **author**：必须与后台设置的作者名一致（否则 `45110 author size out of limit`）
- **HTML中的&lt;title&gt;**：微信会解析content中的title标签，建议提前清理或缩短
- 详情见 `references/wechat-draft-publish-guide.md`
