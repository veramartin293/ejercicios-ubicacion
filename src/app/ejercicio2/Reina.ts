export class Reina {
  fila: number;
  columna: number;

  constructor(fila: number, columna: number) {
    this.fila = fila;
    this.columna = columna;
  }

  getPosition(): number[] {
    return [this.fila, this.columna];
  }
}
