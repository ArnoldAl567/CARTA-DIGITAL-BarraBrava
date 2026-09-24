export type CategoryId = 'ceviches' | 'entradas' | 'fondos' | 'bebidas' | 'promociones';

export interface Category { id: CategoryId; name: string; shortName: string; description: string; }
export interface Product { id: string; categoryId: CategoryId; name: string; description: string; price: number; image: string; imageAlt: string; featured?: boolean; badge?: string; }
export interface CartItem { product: Product; quantity: number; notes: string; }
export type DeliveryMethod = 'pickup' | 'delivery';
export interface CustomerDetails { name: string; phone: string; method: DeliveryMethod; address: string; reference: string; }
