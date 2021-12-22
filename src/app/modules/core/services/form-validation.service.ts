import { Injectable } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AppConstants } from '../../shared/constants/app-constants'
import { TypeStep } from '../../shared/enums/type-step'
import { LocalStorageService } from './local-storage.service'

@Injectable({
    providedIn: 'root',
})
export class FormValidationService {
    private _allowedSteps: TypeStep[] = new Array<TypeStep>()

    constructor(private _localStorageService: LocalStorageService) {
        this._allowedSteps = this.getStepsFromStorage()
    }

    public canContinueToNextStep(form: FormGroup, nextStep: TypeStep): void {
        form.valueChanges.subscribe(() => {
            if (form.valid) {
                if (!this.storageAlreadyHasStep(nextStep))
                    this._allowedSteps.push(nextStep)

                this._localStorageService.set(
                    AppConstants.StorageKeys.StepsPermission.Name,
                    this._allowedSteps
                )
            }
        })
    }

    private getStepsFromStorage(): TypeStep[] {
        return this._localStorageService.get(
            AppConstants.StorageKeys.StepsPermission.Name
        )
    }

    public storageAlreadyHasStep(step: TypeStep): boolean {
        return this._allowedSteps.includes(step)
    }
}
