import { Component } from '@angular/core'
import { NavbarComponent } from './features/navbar/navbar.component';

@Component({
    selector: 'app-root',
    template: `
        <app-navbar />
        <h1>Mon app</h1>
    `,
    standalone: true,
    imports: [NavbarComponent]
})
export class AppComponent {}