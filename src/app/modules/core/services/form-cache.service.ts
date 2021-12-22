import { Injectable, isDevMode } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AppConstants } from '../../shared/constants/app-constants'
import { ConfirmationData } from '../../shared/models/confirmation-data'
import { FormData } from '../../shared/models/form-data'
import { LocalStorageService } from './local-storage.service'

@Injectable({
    providedIn: 'root',
})
export class FormCacheService {
    public _identification: FormGroup
    public _payment: FormGroup
    private _formData: FormData

    private get name() {
        return this._identification.get('name')?.value
    }

    private get email() {
        return this._identification.get('email')?.value
    }

    private get password() {
        return this._identification.get('password')?.value
    }

    private get address() {
        return this._identification.get('address')?.value
    }

    private get paymentMethod() {
        return this._payment.get('method')?.value
    }

    constructor(private _localStorageService: LocalStorageService) {
        this._identification = new FormGroup({
            name: new FormControl('', [
                Validators.required,
                Validators.minLength(5),
            ]),
            email: new FormControl('', [Validators.required, Validators.email]),
            address: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
            ]),
        })

        this._payment = new FormGroup({
            method: new FormControl(''),
            agreeWithTerms: new FormControl(false, Validators.requiredTrue),
        })

        this._formData = new FormData()
    }

    public storeFormData(): void {
        let newValues: FormData = new FormData()

        newValues = {
            name: this.name,
            email: this.email,
            password: this.password,
            address: this.address,
            paymentMethod: this.paymentMethod,
        }

        this._formData = newValues
        this._localStorageService.set(
            AppConstants.StorageKeys.FormData.Name,
            this._formData
        )
    }

    public getConfirmationData(): ConfirmationData {
        let formData: FormData

        if (isDevMode()) {
            formData = {
                name: this.name,
                email: this.email,
                password: this.password,
                address: this.address,
                paymentMethod: this.paymentMethod,
            }
        } else
            formData = this._localStorageService.get(
                AppConstants.StorageKeys.FormData.Name
            )

        return new ConfirmationData().deserialize(formData)
    }
}
