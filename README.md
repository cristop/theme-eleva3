# Theme Eleva - Estructura del Proyecto

Este documento describe la estructura de carpetas del tema y el contenido que debe llevar cada una.

## 📁 Estructura de Carpetas

```
theme-eleva/
├── layouts/          # Layouts base del tema
├── pages/            # Páginas individuales con contenido
├── partials/         # Componentes reutilizables (Header, Footer, Modales)
├── assets/           # Recursos estáticos (CSS, JS, imágenes, librerías)
└── theme.yaml        # Configuración del tema
```

---

## 📄 layouts/

### Descripción
Contiene los layouts base que definen la estructura HTML principal del sitio. Estos archivos actúan como plantillas que envuelven el contenido de las páginas.

### Archivos

#### `default.htm`
**Estructura HTML base sin contenido específico de página**

Este archivo contiene:
- La estructura HTML completa (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
- Meta tags básicos (charset, viewport, canonical, title, favicon, Open Graph)
- Preloader de la página
- **Llamadas a partials:**
  - `{% partial 'header' %}` - Incluye el header del sitio
  - `{% page %}` - Incluye el contenido de la página actual
  - `{% partial 'footer' %}` - Incluye el footer del sitio
- Enlaces a fuentes y librerías CSS
- Scripts de librerías JavaScript
- Framework de October CMS (`{% framework extras %}` y `{% scripts %}`)

**Estructura típica:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags -->
    <!-- Enlaces a CSS (se cargan con {% styles %}) -->
</head>
<body>
    <!-- Preloader -->
    {% partial 'header' %}
    {% page %}
    {% partial 'footer' %}
    <!-- Scripts (se cargan con {% scripts %}) -->
</body>
</html>
```

---

## 📄 pages/

### Descripción
Contiene todas las páginas individuales del sitio. Cada archivo `.htm` representa una página con su contenido específico.

### Archivos principales

#### `home.htm`
**Página principal del sitio (Home)**

Esta es la página de inicio del sitio web.

### Estructura de una página

Cada página debe incluir en la parte superior (frontmatter) la configuración:

```twig
title = "Nombre de la Página"
url = "/ruta-de-la-pagina"
layout = "default"
meta_title = "Título SEO"
is_hidden = 0
robot_index = "index"
robot_follow = "follow"

[Componentes]
==
```

### Contenido

**El contenido HTML de la página** va después del separador `==` y puede incluir:

- Secciones HTML con el contenido específico de la página
- Estilos específicos de la página usando `{% put styles %}`:
  ```twig
  {% put styles %}
  <link rel="stylesheet" href="{{ 'assets/css/partials/nombre-pagina.css'|theme }}" async>
  {% endput %}
  ```
- Scripts específicos de la página usando `{% put scripts %}`:
  ```twig
  {% put scripts %}
  <script src="{{ 'assets/js/script-especifico.js'|theme }}"></script>
  {% endput %}
  ```
- Componentes de October CMS (como `[Customers]`, `[Sliders]`, etc.)
- Contenido HTML estructurado en secciones (`<section>`, `<div>`, etc.)

### Ejemplo de estructura de página:

```twig
title = "Marketing"
url = "/marketing"
layout = "default"
meta_title = "Marketing Digital"
is_hidden = 0

[Customers]
==
{% put styles %}
<link rel="stylesheet" href="{{ 'assets/css/partials/marketing.css'|theme }}" async>
{% endput %}

<section id="cabecera-interna" class="section">
    <div class="container">
        <!-- Contenido HTML de la página -->
    </div>
</section>
```

---

## 📄 partials/

### Descripción
Contiene componentes reutilizables que se incluyen en múltiples páginas mediante `{% partial 'nombre' %}`.

### Archivos principales

#### `header.htm`
**Contenido HTML del Header/Navegación**

Este archivo contiene la estructura HTML completa del header/navegación del sitio, incluyendo:
- Menú de navegación principal
- Logo del sitio
- Enlaces a redes sociales
- Selector de idioma

**Estructura típica:**
```html
<header id="navHeader">
    <div class="container-fluid">
        <div class="responsiveMenu">...</div>
        <nav class="menu-main">
            <ul>
                <li><a href="{{ 'home'|page }}">Home</a></li>
                <li><a href="/#nuestros-servicios">Servicios</a>
                    <ul>
                        <li><a href="{{ 'salesforce'|page }}">Salesforce</a></li>
                        <!-- Más submenús -->
                    </ul>
                </li>
                <!-- Más elementos del menú -->
            </ul>
        </nav>
        <a href="/" class="logo">
            <img src="{{ 'assets/img/logo.svg'|theme }}" alt="" />
        </a>
        <nav class="menu-main menu-right">
            <!-- Redes sociales e idioma -->
        </nav>
    </div>
</header>
```

#### `footer.htm`
**Contenido HTML del Footer**

Este archivo contiene la estructura HTML completa del footer del sitio, incluyendo:
- Enlaces a redes sociales
- Enlaces legales (Aviso Legal, Política de privacidad, Política de cookies)
- Preferencias de Cookies

**Estructura típica:**
```html
<footer>
    <div class="container">
        <div class="line"></div>
        <ul>
            <!-- Enlaces a redes sociales -->
            <li>
                <a href="https://www.linkedin.com/..." target="_blank" class="wow fadeIn">
                    <img src="{{ 'assets/img/images/new-design/SVG/in.svg'|theme }}" alt="" />
                </a>
            </li>
        </ul>
        <ul class="wow fadeIn">
            <!-- Enlaces legales -->
            <li><a href="{{ 'aviso-legal'|page }}">Aviso Legal</a></li>
            <li><a href="{{ 'politicas-de-privacidad'|page }}">Política de privacidad</a></li>
            <li><a href="{{ 'cookies'|page }}">Política de cookies</a></li>
        </ul>
    </div>
</footer>
```

#### `modal/` (subcarpeta)
Contiene modales reutilizables para el sitio.

---

## 📁 assets/

### Descripción
Contiene todos los recursos estáticos del tema: estilos CSS, imágenes, scripts JavaScript, librerías externas y documentos PDF.

### Estructura

- `assets/css/` - Hojas de estilo CSS
- `assets/img/` - Imágenes y recursos gráficos
- `assets/js/` - Scripts JavaScript
- `assets/library/` - Librerías externas de terceros
- `assets/pdf/` - Documentos PDF

**Uso de estilos en páginas:**
```twig
{% put styles %}
<link rel="stylesheet" href="{{ 'assets/css/partials/nombre-pagina.css'|theme }}" async>
{% endput %}
```

---

## 🔄 Flujo de Carga

1. **Layout (`layouts/default.htm`)** se carga primero
   - Define la estructura HTML base
   - Incluye meta tags y enlaces a CSS/JS globales

2. **Header (`partials/header.htm`)** se incluye
   - Se renderiza en la parte superior de todas las páginas

3. **Contenido de la Página (`pages/nombre-pagina.htm`)** se incluye
   - Se renderiza mediante `{% page %}` en el layout
   - Puede incluir estilos y scripts específicos con `{% put styles %}` y `{% put scripts %}`

4. **Footer (`partials/footer.htm`)** se incluye
   - Se renderiza en la parte inferior de todas las páginas

5. **Scripts** se cargan al final
   - Librerías JavaScript
   - Scripts específicos de la página (si los hay)

---

## 📝 Notas Importantes

- **Layout default**: Debe contener SOLO la estructura HTML base, sin contenido específico
- **Pages**: Contienen el contenido HTML específico de cada página
- **Partials**: Son componentes reutilizables (Header y Footer contienen su HTML completo)
- **Estilos por página**: Se cargan en `assets/css/partials/` y se referencian en cada página con `{% put styles %}`
- **Rutas de assets**: Se referencian con `{{ 'ruta/archivo'|theme }}` para usar la ruta del tema

---

## 🎯 Resumen de Responsabilidades

| Carpeta | Responsabilidad |
|---------|----------------|
| `layouts/` | Estructura HTML base sin contenido |
| `pages/` | Contenido HTML específico de cada página |
| `partials/` | Componentes reutilizables (Header, Footer, Modales) |
| `assets/` | Recursos estáticos (CSS, JS, imágenes, librerías, PDF) |
