import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Lending, PrestamoService } from 'src/app/Services/prestamo.service';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.css']
})
export class DevolucionesComponent implements OnInit {

  contactForm!: FormGroup;
  lending: Lending = new Lending();

  constructor(
    private fb: FormBuilder,
    private lendingService: PrestamoService,
    private router: Router
  ) {
    this.contactForm = this.fb.group({
      user_id: ['', [Validators.required] ],
      book_id: ['', [Validators.required] ],
    });
  }

  ngOnInit(): void {
    
  }
  
  

 //Propiedades del formulario



  onEnviar(event: Event, lending:Lending): void {
    event.preventDefault;
  
    if (this.contactForm.valid)
    {
      console.log(lending);
      this.lendingService.onDevolver(lending).subscribe(
        data => {
          alert("Se ha realizado la devolución satisfactoriamente.");
            //this.router.navigate(['/login'])
          //}
      })
  }
  else
  {
    this.contactForm.markAllAsTouched();
  }
  };

}
