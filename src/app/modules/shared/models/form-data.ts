export class FormData {
    public name: string
    public email: string
    public password: string
    public address: string
    public paymentMethod: number | string

    constructor() {
        this.name = ''
        this.email = ''
        this.password = ''
        this.address = ''
        this.paymentMethod = ''
    }
}
