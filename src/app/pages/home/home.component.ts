import { Component, OnInit } from '@angular/core';
import { socials } from 'src/app/struct';
import { txtRotate } from 'src/js/javascript';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public socials = socials;

  ngOnInit(): void {
    txtRotate();
    (window as any).particlesJS.load('particles', 'assets/files/particles.json', null);
  }
}
