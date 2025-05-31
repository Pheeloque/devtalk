# DevTalk

## 🛠️ Стек технологий:

- **Next.js**
- **Convex**
- **Clerk**
- **Stream**
- **Shadcn/UI, Tailwind & Lucide**
- **Toast**

## .env.local
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
CONVEX_DEPLOYMENT=...
NEXT_PUBLIC_CONVEX_URL=...
NEXT_PUBLIC_STREAM_API_KEY=...
STREAM_SECRET_KEY=...
```

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