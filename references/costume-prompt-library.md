# AI 漫剧服装提示词库 v2.0 — 造型大师参数增强

> **来源**: 哈哈编程《AI漫剧服装类提示词大全》5大系列 (2026)
> **吸收日期**: 2026-06-30（古风仙侠）→ 2026-06-30（战斗机甲/都市时尚/赛博朋克/角色身份）
> **关联**: 造型大师 6维参数 → ③ 服饰结构 ④ 配色方案 ⑤ 材质渲染
> **灯光大师联动**: 服装材质→决定主辅轮选型(见各款式「灯光建议」及第三章联动矩阵)
> **用途**: AI 短剧角色服装 prompt 词精准选配，按题材/身份/气质三维索引
> **配套**: `references/character-hairstyle-encyclopedia.md`（108种发型）
> **版本**: v2.0（5大类×8款=40款）

---

## 使用方式

```
「造型大师，为[角色名]设计[题材]·[身份]服装 → 输出款式编号+关键词+灯光联动建议」
```

**题材速查**：

| 题材 | 编号 | 核心看点 |
|:----|:----:|:--------|
| 🏔️ 古风仙侠 | 1.1-1.8 | 轻纱/刺绣/玄铁甲/飘带 |
| 🤖 战斗机甲 | 2.1-2.8 | 金属/机械/能量/护甲 |
| 🏙️ 都市时尚 | 3.1-3.8 | 剪裁/机能/极简/通勤 |
| 🌃 赛博朋克 | 4.1-4.8 | 霓虹/全息/义体/数据流 |
| 🎭 角色身份 | 5.1-5.7 | 身份定调·风格统一（含「万能公式」5.8） |

---

## 一、古风仙侠类（8种款式）

### 1.1 仙侠长袍战斗服
| 维度 | 内容 |
|------|------|
| **风格** | 玄色银纹·铠甲护肩·战斗飘逸 |
| **身份** | 出战修士 / 战斗型弟子 |
| **关键词** | `玄色、银纹、铠甲护肩、飘带飞扬、御剑凌空` |
| **英文Prompt** | `dark mystical robe, silver patterns, armored shoulder guards, flowing ribbons, flying sword immortal, dynamic battle pose, layered dark blue and black fabric` |
| **配色** | #1a1a2e 玄黑 / #c0c0c0 银纹 / #0d0d1a 内衬 |
| **材质** | 金属肩甲 + 丝绸主体 + 纱质飘带 |
| **灯光建议** | 主光侧逆(kicker)凸显银纹反光 + 轮廓光打亮飘带体积 → 「逆光剪影」或「赛博冷光」 |

### 1.2 宗门弟子服
| 维度 | 内容 |
|------|------|
| **风格** | 青蓝宽袖·云纹刺绣·清雅素净 |
| **身份** | 普通/内门弟子 |
| **关键词** | `青蓝、宽袖、云纹刺绣、束腰带、清雅素净` |
| **英文Prompt** | `cyan-blue sect disciple robe, wide sleeves, cloud pattern embroidery, cinched waist belt, elegant and pure, layered scholar robes, traditional Chinese academy style` |
| **配色** | #4a7c8e 青蓝 / #f0ece4 内领白 / #d4af37 云纹金线 |
| **材质** | 棉麻主体 + 刺绣纹理 + 丝质束带 |
| **灯光建议** | 柔光漫射(soft diffused)凸显布料质感 + 避免强侧光防纹理过曝 → 「柔光窗光」 |

### 1.3 白衣剑仙飘逸袍
| 维度 | 内容 |
|------|------|
| **风格** | 纯白层叠·流云刺绣·轻纱飘逸 |
| **身份** | 剑仙 / 上仙 / 主角高光 |
| **关键词** | `白衣、宽袖、流云刺绣、轻纱层叠、御剑气质` |
| **英文Prompt** | `white sword immortal robe, flowing wide sleeves, cloud embroidery, layered translucent gauze, ethereal elegance, wind-blown fabric, immortal presence, pure white with silver accents` |
| **配色** | #ffffff 纯白 / #e8e8e8 层纱 / #c0c0c0 银线绣 |
| **材质** | 多层轻纱 + 绸缎主身 + 透明外罩 |
| **灯光建议** | 背光逆射(backlight)穿透轻纱造光晕 + 正面补柔和面光 → 「圣光穿透」或「柔光背光」 |

### 1.4 魔道黑金战袍
| 维度 | 内容 |
|------|------|
| **风格** | 黑金暗纹·锋利肩甲·邪魅冷峻 |
| **身份** | 魔尊 / 反派主角 |
| **关键词** | `黑金、暗纹、锋利肩甲、暗红内衬、邪魅冷峻` |
| **英文Prompt** | `black-gold demon lord battle robe, dark hidden patterns, spiked sharp shoulder armor, dark red inner lining, sinister cold aura, dark energy wisps, menacing presence` |
| **配色** | #0a0a0a 墨黑 / #d4af37 金纹 / #8b0000 暗红内衬 |
| **材质** | 硬甲片 + 金属饰件 + 厚重锦缎 |
| **灯光建议** | 底光(underlight)从下往上打 + 轮廓光勾金纹边缘 → 「底光恶魔」或「阴森侧光」 |

### 1.5 女主汉服轻纱飘带
| 维度 | 内容 |
|------|------|
| **风格** | 粉紫轻纱·飘带翻跃·柔美灵动 |
| **身份** | 女主角 / 仙子 / 大家闺秀 |
| **关键词** | `粉紫、轻纱、飘带翻跃、花纹刺绣、柔美灵动` |
| **英文Prompt** | `pink-purple hanfu, light gauze, dancing flying ribbons, floral embroidery, soft and lively, flowing fabric, feminine grace, traditional Chinese dress with waterfall sleeves` |
| **配色** | #d8b4d0 粉紫 / #f5e6f0 浅纱 / #c9a0b0 花绣 |
| **材质** | 轻纱外层 + 丝绸内衬 + 刺绣花边 |
| **灯光建议** | 正面柔光渲染肤色 + 侧逆光透纱显飘带层次 → 「柔光窗光」+ 背光补层次 |

