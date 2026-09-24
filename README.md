# SABOR A MAR · Carta digital

Carta responsive hecha con Angular. El cliente explora productos, ajusta cantidades, escribe indicaciones, completa sus datos y abre un mensaje de pedido en WhatsApp. El negocio recibe el pedido solo cuando el cliente envía ese mensaje desde WhatsApp.

## Ejecutar

```bash
npm install
npm start
```

Abre `http://localhost:4200/` (o el puerto que indique Angular). Para generar la versión de producción:

```bash
npm run build
```

El resultado queda en `dist/sabor-a-mar/browser`.

## Personalizar la carta

- `src/app/data/menu.data.ts`: nombre del negocio, número de WhatsApp, categorías, descripciones, productos y precios. El número de WhatsApp debe llevar código de país y solo dígitos, por ejemplo `51902586908`.
- `public/images/`: imágenes WebP que usa la carta. Para reemplazarlas, conserva el nombre del archivo o cambia la propiedad `image` del producto en `menu.data.ts`.
- `source-images/`: originales en alta resolución de las imágenes referenciales.
- `src/styles.scss`: colores y tipografías generales.
- `src/app/components/hero/hero.html`: texto principal de portada.
- `src/app/components/cart-drawer/cart-drawer.ts`: formato del mensaje de WhatsApp y validaciones.

Los platos, precios y fotografías incluidos son **referenciales**. Confirma la carta real, disponibilidad, cobertura y costo de entrega antes de publicar para clientes.

El pedido se conserva en el navegador del cliente mediante `localStorage`. Esta versión funciona solo en el frontend; no procesa pagos ni guarda pedidos en un servidor.
