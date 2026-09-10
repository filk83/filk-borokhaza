import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly cartCount = signal(0);
  protected readonly cartLabel = computed(() => `${this.cartCount()} termék`);

  protected addToCart(): void {
    this.cartCount.update((count) => count + 1);
  }
}