### 1.6 宫廷贵族华服
| 维度 | 内容 |
|------|------|
| **风格** | 金色刺绣·珠玉流苏·雍容华贵 |
| **身份** | 王后 / 公主 / 贵妃 |
| **关键词** | `金色、刺绣、珠玉流苏、层叠裙摆、雍容华贵` |
| **英文Prompt** | `golden imperial court dress, intricate embroidery, pearl and jade tassels, layered skirt hem, luxurious and noble, phoenix motifs, elaborate hair ornaments, regal bearing` |
| **配色** | #d4af37 帝金 / #8b0000 朱红边 / #ffffff 珍珠白 |
| **材质** | 织锦缎 + 珍珠串饰 + 金属发冠 |
| **灯光建议** | 多点布光：顶光打下突出金冠 + 正面柔光照珠宝反光 + 侧光显刺绣层次 → 「三点布光」 |

### 1.7 江湖侠客布衣
| 维度 | 内容 |
|------|------|
| **风格** | 棕灰麻布·斗笠披风·洒脱不羁 |
| **身份** | 游侠 / 流浪剑客 |
| **关键词** | `棕灰、麻布、束带、披风斗笠、洒脱不羁` |
| **英文Prompt** | `brown-gray hemp cloth ranger, conical bamboo hat, draped cloak, tied leather belt, free and unrestrained, rugged wandering swordsman, earthy tones, weathered traveler` |
| **配色** | #6b5b4e 棕灰 / #8b7355 麻本色 / #3d2b1f 革带 |
| **材质** | 粗麻 + 皮革 + 竹编斗笠 |
| **灯光建议** | 硬光侧照(hard side light)强化粗粝质感 + 斗笠在面部投射半阴影 → 「阴森侧光」或「硬朗侧光」 |

### 1.8 仙门长老道袍
| 维度 | 内容 |
|------|------|
| **风格** | 淡紫道袍·祥云纹路·仙风道骨 |
| **身份** | 掌门 / 长老 / 师尊 |
| **关键词** | `淡紫、道袍、祥云纹路、玉佩配饰、仙风道骨` |
| **英文Prompt** | `light purple Taoist elder robe, auspicious cloud patterns, jade pendant accessories, immortal demeanor, wooden staff, flowing white beard, wise spiritual master, celestial authority` |
| **配色** | #9b8ea8 淡紫 / #f5f0e8 内衬白 / #6b8e6b 玉佩绿 |
| **材质** | 厚缎 + 佩玉 + 木杖 |
| **灯光建议** | 顶侧光(top-side light)突出皱纹/胡须立体感 + 柔和轮廓光显仙气 → 「古典顶光」或「柔光窗光」 |

---

## 二、战斗机甲类（8种款式）

### 2.1 未来机甲战斗装甲
| 维度 | 内容 |
|------|------|
| **风格** | 银蓝装甲·机械骨架·冷光能量 |
| **身份** | 未来战士 / 机甲驾驶员 |
| **关键词** | `银蓝装甲、机械骨架、肩甲护臂、冷光能量、未来战士` |
| **英文Prompt** | `silver-blue mecha battle armor, mechanical exoskeleton, raised shoulder guards, cold blue energy glow, futuristic warrior, sleek metallic plating, cybernetic joints, weapon-ready stance` |
| **配色** | #c0c0c0 银白 / #1e90ff 冷光蓝 / #2f2f2f 骨架 |
| **材质** | 合金装甲板 + 液压关节 + 发光能量核心 |
| **灯光建议** | 冷色调侧逆光(kicker)强化金属质感 + 蓝光从装甲缝隙内透 → 「赛博冷光」 |

### 2.2 外骨骼动力装甲
| 维度 | 内容 |
|------|------|
| **风格** | 重装外骨骼·液压关节·工业力量 |
| **身份** | 重装支援兵 / 机械工兵 |
| **关键词** | `动力外骨骼、液压关节、强化臂甲、工业结构、重装支援` |
| **英文Prompt** | `powered exoskeleton armor, hydraulic joints, reinforced arm guards, industrial structure, heavy support unit, thick metal plating, exposed mechanical frame, rugged military design` |
| **配色** | #4a4a4a 铁灰 / #8b4513 锈铜 / #ff4500 警示红 |
| **材质** | 重型合金 + 液压管 + 橡胶缓冲层 |
| **灯光建议** | 顶光(top light)突出立体感+硬朗阴影 → 「硬朗侧光」或「工业顶光」 |

### 2.3 赛博战士能量护甲
| 维度 | 内容 |
|------|------|
| **风格** | 霓虹光效·能量回路·紫蓝发光 |
| **身份** | 赛博战士 / 街头佣兵 |
| **关键词** | `霓虹光效、能量回路、赛博义体、紫蓝发光、街头战斗` |
| **英文Prompt** | `cyber warrior energy armor, neon lighting effects, energy circuit patterns, purple-blue glowing, cybernetic implants, street combat gear, luminous trim, futuristic urban fighter` |
| **配色** | #0a0a2e 深紫底 / #8a2be2 霓虹紫 / #00bfff 发光蓝 |
| **材质** | 碳纤维主体 + 发光LED线路 + 半透明能量甲 |
| **灯光建议** | 多色光混合：紫+蓝霓虹光从装甲底部打+顶部冷白光 → 「霓虹光污染」 |

