import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly cartCount = signal(0);
  protected readonly cartLabel = computed(() => `${this.cartCount()} termék`);
  protected readonly reservationOpen = signal(false);
  protected readonly heroX = signal(50);
  protected readonly heroY = signal(50);
  protected readonly heroRotateX = signal(0);
  protected readonly heroRotateY = signal(0);

  protected addToCart(): void {
    this.cartCount.update((count) => count + 1);
  }

  protected onHeroMove(event: PointerEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    this.heroX.set(x);
    this.heroY.set(y);
    this.heroRotateY.set((x - 50) / 2.5);
    this.heroRotateX.set((50 - y) / 2.5);
  }

  protected resetHeroMove(): void {
    this.heroX.set(50);
    this.heroY.set(50);
    this.heroRotateX.set(0);
    this.heroRotateY.set(0);
  }

  protected openReservation(): void {
    this.reservationOpen.set(true);
  }

  protected closeReservation(): void {
    this.reservationOpen.set(false);
  }

  protected submitReservation(event: SubmitEvent): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const guestName = new FormData(form).get('name');
    this.closeReservation();
    form.reset();
    window.alert(`Köszönjük, ${guestName}! Hamarosan visszaigazoljuk a foglalásodat.`);
  }
}
