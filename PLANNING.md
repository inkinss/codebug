# PLANNING.md

## Fase 0 — Setup
- [ ] Proyecto Next.js creado
- [ ] Crear cuenta en Neon, crear base de datos, copiar el connection string
- [ ] Instalar Prisma (`npm install prisma --save-dev`, `npx prisma init`)
- [ ] Conectar Prisma a Neon (`.env` con `DATABASE_URL`)
- [ ] Instalar Tailwind (si no vino ya) y shadcn/ui
- [ ] Crear `.env.example` y agregar `.env` al `.gitignore`

## Fase 1 — Modelo de datos
- [ ] Diseñar el schema de Prisma: `User`, `Post`, `Comment`, `Vote`, `Tag`
- [ ] Primera migración (`npx prisma migrate dev`)
- [ ] Revisar la data en Prisma Studio para confirmar que las relaciones están bien

## Fase 2 — Autenticación
- [ ] Configurar Better Auth con GitHub OAuth
- [ ] Página de login / logout
- [ ] Proteger rutas (no se puede postear sin estar logueado)

## Fase 3 — CRUD del core
- [ ] Crear post (formulario + Server Action + validación con Zod)
- [ ] Listar posts en el feed (Server Component, leyendo de Prisma)
- [ ] Ver post individual (página dinámica `/post/[slug]`)
- [ ] Comentar en un post
- [ ] Votar (up/down) con Server Action

## Fase 4 — Feed "daily.dev style"
- [ ] Ordenar feed por recientes / más votados
- [ ] Filtrar por tags
- [ ] Guardar en favoritos

## Fase 5 — Pulido
- [ ] Toasts, loading states, optimistic UI en los votos
- [ ] Perfil de usuario (sus posts, sus favoritos)
- [ ] Deploy en Vercel