### 2.4 重型战争机甲
| 维度 | 内容 |
|------|------|
| **风格** | 黑红重甲·厚重装板·战场统帅 |
| **身份** | 战争机甲 / 指挥官机型 |
| **关键词** | `黑红重甲、厚重装板、火力模块、机械压迫感、战场统帅` |
| **英文Prompt** | `heavy war mecha, black-red heavy armor, thick armor plates, weapon modules, mechanical menace, battlefield commander, massive shoulder cannons, imposing silhouette` |
| **配色** | #1a1a1a 黑 / #8b0000 暗红 / #ff6347 警示色 |
| **材质** | 复合装甲板 + 火力模组 + 散热栅格 |
| **灯光建议** | 底光(underlight)从下方打红色警示光 → 「底光恶魔」+ 强轮廓光勾大型 |

### 2.5 AI强化战斗服
| 维度 | 内容 |
|------|------|
| **风格** | 智能面甲·蓝白光纹·流线机能 |
| **身份** | AI战士 / 特种作战兵 |
| **关键词** | `智能面甲、蓝白光纹、战术UI、流线机能、高级科技感` |
| **英文Prompt** | `AI enhanced combat suit, smart visor helmet, blue-white light patterns, tactical UI overlay, streamlined functional design, high-tech tactical gear, sleek futuristic soldier` |
| **配色** | #f0f0f0 白 / #4682b4 钢蓝 / #00ffff 蓝白纹 |
| **材质** | 智能织物 + 平板装甲 + 全息界面 |
| **灯光建议** | 正面柔光+蓝光从战术UI投射到面甲 → 「柔光窗光」+ 冷色补光 |

### 2.6 纳米战斗紧身战衣
| 维度 | 内容 |
|------|------|
| **风格** | 纳米材质·银白质感·敏捷作战 |
| **身份** | 渗透者 / 快速突击兵 |
| **关键词** | `贴身战衣、纳米材质、轻量防护、银白质感、敏捷作战` |
| **英文Prompt** | `nanomaterial combat bodysuit, form-fitting, silver-white texture, lightweight protection, agile combat, flexible fabric with metallic sheen, high-tech sleek design` |
| **配色** | #e8e8e8 银白 / #c0c0c0 金属反光 / #f5f5f5 高光 |
| **材质** | 纳米纤维 + 柔性装甲层 + 自修复涂层 |
| **灯光建议** | 背光逆射(backlight)穿透纳米材质的半透明质感 → 「柔光背光」+ 高光轮廓 |

### 2.7 科幻防护装甲服
| 维度 | 内容 |
|------|------|
| **风格** | 灰金配色·模块护甲·多层结构 |
| **身份** | 太空陆战队 / 星际士兵 |
| **关键词** | `模块护甲、多层结构、防御护盾、灰金配色、细节精密` |
| **英文Prompt** | `sci-fi protective armor, gray-gold color scheme, modular armor plates, multi-layer structure, defense shield generator, precise mechanical details, tactical military gear` |
| **配色** | #696969 灰 / #d4af37 金 / #2f4f4f 暗绿灰 |
| **材质** | 钛合金板 + 凯夫拉内衬 + 能量护盾发生器 |
| **灯光建议** | 三点布光均匀照亮多层结构 + 金色处用侧逆光强调 → 「古典顶光」+ 暖色kicker |

### 2.8 高机动侦察机甲
| 维度 | 内容 |
|------|------|
| **风格** | 轻型侦察·绿色光效·快速突击 |
| **身份** | 侦察机兵 / 先遣队 |
| **关键词** | `轻型侦察、绿色光效、背部推进器、机动组件、快速突击` |
| **英文Prompt** | `high-mobility scout mecha, lightweight reconnaissance frame, green energy glow, back thrusters, mobile assault components, agile mechanical design, rapid deployment` |
| **配色** | #2e8b57 军绿 / #00ff7f 荧光绿 / #1a1a2e 深色骨架 |
| **材质** | 碳纤维骨架 + 推进器喷口 + 传感器阵列 |
| **灯光建议** | 绿色冷光从关节内透+侧面硬光勾轮廓 → 「赛博冷光」+ 硬朗侧光 |

---

## 三、都市时尚类（8种款式）

### 3.1 高级都市职业西装
| 维度 | 内容 |
|------|------|
| **风格** | 深灰西装·利落肩线·都市精英 |
| **身份** | 企业高管 / 商业精英 |
| **关键词** | `修身剪裁、深灰西装、利落肩线、质感衬衫、都市精英` |
| **英文Prompt** | `tailored urban business suit, dark gray, sharp shoulder lines, textured dress shirt, urban elite, confident stance, modern corporate style, slim fit` |
| **配色** | #4a4a4a 深灰 / #f5f5f5 白衬衫 / #8b0000 领带红 |
| **材质** | 精纺羊毛 + 丝绸衬衫 + 皮质皮鞋 |
| **灯光建议** | 顶部柔光(top soft)模拟办公室顶灯+正面补光修饰面部 → 「三点布光」柔化版本 |

### 3.2 未来科技感街头穿搭
| 维度 | 内容 |
|------|------|
| **风格** | 机能外套·未来面料·潮流街头 |
| **身份** | 潮流青年 / 科技玩家 |
| **关键词** | `机能外套、未来面料、层次叠穿、科技配件、潮流街头` |
| **英文Prompt** | `futuristic streetwear, functional tech jacket, innovative fabric, layered look, tech accessories, trendy urban style, smart casual with cyberpunk hints` |
| **配色** | #2f4f4f 暗灰绿 / #87ceeb 科技蓝 / #f5f5dc 米白 |
| **材质** | 防水机能面料 + 反光条 + 模块化配件 |
| **灯光建议** | 街景混合光：冷色霓虹顶光+暖色橱窗侧光 → 「霓虹光污染」轻量版 |

