# 展示文件 PDF 重生成工作流

> **关联脚本**: `scripts/regenerate-showcase-pdf.sh`
> **创建日期**: 2026-06-24
> **触发场景**: 版本号更新后重新生成展示用 PDF

## 工作流

1. 修改 `assets/短剧大师vX.X.X_完整功能介绍.html` 中的版本引用
2. 重命名旧文件（HTML + PDF + poster）到新版本号
3. 运行 `scripts/regenerate-showcase-pdf.sh`
4. 验证输出 PDF 存在且大小合理（~2MB）

## 脚本依赖

- Google Chrome（macOS 路径: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`）
- 本地 HTML 文件（`file://` 协议访问）

## 关键参数

| 参数 | 值 | 说明 |
|------|-----|------|
| `--headless` | - | 无头模式 |
| `--print-to-pdf` | 输出路径 | PDF 目标文件 |
| `--no-pdf-header-footer` | - | 去除页眉页脚（干净输出） |
| `--virtual-time-budget` | 30000 | 等待渲染完成的 ms 数（复杂页面需 30s） |
| `--no-sandbox` | - | 本地文件无需沙箱 |

## 历史执行记录

| 日期 | 输入版本 | 输出大小 |
|------|---------|---------|
| 2026-06-24 | v6.2.4 | 1.88 MB |
