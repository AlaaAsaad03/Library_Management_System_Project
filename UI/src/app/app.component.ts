import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ApiService } from './shared/services/api.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModule,
    AuthModule,
    UsersModule,
    BooksModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'UI';
  showSidebar: boolean = false;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    let status = this.apiService.isLoggedIn() ? 'loggedIn' : 'loggedOff';
    this.apiService.userStatus.next(status);

    // Listen for route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Show sidebar only on the home page
        this.showSidebar = event.urlAfterRedirects === '/home';
      }
    });
  }
}
