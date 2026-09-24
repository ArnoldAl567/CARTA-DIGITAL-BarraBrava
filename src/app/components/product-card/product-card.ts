import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Product } from '../../models/menu.models';
@Component({ selector: 'app-product-card', imports: [CurrencyPipe], changeDetection: ChangeDetectionStrategy.OnPush, templateUrl: './product-card.html', styleUrl: './product-card.scss' })
export class ProductCard {
  readonly product = input.required<Product>();
  readonly quantity = input(0);
  readonly added = output<Product>();
  readonly decreased = output<Product>();
  readonly justAdded = signal(false);
  add(): void { this.added.emit(this.product()); this.justAdded.set(true); window.setTimeout(() => this.justAdded.set(false), 850); }
}
