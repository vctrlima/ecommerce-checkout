import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
    @Input() public formGroup!: FormGroup
    @Input() public stepLabel!: string

    constructor() {}

    public ngOnInit(): void {}
}
