import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder } from '@angular/forms';
import { CreateBaseForm } from '@shared/base/create-base.form';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent extends CreateBaseForm implements OnInit {

  touch: boolean;
  yearView: boolean;
  minDate: Date;
  startAt: Date;
  // need to create reusable date picker like tarkik and use config to pass into it
  // need to create abstract create form class
  public formGroup: FormGroup;

  // inputDisabled: boolean;
  // datepickerDisabled: boolean;

  get name(): AbstractControl {
    return this.formGroup.get('name');
  }

  get gameType(): AbstractControl {
    return this.formGroup.get('gameType');
  }

  get fee(): AbstractControl {
    return this.formGroup.get('fee');
  }

  get date(): AbstractControl {
    return this.formGroup.get('date');
  }

  constructor(protected formBuilder: FormBuilder) {
    super(formBuilder);
  }

  ngOnInit() {
  }

}
