import { TypeStep } from '../enums/type-step'

export class StepsPermission {
    public steps: TypeStep[]

    constructor() {
        this.steps = new Array<TypeStep>()
    }
}
