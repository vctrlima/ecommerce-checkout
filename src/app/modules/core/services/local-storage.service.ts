import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    private storage: Storage

    constructor() {
        this.storage = window.localStorage
    }

    public set(key: string, item: any): boolean {
        if (this.storage) {
            this.storage.setItem(key, JSON.stringify(item))

            return true
        }

        return false
    }

    public get(key: string): any {
        if (this.storage) {
            const item = this.storage.getItem(key)

            return JSON.parse(item as string)
        }

        return null
    }

    public remove(key: string): boolean {
        if (this.storage) {
            this.storage.removeItem(key)

            return true
        }

        return false
    }

    public clear(): boolean {
        if (this.storage) {
            this.storage.clear()

            return true
        }

        return false
    }
}