### 3.3 黑客风格连帽外套
| 维度 | 内容 |
|------|------|
| **风格** | 黑灰配色·拉链细节·神秘冷感 |
| **身份** | 黑客 / 匿名者 |
| **关键词** | `连帽外套、黑灰配色、拉链细节、神秘冷感、黑客气质` |
| **英文Prompt** | `hacker style hooded jacket, black-gray配色, zipper details, mysterious cold vibe, hood up, digital nomad, anonymous street look, dark urbanwear` |
| **配色** | #1a1a1a 黑 / #696969 灰 / #00ff00 屏幕绿(点缀) |
| **材质** | 尼龙外套 + 金属拉链 + 屏幕发光 |
| **灯光建议** | 单侧硬光(hard side)打在面部造成半遮挡阴影→ 「阴森侧光」 |

### 3.4 商业精英极简西装
| 维度 | 内容 |
|------|------|
| **风格** | 极简线条·黑白灰·低调高级 |
| **身份** | 创业者 / 投资经理 |
| **关键词** | `极简线条、黑白灰、干净版型、低调高级、商务感` |
| **英文Prompt** | `minimalist business suit, black-white-gray palette, clean silhouette, understated luxury, business professional, high-end minimalism, no-lapel modern cut` |
| **配色** | #2f2f2f 炭灰 / #ffffff 白内搭 / #c0c0c0 银配件 |
| **材质** | 羊毛混纺 + 丝光棉 + 金属腕表 |
| **灯光建议** | 柔光漫射(soft diffused)均匀打亮无明显阴影 → 「柔光窗光」 |

### 3.5 都市潮流机能风
| 维度 | 内容 |
|------|------|
| **风格** | 机能风·工装细节·多口袋 |
| **身份** | 街头潮人 / 城市探索者 |
| **关键词** | `机能风、工装细节、多口袋设计、灰黑配色、都市潮感` |
| **英文Prompt** | `urban techwear style, cargo details, multi-pocket design, gray-black配色, urban fashion, tactical streetwear, harness straps, oversized silhouette` |
| **配色** | #4a4a4a 深灰 / #2f2f2f 黑 / #8b7355 棕皮带 |
| **材质** | 尼龙机能布 + 金属扣件 + 弹力织带 |
| **灯光建议** | 街景混合光：冷天光+人工暖色侧补 → 「柔光窗光」+ 暖色kicker |

### 3.6 科技公司员工制服
| 维度 | 内容 |
|------|------|
| **风格** | 蓝白配色·简约制服·团队气质 |
| **身份** | 科技公司员工 / 工程师 |
| **关键词** | `简约制服、蓝白配色、舒适面料、品牌感、团队气质` |
| **英文Prompt** | `tech company uniform, blue-white color scheme, comfortable fabric, brand identity, professional casual, modern office wear, ID badge accessory` |
| **配色** | #f0f8ff 白底 / #4169e1 皇家蓝 / #c0c0c0 银扣 |
| **材质** | 混纺衬衫 + 西裤 + 蓝绳工牌 |
| **灯光建议** | 均匀自然光模拟办公室环境 → 「柔光窗光」 |

### 3.7 夜店霓虹风时尚造型
| 维度 | 内容 |
|------|------|
| **风格** | 霓虹点缀·修身廓形·夜色氛围 |
| **身份** | 夜店常客 / 时尚达人 |
| **关键词** | `霓虹点缀、修身廓形、时尚感、夜色氛围、吸睛造型` |
| **英文Prompt** | `nightclub neon fashion, fitted silhouette, trendy nightlife outfit,霓虹accents, sexy chic, leather jacket, choker accessory, vibrant night atmosphere` |
| **配色** | #0a0a0a 黑底 / #ff69b4 粉霓虹 / #8a2be2 紫光 |
| **材质** | 皮革 + 亮片面料 + 金属饰品 |
| **灯光建议** | 多色霓虹光混合：粉色底光+紫色侧光+蓝色背光 → 「霓虹光污染」 |

### 3.8 都市轻奢通勤套装
| 维度 | 内容 |
|------|------|
| **风格** | 柔和配色·轻奢通勤·高级时尚 |
| **身份** | 白领女性 / 时尚博主 |
| **关键词** | `轻奢通勤、简洁套装、柔和配色、质感面料、高级时尚` |
| **英文Prompt** | `urban light-luxury commute suit, soft color palette, quality fabric,高级时尚, elegant business casual, neutral tones, structured blazer, feminine professional` |
| **配色** | #f5deb3 米白 / #d2b48c 杏色 / #8b7355 棕 |
| **材质** | 精纺羊毛 + 真丝衬衫 + 皮包 |
| **灯光建议** | 正面柔光(soft front light)模拟天光+后侧轮廓光显套装剪裁 → 「柔光窗光」 |

---

## 四、赛博朋克类（8种款式）

### 4.1 赛博朋克霓虹发光外套
| 维度 | 内容 |
|------|------|
| **风格** | 霓虹发光·全息图案·街头科技 |
| **身份** | 赛博市民 / 夜城浪子 |
| **关键词** | `霓虹光效、发光线条、全息图案、未来科技、反光面料、街头风格` |
| **英文Prompt** | `cyberpunk neon jacket, glowing light strips, holographic patterns, futuristic tech, reflective fabric, street style, LED embedded clothing, night city wanderer` |
| **配色** | #0a0a0a 黑底 / #ff1493 粉霓虹 / #00bfff 蓝光 |
| **材质** | 反光尼龙 + LED灯带 + 全息贴片 |
| **灯光建议** | 环境全暗+服装自体发光作为唯二光源 → 「霓虹光污染」+ 强背光 |

