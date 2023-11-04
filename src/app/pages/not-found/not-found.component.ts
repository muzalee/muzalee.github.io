import { Component } from '@angular/core';
import { socials } from 'src/app/struct';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  public socials = socials;
}
