import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit } from "@angular/core";
import { User } from "../../../core/interfaces/user.interface";
import { LangPipe } from "../../../shared/pipes/lang.pipe";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select="h1"></ng-content>
            <header>{{ user.name }}</header>
             {{ user.email }}
             <ng-content select="h2"></ng-content>
            <footer>
                <button>{{ 'REMOVE' | lang:'fr' }}</button>
            </footer>
            
        </article>
    `,
    standalone: true,
    imports: [LangPipe]
})
export class UserCardComponent implements AfterContentInit {
    @Input() user: User = {} as User
    @ContentChild('title') myTitle!: ElementRef

    ngAfterContentInit(): void {
        console.log(this.myTitle)
    }
}