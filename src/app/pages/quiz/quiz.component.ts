import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  // firstForm: FormGroup;
  // secondForm: FormGroup;
  // thirdForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  // }

  // ngOnInit() {
  //   this.firstForm = this.fb.group({
  //     firstCtrl: ['', Validators.required],
  //   });

  //   this.secondForm = this.fb.group({
  //     secondCtrl: ['', Validators.required],
  //   });

  //   this.thirdForm = this.fb.group({
  //     thirdCtrl: ['', Validators.required],
  //   });
  // }

  // onFirstSubmit() {
  //   this.firstForm.markAsDirty();
  // }

  // onSecondSubmit() {
  //   this.secondForm.markAsDirty();
  // }

  // onThirdSubmit() {
  //   this.thirdForm.markAsDirty();
  // }
  @ViewChild('item', { static: true }) accordion;

  ngOnInit() {}
  toggle() {
    this.accordion.toggle();
  }
}
