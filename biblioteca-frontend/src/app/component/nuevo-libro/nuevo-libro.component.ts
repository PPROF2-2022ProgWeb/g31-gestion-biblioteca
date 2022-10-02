import { Libro } from './../../Services/libro.service';
import { LibroService } from './../../Services/libro.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css'],
})
export class NuevoLibroComponent implements OnInit {
  contactForm: FormGroup;

  libro: Libro = new Libro();

  constructor(
    private fb: FormBuilder,
    private libroService: LibroService,
    private router: Router
  ) {
    this.contactForm = this.fb.group({
      lang: ['', [Validators.required]],
      title: ['', [Validators.required]],
      pages: ['', [Validators.required]],
      date: ['', [Validators.required]],
      description: ['', [Validators.required]],
      author: ['', [Validators.required]],
      available: ['', [Validators.required]],
      category: ['', [Validators.required]],
      ejemplares: ['', [Validators.required]],
      edit: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onEnviar(event: Event, libro:Libro): void {
    event.preventDefault;
  
    if (this.contactForm.valid)
    {
      console.log(libro);
      this.libroService.onCrearRegistro(libro).subscribe(
        data => {
          alert("El libro ha sido agregado satisfactoriamente.");
            //this.router.navigate(['/login'])
          //}
      })
  }
  else
  {
    this.contactForm.markAllAsTouched();
  }
  };
  

  //Prop
}