### 4.2 数据流视觉增强战斗服
| 维度 | 内容 |
|------|------|
| **风格** | 数据流光纹·全息界面·战斗紧身 |
| **身份** | 数据战士 / 网络侦探 |
| **关键词** | `数据流、发光纹路、增强视觉、全息界面、战斗紧身、高科技材料` |
| **英文Prompt** | `data flow combat suit, glowing digital patterns, enhanced vision visor, holographic interface, tight-fit battle gear, high-tech material, streaming data lines` |
| **配色** | #0a0a2e 深蓝底 / #8a2be2 紫数据 / #00ffff 青光纹 |
| **材质** | 智能织物 + 全息投影层 + 数据接口 |
| **灯光建议** | 紫蓝双色光从服装各面透出+数据流图形投射到面部 → 「全息光效」 |

### 4.3 未来都市反叛者穿搭
| 维度 | 内容 |
|------|------|
| **风格** | 破损层叠·涂鸦元素·街头反叛 |
| **身份** | 地下反抗军 / 街头游击 |
| **关键词** | `破损风格、多层叠穿、机能束带、涂鸦元素、暗黑色系、街头反叛` |
| **英文Prompt** | `future rebel outfit, distressed style, multi-layer dressing, functional straps, graffiti elements, dark color palette, street rebel aesthetic, post-apocalyptic punk` |
| **配色** | #1a1a1a 黑 / #8b0000 锈红 / #ffd700 涂鸦黄 |
| **材质** | 破损牛仔 + 弹力束带 + 喷漆涂鸦 |
| **灯光建议** | 硬侧光(hard side)强化破损粗糙质感+底层暖光透出 → 「硬朗侧光」 |

### 4.4 全息投影科技服装
| 维度 | 内容 |
|------|------|
| **风格** | 全息投影·透明材质·动态光效 |
| **身份** | 科技先知 / 全息艺人 |
| **关键词** | `全息投影、透明材质、动态光效、科技界面、未来系统、虚拟交互` |
| **英文Prompt** | `holographic projection clothing, transparent material, dynamic light effects, tech interface, future system, virtual interaction, holographic display garment` |
| **配色** | #e0ffff 透明底 / #ff00ff 品红全息 / #00ffff 青全息 |
| **材质** | 透明聚合物 + 全息投射器 + LED矩阵 |
| **灯光建议** | 全息光从服装表面向外投射+环境暗背景 → 「全息光效」+ 背光透射 |

### 4.5 机械义体融合服装
| 维度 | 内容 |
|------|------|
| **风格** | 机械义体·金属融合·硬核机能 |
| **身份** | 义体改造人 / 赛博佣兵 |
| **关键词** | `机械义体、金属融合、科技植入、硬核机能、机械线条、未来感` |
| **英文Prompt** | `cybernetic prosthetic fusion outfit, mechanical implants, metal body integration, tech augmentation, hardcore functional, robotic limb, exposed cybernetics` |
| **配色** | #2f2f2f 机械灰 / #8b0000 连接红 / #c0c0c0 金属银 |
| **材质** | 钛合金义肢 + 碳纤维 + 生物接口 |
| **灯光建议** | 机械部分用冷色硬光(冷白kicker)显露金属+肉身部分用暖柔光 → 「赛博冷光」+「柔光窗光」双区 |

### 4.6 紫蓝霓虹战斗装甲
| 维度 | 内容 |
|------|------|
| **风格** | 紫蓝霓虹·发光装甲·厚重防护 |
| **身份** | 赛博雇佣兵 / 机甲警备 |
| **关键词** | `紫蓝霓虹、发光装甲、能量核心、厚重防护、未来战甲、机械结构` |
| **英文Prompt** | `purple-blue neon battle armor, glowing armor plates, energy core, heavy protection, future battle armor, mechanical structure, neon-lit tactical gear` |
| **配色** | #2e0a4e 紫黑 / #8a2be2 霓虹紫 / #00bfff 光蓝 |
| **材质** | 聚合装甲 + 能量核心 + 霓虹灯管 |
| **灯光建议** | 紫蓝双色光从装甲缝隙透出+环境暗 → 「霓虹光污染」+ 底光 |

### 4.7 AI改造人类服饰
| 维度 | 内容 |
|------|------|
| **风格** | 芯片植入·发光接口·人体增强 |
| **身份** | AI改造人 / 数字灵魂 |
| **关键词** | `AI改造、芯片植入、发光接口、智能材料、人体增强、未来科技` |
| **英文Prompt** | `AI modified human outfit, chip implant visible, glowing interface ports, smart materials, human enhancement, futuristic techwear, neural interface ports` |
| **配色** | #1a1a2e 深蓝 / #ff1493 品红接口 / #00ff7f 绿数据 |
| **材质** | 生物植入体 + 智能织物 + 芯片模块 |
| **灯光建议** | 芯片接口处发出品红色光作为局部光源+其他区域暗 → 「底光恶魔」+ 局部点光 |

### 4.8 赛博特工机能战斗服
| 维度 | 内容 |
|------|------|
| **风格** | 机能战术·隐蔽设计·多口袋系统 |
| **身份** | 赛博特工 / 企业间谍 |
| **关键词** | `机能战术、隐蔽设计、发光标识、多口袋、高科技材料、未来感` |
| **英文Prompt** | `cyber agent tactical combat suit, functional tactical design, concealed carry, glowing identification markers, multiple pockets, high-tech materials, stealth operative` |
| **配色** | #0a0a0a 战术黑 / #00ced1 青蓝标识 / #696969 暗灰 |
| **材质** | 消光织物 + 模块化挂载系统 + 夜光标识 |
| **灯光建议** | 半暗环境+夜光标识作为定位光源 → 「阴森侧光」+ 微光补光 |

