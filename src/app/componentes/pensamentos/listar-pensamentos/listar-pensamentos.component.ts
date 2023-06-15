import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {
  
  listaPensamentos = [
    {
      id: '1',
      conteudo: 'I Love Angula',
      autoria: 'Minha autoria',
      modelo: 'modelo3',
    },
    {
      id: '2',
      conteudo: 'É fazendo merda que se aduba a vida',
      autoria: 'Fraldinha - 2017',
      modelo: 'modelo1',
    },
    {
      id: '3',
      conteudo: 'Sabe porque que seus amigos novos te apoiam mais que as pessoas que te conhecem a muito tempo? Porque as pessoas que te conhecem há muito tempo demoram um tempão para entender que vocês vieram do mesmo lugar e continuam lá',
      autoria: 'Yuri Gay - 2023',
      modelo: 'modelo3',
    },
    {
      id: '4',
      conteudo: 'Acorde para o fracasso',
      autoria: 'Yuri Paiva - 2023',
      modelo: 'modelo2',
    },
    {
      id: '4',
      conteudo: 'Na minha maquina funciona',
      autoria: 'Dev',
      modelo: 'modelo1',
    },
  ]

  constructor() {}

  ngOnInit(): void {
      
  }
}
