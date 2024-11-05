import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  loggedIn: boolean = false;
  name: string = '';
  isAuthPage: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {
    apiService.userStatus.subscribe({
      next: (res) => {
        if (res === 'loggedIn') {
          this.loggedIn = true;
          const user = apiService.getUserInfo()!;
          this.name = `${user.firstName} ${user.lastName}`;
        } else {
          this.loggedIn = false;
          this.name = '';
        }
      },
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;
        this.isAuthPage = ['/login', '/register'].includes(currentUrl);
      }
    });
  }

  logout() {
    this.apiService.logOut();
  }
}
