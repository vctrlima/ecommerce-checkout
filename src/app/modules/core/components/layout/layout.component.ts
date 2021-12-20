import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { TypeStep } from 'src/app/modules/shared/enums/type-step'
import { NavigationService } from '../../services/navigation.service'

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent implements OnInit {
    public actualStep!: TypeStep

    constructor(private _navigationService: NavigationService) {}

    public ngOnInit(): void {
        this.initServiceSubscriptions()
    }

    private initServiceSubscriptions(): void {
        this._navigationService.getActualStep().subscribe((step) => {
            this.actualStep = step
        })

        this._navigationService.getUnlockedStep().subscribe((step) => {
            this.actualStep = step
        })
    }
}
