# Barra Brava · Carta digital

Carta responsive de Barra Brava, hecha con Angular. Incluye los 17 productos y precios de la carta de referencia, búsqueda, filtros por sección y armado de pedidos por WhatsApp.

## Ejecutar

```bash
npm install
npm start
```

Abre `http://localhost:4200/`. Para compilar la versión de producción:

```bash
npm run build
```

El resultado queda en `dist/barra-brava/browser`.

## Contenido y contacto

- `src/app/data/menu.data.ts`: categorías, platos, precios y teléfono de pedidos.
- `public/barra-brava-mark.svg`: símbolo vectorial recreado a partir del logo de la carta.
- `public/images/promo-*.webp` y `public/images/duo-*.webp`: siete fotografías únicas de las promociones prioritarias.
- `source-images/barra-brava-carta-referencia.png`: carta de referencia proporcionada para esta adaptación.

El teléfono configurado actualmente (`+51 902 586 908`) es el de IntegraTech, autorizado como contacto **temporal**. Cámbialo por el de Barra Brava antes de usar la carta para recibir pedidos reales. Las imágenes son representaciones referenciales de los platos; los tríos y las demás promociones se muestran sin foto por ahora.

Los pedidos se guardan en el navegador del cliente mediante `localStorage`. WhatsApp abre el mensaje listo para revisión; el cliente lo envía desde su propia cuenta. No hay pagos ni servidor de pedidos.
