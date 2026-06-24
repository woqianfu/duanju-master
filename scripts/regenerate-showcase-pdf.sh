#!/bin/bash
# 短剧大师 — 展示文件 PDF 重生成脚本
# 用法: ./regenerate-showcase-pdf.sh
# 依赖: Google Chrome (macOS: /Applications/Google Chrome.app/Contents/MacOS/Google Chrome)
# 输入: assets/短剧大师v6.2.4_完整功能介绍.html
# 输出: assets/短剧大师v6.2.4_完整功能介绍.pdf

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SKILL_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
ASSETS_DIR="$SKILL_DIR/assets"

HTML_FILE="$ASSETS_DIR/短剧大师v6.2.4_完整功能介绍.html"
PDF_FILE="$ASSETS_DIR/短剧大师v6.2.4_完整功能介绍.pdf"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# 检测 Chrome
if [ ! -f "$CHROME" ]; then
    echo "❌ Chrome not found at $CHROME"
    echo "   Install Google Chrome or set CHROME env var"
    exit 1
fi

# 检测 HTML
if [ ! -f "$HTML_FILE" ]; then
    echo "❌ HTML not found at $HTML_FILE"
    exit 1
fi

echo "📄 Regenerating PDF from HTML..."
echo "   Input:  $HTML_FILE"
echo "   Output: $PDF_FILE"

# Chrome headless 参数说明:
#   --headless            无头模式
#   --disable-gpu         禁用 GPU（避免渲染异常）
#   --no-sandbox          跳过沙箱（本地文件场景安全）
#   --print-to-pdf        输出 PDF
#   --no-pdf-header-footer 去除页眉页脚
#   --virtual-time-budget  等待页面渲染完成的最大时间(ms)
"$CHROME" \
    --headless --disable-gpu --no-sandbox \
    --print-to-pdf="$PDF_FILE" \
    --no-pdf-header-footer \
    --virtual-time-budget=30000 \
    "file://$HTML_FILE" \
    2>&1 | grep -v "crashpad\|Trying to load\|crashpad\|Operation not permitted" || true

if [ -f "$PDF_FILE" ]; then
    SIZE=$(ls -lh "$PDF_FILE" | awk '{print $5}')
    echo "✅ PDF generated: $SIZE"
else
    echo "❌ PDF generation failed"
    exit 1
fi
