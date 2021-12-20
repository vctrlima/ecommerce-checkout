import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { FormComponent } from './components/form/form.component'

@NgModule({
    declarations: [FormComponent],
    imports: [CommonModule, ReactiveFormsModule, MatButtonModule],
    exports: [FormComponent],
})
export class SharedModule {}
