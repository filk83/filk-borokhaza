import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
    <section class="about-page">
      <p class="eyebrow">Miért GáBORokHáza?</p>
      <h1>Termőhely, türelem.<br />Bor, ami mesél.</h1>
      <p>
        A GáBORokHáza kis családi pincészetének borai a napsütötte dűlők, a gondos munka és a közös
        esték történetét viszik tovább. Minden palackban ott van a hely, ahonnan érkezik.
      </p>
    </section>
  `,
  styleUrl: './about-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {}
