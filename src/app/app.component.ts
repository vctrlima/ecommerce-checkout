import { DOCUMENT } from '@angular/common'
import { Component, HostBinding, Inject, OnInit } from '@angular/core'
import { LocalStorageService } from './modules/core/services/local-storage.service'
import { AppConstants } from './modules/shared/constants/app-constants'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public title = 'ecommerce-checkout'
    public isDark = false

    constructor(
        @Inject(DOCUMENT) private _document: Document,
        private _localStorageService: LocalStorageService
    ) {}

    public ngOnInit(): void {
        this.setInitialDarkModeValue()
        this.setBodyClassTheme()
    }

    @HostBinding('class')
    public get activeTheme(): string {
        return this.isDark ? 'theme-dark' : 'theme-light'
    }

    private setInitialDarkModeValue(): void {
        this.isDark = this._localStorageService.get(
            AppConstants.StorageKeys.ThemeMode.Name
        )
    }

    public setBodyClassTheme(): void {
        if (this.activeTheme == 'theme-dark') {
            this._document.body.classList.remove('theme-light')
            this._document.body.classList.add('theme-dark')
        } else {
            this._document.body.classList.remove('theme-dark')
            this._document.body.classList.add('theme-light')
        }

        this._localStorageService.set(
            AppConstants.StorageKeys.ThemeMode.Name,
            this.activeTheme == 'theme-dark'
        )
    }
}
