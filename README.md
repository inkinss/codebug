# CodeBug

Plataforma para que developers publiquen artículos técnicos, compartan hallazgos y discutan sin ruido. Cualquiera puede crear una cuenta, escribir, comentar y reaccionar.

> **Estado:** planificación. El producto todavía no está implementado.

## Stack

- **Next.js 16.4** (App Router, React 19, Server Components y Server Actions)
- **TypeScript** en modo `strict`
- **React Compiler** activo (`reactCompiler: true`)
- **Tailwind CSS 4** + shadcn/ui + lucide-react
- **Better Auth** para autenticación (email/password + GitHub OAuth)
- **Postgres (Neon)** + **Prisma ORM**
- **TanStack Query** para interacciones que lo necesitan (infinite feed, optimistic UI)
- **Zod** para validación
- **Markdown** (`react-markdown` + `remark-gfm` + `rehype-sanitize` + Shiki)
- **Biome 2.6** para lint, formato e imports
- **Vitest** + **Playwright** para tests
- **Vercel** para deploy

## Planificación

La hoja de ruta completa, con fases, tareas, criterios de terminado y bitácora, está en:

- [`docs/PLAN.md`](docs/PLAN.md)
- [`docs/DECISIONS.md`](docs/DECISIONS.md) — decisiones de arquitectura (ADR)

## Empezar

Requisitos: Node.js 20+ y [Bun](https://bun.sh).

```bash
bun install
bun dev
```

Abre [http://localhost:3000](http://localhost:3000).

> Las variables de entorno se definirán en la Fase 0. Aún no hay conexión a base de datos ni auth configurados.

## Comandos

```bash
bun dev              # servidor de desarrollo
bun build            # build de producción
bun start            # servidor de producción
bun run lint         # Biome: lint + formato + imports (chequeo)
bun run format       # Biome: formatea y escribe
bun run check        # Biome: aplica fixes seguros y formatea
bunx tsc --noEmit    # typecheck (se añadirá como script en Fase 0)
```

Biome está configurado con **tabs**, **comillas simples** y **ancho 80**. El formato no se discute: `bun run check` lo corrige.

## Documentación de Next.js 16

Este proyecto usa una versión reciente de Next.js con cambios importantes respecto a versiones anteriores. Antes de escribir código, consulta la documentación local:

```txt
node_modules/next/dist/docs/
```

Puntos clave: `proxy.ts` (antes middleware), `params`/`searchParams` asíncronos, `cacheComponents` y `partialPrefetching` activos, y lecturas de sesión detrás de `<Suspense>`.
