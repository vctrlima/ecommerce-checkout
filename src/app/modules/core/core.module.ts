import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'
import { LayoutComponent } from './components/layout/layout.component'

@NgModule({
    declarations: [HeaderComponent, LayoutComponent],
    imports: [CommonModule, RouterModule, MatButtonModule],
    exports: [LayoutComponent],
})
export class CoreModule {}
