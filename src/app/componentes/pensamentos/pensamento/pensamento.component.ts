import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})

export class PensamentoComponent {

  @Input() pensamento = {
    id: '1',
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
