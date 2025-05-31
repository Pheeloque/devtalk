# DevTalk

## 📋 Overview / Общие сведения

DevTalk - это приложение для проведения технических собеседований, созданное на основе **Next.js**. Оно упрощает взаимодействие между кандидатами и собеседующими, предоставляя собеседующему возможность управлять встречами, а кандидату - использовать редактор кода прямо во время звонка.

---

## 🚀 Основные функции

### 👥 Для собеседующих:

- **Управление звонками:** Назначайте, организуйте и присоединяйтесь к видеозвонкам с кандидатами с помощью **Stream**.
- **Планирование звонков:** Создавайте расписание собеседований, которое автоматически отображается на панели кандидата.
- **Запись сессий:** Доступ к записям прошедших собеседований для анализа и оценки.

### 📝 Для кандидатов:

- **Панель кандидата:** Просматривайте предстоящие собеседования и присоединяйтесь к звонкам в одном месте.
- **Управление задачами:** Доступ к задачам, назначенным собеседующим, прямо во время звонка.

### 💻 Во время звонка:

- **Зона задач:** Пространство для решения задач, включая выбор заданий, языка и редактор кода.
- **Панель участников:** Просматривайте и взаимодействуйте с другими участниками звонка.

---

## 🛠️ Стек технологий:

- **Next.js**
- **Convex**
- **Clerk**
- **Stream**
- **Shadcn/UI & Lucide**
- **Toast**

```
devtalk
├─ components.json
├─ convex
│  ├─ auth.config.ts
│  ├─ comments.ts
│  ├─ http.ts
│  ├─ interviews.ts
│  ├─ README.md
│  ├─ schema.ts
│  ├─ tsconfig.json
│  ├─ users.ts
│  └─ _generated
│     ├─ api.d.ts
│     ├─ api.js
│     ├─ dataModel.d.ts
│     ├─ server.d.ts
│     └─ server.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ cpp.png
│  ├─ csharp.png
│  ├─ go.png
│  ├─ java.png
│  ├─ javascript.png
│  ├─ php.png
│  ├─ python.png
│  ├─ swift.png
│  └─ typescript.png
├─ README.md
├─ src
│  ├─ actions
│  │  └─ stream.actions.ts
│  ├─ app
│  │  ├─ (admin)
│  │  │  └─ dashboard
│  │  │     └─ page.tsx
│  │  ├─ (root)
│  │  │  ├─ (home)
│  │  │  │  └─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  ├─ meeting
│  │  │  │  └─ [id]
│  │  │  │     └─ page.tsx
│  │  │  ├─ recordings
│  │  │  │  └─ page.tsx
│  │  │  └─ schedule
│  │  │     ├─ InterviewScheduleUI.tsx
│  │  │     └─ page.tsx
│  │  ├─ favicon.ico
│  │  ├─ fonts
│  │  │  ├─ GeistMonoVF.woff
│  │  │  └─ GeistVF.woff
│  │  ├─ globals.css
│  │  └─ layout.tsx
│  ├─ components
│  │  ├─ ActionCard.tsx
│  │  ├─ CodeEditor.tsx
│  │  ├─ CommentDialog.tsx
│  │  ├─ DashboardButton.tsx
│  │  ├─ EndCallButton.tsx
│  │  ├─ LoaderUI.tsx
│  │  ├─ MeetingCard.tsx
│  │  ├─ MeetingModal.tsx
│  │  ├─ MeetingRoom.tsx
│  │  ├─ MeetingSetup.tsx
│  │  ├─ ModeToggle.tsx
│  │  ├─ Navbar.tsx
│  │  ├─ providers
│  │  │  ├─ ConvexClerkProvider.tsx
│  │  │  ├─ StreamClientProvider.tsx
│  │  │  └─ ThemeProvider.tsx
│  │  ├─ RecordingCard.tsx
│  │  ├─ ui
│  │  │  ├─ avatar.tsx
│  │  │  ├─ badge.tsx
│  │  │  ├─ button.tsx
│  │  │  ├─ calendar.tsx
│  │  │  ├─ card.tsx
│  │  │  ├─ dialog.tsx
│  │  │  ├─ dropdown-menu.tsx
│  │  │  ├─ input.tsx
│  │  │  ├─ label.tsx
│  │  │  ├─ resizable.tsx
│  │  │  ├─ scroll-area.tsx
│  │  │  ├─ select.tsx
│  │  │  ├─ switch.tsx
│  │  │  └─ textarea.tsx
│  │  └─ UserInfo.tsx
│  ├─ constants
│  │  └─ index.ts
│  ├─ hooks
│  │  ├─ useGetCallById.ts
│  │  ├─ useGetCalls.ts
│  │  ├─ useMeetingActions.ts
│  │  └─ useUserRole.ts
│  ├─ lib
│  │  └─ utils.ts
│  └─ middleware.ts
├─ tailwind.config.ts
└─ tsconfig.json

```