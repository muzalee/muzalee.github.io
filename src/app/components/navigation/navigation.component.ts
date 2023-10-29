import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  constructor(private router: Router) {}

  public onLink(route: string) {
    setTimeout(() => {
      this.router.navigate([route]);
    }, 600);
  }
}
