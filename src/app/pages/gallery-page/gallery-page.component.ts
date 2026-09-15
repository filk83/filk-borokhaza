import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  imports: [NgOptimizedImage],
  template: `
    <section class="collection" id="kepek">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Pincészetünk válogatása</p>
          <h1>Válaszd ki a kedvenced</h1>
        </div>
        <span class="collection-count">01 — 04</span>
      </div>
      <div class="product-grid">
        <article class="product-card">
          <div class="product-image">
            <img
              ngSrc="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85"
              width="700"
              height="850"
              alt="Vörösboros palack pohárral"
            />
          </div>
          <div class="product-info">
            <h2>GáBORokHáza Bikavér</h2>
            <p>2022 · Eger, vörös cuvée</p>
            <strong>6 490 Ft</strong>
            <button type="button">Kosárba teszem <span>+</span></button>
          </div>
        </article>

        <article class="product-card">
          <div class="product-image">
            <img
              ngSrc="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=700&q=85"
              width="700"
              height="850"
              alt="Lágyan megvilágított borospohár és boros üveg"
            />
          </div>
          <div class="product-info">
            <h2>Hajnali Harmat</h2>
            <p>2023 · száraz, illatos fehérbor</p>
            <strong>5 890 Ft</strong>
            <button type="button">Kosárba teszem <span>+</span></button>
          </div>
        </article>

        <article class="product-card">
          <div class="product-image">
            <img
              ngSrc="https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=700&q=85"
              width="700"
              height="850"
              alt="Rozébor pohárban"
            />
          </div>
          <div class="product-info">
            <h2>Naplemente rozé</h2>
            <p>2023 · friss, gyümölcsös rozé</p>
            <strong>5 490 Ft</strong>
            <button type="button">Kosárba teszem <span>+</span></button>
          </div>
        </article>
      </div>
    </section>
  `,
  styleUrl: './gallery-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryPageComponent {}
