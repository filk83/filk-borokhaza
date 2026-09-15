import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-order-page',
  template: `
    <section class="order-section" id="rendeles">
      <div>
        <p class="eyebrow">Rendelés</p>
        <h1>Legyen bor az asztalodon.</h1>
        <p class="order-summary">
          Jelenleg <strong>1 termék</strong> van benne. Add meg az adataidat, és gondosan
          becsomagoljuk a választott palackokat.
        </p>
      </div>
      <form class="order-form" (submit)="$event.preventDefault()">
        <label for="name">Név</label>
        <input id="name" name="name" type="text" placeholder="A neved" />
        <label for="email">E-mail cím</label>
        <input id="email" name="email" type="email" placeholder="te@pelda.hu" />
        <button class="button button-light" type="submit">Rendelés elküldése <span>↗</span></button>
      </form>
    </section>
  `,
  styleUrl: './order-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderPageComponent {}
