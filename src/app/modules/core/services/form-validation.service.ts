import { Injectable } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { AppConstants } from '../../shared/constants/app-constants'
import { TypeStep } from '../../shared/enums/type-step'
import { LocalStorageService } from './local-storage.service'

@Injectable({
    providedIn: 'root',
})
export class FormValidationService {
    private _allowedSteps: TypeStep[] = new Array<TypeStep>()

    constructor(
        private _localStorageService: LocalStorageService,
        private _router: Router
    ) {
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
            } else {
                let storageSteps: TypeStep[] = this._localStorageService.get(
                    AppConstants.StorageKeys.StepsPermission.Name
                )

                storageSteps.splice(this.getNextStepByRoute(), 1)

                this._localStorageService.set(
                    AppConstants.StorageKeys.StepsPermission.Name,
                    storageSteps
                )
            }
        })
    }

    private getNextStepByRoute(): TypeStep {
        if (this._router.url.includes('/identification'))
            return TypeStep.Payment

        return TypeStep.Confirmation
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
