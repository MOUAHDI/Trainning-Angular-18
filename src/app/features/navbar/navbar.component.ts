import { Component } from "@angular/core";
import { SearchComponent } from "./search/search.component";
import { CurrencyPipe, UpperCasePipe } from "@angular/common";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title | uppercase }} - {{ price | currency:'EUR':'code' }}</h1>
        <app-search [userName]="name" (eventSearch)="listenSearch($event)" />
    `,
    standalone: true,
    imports: [SearchComponent, UpperCasePipe, CurrencyPipe]
})
export class NavbarComponent {
    title = 'Mon App'
    name = ''
    price = 15

    listenSearch(userName: string) {
        console.log(userName)
    }
}