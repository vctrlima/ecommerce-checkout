import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routes'
import { CheckoutModule } from './modules/checkout/checkout.module'
import { CoreModule } from './modules/core/core.module'
import { FormCacheService } from './modules/core/services/form-cache.service'
import { NavigationService } from './modules/core/services/navigation.service'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        CheckoutModule,
    ],
    providers: [NavigationService, FormCacheService],
    bootstrap: [AppComponent],
})
export class AppModule {}
