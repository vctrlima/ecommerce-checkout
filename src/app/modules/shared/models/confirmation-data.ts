export class ConfirmationData {
    public name: string
    public email: string
    public password: string
    public address: string
    public paymentMethod: string
    public agreeWithTerms: boolean

    constructor() {
        this.name = ''
        this.email = ''
        this.password = ''
        this.address = ''
        this.paymentMethod = ''
        this.agreeWithTerms = false
    }

    public deserialize(values: ConfirmationData): ConfirmationData {
        Object.assign(values)

        return this
    }
}
