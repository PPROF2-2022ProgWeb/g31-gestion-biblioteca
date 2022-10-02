import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from '../usuarios/usuarios.component';

@Component({
  selector: 'app-nuevo-usuario', 
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
  
})
export class NuevoUsuarioComponent implements OnInit {

  formulario: FormGroup;

  usuario: Usuario = new Usuario();

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) {
    this.formulario= this.fb.group(
      {
        nombre : new FormControl('', [Validators.required]),
        apellido : new FormControl('', [Validators.required]),
        domicilio : new FormControl('', [Validators.required]),
        telefono : new FormControl('', [Validators.required])
      }
    )
   }

  ngOnInit(): void {
    
  }
  
  onSubmit(): void{
    console.log('form ->', this.formulario.value);
 }

 onEnviar(event: Event, usuario:Usuario): void {
  event.preventDefault;

  if (this.formulario.valid)
  {
    console.log(usuario);
    this.usuarioService.AgregarUsuario(usuario).subscribe(
      data => {
        console.log(data);
        //if (data['id_usuario']>0)
        //{
          //alert("El registro ha sido creado satisfactoriamente. A continuación, por favor Inicie Sesión.");
          //this.router.navigate(['/login'])
        //}
    })
}
else
{
  this.formulario.markAllAsTouched();
}
};

  //Propiedades del formulario


get Telefono()
{
  return this.formulario.get("telefono");
}

get Pais()
{
  return this.formulario.get("pais");
}

get Ciudad()
{
  return this.formulario.get("ciudad");
}
get Provincia()
{
  return this.formulario.get("provincia");
}

get Mail()
{
 return this.formulario.get("email");
}

get Nombre()
{
  return this.formulario.get("nombre");
}

get Apellido()
{
 return this.formulario.get("apellido");
}

get Domicilio()
{
 return this.formulario.get("domicilio");
}



get DomicilioValid()
{
  return this.Domicilio?.touched && !this.Domicilio?.valid;
}

get NombreValid()
{
  return this.Nombre?.touched && !this.Nombre?.valid;
}

get ApellidoValid()
{
  return this.Apellido?.touched && !this.Apellido?.valid;
}

get TelefonoValid()
{
  return this.Telefono?.touched && !this.Telefono?.valid;
}




get PaisValid(){
  return this.Pais?.touched && !this.Pais?.valid;
}
get CiudadValid(){
  return this.Ciudad?.touched && !this.Ciudad?.valid;
}
get ProvinciaValid(){
  return this.Provincia?.touched && !this.Provincia?.valid;
}

}
