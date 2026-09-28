import { Category, Product } from '../models/menu.models';

export const BUSINESS_CONFIG = {
  name: 'BARRA BRAVA',
  whatsapp: '51902586908', // Contacto temporal de IntegraTech.
  displayWhatsapp: '+51 902 586 908',
  currency: 'PEN',
  locale: 'es-PE',
  tagline: 'Cevichería · Bar',
};

export const CATEGORIES: Category[] = [
  { id: 'al-paso', name: 'Promos al paso', shortName: 'Al paso', description: 'Tu ceviche favorito con un antojo más.' },
  { id: 'duos', name: 'Promos dúos', shortName: 'Dúos', description: 'Dos sabores en una sola promo.' },
  { id: 'trios', name: 'Promos tríos', shortName: 'Tríos', description: 'Tres especialidades para disfrutar.' },
  { id: 'mas-promociones', name: 'Más promociones', shortName: 'Más promos', description: 'Otras especialidades de la carta.' },
];

// Los siete primeros productos tienen fotografías únicas creadas para esta carta.
// Los demás platos se muestran sin imagen hasta recibir sus fotografías.
export const PRODUCTS: Product[] = [
  { id: 'promo-rellena', categoryId: 'al-paso', name: 'Promo Rellena', description: 'Papa rellena + ceviche clásico', price: 9.99, image: 'images/promo-rellena.webp', imageAlt: 'Papa rellena dorada con ceviche clásico, choclo y cancha' },
  { id: 'promo-huancaina', categoryId: 'al-paso', name: 'Promo Huancaína', description: 'Papa huancaína + ceviche clásico', price: 9.99, image: 'images/promo-huancaina.webp', imageAlt: 'Papa a la huancaína con ceviche clásico' },
  { id: 'promo-tortita', categoryId: 'al-paso', name: 'Promo Tortita', description: 'Torta de choclo + ceviche clásico', price: 9.99, image: 'images/promo-tortita.webp', imageAlt: 'Tortita de choclo dorada con ceviche clásico' },

  { id: 'duo-economico', categoryId: 'duos', name: 'Dúo Económico', description: 'Arroz con mariscos + ceviche clásico', price: 15, image: 'images/duo-economico.webp', imageAlt: 'Arroz con mariscos y ceviche clásico en un plato dividido' },
  { id: 'duo-pescado', categoryId: 'duos', name: 'Dúo Pescado', description: 'Chicharrón de pescado + ceviche clásico', price: 15, image: 'images/duo-pescado.webp', imageAlt: 'Chicharrón de pescado crocante con ceviche clásico' },
  { id: 'duo-causa', categoryId: 'duos', name: 'Dúo Causa', description: 'Causa de langostino + ceviche clásico', price: 15, image: 'images/duo-causa.webp', imageAlt: 'Causa de langostino con ceviche clásico' },
  { id: 'duo-pota', categoryId: 'duos', name: 'Dúo Pota', description: 'Chicharrón de pota + ceviche clásico', price: 15, image: 'images/duo-pota.webp', imageAlt: 'Chicharrón de pota y ceviche clásico' },

  { id: 'trio-marino', categoryId: 'trios', name: 'Trío Marino', description: 'Arroz con mariscos + chicharrón de pescado + ceviche clásico', price: 19.99 },
  { id: 'trio-causa', categoryId: 'trios', name: 'Trío Causa', description: 'Arroz con mariscos + causa de langostino + ceviche clásico', price: 19.99 },
  { id: 'trio-jaeno', categoryId: 'trios', name: 'Trío Jaeno', description: 'Carne seca + tacacho con cecina + ceviche clásico', price: 19.99 },
  { id: 'trio-crocante', categoryId: 'trios', name: 'Trío Crocante', description: 'Chicharrón de pescado + chicharrón de pota + ceviche clásico', price: 19.99 },

  { id: 'causa-acevichada', categoryId: 'mas-promociones', name: 'Causa acevichada', description: 'Causa cubierta con ceviche', price: 15 },
  { id: 'promo-chiclayana', categoryId: 'mas-promociones', name: 'Promo Chiclayana', description: 'Especialidad chiclayana de la casa', price: 15 },
  { id: 'duo-selvatico', categoryId: 'mas-promociones', name: 'Dúo Selvático', description: 'Carne seca + tacacho', price: 19.99 },
  { id: 'causa-langostinos', categoryId: 'mas-promociones', name: 'Causa de langostinos', description: 'Causa de papa amarilla con langostinos', price: 19.99 },
  { id: 'sodas-refrescantes', categoryId: 'mas-promociones', name: 'Sodas refrescantes', description: 'Sabores: arándanos, fresa, maracuyá o mango', price: 9.99 },
  { id: 'chaufa-regional', categoryId: 'mas-promociones', name: 'Chaufa regional con costillas ahumadas a la BBQ', description: 'Chaufa regional + costillas ahumadas a la BBQ', price: 29.99 },
];
