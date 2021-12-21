import { Injectable } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Injectable({
    providedIn: 'root',
})
export class FormCacheService {
    public _identification: FormGroup
    public _payment: FormGroup

    constructor() {
        this._identification = new FormGroup({
            name: new FormControl(''),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
            ]),
            address: new FormControl('', Validators.required),
        })

        this._payment = new FormGroup({
            method: new FormControl(''),
            agreeWithTerms: new FormControl(false, Validators.requiredTrue),
        })
    }
}
