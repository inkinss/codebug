# Decisiones de arquitectura (ADR)

Registro corto de las decisiones que no queremos re-discutir cada semana. Cada ADR tiene contexto, decisión y consecuencias. Si una decisión cambia, se añade una nueva ADR que reemplaza la anterior; no se borra la historia.

Formato: `ADR-NNN — Título` · Estado: propuesta / aceptada / reemplazada por ADR-XXX.

---

## ADR-001 — Next.js 16 App Router con React Server Components

**Estado:** aceptada · 2026-11-12

**Contexto:** el proyecto está creado con Next.js 16.4.6, React 19.3 y Tailwind 4. El objetivo es aprender el stack moderno y tener buen SEO en contenido público.

**Decisión:** usar App Router con Server Components por defecto, Server Actions para mutaciones y Client Components solo donde haya interactividad real. Mantener activo `reactCompiler: true` para memoización automática.

**Consecuencias:**

- Mejor primera pintura y SEO para feeds y artículos.
- Menos JavaScript enviado al cliente.
- Hay que respetar las reglas de Next 16: `proxy.ts`, `params` asíncronos, Cache Components y límites server/client.
- React Compiler exige componentes puros y respetar las Rules of React; no se necesitan `useMemo`/`useCallback` preventivos.
- TanStack Query no se usa como capa universal; solo para interacción y caché de cliente.

---

## ADR-002 — Postgres gestionado en Neon

**Estado:** aceptada · 2026-11-12

**Contexto:** app pública con contenido, comentarios, búsqueda full-text y crecimiento incierto. Se quiere evitar administrar un servidor de base de datos al inicio.

**Decisión:** Postgres en Neon (free tier), con ramas para desarrollo y producción. Driver `@neondatabase/serverless` con Prisma (`neon-http`) para consultas y `DIRECT_URL` para migraciones.

**Consecuencias:**

- Free tier suficiente para el MVP y buen encaje con Vercel.
- Branching facilita probar migraciones.
- Hay que cuidar conexiones y usar migraciones versionadas, no `push` en producción.
- Si el proyecto crece, se puede migrar a otro Postgres sin cambiar el ORM.

**Alternativas descartadas:** Supabase (más superficie y solapamiento con auth), SQLite/Turso (menos realista para búsqueda y concurrencia), MySQL.

---

## ADR-003 — Drizzle ORM en lugar de Prisma

**Estado:** aceptada · 2026-11-12

**Contexto:** se quiere aprender SQL, tener control de migraciones y tipos precisos sin una capa mágica.

**Decisión:** Prisma ORM + drizzle-kit, schema en TypeScript, migraciones SQL versionadas y Prisma Studio para inspección.

**Consecuencias:**

- Más cercano a SQL; se aprende de verdad qué se ejecuta.
- Las migraciones se revisan antes de aplicar.
- Usar la línea estable `0.45.x`; no adoptar la v1 beta todavía.

---

## ADR-004 — Better Auth para autenticación

**Estado:** aceptada · 2026-11-12

**Contexto:** se necesita email/password, OAuth, sesiones, verificación de email y una integración limpia con Next 16 y Prisma, sin depender de un SaaS.

**Decisión:** Better Auth con `prismaAdapter`, `emailAndPassword`, GitHub OAuth y el plugin `nextCookies`. La sesión se lee en el servidor con `auth.api.getSession({ headers })`; `proxy.ts` solo hace comprobaciones optimistas de cookie.

**Consecuencias:**

- Control total de usuarios y datos en nuestra base.
- Hay que generar y mantener las tablas de auth con la CLI.
- Con Cache Components, las lecturas de sesión deben ir dentro de `<Suspense>` o usar `use cache: private`.
- La autorización real siempre se valida en la página/acción, no en el proxy.

**Alternativas descartadas:** Clerk/Auth0 (SaaS, menos control y costo a escala), Auth.js (más configuración para lo que necesitamos), Supabase Auth (acopla auth al proveedor de DB).

---

## ADR-005 — Markdown para el MVP, rich text después

**Estado:** aceptada · 2026-11-12

**Contexto:** el editor es una pieza central, pero un editor rich text añade complejidad de modelo, extensiones y sanitización.

**Decisión:** el MVP usa Markdown con preview en pestañas. Render con `react-markdown`, `remark-gfm`, `rehype-sanitize` y `shiki` para código. El contenido se guarda como texto Markdown.

**Consecuencias:**

- Editor simple, rápido y seguro.
- Se aprende sanitización y renderizado de contenido generado por usuarios.
- La arquitectura debe permitir añadir Tiptap después (campo de contenido y render aislados).
- Los usuarios necesitan conocer Markdown; se puede añadir una guía y una toolbar básica.

