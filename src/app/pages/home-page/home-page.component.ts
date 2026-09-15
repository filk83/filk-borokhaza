import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [NgOptimizedImage, RouterLink],
  template: `
    <section class="hero" id="fooldal">
      <div class="hero-copy">
        <p class="eyebrow">Szőlőtől a pohárig · 2026</p>
        <h1>Egy korty<br /><em>tiszta vidék.</em></h1>
        <p class="hero-text">
          Gondosan válogatott borok és szőlőből születő pillanatok a pincénkből, egyenesen az
          asztalodra.
        </p>
        <a class="button button-dark" routerLink="/kepek">Megnézem a borokat <span>↗</span></a>
      </div>
      <div
        class="hero-image"
        [style.transform]="
          'perspective(1200px) rotateX(' + heroRotateX() + 'deg) rotateY(' + heroRotateY() + 'deg)'
        "
        [style.--mx]="heroX() + '%'"
        [style.--my]="heroY() + '%'"
        (pointermove)="onHeroMove($event)"
        (pointerleave)="resetHeroMove()"
      >
        <div class="hero-glow"></div>
        <div class="hero-orb orb-one"></div>
        <div class="hero-orb orb-two"></div>
        <img
          ngSrc="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=85"
          width="900"
          height="1100"
          priority
          alt="Szőlőültetvény és borospoharak"
        />
        <span class="image-note">01 / 04<br />a dűlő története</span>
      </div>
    </section>

    <section class="intro" id="rolunk">
      <p class="eyebrow">Miért GáBORokHáza?</p>
      <h2>Termőhely, türelem.<br />Bor, ami mesél.</h2>
      <p>
        A GáBORokHáza kis családi pincészetének borai a napsütötte dűlők, a gondos munka és a közös
        esték történetét viszik tovább. Minden palackban ott van a hely, ahonnan érkezik.
      </p>
    </section>
  `,
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  protected readonly heroX = signal(50);
  protected readonly heroY = signal(50);
  protected readonly heroRotateX = signal(0);
  protected readonly heroRotateY = signal(0);

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
}
