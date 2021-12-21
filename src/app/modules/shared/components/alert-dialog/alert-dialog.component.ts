import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { AlertMessage } from '../../models/alert-message'

@Component({
    selector: 'app-alert-dialog',
    templateUrl: './alert-dialog.component.html',
    styleUrls: ['./alert-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AlertDialogComponent implements OnInit {
    constructor(
        private _dialogRef: MatDialogRef<AlertDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: AlertMessage
    ) {}

    public ngOnInit(): void {}

    public close(): void {
        this._dialogRef.close()
    }
}
