import { Component, OnInit } from '@angular/core'
import { NavigationService } from './modules/core/services/navigation.service'
import { TypeStep } from './modules/shared/enums/type-step'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public title = 'ecommerce-checkout'

    constructor() {}

    public ngOnInit(): void {}
}
