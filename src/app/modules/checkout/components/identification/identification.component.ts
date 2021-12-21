import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { FormCacheService } from 'src/app/modules/core/services/form-cache.service'
import { LocalStorageService } from 'src/app/modules/core/services/local-storage.service'
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
        private _localStorageService: LocalStorageService,
        private _navigationService: NavigationService
    ) {
        this.validateFormSubject = new Subject<boolean>()

        this.canContinue = false
    }

    public ngOnInit(): void {
        this.setActualStep()
        this.validateFormGroup()
    }

    private setActualStep(): void {
        this._navigationService.setActualStep(TypeStep.Identification)
        this._navigationService.setStorageStep(TypeStep.Identification)
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

    public validateFormGroup(): void {
        if (this._formCache._identification.valid) this.canContinue = true
    }
}
