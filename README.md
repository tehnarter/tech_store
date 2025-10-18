assets

Містить шрифти (fonts) і стилі (styles).

assets/styles

Загальні стилі проєкту.

assets/styles/utils

Функціональні SCSS-файли: змінні, міксіни, функції, placeholders.

❗ Не задавайте в цих файлах жодних стилів.

components

Компоненти проєкту.
Можна зберігати всі разом або групувати за сторінками чи секціями.
Приклад:

components/
 ├─ main/
 │   ├─ Hero.vue
 │   └─ Contact.vue
 └─ about/
     ├─ Hero.vue
     └─ Slider.vue


Nuxt автоматично формує імена компонентів:
MainHero, MainContact, AboutHero, AboutSlider.

composables

Функції, що перевикористовуються в проєкті.
Можуть містити Vue API (рефи, хуки).
Файли з кореня цієї папки імпортуються автоматично.

pages

Vue-файли, які формують маршрути:

pages/
 ├─ index.vue       → '/'
 ├─ about.vue       → '/about'
 └─ blog/
     ├─ index.vue   → '/blog'
     └─ [slug].vue  → '/blog/:slug'

plugins

Файли для реєстрації Nuxt-плагінів.

public

Статичні файли: зображення, відео, PDF, robots.txt тощо.

server/api

API-ендпоїнти. Детальніше — Nuxt Docs
.

utils

JS-функціонал, що не використовує Vue API (чистий JavaScript).
Використовується для допоміжної логіки.

⚙️ Основні файли
assets/styles/

_css-variables.scss — глобальні CSS-змінні

_fonts.scss — підключення шрифтів

_general.scss — базові стилі

_hovers.scss — класи для hover

_typography.scss — типографіка

_vue-transitions.scss — анімації для <transition>

main.scss — головний файл стилів, імпортується у nuxt.config.ts:

css: ["@/assets/styles/main.scss"]

assets/styles/utils/

_vars.scss — змінні

_mixins.scss — міксіни

_functions.scss — функції

_placeholders.scss — шаблони

_breakpoints.scss — брейкпоінти

index.scss — імпортує все вище.
