import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component( {
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
} )
export class ContactComponent implements OnInit {
  formGroup: FormGroup;

  constructor( private builderService: FormBuilder ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.formGroup = this.builderService.group( {
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      shouldAddToNewsletter: false
    } );
  }

  get name() {
    return this.formGroup.get( 'name' );
  }

  get email() {
    return this.formGroup.get( 'email' );
  }

  get phoneNumber() {
    return this.formGroup.get( 'phoneNumber' );
  }

  onSubmit() {
    if ( this.formGroup.valid ) {
      console.log( 'Submitted' );
    }
  }
}
