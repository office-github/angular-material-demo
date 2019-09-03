import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array-aliases',
  templateUrl: './form-array-aliases.component.html',
  styleUrls: ['./form-array-aliases.component.css']
})
export class FormArrayAliasesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  //Accessing the FormArray control

  onSubmit() {
    console.log(this.profileForm.value)
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  //dynamically insert an alias control into the alias's form array.

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
