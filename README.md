# FIT TO CLOSE Landing Page

Next.js Landing Page mit Tailwind CSS und Supabase Integration.

## Setup

### 1. Dependencies installieren

```bash
npm install
```

### 2. Supabase Credentials konfigurieren

Die `.env.local` Datei muss folgende Variablen enthalten (mit `NEXT_PUBLIC_` Präfix für Browser-Zugriff):

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Wichtig:** Wenn deine bestehende `.env.local` andere Variablennamen verwendet (z.B. `SUPABASE_URL`), benenne sie um zu:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3. Development Server starten

```bash
npm run dev
```

Die Seite ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Projektstruktur

```
├── app/
│   ├── layout.tsx      # Root Layout
│   ├── page.tsx        # Hauptseite
│   └── globals.css     # Globale Styles mit Tailwind
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── StackSection.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── lib/
│   └── supabase.ts     # Supabase Client
└── .env.local          # Umgebungsvariablen (nicht im Git)
```

## Supabase Client

Der Supabase Client ist in `lib/supabase.ts` konfiguriert und kann in allen Komponenten importiert werden:

```typescript
import { supabase } from '@/lib/supabase'
```

## Build

```bash
npm run build
npm start
```
