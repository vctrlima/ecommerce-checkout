import {
    TypePaymentMethods,
    TypePaymentMethodsLabel,
} from '../enums/type-payment-methods'
import { FormData } from './form-data'

export class ConfirmationData extends FormData {
    public paymentMethodLabel: string

    constructor() {
        super()

        this.paymentMethodLabel = ''
    }

    public deserialize(input: FormData): ConfirmationData {
        Object.assign(this, input)

        this.paymentMethodLabel = TypePaymentMethodsLabel.get(
            <any>TypePaymentMethods[this.paymentMethod]
        ) as string

        return this
    }
}
