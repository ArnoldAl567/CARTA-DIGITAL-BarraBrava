import { Category, Product } from '../models/menu.models';

export const BUSINESS_CONFIG = {
  name: 'SABOR A MAR', whatsapp: '51902586908', displayWhatsapp: '+51 902 586 908',
  currency: 'PEN', locale: 'es-PE', tagline: 'Cocina marina peruana',
};

export const CATEGORIES: Category[] = [
  { id: 'ceviches', name: 'Ceviches', shortName: 'Ceviches', description: 'El corazón de nuestra carta.' },
  { id: 'entradas', name: 'Entradas marinas', shortName: 'Entradas', description: 'Un buen comienzo sabe a mar.' },
  { id: 'fondos', name: 'Platos de fondo', shortName: 'Fondos', description: 'Para quedarse un rato más.' },
  { id: 'bebidas', name: 'Bebidas', shortName: 'Bebidas', description: 'El acompañamiento perfecto.' },
  { id: 'promociones', name: 'Promociones', shortName: 'Promos', description: 'Más sabores para compartir.' },
];

const heroImage = 'images/ceviche-hero.webp';

// Carta referencial: reemplaza nombres, precios, descripciones e imágenes antes de publicar.
export const PRODUCTS: Product[] = [
  { id: 'ceviche-clasico', categoryId: 'ceviches', name: 'Ceviche clásico', description: 'Pesca del día, leche de tigre cítrica, ají limo, camote, choclo y cancha.', price: 36, image: heroImage, imageAlt: 'Ceviche clásico con cebolla roja, choclo y camote', featured: true, badge: 'Favorito de la casa' },
  { id: 'ceviche-mixto', categoryId: 'ceviches', name: 'Ceviche mixto', description: 'Pescado, langostinos, pulpo y calamar en nuestra leche de tigre de la casa.', price: 43, image: 'images/ceviche-mixto.webp', imageAlt: 'Ceviche mixto con pescado, pulpo, calamar, choclo y camote', featured: true, badge: 'Recomendado' },
  { id: 'ceviche-carretillero', categoryId: 'ceviches', name: 'Ceviche carretillero', description: 'Ceviche clásico coronado con chicharrón de pota crocante y salsa criolla.', price: 42, image: 'images/ceviche-carretillero.webp', imageAlt: 'Ceviche con chicharrón de calamar, choclo y camote' },
  { id: 'leche-tigre', categoryId: 'entradas', name: 'Leche de tigre', description: 'Concentrado cítrico de pescado, choclo, cancha y un toque de rocoto.', price: 18, image: 'images/leche-tigre.webp', imageAlt: 'Copa de leche de tigre con pescado, choclo y cancha', badge: 'Energía marina' },
  { id: 'causa-acevichada', categoryId: 'entradas', name: 'Causa acevichada', description: 'Papa amarilla, palta, pesca fresca y cremosa salsa acevichada.', price: 24, image: 'images/causa-acevichada.webp', imageAlt: 'Causa peruana de papa amarilla con pescado y palta' },
  { id: 'chicharron-calamar', categoryId: 'entradas', name: 'Chicharrón de calamar', description: 'Calamar dorado y crocante, yucas fritas y tártara de ají amarillo.', price: 29, image: 'images/chicharron-calamar.webp', imageAlt: 'Chicharrón de calamar con yuca y salsa de ají amarillo' },
  { id: 'arroz-mariscos', categoryId: 'fondos', name: 'Arroz con mariscos', description: 'Arroz meloso al ají panca con langostinos, calamar, conchas y salsa criolla.', price: 39, image: 'images/arroz-mariscos.webp', imageAlt: 'Arroz con langostinos, calamar, conchas y salsa criolla', featured: true, badge: 'Especialidad' },
  { id: 'pescado-macho', categoryId: 'fondos', name: 'Pescado a lo macho', description: 'Filete de pescado con salsa cremosa de mariscos, arroz y papas doradas.', price: 44, image: 'images/pescado-macho.webp', imageAlt: 'Pescado con salsa de mariscos, arroz y papas doradas' },
  { id: 'jalea-real', categoryId: 'fondos', name: 'Jalea real', description: 'Pescado y mariscos crocantes, yuca dorada, choclo y fresca salsa criolla.', price: 48, image: 'images/jalea-marina.webp', imageAlt: 'Fuente de pescado y mariscos crocantes con yuca' },
  { id: 'chicha-morada', categoryId: 'bebidas', name: 'Chicha morada', description: 'Maíz morado, piña, canela y limón. Jarra personal bien helada.', price: 9, image: 'images/chicha-morada.webp', imageAlt: 'Dos vasos de chicha morada con hielo y limón' },
  { id: 'maracuya', categoryId: 'bebidas', name: 'Maracuyá de la casa', description: 'Refresco de maracuyá natural, ligero y servido con mucho hielo.', price: 9, image: 'images/maracuya.webp', imageAlt: 'Vaso de refresco de maracuyá con hielo' },
  { id: 'limonada-hierbaluisa', categoryId: 'bebidas', name: 'Limonada con hierbaluisa', description: 'Limón recién exprimido, hierbaluisa y un punto de panela.', price: 10, image: 'images/limonada.webp', imageAlt: 'Limonada helada con limón y hierbaluisa' },
  { id: 'duo-marino', categoryId: 'promociones', name: 'Dúo marino', description: 'Ceviche clásico + arroz con mariscos + 2 chichas moradas personales.', price: 69, image: heroImage, imageAlt: 'Ceviche peruano servido en cerámica azul', featured: true, badge: 'Precio especial' },
  { id: 'trio-caleta', categoryId: 'promociones', name: 'Trío caleta', description: 'Ceviche, arroz con mariscos y chicharrón de calamar para compartir.', price: 82, image: 'images/jalea-marina.webp', imageAlt: 'Fuente de mariscos crocantes para compartir', badge: 'Para compartir' },
];
