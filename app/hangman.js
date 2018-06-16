"use strict";
var Hangman = (function () {
    function Hangman(rec) {
        this.rec = rec;
        this.nagadjanja = new Set();
        this.brpogpokusaja = 0;
        this.nizSlova = [];
    }
    Hangman.prototype.pogadjaj = function (pokusaj) {
        var ima = false;
        this.nizSlova.forEach(function (element) {
            if (element === pokusaj) {
                ima = true;
            }
        });
        if (ima) {
            return;
        }
        this.nizSlova.push(pokusaj);
        this.nagadjanja.add(pokusaj);
        if (!this.rec.includes(pokusaj)) {
            this.brpogpokusaja++;
        }
    };
    Hangman.prototype.vratiBrPokusaja = function () {
        return this.brpogpokusaja;
    };
    Hangman.prototype.vratiRec = function () {
        var _this = this;
        var a = Array
            .from(this.rec)
            .map(function (x) { return _this.nagadjanja.has(x) ? x : '*'; })
            .join('');
        if (a.includes('*')) {
            return a;
        }
        else {
            return 'POBEDILI STE, REC JE BILA: ' + a;
        }
    };
    Hangman.prototype.vratiPogresne = function () {
        var _this = this;
        return Array
            .from(this.nagadjanja)
            .filter(function (x) { return !_this.rec.includes(x); });
    };
    Hangman.prototype.restartuj = function (rec) {
        this.rec = rec;
        this.nagadjanja.clear();
        this.brpogpokusaja = 0;
        this.nizSlova = [];
    };
    return Hangman;
}());
exports.Hangman = Hangman;
//# sourceMappingURL=hangman.js.map