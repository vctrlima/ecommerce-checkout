import { Utility } from '../extensions/utility'
import { SelectItem } from '../models/select-item'

export enum TypePaymentMethods {
    Pix = 0,
    CreditCard = 1,
    Billet = 2,
}

export const TypePaymentMethodsLabel = new Map<TypePaymentMethods, string>([
    [TypePaymentMethods.Pix, 'Pix'],
    [TypePaymentMethods.CreditCard, 'Cartão de crédito'],
    [TypePaymentMethods.Billet, 'Boleto'],
])

export class TypePaymentMethodsExtension {
    public static getToSelect(): Array<SelectItem> {
        return Utility.enumToSelectItem(
            TypePaymentMethods,
            TypePaymentMethodsLabel
        )
    }
}