**Alternativas descartadas:** MDX (ejecuta componentes; peligroso con contenido de usuarios), Tiptap desde el inicio (más tiempo y complejidad).

---

## ADR-006 — Server Components y Server Actions primero; TanStack Query selectivo

**Estado:** aceptada · 2026-11-12

**Contexto:** existe la tentación de usar React Query para todo, pero en App Router eso duplica estado y pierde SEO.

**Decisión:**

- Lecturas de página: Server Components + DAL + `use cache`.
- Mutaciones: Server Actions + `useActionState` / `useOptimistic`.
- TanStack Query solo para: infinite feed, reacciones optimistas, autocompletado de búsqueda y notificaciones.

**Consecuencias:**

- Mejor rendimiento y menos estado duplicado.
- Hay que definir contratos de query key compartidos entre servidor y cliente.
- El equipo debe entender cuándo usar cada herramienta; está documentado en `docs/PLAN.md` §7.

---

## ADR-007 — Tailwind 4 + shadcn/ui

**Estado:** aceptada · 2026-11-12

**Contexto:** se quiere un design system propio, accesible y editable, sin pelear con una librería cerrada.

**Decisión:** Tailwind CSS 4 (CSS-first) + shadcn/ui + lucide-react. Los componentes de shadcn se copian al repo y se adaptan.

**Consecuencias:**

- Control total del estilo y de la accesibilidad.
- Menos dependencias de runtime.
- Hay que mantener los componentes copiados; no se actualizan solos.
- Tailwind 4 usa configuración en CSS, no `tailwind.config.js` clásico.

---

## ADR-008 — Alcance del MVP

**Estado:** aceptada · 2026-11-12

**Contexto:** el entusiasmo inicial puede convertir el proyecto en algo interminable.

**Decisión:** el MVP incluye auth, perfiles, artículos Markdown, feed, secciones/tags, búsqueda, comentarios, reacciones y bookmarks. Follows, notificaciones, moderación avanzada, tiempo real y recomendaciones quedan en el backlog.

**Consecuencias:**

- Hay una versión publicable en semanas, no en meses.
- Cada feature post-MVP se añade sobre una base estable y desplegada.
- Cualquier idea nueva pasa primero por el backlog; no interrumpe la fase actual.

---

## ADR-009 — Vercel + Neon para el deploy

**Estado:** aceptada · 2026-11-12

**Contexto:** se quiere minimizar operaciones y tener previews por PR.

**Decisión:** desplegar en Vercel con Neon como base de datos. Migraciones se ejecutan explícitamente contra la base de producción antes del deploy, nunca en el build.

**Consecuencias:**

- Preview deployments y rollback sencillos.
- Coste inicial cero.
- Dependencia de Vercel; el código sigue siendo portable a otro host Node.
- Hay que gestionar variables por entorno y proteger la rama principal.

---

## ADR-010 — Biome en lugar de ESLint + Prettier

**Estado:** aceptada · 2026-11-12

**Contexto:** se quiere probar una toolchain única, rápida y con poca configuración para lint, formato y organización de imports.

**Decisión:** usar Biome 2.6 como única herramienta de lint y formato. Configuración del repo: tabs, comillas simples, ancho de 80, `organizeImports` activo. Scripts: `lint` (`biome check`), `format` (`biome format --write .`) y `check` (`biome check --write .`). CI ejecuta `biome check` y `tsc --noEmit`.

**Consecuencias:**

- Una sola dependencia y una sola configuración; más rápido que ESLint + Prettier.
- El formato del repo queda fijado a tabs y comillas simples.
- Algunas reglas específicas de React/Next de ESLint no están disponibles; si aparece un problema real, se evalúa añadir un plugin o una regla puntual.
- Opcional: activar `nursery/useSortedClasses` para ordenar clases de Tailwind, sabiendo que es una regla nursery.

**Alternativas descartadas:** ESLint + Prettier (más piezas y más lento), oxlint (buen lint, pero sin formateador integrado maduro en este setup).

---

## Plantilla para nuevas decisiones

```md
## ADR-NNN — Título

**Estado:** propuesta | aceptada | reemplazada por ADR-XXX · YYYY-MM-DD

**Contexto:** qué problema o duda motivó la decisión.

**Decisión:** qué se eligió y cómo se implementa.

**Consecuencias:** qué mejora, qué empeora, qué hay que cuidar.

**Alternativas descartadas:** opciones evaluadas y por qué no.
```
