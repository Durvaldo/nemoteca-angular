import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';



const breed = [
  {
    breedMin: 0,
    breedMax: 0
  },
  {
    breedMin: 1,
    breedMax: 1
  },
  {
    breedMin: 2,
    breedMax: 7
  },
]



@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {
  
  listaPensamentos: Pensamento[] = []

  constructor() {}

  ngOnInit(): void {
      
  }
}


