# 📋 Чек-лист для запуска лендинга MalO

## ✅ Что уже сделано

- [x] Создана компонентная структура лендинга
- [x] 8 блоков согласно ТЗ
- [x] Адаптивная верстка (mobile-first)
- [x] SEO оптимизация (H1, H2, alt-тексты)
- [x] Комментарии на русском, UI на английском
- [x] TypeScript типизация
- [x] CSS Modules для изоляции стилей

## 🔲 Что нужно сделать перед запуском

### 1. Изображения (критично)

Добавьте в `static/img/`:

```
static/img/
├── google-play-badge.webp     # Официальный бейдж Google Play
├── phone-mockup-chat.png     # Мокап телефона для Hero
├── screenshot-chat.png       # Скрин чата с MalO
├── screenshot-list.png       # Скрин списка чатов
├── screenshot-privacy.png    # Скрин настроек/privacy
└── og-cover.png              # Open Graph (1200x630px)
```

**Где взять изображения:**

- Google Play badge: https://play.google.com/intl/en_us/badges/
- Мокапы телефонов: https://mockuphone.com/ или Figma
- Скриншоты: из вашего приложения
- OG image: создайте в Canva/Figma (1200x630px)

### 2. Обновите ссылки

#### В `Hero.tsx` (строка 21):

```tsx
href = "https://play.google.com/store/apps/details?id=YOUR_REAL_APP_ID";
```

#### В `FinalCTA.tsx` (строка 13):

```tsx
href = "https://play.google.com/store/apps/details?id=YOUR_REAL_APP_ID";
```

### 3. Проверьте внутренние страницы

Убедитесь, что существуют:

- [ ] `/privacy` - Privacy Policy
- [ ] `/contacts` - Contact page
- [ ] `/docs/about-scp` - License & Attribution
- [ ] `/terms` - Terms of Service (опционально)
- [ ] `/data-deletion` - Data Deletion Policy (для Google Play)

### 4. Настройте SEO метаданные

#### В `docusaurus.config.ts` добавьте:

```typescript
export default {
  // ...
  themeConfig: {
    metadata: [
      { property: "og:title", content: "MalO — SCP-1471 Chat App for Android" },
      { property: "og:description", content: "Chat with MalO (SCP-1471). Fan-made app, atmospheric SCP experience." },
      { property: "og:image", content: "https://scp-1471.app/img/og-cover.png" },
      { property: "og:url", content: "https://scp-1471.app" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MalO — SCP-1471 Chat App for Android" },
      { name: "twitter:description", content: "Chat with MalO (SCP-1471). Fan-made, atmospheric SCP experience." },
      { name: "twitter:image", content: "https://scp-1471.app/img/og-cover.png" },
    ],
  },
};
```

### 5. Настройте robots.txt и sitemap

#### `static/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://scp-1471.app/sitemap.xml
```

### 6. Google Analytics (опционально)

В `docusaurus.config.ts`:

```typescript
themeConfig: {
  gtag: {
    trackingID: 'G-XXXXXXXXXX',
    anonymizeIP: true,
  },
}
```

### 7. Оптимизация изображений

Перед загрузкой:

- [ ] Сконвертируйте в WebP формат
- [ ] Сожмите через TinyPNG или Squoosh
- [ ] Phone mockup: макс 800px ширина
- [ ] Screenshots: макс 400px ширина
- [ ] OG image: точно 1200x630px

### 8. Тестирование

- [ ] Запустите `npm start` и проверьте все блоки
- [ ] Проверьте на мобильном (Chrome DevTools)
- [ ] Проверьте все ссылки (кликабельность)
- [ ] Проверьте загрузку изображений
- [ ] Проверьте FAQ аккордеоны (открываются/закрываются)
- [ ] Проверьте адаптивность на разных разрешениях

### 9. Lighthouse аудит

Перед деплоем запустите:

```bash
npm run build
npm run serve
```

Откройте Chrome DevTools → Lighthouse → Run audit

**Цели:**

- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: 100

## 🚀 Деплой

### GitHub Pages (бесплатно)

1. В `docusaurus.config.ts`:

```typescript
url: 'https://your-username.github.io',
baseUrl: '/repository-name/',
organizationName: 'your-username',
projectName: 'repository-name',
```

2. Деплой:

```bash
npm run deploy
```

### Vercel (рекомендуется)

1. Подключите репозиторий к Vercel
2. Build command: `npm run build`
3. Output directory: `build`
4. Настройте кастомный домен `scp-1471.app`

### Netlify

1. Подключите репозиторий
2. Build command: `npm run build`
3. Publish directory: `build`

## 📱 Финальные проверки перед публикацией

- [ ] Все изображения загружаются
- [ ] Ссылки на Google Play работают
- [ ] Внутренние ссылки (Privacy, Contacts) работают
- [ ] Мобильная версия корректна
- [ ] FAQ аккордеоны работают
- [ ] CTA кнопки видны и кликабельны
- [ ] OG теги настроены (проверьте на https://www.opengraph.xyz/)
- [ ] Нет консольных ошибок
- [ ] Lighthouse > 90 баллов

## 🎨 Опциональные улучшения

- [ ] Добавить анимации (AOS, Framer Motion)
- [ ] Добавить видео демо приложения
- [ ] Добавить отзывы пользователей
- [ ] Добавить счетчик скачиваний
- [ ] Добавить live chat (Intercom, Crisp)
- [ ] Добавить A/B тестирование CTA кнопок
- [ ] Добавить блог интеграцию
- [ ] Добавить email subscription форму

## 📞 Поддержка

Если что-то не работает:

1. Проверьте консоль браузера (F12)
2. Проверьте terminal где запущен `npm start`
3. Удалите `.docusaurus` и `node_modules`, переустановите:
   ```bash
   rm -rf .docusaurus node_modules
   npm install
   npm start
   ```

## 🎯 Метрики успеха

После запуска отслеживайте:

- Bounce rate < 40%
- Time on page > 2 минуты
- CTR на Google Play button > 5%
- Скорость загрузки < 3 секунд
- Mobile traffic > 60%

---

**Готово к запуску?** Пройдите все чекбоксы выше! ✨
