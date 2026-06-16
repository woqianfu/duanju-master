# 微信公众号草稿箱API发布指南 / WeChat Draft Publish Guide

> 适用于认证服务号的图文消息发布。通过草稿箱API，可以直接将HTML排版的文章发布为公众号草稿，无需手动编辑。

## 前置条件

| 项目 | 说明 |
|------|------|
| 公众号类型 | 已认证服务号（个人订阅号无此API权限） |
| 必要参数 | AppID + AppSecret（后台→设置与开发→基本配置） |
| IP白名单 | 调用API的服务器IP必须在后台白名单中 |
| 封面图片 | 需要先上传为永久素材获取media_id |

## API调用流程

### Step 1: 获取 access_token

```python
import requests
aid = "your_app_id"
sec = "your_app_secret"
r = requests.get("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + aid + "&secret=" + sec)
token = r.json()["access_token"]
```

### Step 2: 上传封面（永久素材）

```python
with open("cover.png", "rb") as f:
    r2 = requests.post(
        "https://api.weixin.qq.com/cgi-bin/material/add_material?access_token=" + token + "&type=image",
        files={"media": ("cover.png", f, "image/png")}
    )
cover_id = r2.json()["media_id"]
```

### Step 3: 创建草稿

```python
payload = {
    "articles": [{
        "title": "标题（建议≤15字，禁止特殊符号:™等）",
        "author": "作者名（2-8个中文字，需与公众号设置的作者名一致）",
        "digest": "摘要（一句话概括）",
        "content": "<section><p>HTML内容...支持富文本</p></section>",
        "content_source_url": "",
        "thumb_media_id": cover_id,
        "need_open_comment": 1,
        "only_fans_can_comment": 0,
    }]
}
r3 = requests.post("https://api.weixin.qq.com/cgi-bin/draft/add?access_token=" + token, json=payload)
```

## 已知坑点 / Known Pitfalls

### ⚠️ title字段限制
- 不能包含 `™` `®` `©` 等特殊符号 → 直接导致 `errcode: 45003 title size out of limit`
- 建议纯中文+数字+英文，不超过15个字
- 冒号 `：` 也可能触发超限错误，用空格替代

### ⚠️ author字段限制
- 必须是公众号后台**已设置的作者名**，不是随便填
- 错误码: `45110 author size out of limit`
- 实测「短剧大师」「i短剧大师」都可能不通过，用「老王」这种简单的反而通过
- 如果不确定后台设置了什么作者名，可以先测试一个极简内容

### ⚠️ content中的HTML干扰
- 微信API会解析content中的HTML标签
- 如果HTML的`<title>`标签内容过长，可能被计入标题计算
- 建议在发送前清理HTML中的title: `re.sub(r'<title>.*?</title>', '<title>简短标题</title>', html)`

### ⚠️ token过期
- 每次获取token后尽快使用
- 获取token次数有限制（每天2000次），但一般够用
- token有效期2小时

## 发布后

草稿创建成功后返回 `media_id`，需要去公众号后台→草稿箱→手动点**发表**。API本身不能直接发布，只能创建草稿。

## 完整发布脚本模板

```python
import requests

aid = "your_app_id"
sec = "your_app_secret"

# Step 1
r = requests.get("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + aid + "&secret=" + sec)
token = r.json()["access_token"]

# Step 2
with open("cover.png", "rb") as f:
    r2 = requests.post("https://api.weixin.qq.com/cgi-bin/material/add_material?access_token=" + token + "&type=image", files={"media": ("c.png", f, "image/png")})
cid = r2.json()["media_id"]

# Step 3
with open("article.html", "r", encoding="utf-8") as f:
    html = f.read()

import re
html = re.sub(r'<title>.*?</title>', '<title>标题</title>', html)

payload = {"articles": [{
    "title": "纯文本标题",
    "author": "作者名",
    "digest": "摘要",
    "content": html,
    "content_source_url": "",
    "thumb_media_id": cid,
    "need_open_comment": 1,
    "only_fans_can_comment": 0,
}]}

r3 = requests.post("https://api.weixin.qq.com/cgi-bin/draft/add?access_token=" + token, json=payload)
print(r3.json())
```

── 短剧大师™ · 短剧大师微短剧创作系统规则引擎 · DCI:RDCS00ANT.202606159652337429 ──
