import { Component, Signal, effect, inject } from "@angular/core";
import { SearchComponent } from "./search/search.component";
import { CurrencyPipe, UpperCasePipe } from "@angular/common";
import { RouterLink } from "@angular/router";
import { AppService } from "../../core/services/app.service";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() | uppercase }} - {{ price | currency:'EUR':'code' }}</h1>
        <app-search [userName]="name" (eventSearch)="listenSearch($event)" />
        <button routerLink="/login">Se connecter</button>
        <button (click)="changeTitle()">Modifier titre</button>
    `,
    standalone: true,
    imports: [SearchComponent, UpperCasePipe, CurrencyPipe, RouterLink]
})
export class NavbarComponent {
    private appService = inject(AppService)
    title: Signal<string> = this.appService.title
    name = ''
    price = 15

    constructor() {
        effect(() => {
            console.log(this.title())
        })
    }

    listenSearch(userName: string) {
        console.log(userName)
    }

    changeTitle() {
        this.appService.setTitle(''+Math.random())
    }
}