---

## 五、角色身份类（8种款式）

### 5.1 冷面剑客专属战袍
| 维度 | 内容 |
|------|------|
| **风格** | 深色战袍·金属护肩·江湖侠气 |
| **身份** | 冷面剑客 / 孤独侠士 |
| **关键词** | `冷峻气质、长剑、深色战袍、金属护肩、江湖侠气` |
| **英文Prompt** | `cold-faced swordsman battle robe, long sword at waist, dark warrior robe, metal shoulder guard, jianghu chivalry, lone wanderer, silent killer gaze` |
| **配色** | #1a1a2e 玄黑 / #c0c0c0 银护甲 / #8b0000 血纹 |
| **材质** | 皮革战袍 + 金属护肩 + 剑鞘绳结 |
| **灯光建议** | 侧逆光(kicker)冷调照亮剑刃+面部半阴影 → 「阴森侧光」或「逆光剪影」 |

### 5.2 天才黑客标志性穿搭
| 维度 | 内容 |
|------|------|
| **风格** | 连帽外套·暗色系·科技配件 |
| **身份** | 天才黑客 / 暗网高手 |
| **关键词** | `连帽外套、暗色系、电子设备、科技配件、神秘感` |
| **英文Prompt** | `genius hacker outfit, hooded jacket, dark color scheme, electronic devices, tech accessories, mysterious vibe, multiple screens, cyber deck accessories` |
| **配色** | #0a0a0a 黑 / #00ff00 终端绿 / #4682b4 蓝设备灯 |
| **材质** | 尼龙外套 + 金属设备 + 发光屏幕 |
| **灯光建议** | 面部被屏幕绿光照亮的局部光(local screen light)+面罩半遮 → 「底光恶魔」(绿版) |

### 5.3 修仙天才弟子服装
| 维度 | 内容 |
|------|------|
| **风格** | 青白长袍·轻纱层叠·仙气少年 |
| **身份** | 修仙天才 / 宗门翘楚 |
| **关键词** | `宗门弟子、青白长袍、轻纱层叠、束腰、仙气少年` |
| **英文Prompt** | `cultivation genius disciple, blue-white long robe, layered gauze, cinched waist, ethereal youth, misty background, celestial prodigy, floating fabric` |
| **配色** | #e0f0f0 青白 / #f0f8ff 白纱 / #b0c4de 淡蓝 |
| **材质** | 多层轻纱 + 绸缎 + 玉腰带 |
| **灯光建议** | 背光逆射(backlight)+雾效 → 「柔光背光」或「圣光穿透」 |

### 5.4 AI觉醒者身份服装
| 维度 | 内容 |
|------|------|
| **风格** | 未来材质·发光纹路·智能装甲 |
| **身份** | AI觉醒者 / 数字生命 |
| **关键词** | `未来材质、发光纹路、智能装甲、数据流、科幻感` |
| **英文Prompt** | `AI awakener outfit, futuristic material, glowing circuit patterns, smart armor, data stream effects, sci-fi style, awakened consciousness, digital being` |
| **配色** | #f0f0f0 白 / #00bfff 蓝光纹 / #c0c0c0 银 |
| **材质** | 智能织物 + 全息投影 + 数据接口 |
| **灯光建议** | 蓝光从服装纹路内透+周围暗环境 → 「赛博冷光」或「全息光效」 |

### 5.5 魔族王子战斗长袍
| 维度 | 内容 |
|------|------|
| **风格** | 黑红配色·暗纹披风·王族气场 |
| **身份** | 魔族王子 / 暗夜君主 |
| **关键词** | `黑红配色、暗纹披风、锐利肩甲、王族气场、邪魅冷感` |
| **英文Prompt** | `demon prince battle robe, black-red color scheme, dark patterned cape, sharp shoulder armor, royal aura, sinister cold nobility, crimson inner lining` |
| **配色** | #0a0a0a 黑 / #8b0000 血红 / #ffd700 金纹 |
| **材质** | 厚重织锦 + 硬甲 + 披风 |
| **灯光建议** | 底光(underlight)红光照亮下颚+轮廓光勾肩甲边缘 → 「底光恶魔」 |

### 5.6 未来指挥官制服
| 维度 | 内容 |
|------|------|
| **风格** | 银灰制服·功能肩章·领导气场 |
| **身份** | 舰队指挥官 / 星际将领 |
| **关键词** | `挺括制服、功能肩章、银灰配色、战术结构、领导气场` |
| **英文Prompt** | `future commander uniform, crisp military制服, functional epaulets, silver-gray color scheme, tactical structure, leadership aura, space fleet officer` |
| **配色** | #c0c0c0 银灰 / #2f4f4f 军蓝 / #ffd700 金色徽章 |
| **材质** | 精纺军装呢 + 金属徽章 + 皮质腰带 |
| **灯光建议** | 顶光(top light)加强制服的挺括感+前置补光凸显徽章 → 「古典顶光」+ 正面柔光 |

### 5.7 流浪者废土风服装
| 维度 | 内容 |
|------|------|
| **风格** | 破旧披风·做旧皮革·生存气质 |
| **身份** | 废土流浪者 / 末日幸存者 |
| **关键词** | `破旧披风、做旧皮革、多层穿搭、风沙感、生存气质` |
| **英文Prompt** | `wasteland wanderer outfit, tattered cape, distressed leather, multi-layer dressing, sand-worn texture, survivalist look, post-apocalyptic traveler, weathered gear` |
| **配色** | #6b5b4e 土棕 / #8b7355 皮革色 / #3d2b1f 深褐 |
| **材质** | 旧皮革 + 粗麻 + 金属废料 |
| **灯光建议** | 硬侧光(hard side)从一侧打来强化破旧质感+沙尘效果 → 「硬朗侧光」 |

