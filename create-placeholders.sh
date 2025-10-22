#!/bin/bash

# Скрипт для создания placeholder изображений для лендинга MalO
# Требует: ImageMagick (sudo apt install imagemagick)

echo "🎨 Создание placeholder изображений для MalO Landing..."

# Проверка наличия ImageMagick
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick не установлен!"
    echo "Установите: sudo apt install imagemagick"
    exit 1
fi

# Создаем директорию если не существует
mkdir -p static/img

# Цвета
BG_DARK="#1a1a2e"
BG_LIGHT="#16213e"
TEXT_COLOR="#ffffff"

echo "📱 Создание phone-mockup-chat.png (800x1600)..."
convert -size 800x1600 \
    gradient:$BG_DARK-$BG_LIGHT \
    -gravity center \
    -pointsize 60 -fill $TEXT_COLOR \
    -annotate +0-200 "MalO" \
    -pointsize 40 \
    -annotate +0-100 "Chat App" \
    -pointsize 30 \
    -annotate +0+0 "Phone Mockup" \
    -pointsize 20 \
    -annotate +0+100 "Replace with real screenshot" \
    static/img/phone-mockup-chat.png

echo "📸 Создание screenshot-chat.png (1080x1920)..."
convert -size 1080x1920 \
    gradient:$BG_DARK-$BG_LIGHT \
    -gravity center \
    -pointsize 80 -fill $TEXT_COLOR \
    -annotate +0-300 "💬" \
    -pointsize 50 \
    -annotate +0-100 "Chat with MalO" \
    -pointsize 30 \
    -annotate +0+50 "Screenshot 1" \
    -pointsize 20 \
    -annotate +0+150 "Replace with actual chat UI" \
    static/img/screenshot-chat.png

echo "📋 Создание screenshot-list.png (1080x1920)..."
convert -size 1080x1920 \
    gradient:$BG_DARK-$BG_LIGHT \
    -gravity center \
    -pointsize 80 -fill $TEXT_COLOR \
    -annotate +0-300 "📱" \
    -pointsize 50 \
    -annotate +0-100 "Chat List" \
    -pointsize 30 \
    -annotate +0+50 "Screenshot 2" \
    -pointsize 20 \
    -annotate +0+150 "Replace with actual list UI" \
    static/img/screenshot-list.png

echo "🔒 Создание screenshot-privacy.png (1080x1920)..."
convert -size 1080x1920 \
    gradient:$BG_DARK-$BG_LIGHT \
    -gravity center \
    -pointsize 80 -fill $TEXT_COLOR \
    -annotate +0-300 "🛡️" \
    -pointsize 50 \
    -annotate +0-100 "Privacy & License" \
    -pointsize 30 \
    -annotate +0+50 "Screenshot 3" \
    -pointsize 20 \
    -annotate +0+150 "Replace with actual settings" \
    static/img/screenshot-privacy.png

echo "🖼️  Создание og-cover.png (1200x630)..."
convert -size 1200x630 \
    gradient:$BG_DARK-$BG_LIGHT \
    -gravity center \
    -pointsize 80 -fill $TEXT_COLOR \
    -annotate +0-100 "MalO" \
    -pointsize 40 \
    -annotate +0-20 "SCP-1471 Chat App" \
    -pointsize 30 \
    -annotate +0+60 "Fan-made • Android" \
    -pointsize 20 \
    -annotate +0+150 "Social Media Preview Image" \
    static/img/og-cover.png

echo ""
echo "✅ Placeholder изображения созданы!"
echo ""
echo "📁 Файлы находятся в: static/img/"
echo ""
echo "⚠️  Это временные placeholder'ы!"
echo "Замените их на реальные изображения перед запуском."
echo ""
echo "📖 Читайте IMAGE_GUIDE.md для подробностей"
echo ""

# Показываем созданные файлы
ls -lh static/img/*.png

echo ""
echo "🚀 Теперь можете запустить: npm start"
