import { Component, OnInit } from '@angular/core';
import { txtRotate } from 'src/js/txt-rotate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    txtRotate();
    (window as any).particlesJS.load('particles', 'assets/files/particles.json', null);
  }
}
