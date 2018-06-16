"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hangman_1 = require('./hangman');
var Reci_1 = require('./Reci');
var AppComponent = (function () {
    function AppComponent() {
        this.gen = new Reci_1.Generator();
        this.randomRec = this.gen.vratiRandRec();
        this.igra = new hangman_1.Hangman(this.randomRec);
        this.alfabet = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z',
        ];
    }
    AppComponent.prototype.pogadjanje = function (abc) {
        this.igra.pogadjaj(abc);
    };
    AppComponent.prototype.vratiPogresne = function () {
        return this.igra.vratiPogresne();
    };
    AppComponent.prototype.restartujIgru = function () {
        this.randomRec = this.gen.vratiRandRec();
        this.igra.restartuj(this.randomRec);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'igra',
            templateUrl: 'app/app.component.html',
            styles: ['#ceo { width: 100%; border: 1px solid black; text-align: center; } #slika { width: 100%; text-align: center; }']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map