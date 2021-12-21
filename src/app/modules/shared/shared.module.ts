import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component'
import { FooterComponent } from './components/footer/footer.component'
import { FormComponent } from './components/form/form.component'

@NgModule({
    declarations: [FormComponent, FooterComponent, ErrorDialogComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSnackBarModule,
    ],
    exports: [FormComponent, FooterComponent],
})
export class SharedModule {}
