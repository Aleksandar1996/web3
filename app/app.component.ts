import { Component } from '@angular/core';
import { Hangman } from './hangman';
import { Generator } from './Reci';

@Component({
  selector: 'igra',
  templateUrl: 'app/app.component.html',
  styles: ['#ceo { width: 100%; border: 1px solid black; text-align: center; } #slika { width: 100%; text-align: center; }']
})

export class AppComponent {
  alfabet: Array<string>
  igra: Hangman
  randomRec: string
  gen: Generator

  constructor() {
    this.gen=new Generator();
    this.randomRec=this.gen.vratiRandRec();
    this.igra = new Hangman(this.randomRec)
    this.alfabet = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
      'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U','V','X','W','Y','Z',
    ]
  }

  pogadjanje(abc: string) {
    this.igra.pogadjaj(abc)
  }
  vratiPogresne(): string[]
  {
    return this.igra.vratiPogresne();
  }
  restartujIgru()
  {
    this.randomRec=this.gen.vratiRandRec();
    this.igra.restartuj(this.randomRec);
  }
}