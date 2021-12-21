import { SelectItem } from '../models/select-item'

export class Utility {
    public static enumToSelectItem(
        type: any,
        labels: any = null
    ): Array<SelectItem> {
        let items = Object.keys(type)
            .filter((x) => {
                let result = false

                if (typeof x === 'string') {
                    let value = parseInt(x)

                    result = isNaN(value)
                }

                return result
            })
            .map((x) => {
                let value = x
                let name = labels?.get(type[x]) || x

                return new SelectItem(value, name)
            })

        return items
    }
}
