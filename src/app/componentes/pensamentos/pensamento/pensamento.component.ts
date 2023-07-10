import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})

export class PensamentoComponent {

  @Input() pensamento : Pensamento = {
    id: 0,
    conteudo: 'I Love Angula',
    autoria: 'Minha autoria',
    modelo: 'modelo3',
  }

  constructor() {}

  ngOnInit(): void {
      
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 200) {
      return 'pensamento-g'
    } else {
      return 'pensamento-p'
    }
  }
}
