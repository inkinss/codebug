# AGENTS.md

## Stack
- Next.js (App Router) + TypeScript
- TailwindCSS + shadcn/ui
- PostgreSQL (Neon) + Prismabunx --bun shadcn@latest init
- Better Auth (GitHub OAuth)
- Zod para validaciones

## Comandos
- `bun run dev` — correr en desarrollo
- `npx prisma studio` — ver la base de datos visualmente
- `npx prisma migrate dev` — aplicar cambios al schema

## Convenciones
- Server Components por defecto, "use client" solo cuando haga falta
- Server Actions para mutaciones (crear post, votar, comentar)
- Nombres de archivos en kebab-case