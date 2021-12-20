import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { LayoutComponent } from './components/layout/layout.component'

@NgModule({
    declarations: [HeaderComponent, FooterComponent, LayoutComponent],
    imports: [CommonModule, RouterModule],
    exports: [LayoutComponent],
})
export class CoreModule {}
