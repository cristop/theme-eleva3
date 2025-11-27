# Reglas de Desarrollo - Proyecto Eleva

## Fuentes del Proyecto

### Configuración de Fuentes

**Fuentes definidas en `tailwind.config.js`:**

1. **`font-heading`** → PP Neue Montreal
   - Se usa para: Títulos principales (h1, h2, h3, h4)
   - Archivos: Local en carpeta `fonts/` (WOFF)

2. **`font-body`** → Plus Jakarta Sans
   - Se usa para: Texto del cuerpo y contenido general
   - Archivos: Local en carpeta `fonts/` (WOFF/WOFF2)

3. **`font-menu`** → Plus Jakarta Sans
   - Se usa para: Menú de navegación (desktop y mobile)
   - Archivos: Local en carpeta `fonts/` (WOFF/WOFF2)

4. **`font-montreal`** → PP Neue Montreal
   - Se usa para: Bloques especiales (bloque celeste/cyan, botones, etc.)
   - Archivos: Local en carpeta `fonts/` (WOFF)

### Regla de aplicación de fuentes

- **Títulos (h1, h2, h3, h4)**: Siempre usar `font-heading` (PP Neue Montreal)
- **Textos del cuerpo**: Siempre usar `font-body` (Plus Jakarta Sans) - aplicado automáticamente en `body`
- **Menú de navegación**: Siempre usar `font-menu` (Plus Jakarta Sans)
- **Bloque celeste/cyan y botones especiales**: Usar `font-montreal` (PP Neue Montreal)

## Títulos

### Títulos Principales (h2)

**Patrón estándar responsive:**

```html
<h2 class="text-3xl md:text-5xl font-normal leading-tight md:leading-loose text-brand-purple">
```

