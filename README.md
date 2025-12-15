
# Points Track Landing - React 19 TypeScript

Современная посадочная страница для сервиса аналитики рекламных кампаний Points Track, построенная на React 19 с TypeScript.

## 🎯 Особенности

- ⚛️ **React 19** - последняя версия с новыми возможностями
- 📘 **TypeScript** - полная типизация для надежности
- ⚡ **Vite** - молниеносная сборка и разработка
- 📱 **Responsive Design** - отлично выглядит на всех устройствах
- 🎨 **Современный дизайн** - красивый и функциональный интерфейс
- 🚀 **GitHub Pages** - готово к публикации

## 📁 Структура проекта

```
points-track-landing/
├── public/                 # Статические файлы
├── src/
│   ├── components/        # React компоненты
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Benefits.tsx
│   │   ├── Results.tsx
│   │   ├── Features.tsx
│   │   ├── How.tsx
│   │   ├── Materials.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── styles/           # CSS файлы
│   │   └── main.css
│   ├── shared/           # Общие компоненты
│   │   └── components.tsx
│   ├── App.tsx           # Главный компонент
│   ├── main.tsx          # Входная точка
│   └── index.html        # HTML шаблон
├── vite.config.ts        # Конфиг Vite
├── tsconfig.json         # Конфиг TypeScript
├── package.json          # Зависимости
└── README.md            # Этот файл
```

## 🚀 Быстрый старт

### 1. Клонирование репозитория

```bash
git clone https://github.com/ВАШ_ЛОГИН/points-track-landing.git
cd points-track-landing
```

### 2. Установка зависимостей

```bash
npm install
```

### 3. Локальная разработка

```bash
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173) в браузере.

## 📦 Доступные команды

```bash
# Локальная разработка
npm run dev

# Сборка для production
npm run build

# Предпросмотр production версии
npm run preview

# Сборка и публикация на GitHub Pages
npm run deploy
```

## 🌐 Публикация на GitHub Pages

### Шаг 1: Подготовка репозитория

1. Создайте новый репозиторий на GitHub
2. Замените `ВАШ_ЛОГИН` на ваше имя пользователя в:
   - `vite.config.ts` (значение `base`)
   - `package.json` (значение `homepage`)

### Шаг 2: Инициализация Git (если еще не сделано)

```bash
git init
git add .
git commit -m "Initial commit: React 19 TypeScript landing page"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/points-track-landing.git
git push -u origin main
```

### Шаг 3: Установка gh-pages

```bash
npm install --save-dev gh-pages
```

### Шаг 4: Публикация

```bash
npm run deploy
```

### Шаг 5: Включение GitHub Pages

1. Перейдите в **Settings** вашего репозитория
2. Нажмите **Pages** в левом меню
3. В разделе **Source** выберите:
   - **Deploy from a branch**
   - Branch: `gh-pages`
   - Folder: `/(root)`
4. Нажмите **Save**

### Шаг 6: Проверка

Через 1-2 минуты ваше приложение будет доступно по адресу:
```
https://ВАШ_ЛОГИН.github.io/points-track-landing/
```

## 🎨 Структура компонентов

### Header
Верхняя навигация со ссылками на различные секции страницы. Включает мобильное меню.

### Hero
Главная секция с броским заголовком и статистикой.

### Benefits
Секция основных преимуществ с детальным описанием.

### Results
Сетка с примерами результатов клиентов.

### Features
Список ключевых особенностей сервиса.

### How
Пошаговое описание работы сервиса.

### Materials
Подборка полезных статей и материалов.

### FAQ
Часто задаваемые вопросы с раскрывающимися ответами.

### Footer
Подвал с информацией о компании и ссылками.

## 🛠️ Технологический стек

- **React 19** - UI библиотека
- **TypeScript** - типизация
- **Vite** - сборщик и dev server
- **CSS3** - стили (CSS Grid, Flexbox)
- **react-scroll** - плавная прокрутка к секциям

## 📱 Поддержка браузеров

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Кастомизация

### Изменение цветов

Отредактируйте CSS переменные в `src/styles/main.css`:

```css
:root {
  --color-primary: #0066cc;      /* Основной цвет */
  --color-text: #1a1a1a;         /* Цвет текста */
  --color-background: #ffffff;   /* Фон */
  /* ... и другие */
}
```

### Добавление нового компонента

1. Создайте файл в `src/components/MyComponent.tsx`
2. Импортируйте в `src/App.tsx`
3. Добавьте в render

## 📚 Дополнительные ресурсы

- [React 19 документация](https://react.dev)
- [Vite документация](https://vitejs.dev)
- [TypeScript документация](https://www.typescriptlang.org)
- [GitHub Pages документация](https://pages.github.com)

## 🤝 Поддержка и помощь

Если возникли проблемы:

1. Проверьте, что `base` в `vite.config.ts` совпадает с названием репозитория
2. Убедитесь, что GitHub Pages включена в Settings
3. Очистите кэш браузера (Ctrl+Shift+Delete)
4. Проверьте консоль браузера на ошибки (F12)

## 📝 Лицензия

MIT License - используйте свободно!

---

**Готово!** Ваше React 19 TypeScript приложение опубликовано на GitHub Pages! 🎉


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
