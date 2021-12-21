import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { FormCacheService } from 'src/app/modules/core/services/form-cache.service'
import { NavigationService } from 'src/app/modules/core/services/navigation.service'
import { TypePaymentMethodsExtension } from 'src/app/modules/shared/enums/type-payment-methods'
import { TypeStep } from 'src/app/modules/shared/enums/type-step'
import { SelectItem } from 'src/app/modules/shared/models/select-item'

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PaymentComponent implements OnInit {
    public actualStep!: TypeStep
    public unlockedStep!: TypeStep
    public canContinue: boolean

    public paymentMethods: SelectItem[]

    constructor(
        private _navigationService: NavigationService,
        public _formCache: FormCacheService
    ) {
        this.canContinue = false
        this.paymentMethods = TypePaymentMethodsExtension.getToSelect()
    }

    public ngOnInit(): void {
        this.setActualStep()
        this.validateFormGroup()
    }

    private setActualStep(): void {
        this._navigationService.setActualStep(TypeStep.Payment)
        this._navigationService.setStorageStep(TypeStep.Payment)
    }

    public validateFormGroup(): void {
        if (this._formCache._payment.valid) this.canContinue = true
    }
}
