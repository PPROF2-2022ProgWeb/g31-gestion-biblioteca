import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from 'src/app/Services/usuario.service';
@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
})
export class NuevoUsuarioComponent implements OnInit {
  formulario: FormGroup;

  usuario: Usuario = new Usuario();
  idUsuario?: any;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {
    this.formulario = this.fb.group({
      name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      domicilio: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.idUsuario = this.route.snapshot.paramMap.get('id');
    if (this.idUsuario) {
      this.usuarioService
        .ObtenerUsuarioId(parseInt(this.idUsuario))
        .subscribe((data) => {
          this.usuario = data;
          const element: HTMLElement = document.getElementById(
            'tituloUsuario'
          ) as HTMLElement;
          element.innerHTML = 'Editar Usuario';
        });
    }
  }

  onEnviar(event: Event, usuario: Usuario): void {
    event.preventDefault;

    if (this.idUsuario) {
      this.usuarioService.EditarUsuario(this.usuario).subscribe((data) => {
        alert('El usuario ha sido editado satisfactoriamente.');
      });
    } else {
      if (this.formulario.valid) {
        console.log(usuario);
        this.usuarioService.onCrearRegistro(usuario).subscribe((data) => {
          alert('El usuario ha sido creado satisfactoriamente.');
        });
      } else {
        this.formulario.markAllAsTouched();
      }
    }
  }

  //Propiedades del formulario

  get Telefono() {
    return this.formulario.get('tel');
  }

  get Nombre() {
    return this.formulario.get('name');
  }

  get Apellido() {
    return this.formulario.get('last_name');
  }

  get Domicilio() {
    return this.formulario.get('domicilio');
  }

  get DomicilioValid() {
    return this.Domicilio?.touched && !this.Domicilio?.valid;
  }

  get NombreValid() {
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  get ApellidoValid() {
    return this.Apellido?.touched && !this.Apellido?.valid;
  }

  get TelefonoValid() {
    return this.Telefono?.touched && !this.Telefono?.valid;
  }
}
