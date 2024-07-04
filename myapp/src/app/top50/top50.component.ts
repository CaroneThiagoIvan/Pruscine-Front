import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top50',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './top50.component.html',
  styleUrl: './top50.component.css'
})
export class Top50Component {

}
