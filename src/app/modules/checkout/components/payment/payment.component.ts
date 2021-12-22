import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { FormCacheService } from 'src/app/modules/core/services/form-cache.service'
import { FormValidationService } from 'src/app/modules/core/services/form-validation.service'
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
    public get agreeWithTerms() {
        return this._formCache._payment.get('agreeWithTerms')?.value
    }

    public actualStep!: TypeStep
    public unlockedStep!: TypeStep
    public canContinue: boolean

    public paymentMethods: SelectItem[]

    constructor(
        public _formCache: FormCacheService,
        private _formValidation: FormValidationService,
        private _navigationService: NavigationService
    ) {
        this.paymentMethods = TypePaymentMethodsExtension.getToSelect()
        this.canContinue = false
    }

    public ngOnInit(): void {
        this.initFormGroupSubscription()
        this.setCanContinueInitialValue()
        this.setActualStep()

        if (!this.canContinue) this.initCanContinueSubscription()
    }

    private initFormGroupSubscription(): void {
        const nextStep: TypeStep = TypeStep.Confirmation

        this._formValidation.canContinueToNextStep(
            this._formCache._payment,
            nextStep
        )
    }

    private setCanContinueInitialValue(): void {
        this.canContinue = this._formValidation.storageAlreadyHasStep(
            TypeStep.Confirmation
        )
    }

    private setActualStep(): void {
        this._navigationService.setActualStep(TypeStep.Payment)
    }

    private initCanContinueSubscription(): void {
        this._formCache._payment.valueChanges.subscribe(() => {
            if (this._formCache._payment.valid) this.canContinue = true
            else this.canContinue = false
        })
    }
}
