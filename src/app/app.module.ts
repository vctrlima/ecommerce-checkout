import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routes'
import { CoreModule } from './modules/core/core.module'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
