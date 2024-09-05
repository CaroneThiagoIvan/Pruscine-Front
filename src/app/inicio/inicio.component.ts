import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.services';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(public authService: AuthService){}
}
