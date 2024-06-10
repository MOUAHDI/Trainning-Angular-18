import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Query, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AutoCompletePipe } from "../../../shared/pipes/autocomplete.pipe";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="userName" #refInput>
        @if (userName != '') {
            <button (click)="search()">Rechercher</button>
        }
        <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->
        <ul>
            @for (name of firstNames | autocomplete:userName ; track $index) {
                <li #refLi>{{ name }}</li>
            }
        </ul>
        <!-- <ul>
            <li *ngFor="let name of firstNames ; let i = index ; let isFirst = first">
               {{ i }} - {{ name }}
            </li>
        </ul> -->
    `,
    standalone: true,
    imports: [FormsModule, AutoCompletePipe /*NgIf, NgFor*/]
})
export class SearchComponent implements OnInit, AfterViewInit {
    @Input() userName = ''
    @Output() eventSearch: EventEmitter<string> = new EventEmitter()
    @ViewChild('refInput') propInput!: ElementRef<HTMLInputElement>
    @ViewChildren('refLi') propLi!: QueryList<ElementRef>

    constructor() {
       
    }

    ngOnInit() {
        
       // this.propInput?.nativeElement.focus()
    }

    ngAfterViewInit(): void {
        console.log(this.propLi.toArray())
    }

    firstNames: string[] = ['ana', 'jim', 'ben']

    search() {
        this.eventSearch.emit(this.userName)
    }
}