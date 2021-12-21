import { NgModule } from '@angular/core'
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routes'
import { CheckoutModule } from './modules/checkout/checkout.module'
import { CoreModule } from './modules/core/core.module'
import { FormCacheService } from './modules/core/services/form-cache.service'
import { NavigationService } from './modules/core/services/navigation.service'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { FormsModule } from '@angular/forms'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        CoreModule,
        CheckoutModule,

        MatDialogModule,
        MatSlideToggleModule,
    ],
    providers: [NavigationService, FormCacheService],
    bootstrap: [AppComponent],
})
export class AppModule {}
