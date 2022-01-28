import { Component, OnInit } from '@angular/core';
import { Ajedrez } from './Ajedrez';
import { Reina } from './Reina';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.scss']
})
export class Ejercicio2Component implements OnInit {

  ajedrez: Ajedrez;

  constructor() {
    this.ajedrez = new Ajedrez([
      new Reina (1,1),
      new Reina (2,5),
      new Reina (3,8),
      new Reina (4,6),
      new Reina (5,3),
      new Reina (6,7),
      new Reina (7,2),
      new Reina (8,4),
    ]);
  }

  ngOnInit() {
    console.log(this.ajedrez.tablero);
  }

  onButtonClick() {
    const tableroValido = this.ajedrez.validarTablero();
    if (tableroValido) {
      alert('El tablero es valido, ninguna reina se está atacando')
    } else {
      alert('El tablero es invalido, hay reinas se que están atacando');
    }
  }

}
