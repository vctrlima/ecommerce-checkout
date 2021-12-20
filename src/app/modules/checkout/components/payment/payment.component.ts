import { Component, OnInit } from '@angular/core'
import { NavigationService } from 'src/app/modules/core/services/navigation.service'
import { TypeStep } from 'src/app/modules/shared/enums/type-step'

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
    public actualStep!: TypeStep
    public unlockedStep!: TypeStep

    constructor(private _navigationService: NavigationService) {}

    public ngOnInit(): void {
        this._navigationService.setActualStep(TypeStep.Payment)

        this.initServiceSubscriptions()
    }

    private initServiceSubscriptions(): void {
        this._navigationService.getUnlockedStep().subscribe((step) => {
            this.unlockedStep = step
        })
    }
}
