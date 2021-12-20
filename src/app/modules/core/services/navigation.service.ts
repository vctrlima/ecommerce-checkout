import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { TypeStep } from '../../shared/enums/type-step'

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    private _actualStep: BehaviorSubject<TypeStep>
    private _unlockedStep: BehaviorSubject<TypeStep>

    constructor() {
        this._actualStep = new BehaviorSubject<TypeStep>(
            TypeStep.Identification
        )
        this._unlockedStep = new BehaviorSubject<TypeStep>(
            TypeStep.Identification
        )
    }

    public getActualStep(): Observable<TypeStep> {
        return this._actualStep.asObservable()
    }

    public setActualStep(step: TypeStep): void {
        this._actualStep.next(step)
    }

    public getUnlockedStep(): Observable<TypeStep> {
        return this._unlockedStep.asObservable()
    }

    public setUnlockedStep(step: TypeStep): void {
        this._unlockedStep.next(step)
    }
}
