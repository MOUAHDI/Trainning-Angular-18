import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "../../../core/interfaces/user.interface";
import { LangPipe } from "../../../shared/pipes/lang.pipe";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select="h1"></ng-content>
            <header>{{ user.name }}</header>
             {{ user.email }}
             <ng-content select="h2"></ng-content>
            <footer>
                <button (click)="removeUser()">{{ 'REMOVE' | lang:'fr' }}</button>
                <button [routerLink]="['user', user.id]">Modifier</button>
            </footer>
            
        </article>
    `,
    standalone: true,
    imports: [LangPipe, RouterLink]
})
export class UserCardComponent implements AfterContentInit {
    @Input() user: User = {} as User
    @Output() eventDelete: EventEmitter<number> = new EventEmitter()
    @ContentChild('title') myTitle!: ElementRef

    ngAfterContentInit(): void {
        console.log(this.myTitle)
    }

    removeUser() {
        this.eventDelete.emit(this.user.id)
    }
}