### 5.8 角色身份万能公式 🏆
| 维度 | 内容 |
|------|------|
| **风格** | 身份+世界观+材质+风格+功能·五维组合 |
| **身份** | **任意角色** — 用公式生成 |
| **关键词** | `身份、世界观、材质、风格、功能` |
| **英文Prompt** | `[Identity] + [World Setting] + [Material] + [Style] + [Function]` |
| **公式** | `身份 = 剑客/黑客/将领/浪人/官员...` · `世界观 = 古风/未来/废土/都市/赛博` · `材质 = 丝绸/金属/皮革/纳米/麻布` · `风格 = 极简/华丽/机能/朋克/仙气` · `功能 = 战斗/隐蔽/礼仪/通勤/探索` |
| **示例** | `剑客+古风+丝绸+仙气+战斗 → 冷面剑客战袍` · `黑客+赛博+尼龙+机能+隐蔽 → 赛博特工机能服` |
| **灯光建议** | 根据最终选定的材质→查第三章联动矩阵自动匹配 |

---

## 六、灯光大师联动矩阵（v2.0 扩展版）

> 造型大师选定服装后 → 灯光大师根据材质/配色自动匹配灯光方案

### 基础联动矩阵

| 材质类型 | 适用款式 | 灯光方案 | 原因 |
|:---------|:---------|:---------|:-----|
| 金属/甲片 | 1.1/1.4/2.1-2.8/5.1/5.5 | **侧逆光(kicker)** + 轮廓光 | 金属需要定向光产生反光，柔光会让甲片变灰 |
| 轻纱/透明 | 1.3/1.5/5.3/4.4 | **逆光(backlight)** + 正面补光 | 逆光穿透纱质显通透感，正面补光保肤色 |
| 粗麻/棉布 | 1.7/5.7 | **硬侧光(hard side)** | 硬光强化粗粝质感，柔光会让粗麻变"塑料" |
| 刺绣/锦缎 | 1.2/1.6/1.8/5.5 | **三点布光** + 柔光 | 刺绣需要均匀光线让纹理可见，硬光会造成局部过曝 |
| 深色/黑色 | 1.1/1.4/4.3/5.1/5.5 | **强轮廓光** + 底光 | 深色吸光，必须靠轮廓光分离主体与背景 |
| 发光/霓虹 | 2.3/3.7/4.1/4.6 | **霓虹光污染** + 底光 | 服装自体发光，环境光要暗才能突出LED/霓虹效果 |
| 全息/投影 | 4.2/4.4/5.4 | **全息光效** + 暗背景 | 全息投影需要从服装向外发光，背景越暗投影越明显 |
| 纳米/智能织物 | 2.6/2.5 | **背光逆射** + 高光轮廓 | 纳米材质半透明，背光可显科技质感 |
| 机能/尼龙 | 3.2/3.5/4.8 | **混合光**（冷天光+暖补光） | 机能面料需要混合光体现户外+都市融合感 |
| 面料剪裁（西装） | 3.1/3.4/3.8 | **正面柔光** + 顶光 | 西装需要均匀光线展示剪裁线条，硬光会产生难看阴影 |

### 霓虹光污染·细分方案

| 款式 | 灯光方案 | 光色组合 |
|:-----|:---------|:---------|
| 3.7 夜店风 | **粉+紫+蓝**三色混合 | 粉底光+#8a2be2紫侧光+#00bfff蓝背光 |
| 4.1 霓虹发光外套 | **粉蓝双色**服装自体发光 | #ff1493粉带+#00bfff蓝线 |
| 4.6 紫蓝战斗装甲 | **紫蓝双色**装甲缝隙透出 | #8a2be2紫光+#00bfff蓝光+暗环境 |
| 2.3 赛博战士 | **紫+蓝+白**多色 | 紫底光+蓝侧光+白顶光 |

### 角色身份万能公式·灯光联动

```
万能公式5.8  →  提取材质关键词  →  查本矩阵  →  自动输出灯光方案
```

**示例流程**：
1. 用户：`「造型大师，设计一个废土狙击手」`
2. 造型大师：套用万能公式 → **身份=狙击手** · **世界观=废土** · **材质=旧皮革+金属** · **风格=生存** · **功能=隐蔽**
3. 服装库输出：5.7 流浪者废土风
4. 联动矩阵匹配：**粗麻/棉布/旧皮革** → **硬侧光**
5. 灯光大师：选用O.8「硬朗侧光」+ 沙尘体积光效果

---

## 七、通用关键词池（跨题材·v2.0）

### 材质层叠
| 中文 | 英文 Prompt | 适用题材 |
|:----|:------------|:---------|
| 飘逸 | `flowing, ethereal, wind-blown` | 古风仙侠 |
| 层叠 | `layered, multi-layered, overlapping fabric` | 古风/都市/机甲 |
| 轻纱 | `gauze, translucent silk, sheer fabric` | 古风仙侠/角色身份 |
| 金属质感 | `metallic, chrome, brushed steel` | 战斗机甲/赛博 |
| 霓虹发光 | `neon glow, LED, luminous strip` | 赛博朋克/都市 |
| 机能面料 | `tech fabric, functional textile, waterproof` | 都市时尚/赛博 |
| 全息投影 | `holographic, light projection, prismatic` | 赛博朋克 |
| 纳米材质 | `nanomaterial, smart fabric, adaptive weave` | 机甲/赛博/AI |

