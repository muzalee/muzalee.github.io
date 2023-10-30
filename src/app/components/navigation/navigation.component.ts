import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menubarOnclick, navigationCloseOnclick, navigationOnclick } from 'src/js/javascript';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  constructor(private router: Router) {}

  public onLink(route: string) {
    navigationOnclick();
    setTimeout(() => {
      this.router.navigate([route]);
      //location.href = route; #to reload page
    }, 600);
  }

  public onMenu(): void {
    menubarOnclick();
  }

  public onClose(): void {
    navigationCloseOnclick();
  }
}