import { Component } from '@angular/core';
import { AuthService } from '../services/auth.services';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { inject } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent {

  constructor(private router: Router) {
    
  }

  service: AuthService = inject(AuthService);

  applyForm = new FormGroup({
    email: new FormControl(''),
    contrasenia: new FormControl('')
  })

  authUser(formData: any){
    const body ={
      'nombre': formData.nombre,
      'email': formData.mail,
      'contrasenia': formData.contrasenia,
      'fechaNacimiento': formData.fechaNacimiento
  }

    this.service.logUser(body).subscribe();
  }

login(){
  console.log("llegue");
  
  const formData = this.applyForm.value;
  this.authUser(formData);
  this.router.navigate(['/']);
}
/*
  service: AuthService;
  formLog: FormGroup;
  
  constructor(private AuthService: AuthService, private formBuilder: FormBuilder, private router: Router){
    this.service = AuthService;
    this.formLog = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      contra: ['', Validators.required]
    });
  }

  login(){
    if (this.formLog.valid) {
      const { email, password } = this.formLog.value;
      console.log(email, password);
    }
    else {
      console.log('Error en formulario');
      this.formLog.markAllAsTouched();
    }
    
    this.service.logUser(this.formLog.get('mail')?.value, this.formLog.get('password')?.value).subscribe((res: any) => {
      localStorage.setItem('token', res.token); 
      this.router.navigateByUrl("/");
    });
  }
  */
}