### 配饰点缀
| 中文 | 英文 Prompt | 题材 |
|:----|:------------|:----|
| 飘带 | `ribbon, sash, flowing ribbon` | 古风 |
| 玉佩 | `jade pendant, ornamental jade` | 古风 |
| 流苏 | `tassel, beaded tassel, dangling ornament` | 古风/宫廷 |
| 斗笠 | `bamboo hat, conical hat` | 古风/角色身份(流浪者) |
| 护甲 | `armored shoulder, metal pauldron` | 古风/机甲/角色身份 |
| 面甲/护目镜 | `visor, tactical goggles, smart helmet` | 机甲/赛博/都市 |
| 工牌 | `ID badge, lanyard, access card` | 都市时尚 |
| 芯片接口 | `neural port, chip slot, data jack` | 赛博/AI |

### 气质关键词
| 风格方向 | 关键词 |
|:---------|:-------|
| 战斗系 | `dynamic, battle-ready, powerful stance, wind-blown` |
| 仙气系 | `ethereal, celestial, otherworldly, graceful` |
| 邪魅系 | `sinister, menacing, dark aura, cold gaze` |
| 江湖系 | `rugged, weathered, free-spirited, untamed` |
| 华贵系 | `regal, luxurious, noble bearing, opulent` |
| 未来系 | `futuristic, cutting-edge, sleek, high-tech` |
| 街头系 | `urban, streetwise, edgy, contemporary` |
| 朋克系 | `rebellious, punk, anti-establishment, raw` |
| 精英系 | `professional, polished, authoritative, refined` |
| 废土系 | `post-apocalyptic, survivalist, worn, desolate` |

---

## 八、题材速查表

| 你设计的题材 | 🔥 最常用款 | 灯光联动 | 发型配套 |
|:------------|:-----------|:---------|:---------|
| 🏔️ 仙侠·战斗场景 | 1.1 仙侠战斗服 ↗ 2.3 赛博(科技仙侠版) | 侧逆光+轮廓光 | 发型库·先秦/神话题材 |
| 🏔️ 仙侠·宗门日常 | 1.2 弟子服 ↗ 5.3 天才弟子 | 柔光漫射 | 发型库·秦汉/魏晋 |
| 🏔️ 仙侠·高光出场 | 1.3 白衣剑仙 ↗ 1.8 长老道袍 | 逆光+圣光穿透 | 发型库·神话题材 |
| 🏔️ 仙侠·反派角色 | 1.4 魔道黑金 ↗ 5.5 魔族王子 | 底光+暗红侧光 | 发型库·魔族/反派 |
| 🏔️ 仙侠·女主角 | 1.5 汉服轻纱 ↗ 1.6 宫廷华服 | 正面柔光+侧逆 | 发型库·汉唐/神话题材 |
| 🏔️ 仙侠·流浪角色 | 1.7 侠客布衣 ↗ 5.7 废土(武侠废土版) | 硬侧光 | 发型库·江湖遊侠 |
| 🤖 机甲·主力战斗 | 2.1 未来机甲 ↗ 2.4 重型机甲 | 冷色侧逆光 | —(头盔覆盖) |
| 🤖 机甲·轻量侦察 | 2.8 侦察机甲 ↗ 2.5 AI强化服 | 绿色冷光内透 | —(面甲覆盖) |
| 🤖 机甲·赛博融合 | 2.3 赛博战士 ↗ 4.6 紫蓝装甲 | 霓虹光污染 | 发型库·未來科幻 |
| 🏙️ 都市·精英场合 | 3.1 高级西装 ↗ 3.4 极简西装 | 正面柔光+顶光 | 发型库·现代简约 |
| 🏙️ 都市·街头潮流 | 3.2 机能风 ↗ 3.5 潮流机能 | 混合街光 | 发型库·现代潮流 |
| 🏙️ 都市·夜店场景 | 3.7 夜店霓虹 ↗ 4.1 赛博发光 | 粉紫蓝霓虹混光 | 发型库·现代潮流 |
| 🌃 赛博·街头 | 4.1 霓虹发光 ↗ 4.3 反叛者 | 霓虹光污染 | 发型库·未來科幻 |
| 🌃 赛博·战斗 | 4.6 紫蓝装甲 ↗ 4.8 特工战斗服 | 紫蓝双色光 | 发型库·未來科幻 |
| 🎭 通用·强势角色 | 5.6 未来指挥官 ↗ 5.2 天才黑客 | 顶光+冷光 | 按世界观选发型 |
| 🎭 通用·底层角色 | 5.7 废土流浪者 ↗ 5.1 冷面剑客 | 硬侧光 | 按世界观选发型 |
| 🎭 万能公式 | **5.8 五维组合** — 自由创作 | 查联动矩阵 | 按世界观选发型 |

---

## 九、与造型大师6维参数对应关系

```
造型大师6维参数 → 服装库映射
━━━━━━━━━━━━━━━━━━━━━━━━━━
① 脸型五官   → (发型库/角色设计)
② 发型发饰   → character-hairstyle-encyclopedia.md（108种发型）
③ 服饰结构   → 选择题材+款式编号（1.1-5.8）+ 配套配饰（第七章）
④ 配色方案   → 款式内色值 + 通用池气质色调整
⑤ 材质渲染   → 款式内材质 + 灯光联动矩阵（第三章→直接指导灯光大师选光）
⑥ 气质人设   → 通用池气质关键词（第七章）+ 款式身份标签
```

> **完整调用链**：造型大师定人设 → 选题材→选款式→6维参数化 → 服装库输出提示词 → 灯光大师联动矩阵自动匹配灯光方案 → 发型库配套 ✅
