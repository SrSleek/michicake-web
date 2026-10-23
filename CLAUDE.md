# michicake.com

Sitio de una página de Michi Cake (repostería casera en Puebla). Es una carta con fotos reales y un botón de WhatsApp que arma el mensaje con los productos que el cliente palomea.

## Estructura

- `public/` es lo único que se publica (Cloudflare Pages, proyecto `michicake`).
- `public/index.html`, `styles.css` y `app.js` son HTML/CSS/JS estático, sin framework ni build.
- `public/img/` tiene las fotos en 4:5, en 480 y 960 px, cada una en WebP y JPG. Los originales están en `Documents/Michi Cake/fotos-servidor/` y en el servidor (`instagram/Michi Cake/Historias/`).
- `public/fonts/` tiene las fuentes propias (Fraunces 800, Poppins 400/600 y Caveat 700). No se usa Google Fonts.
- `public/_headers` trae CSP estricta (solo `'self'`) y caché. Si se agrega algo externo o un `style=""` en línea, hay que ajustar la CSP.

## Reglas de contenido

- **Catálogo real y único:** brownies, pie de limón y gomitas (enchiladas de tiburón, panditas, aros y otros sabores). Desde el 23-oct-2026 ya **no** venden panqués, y tampoco galletas, muffins ni pasteles personalizados, de boda o de eventos. No inventar productos, precios, promociones ni zonas de entrega.
- Sin precios ni datos de entrega: todo se acuerda por WhatsApp.
- WhatsApp: `222 347 0539` → `https://wa.me/522223470539`.
- Instagram: `@michi.cake.lomas`.
- Las gomitas no tienen foto todavía y usan una ilustración SVG. Cuando haya foto, va a `img/gomitas-480/960.{jpg,webp}` y sustituye el `<svg>` de la tarjeta.
- Identidad: ver la nota `MichiCake_Identidad_Marca` del vault (paleta, tipografías, voz, logo).

## Publicar

```bash
npx wrangler@4 pages deploy public --project-name michicake --branch main
```

Antes de publicar se revisa en local (`python -m http.server 8731` dentro de `public/`), en escritorio (1280 px) y en celular (390 px).
