import { Component } from '@angular/core';
import { NavbarComponent } from '../../features/navbar/navbar.component';
import { UsersComponent } from '../../features/users/users.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, UsersComponent, RouterOutlet],
  template: `
    <app-navbar />
    <router-outlet />
  `
})
export class HomeComponent { }
