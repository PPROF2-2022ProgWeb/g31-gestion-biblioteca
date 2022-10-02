import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent implements OnInit {

contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }
  
 onSubmit(): void{
  console.log('form ->');
 }
 
//Propiedades del formulario

initForm(): FormGroup{
return this.fb.group({
inputId: ['', [Validators.required] ],  //validators. -->muestra lista validadores para activar.
inputIdioma: ['', [Validators.required] ],
inputTitulo: ['', [Validators.required] ],
inputPaginas: ['', [Validators.required] ],
inputPublicacion: ['', [Validators.required] ],
inputDescripcion: ['', [Validators.required] ],
inputAutor: ['', [Validators.required] ],
inputStock: ['', [Validators.required] ],
inputDisponibles: ['', [Validators.required] ],
inputCategoria: ['', [Validators.required] ],
inputEjemplares: ['', [Validators.required] ],
inputEdicion: ['', [Validators.required] ],
})
}

}
