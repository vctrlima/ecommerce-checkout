import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { FormCacheService } from 'src/app/modules/core/services/form-cache.service'
import { FormValidationService } from 'src/app/modules/core/services/form-validation.service'
import { NavigationService } from 'src/app/modules/core/services/navigation.service'
import { TypeStep } from 'src/app/modules/shared/enums/type-step'

@Component({
    selector: 'app-identification',
    templateUrl: './identification.component.html',
    styleUrls: ['./identification.component.scss'],
})
export class IdentificationComponent implements OnInit {
    public validateFormSubject: Subject<boolean>

    public actualStep!: TypeStep
    public unlockedStep!: TypeStep
    public canContinue: boolean

    private get name() {
        return this._formCache._identification.get('name')
    }

    private get email() {
        return this._formCache._identification.get('email')
    }

    private get password() {
        return this._formCache._identification.get('password')
    }

    private get address() {
        return this._formCache._identification.get('address')
    }

    constructor(
        public _formCache: FormCacheService,
        private _formValidation: FormValidationService,
        private _navigationService: NavigationService
    ) {
        this.validateFormSubject = new Subject<boolean>()
        this.canContinue = false
    }

    public ngOnInit(): void {
        this.initFormGroupSubscription()
        this.setCanContinueInitialValue()
        this.setActualStep()

        if (!this.canContinue) this.initCanContinueSubscription()
    }

    private initFormGroupSubscription(): void {
        const nextStep: TypeStep = TypeStep.Payment

        this._formValidation.canContinueToNextStep(
            this._formCache._identification,
            nextStep
        )
    }

    private setCanContinueInitialValue(): void {
        this.canContinue = this._formValidation.storageAlreadyHasStep(
            TypeStep.Payment
        )
    }

    private setActualStep(): void {
        this._navigationService.setActualStep(TypeStep.Identification)
    }

    private initCanContinueSubscription(): void {
        this._formCache._identification.valueChanges.subscribe(() => {
            if (this._formCache._identification.valid) this.canContinue = true
            else this.canContinue = false
        })
    }

    public hasValue(value: string): boolean {
        return value != ''
    }

    public clearValue(formControlName: string): void {
        switch (formControlName) {
            case 'name':
                this.name?.reset('')
                break

            case 'email':
                this.email?.reset('')
                break

            case 'password':
                this.password?.reset('')
                break

            case 'address':
                this.address?.reset('')
                break

            default:
                break
        }
    }
}
