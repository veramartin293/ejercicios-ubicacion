import { Reina } from "./Reina"

export class Ajedrez {
  tablero: number[][];
  reinas: Reina[] = [];

  constructor (reinas: Reina[]) {
    this.tablero = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];

    this.setReinas(reinas);
    this.setReinasInTablero();
  }

  private setReinas(reinas: Reina[]) {
    for (const reina of reinas) {
      if (reina.fila > 8 || reina.fila < 1 || reina.columna > 8 || reina.columna < 1) {
        this.reinas = [];
        break;
      } else {
        this.reinas.push(new Reina(Math.abs(reina.fila), Math.abs(reina.columna)));
      }
    }
  }

  private setReinasInTablero() {
    this.reinas.forEach((reina: Reina) => {
      this.tablero[reina.fila - 1][reina.columna - 1] = 1
    });
    console.log('Tablero seteado');
    console.log(...this.tablero);
  }

  private checkIfReinaEsAtacada(reina: Reina): boolean {
    let reinaEstaAtacada = false;
    for (const el of this.reinas) {
      const esEllaMisma = (el.fila === reina.fila) && (el.columna === reina.columna);
      if (esEllaMisma) {
        continue;
      }
      const atacadaPorHorizontal = el.fila === reina.fila;
      const atacadaPorVertical = el.columna === reina.columna;
      const esAtacadaPorDiagonal = this.esAtacadaPorDiagonal(reina, el);
      if (atacadaPorHorizontal || atacadaPorVertical || esAtacadaPorDiagonal) {
        reinaEstaAtacada = true;
        break;
      }
    }
    return reinaEstaAtacada;
  }

  private esAtacadaPorDiagonal(reina1: Reina, reina2: Reina): boolean {
    const distEnX = reina2.fila - reina1.fila;
    const distEnY = reina2.columna - reina1.columna;
    const atacadaPorDiagonal = Math.abs(distEnX) === Math.abs(distEnY);
    return atacadaPorDiagonal;
  }

  public validarTablero(): boolean {
    let tableroValido = true;
    for (const reina of this.reinas) {
      if (this.checkIfReinaEsAtacada(reina)) {
        tableroValido = false;
        break;
      }
    }
    return tableroValido;
  }
}
