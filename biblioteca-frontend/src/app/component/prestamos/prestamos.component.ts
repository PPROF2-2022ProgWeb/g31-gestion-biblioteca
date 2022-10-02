import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }
  
  onSubmit(): void{
    console.log('form ->', this.contactForm.value);
 }

 //Propiedades del formulario

initForm(): FormGroup{
  return this.fb.group({
  inputIdUsuario: ['', [Validators.required] ],
  inputIdLibro: ['', [Validators.required] ],
  })
  }

}
