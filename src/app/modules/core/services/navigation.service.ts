import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { AppConstants } from '../../shared/constants/app-constants'
import { TypeStep } from '../../shared/enums/type-step'
import { LocalStorageService } from './local-storage.service'

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    private _actualStep: BehaviorSubject<TypeStep>
    private _storageSteps: TypeStep[]

    constructor(private _localStorageService: LocalStorageService) {
        this._actualStep = new BehaviorSubject<TypeStep>(
            TypeStep.Identification
        )

        this._storageSteps = new Array<TypeStep>()
        this.setStorageStepsInitialValue()

        this._localStorageService.set(
            AppConstants.StorageKeys.StepsPermission.Name,
            this._storageSteps
        )
    }

    private setStorageStepsInitialValue(): void {
        this._storageSteps = this.getStorageSteps()

        if (!this._storageSteps) {
            this._storageSteps = new Array<TypeStep>()
            this._storageSteps.push(TypeStep.Identification)
        }
    }

    public getActualStep(): Observable<TypeStep> {
        return this._actualStep.asObservable()
    }

    public setActualStep(step: TypeStep): void {
        this._actualStep.next(step)
    }

    public getStorageSteps(): TypeStep[] {
        const steps: TypeStep[] = this._localStorageService.get(
            AppConstants.StorageKeys.StepsPermission.Name
        )

        return steps
    }
}
