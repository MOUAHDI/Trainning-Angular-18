import { Component } from '@angular/core'
import { NavbarComponent } from './features/navbar/navbar.component';
import { UsersComponent } from './features/users/users.component';
import { DrawComponent } from './features/draw/draw.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet />
    `,
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent {}