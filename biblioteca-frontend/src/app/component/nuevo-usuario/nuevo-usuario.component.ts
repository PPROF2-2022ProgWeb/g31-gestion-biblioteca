import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario', 
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
  
})
export class NuevoUsuarioComponent implements OnInit {

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
  inputNombre: ['', [Validators.required] ],  //validators. -->muestra lista validadores para activar.
  inputDireccion: ['', [Validators.required] ],
  inputApellido: ['', [Validators.required] ],
  inputTelefono: ['', [Validators.required] ],
  inputApellido1: ['', [Validators.required] ],
  })
  }

}
