import { NgFor, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="userName">
        @if (userName != '') {
            <button (click)="search()">Rechercher</button>
        }
        <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->
        <ul>
            @for (name of firstNames ; track $index) {
                <li>{{ $first }} - {{ name }}</li>
            }
        </ul>
        <!-- <ul>
            <li *ngFor="let name of firstNames ; let i = index ; let isFirst = first">
               {{ i }} - {{ name }}
            </li>
        </ul> -->
    `,
    standalone: true,
    imports: [FormsModule /*NgIf, NgFor*/]
})
export class SearchComponent {
    @Input() userName = ''
    @Output() eventSearch: EventEmitter<string> = new EventEmitter()
    firstNames: string[] = ['ana', 'jim', 'ben']

    search() {
        this.eventSearch.emit(this.userName)
    }
}