- **Mobile**: `text-3xl` (1.875rem / 30px)
- **Desktop**: `md:text-5xl` (3rem / 48px)
- **Peso**: `font-normal` (no usar bold, semibold ni medium en títulos principales)
- **Interlineado Mobile**: `leading-tight` (para evitar que se vean muy separados)
- **Interlineado Desktop**: `md:leading-loose` (para algunos títulos largos)
- **Color**: `text-brand-purple` (#3C4076) para fondos claros, `text-white` para fondos oscuros

**Ejemplo completo:**

```html
<h2 class="text-3xl md:text-5xl font-normal leading-tight md:leading-loose text-brand-purple pb-4">
  Nuestros clientes dicen
</h2>
```

### Títulos de Sección (h2 en secciones principales)

**Patrón:**

```html
<h2 class="text-3xl md:text-5xl font-normal !leading-snug text-brand-purple pb-4" data-aos="fade-up">
  Entendemos tus objetivos y entregamos resultados de calidad
</h2>
```

- Tamaños: `text-3xl md:text-5xl`
- Peso: `font-normal`
- Interlineado: `!leading-snug`
- Max-width: Si el título es largo, usar `max-w-4xl mx-auto` para limitar el ancho

### Títulos dentro de Bloques Blancos (Consultoría, Implementación, Soporte)

**Patrón:**

```html
<h3 class="text-xl font-body font-semibold text-brand-purple">
  Consultoría
</h3>
```

- **Tamaño**: `text-xl` (1.25rem / 20px) - NO usar responsive aquí
- **Fuente**: `font-body` (Plus Jakarta Sans) - NO usar font-heading
- **Peso**: `font-semibold`
- **Color**: `text-brand-purple`

### Títulos de Eventos/Casos (dentro de slides con fondo rosa)

**Patrón:**

```html
<h2 class="mb-6 text-4xl md:text-5xl font-normal leading-tight md:leading-loose text-white max-w-[70%]">
  Eleva en cada escenario clave
</h2>
```

- **Mobile**: `text-4xl` (2.25rem / 36px)
- **Desktop**: `md:text-5xl` (3rem / 48px)
- **Peso**: `font-normal`
- **Interlineado**: `leading-tight md:leading-loose`
- **Max-width**: `max-w-[70%]` para limitar el ancho
- **Color**: `text-white` (fondo rosa)

### Título Hero (h1)

**Patrón:**

```html
<h1 class="text-3xl md:text-5xl font-normal text-white mb-6 leading-tight">
  EL CRM N°1 del mundo<br />
  a la medida de tu empresa.
</h1>
```

- **Mobile**: `text-3xl`
- **Desktop**: `md:text-5xl`
- **Peso**: `font-normal`
- **Interlineado**: `leading-tight`

### Títulos de Contacto

**Patrón:**

```html
<h2 class="text-xl md:text-2xl font-medium pb-4">
  TRABAJAMOS JUNTOS?
</h2>
<h3 class="text-3xl md:text-5xl font-medium pb-5">
  Comenzá tu experiencia Salesforce
</h3>
```

- **Tamaños más pequeños**: `text-xl md:text-2xl` y `text-3xl md:text-5xl`
- **Peso**: `font-medium` (no font-normal)
- **Padding bottom**: `pb-4` y `pb-5`

## Textos de Bajada / Párrafos

### Textos descriptivos

**Mobile:**
- **Tamaño**: `text-base` (1rem / 16px) ⭐ **Tamaño por defecto para mobile**
- **Color**: `text-slate-600` o `text-slate-700`

**Desktop:**
- **Tamaño**: `md:text-2xl` o `md:text-xl` según importancia

**Ejemplo:**

```html
<p class="text-base md:text-2xl text-slate-600 max-w-3xl mx-auto">
  Como partner certificado de Salesforce, nos comprometemos...
</p>
```

### Textos de testimonios

**Patrón:**

```html
<blockquote class="text-lg md:text-4xl font-normal leading-[2.2] text-slate-800 max-w-full md:max-w-[80%]">
  "Encontré un aliado ideal. Sales Cloud nos permitió..."
</blockquote>
```

- **Mobile**: `text-lg` (1.125rem / 18px), `max-w-full` (100% del contenedor)
- **Desktop**: `md:text-4xl` (2.25rem / 36px), `md:max-w-[80%]` (80% del contenedor)
- **Interlineado**: `leading-[2.2]` (muy amplio para legibilidad)
- **Peso**: `font-normal`

### Nombres en testimonios

**Patrón:**

```html
<p class="text-xl font-semibold text-slate-900">Victor Martinez</p>
<p class="text-lg text-slate-600">Director General BePrime</p>
```

- **Nombre**: `text-xl font-semibold`
- **Cargo**: `text-lg`

## Estructura de Secciones

### ⚠️ Regla por defecto para crear secciones

**IMPORTANTE**: Cada vez que se cree una sección (`<section>`), **por defecto** debe incluir:

1. **Color de fondo**: `bg-slate-50` (#F8FAFC) ⭐
2. **Padding superior**: `pt-24` (6rem / 96px) ⭐
3. **Padding inferior**: `pb-24` (6rem / 96px) ⭐

Estos valores son **automáticos** a menos que se indique específicamente otro valor.

### Patrón estándar para crear secciones

```html
<section class="bg-slate-50 pt-24 pb-24">
  <div class="mx-auto max-w-6xl px-6" data-aos="fade-up">
    <header class="mx-auto max-w-[70%] text-center">
      <h2 class="text-3xl md:text-5xl font-normal leading-tight md:leading-loose text-brand-purple pb-4">
        Título de la Sección
      </h2>
      <p class="text-base md:text-2xl text-slate-600" data-aos="fade-up" data-aos-delay="100">
        Texto descriptivo
      </p>
    </header>
    <!-- Contenido de la sección -->
  </div>
</section>
```

#### Componentes requeridos:

1. **Section**: Contenedor principal
   - **Valores por defecto** (se aplican automáticamente a menos que se indique otro):
     - Color de fondo: `bg-slate-50` (#F8FAFC) ⭐
     - Padding top: `pt-24` ⭐
     - Padding bottom: `pb-24` ⭐
   - Valores alternativos (solo cuando se necesite):
     - Otros colores: `bg-white`, `bg-brand-cyan`, `bg-brand-pink`, etc.
     - Otros paddings: `pt-12`, `pb-16`, `py-20`, `pt-16`, etc.

2. **Container div**: Div contenedor interno
   - Debe incluir:
     - `mx-auto`: Centrado horizontal
     - `max-w-6xl`: Ancho máximo del contenedor
     - `px-6`: Padding horizontal
   - AOS (Animate On Scroll): Agregar `data-aos="fade-up"` al contenedor principal

3. **Header (opcional)**: Para títulos y descripciones
   - `mx-auto max-w-[70%] text-center`: Centrado con ancho limitado
   - O usar `max-w-4xl mx-auto` para títulos largos

## Navegación / Menú

### Menú Desktop

**Estructura:**

```html
<nav class="hidden items-center gap-10 text-base font-menu text-black md:flex">
  <a href="#por-que-eleva" class="text-black font-menu transition hover:text-brand-purple normal-case">
    Por qué Eleva
  </a>
</nav>
```

- **Fuente**: `font-menu` (Plus Jakarta Sans)
- **Tamaño**: `text-base` (1rem / 16px)
- **Color**: `text-black`
- **Peso**: Sin peso adicional (normal)
- **Hover**: `hover:text-brand-purple`

### Submenú Desktop

**Estructura:**

```html
<ul class="space-y-2 text-left text-base font-body normal-case text-black">
  <li>
    <a href="#soluciones" class="block rounded-xl px-4 py-2 transition hover:bg-slate-100 hover:text-brand-purple" role="menuitem">
      Marketing Cloud
    </a>
  </li>
</ul>
```

- **Fuente**: `font-body` (Plus Jakarta Sans)
- **Tamaño**: `text-base`
- **Color**: `text-black`
- **Sombra**: Usar `shadow-dropdown` (definida en tailwind.config.js)

### Menú Mobile

**Estructura:**

```html
<nav data-mobile-menu class="... overflow-hidden py-4">
  <a href="#por-que-eleva" class="block w-full px-6 py-4 font-menu text-slate-700 transition hover:bg-slate-100 hover:text-brand-purple">
    Por qué Eleva
  </a>
</nav>
```

- **Padding vertical**: `py-4` en el contenedor principal
- **Fuente**: `font-menu` (Plus Jakarta Sans)
- **Elementos**: `block w-full` para que ocupen todo el ancho
- **Submenú**: Sin bordes, items apilados verticalmente

### Botón Menú Mobile

**Patrón:**

```html
<button class="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-brand-purple md:hidden">
```

- **Bordes**: `rounded-lg` (no `rounded-full`)
- **Tamaño**: `h-11 w-11`
- **Ícono**: Cambiar de hamburguesa (fa-bars) a X (fa-times) cuando está abierto

## Estadísticas / Badges

### Estructura de badges

**Patrón:**

```html
<div class="stat-badge">
  <div class="text-5xl font-black">+170</div>
  <div class="text-5xl font-light lowercase tracking-wide">proyectos</div>
</div>
```

**Clase CSS `.stat-badge`:**

```css
.stat-badge {
  @apply flex flex-col items-center justify-center px-6 text-center text-white;
}
```

- **Sin gap**: La clase `.stat-badge` NO tiene gap (fue removido)
- **Texto grande**: `text-5xl` para números y texto
- **Peso**: `font-black` para números, `font-light` para texto
- **Minúsculas**: `lowercase` cuando se requiera

### Textos en badges

**Patrón para textos pequeños:**

```html
<p class="mb-0 text-2xl font-normal normal-case tracking-wide leading-tight">Satisfacción del cliente</p>
<div class="text-2xl font-normal mt-1">4.8 / 5</div>
```

- **Tamaño**: `text-2xl` (1.5rem / 24px)
- **Peso**: `font-normal`
- **Case**: `normal-case` (solo primera letra en mayúscula)
- **Interlineado**: `leading-tight`
- **Espacio**: `mb-0` y `mt-1` para unirlos

## Espaciado entre elementos

### Gap en grids y flex

**Mobile vs Desktop:**

```html
<div class="grid gap-12 md:gap-6">
```

- **Mobile**: `gap-12` (3rem / 48px) - Más espacio
- **Desktop**: `md:gap-6` (1.5rem / 24px) - Menos espacio

**Ejemplo en estadísticas:**

```html
<div class="grid gap-12 md:gap-6 text-white md:grid-cols-3">
```

## Colores disponibles

### Colores de marca personalizados:

- `brand-purple` → #3C4076 ⭐ **Color principal para títulos**
- `brand-cyan` → #00C4F3
- `brand-pink` → #B32C5E
- `brand-fuchsia` → #F0047F (para botones)
- `brand-green` → #06C270

### Colores estándar más usados:

- `slate-50` → #F8FAFC ⭐ **Color de fondo por defecto para secciones**
- `white` → Blanco
- `slate-200` → #E2E8F0 (bordes, fondos claros)
- `slate-600` → #475569 (textos secundarios)
- `slate-700` → #334155 (textos)
- `slate-800` → #1E293B (textos oscuros)
- `slate-900` → #0F172A (textos muy oscuros)

### Uso en clases:

- Fondo: `bg-{color}` → Ejemplo: `bg-white`, `bg-brand-purple`
- Texto: `text-{color}` → Ejemplo: `text-brand-purple`, `text-slate-900`
- Bordes: `border-{color}` → Ejemplo: `border-slate-200`

## Fondos de Iconos

### Color de fondo de iconos en servicios

**Patrón:**

```html
<div class="mx-auto inline-flex h-24 w-24 items-center justify-center rounded-3xl" style="background-color: #F0F7FE;">
  <img src="./assets/img/home/consultoria.svg" alt="Consultoría" class="h-12 w-12" />
</div>
```

- **Color**: `#F0F7FE` (azul muy claro)
- **Bordes**: `rounded-3xl` (bordes muy redondeados)
- **Tamaño**: `h-24 w-24` (container), `h-12 w-12` (icono)

## Botones

### Botón "Volver arriba" (Scroll to top)

**Patrón:**

```html
<button
  id="scroll-to-top"
  class="fixed bottom-8 right-8 z-50 hidden items-center justify-center gap-2 rounded-full bg-brand-fuchsia text-sm font-normal text-white transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-fuchsia shadow-lg w-12 h-12 md:w-auto md:h-auto md:px-4 md:py-3 translate-y-4 opacity-0"
  style="will-change: transform, opacity;"
  aria-label="Volver arriba"
>
  <i class="fa-solid fa-chevron-up text-xs"></i>
  <span class="hidden md:inline">Volver arriba</span>
</button>
```

**Características:**
- **Mobile**: Botón redondo (`w-12 h-12`), solo icono (texto oculto)
- **Desktop**: Botón con padding (`md:w-auto md:h-auto md:px-4 md:py-3`), muestra texto
- **Posición**: `fixed bottom-8 right-8`
- **Animación**: Aparece desde abajo con fade in cuando se hace scroll > 300px
- **JavaScript**: Maneja mostrar/ocultar con throttle para evitar parpadeos

## Logos de Clientes

### Estructura simple sin carrusel

**Patrón:**

```html
<div class="flex flex-wrap items-center justify-center gap-8 md:gap-12">
  <img src="./assets/img/home/logo_ejemplo.svg" alt="Cliente 1" loading="lazy" class="h-10 w-auto object-contain" />
  <!-- Más logos -->
</div>
```

- **Sin carrusel**: Mostrar todos los logos en fila con flexbox
- **Gap**: `gap-8 md:gap-12`
- **Tamaño**: `h-10` (40px)
- **Centrado**: `justify-center`

### Con scroll automático (opcional)

Si se necesita scroll automático infinito:

```html
<div class="logos-container overflow-hidden">
  <div class="logos-wrapper flex items-center gap-8 md:gap-12">
    <!-- Logos duplicados para efecto infinito -->
  </div>
</div>
```

**CSS:**

```css
.logos-wrapper {
  animation: scroll-logos 30s linear infinite;
}

@keyframes scroll-logos {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

## Animaciones (AOS - Animate On Scroll)

### Configuración

**Patrón para contenedores:**

```html
<div class="..." data-aos="fade-up" data-aos-delay="200">
  <!-- Contenido -->
</div>
```

**Configuración en JavaScript:**

```javascript
AOS.init({
  duration: 1000,
  easing: 'ease-out-cubic',
  once: true,
  offset: 120,
  delay: 0,
  mirror: false,
})
```

**Reglas importantes:**
- ✅ **NO animar las `<section>`, solo el contenido dentro**
- ✅ Aplicar `data-aos` en contenedores de contenido, no en backgrounds
- ✅ Usar delays escalonados: `data-aos-delay="100"`, `data-aos-delay="200"`, etc.
- ✅ El delay se aplica al contenedor padre para elementos agrupados

## Preloader

**Estructura:**

```html
<div id="preloader" class="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500">
  <div class="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-brand-purple"></div>
</div>
```

- **Tamaño spinner**: `h-10 w-10` (40px) - pequeño
- **Sin texto**: No incluir texto "Cargando..."
- **Ocultar**: JavaScript lo oculta después de cargar la página

## Ejemplo completo de sección

```html
<section class="bg-slate-50 pt-24 pb-24">
  <div class="mx-auto max-w-6xl px-6" data-aos="fade-up">
    <header class="mx-auto max-w-[70%] text-center">
      <h2 class="text-3xl md:text-5xl font-normal leading-tight md:leading-loose text-brand-purple pb-4">
        Título Principal
      </h2>
      <p class="text-base md:text-2xl text-slate-600" data-aos="fade-up" data-aos-delay="100">
        Texto descriptivo que explica la sección
      </p>
    </header>
    
    <div class="mt-12 grid gap-14 md:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
      <article class="card border border-slate-200 text-center">
        <div class="mx-auto inline-flex h-24 w-24 items-center justify-center rounded-3xl" style="background-color: #F0F7FE;">
          <img src="./assets/img/home/icon.svg" alt="Ícono" class="h-12 w-12" />
        </div>
        <h3 class="mt-6 text-xl font-body font-semibold text-brand-purple">
          Título del Servicio
        </h3>
        <p class="mt-4 text-base leading-relaxed text-slate-600">
          Descripción del servicio
        </p>
      </article>
    </div>
  </div>
</section>
```

## Resumen de Reglas Importantes

### Títulos
- ✅ **Títulos principales**: `text-3xl md:text-5xl font-normal`
- ✅ **Interlineado mobile**: `leading-tight`
- ✅ **Interlineado desktop**: `md:leading-loose` o `md:leading-snug`
- ✅ **NO usar bold/semibold**: Solo `font-normal` en títulos principales
- ✅ **Títulos en bloques blancos**: `text-xl font-body font-semibold`

### Fuentes
- ✅ **Títulos**: `font-heading` (PP Neue Montreal)
- ✅ **Texto cuerpo**: `font-body` (Plus Jakarta Sans) - automático
- ✅ **Menú**: `font-menu` (Plus Jakarta Sans)
- ✅ **Bloque celeste**: `font-montreal` (PP Neue Montreal)

### Textos
- ✅ **Textos de bajada mobile**: `text-base`
- ✅ **Textos de bajada desktop**: `md:text-2xl` o `md:text-xl`

### Secciones
- ✅ **Por defecto**: `bg-slate-50 pt-24 pb-24`
- ✅ **Contenedor**: `mx-auto max-w-6xl px-6`
- ✅ **AOS**: Aplicar en contenedores de contenido, NO en sections

### Responsive
- ✅ **Mobile-first**: Empezar con clases base, luego agregar prefijos `md:`
- ✅ **Breakpoint**: `768px` (md:)
- ✅ **Gaps**: Usar `gap-12 md:gap-6` cuando se necesite más espacio en mobile

> **Nota final**: Siempre seguir estos patrones para mantener consistencia en todo el proyecto.
