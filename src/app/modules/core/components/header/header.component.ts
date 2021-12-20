import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
    public actualStep: number = 1

    constructor() {}

    ngOnInit(): void {}
}
