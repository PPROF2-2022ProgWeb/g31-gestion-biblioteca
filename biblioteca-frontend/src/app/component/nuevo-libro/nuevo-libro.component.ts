import { Libro } from './../../Services/libro.service';
import { LibroService } from './../../Services/libro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css'],
})
export class NuevoLibroComponent implements OnInit {
  contactForm: FormGroup;

  libro: Libro = new Libro();

  idLibro?: any;

  constructor(
    private fb: FormBuilder,
    private libroService: LibroService,
    private route: ActivatedRoute
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
    this.idLibro = this.route.snapshot.paramMap.get('id');
    if (this.idLibro) {
      this.libroService
        .ObtenerLibroId(parseInt(this.idLibro))
        .subscribe((data) => {
          this.libro = data;
          const contenedor: HTMLElement = document.getElementById(
            'tituloLibro'
          ) as HTMLElement;
          contenedor.innerHTML = 'Editar Libro';
        });
    }
  }

  onEnviar(event: Event, libro: Libro): void {
    event.preventDefault;

    if (this.idLibro) {
      this.libroService.EditarLibro(libro).subscribe((data) => {
        alert('El libro ha sido editado satisfactoriamente.');
      });
    } else {
      if (this.contactForm.valid) {
        console.log(libro);
        this.libroService.onCrearRegistro(libro).subscribe((data) => {
          alert('El libro ha sido agregado satisfactoriamente.');
        });
      } else {
        this.contactForm.markAllAsTouched();
      }
    }
  }
}
