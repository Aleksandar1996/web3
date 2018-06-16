export class Hangman {

  private rec: string
  private nagadjanja: Set<string>
  private brpogpokusaja: number
  private nizSlova: string[]

  constructor(rec: string) {
    this.rec = rec
    this.nagadjanja = new Set<string>()
    this.brpogpokusaja=0;
    this.nizSlova=[];
  }

  pogadjaj(pokusaj: string): void {
    let ima=false;
    this.nizSlova.forEach(function(element) {
      if(element===pokusaj)
      {
        ima=true;
      }
    });
    if(ima)
    {
      return;
    }
    this.nizSlova.push(pokusaj);
    this.nagadjanja.add(pokusaj)
    if(!this.rec.includes(pokusaj))
    {
      this.brpogpokusaja++;
    }
  }
  vratiBrPokusaja()
  {
    return this.brpogpokusaja;
  }
  vratiRec(): string {
    let a=Array
      .from(this.rec)
      .map(x => this.nagadjanja.has(x) ? x : '*')
      .join('')
    if(a.includes('*'))
    {
      return a;
    }
    else
    {
      return 'POBEDILI STE, REC JE BILA: '+ a;
    }
  }
  vratiPogresne(): string[] {
    return Array
      .from(this.nagadjanja)
      .filter(x => ! this.rec.includes(x))
  }
  restartuj(rec)
  {
    this.rec=rec;
    this.nagadjanja.clear();
    this.brpogpokusaja=0;
    this.nizSlova=[];
  }
}