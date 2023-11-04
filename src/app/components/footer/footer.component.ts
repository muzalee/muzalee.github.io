import { Component } from '@angular/core';
import { socials } from 'src/app/struct';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public socials = socials;
}
