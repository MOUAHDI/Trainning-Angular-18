import { Component } from '@angular/core'
import { NavbarComponent } from './features/navbar/navbar.component';
import { UsersComponent } from './features/users/users.component';
import { DrawComponent } from './features/draw/draw.component';

@Component({
    selector: 'app-root',
    template: `
        <app-navbar />
        <app-users />
        
    `,
    standalone: true,
    imports: [NavbarComponent, UsersComponent]
})
export class AppComponent {}