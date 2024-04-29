import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  message:string='bonjour,monde! ';
  constructor(){}

  ngOnInit():void{}

  changerMessage(): void {
    this.message = 'Nouveau message!';
    }
    

}
