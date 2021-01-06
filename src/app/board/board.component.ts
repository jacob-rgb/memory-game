import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import {card} from '../card/card.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  //
  names: string[] = [];
  //
  cards: card[] = [];

  lista: string [] = [];

  Attempts: number = 0;

  Points: number = 0;

  enabled: boolean = false;


  //
  constructor() {
    this.names = [
      'adonay',
      'jacobo',
      'elisa',
      'elisabet',
      'luis-marin',
      'luis-clar',
      'mónica',
      'sunil',
      'angelines',
      'paloma',
      'jordi',
      'marçal'
    ];
    let tempCards: string[] = [];
    this.names.forEach(card => {
      tempCards.push(card);
      tempCards.push(card);
    })

    this.names = tempCards;

    this.names = this.shuffle(this.names);

    this.cards = this.names.map(name => ({name: name, visible: false, matched: true, background: ""}));

  }

  //
  ngOnInit(): void {
    
  }

  // returns a shuffled array
  shuffle(a: string[]) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }


  //
  decide(value: any) {
  console.log(value)  
  this.lista.push(value)

  if (this.lista.length % 2 != 1) {
    this.Attempts ++
    var newLista:any = this.lista.slice(this.lista.length - 2)
    if (newLista.length === 2) {
      if(newLista[0].name === newLista[1].name && newLista[0].visible && newLista[1].visible) {
        this.Points ++
        this.cards.forEach((item) => {
          if (item['name'] === newLista[0].name && item['visible'] && newLista[0].visible) {
             console.log("Los nombres coinciden");
             item.matched = true;
             item.background ="green";
          } 
        })
        newLista = []
      } else {
        this.cards.forEach((item) => {
          if(item.visible && newLista[1].visible  && item.matched === false)
            item.background = "red";
            setTimeout(() => {
              if (item.visible &&  item.matched != true) {
                   item.visible = false;
                   item.background = "";
              }
            },1000)
        })
        newLista = []
      }
   } 
  }
}
startGame() {
  this.enabled = true;
  this.cards.forEach((item) => {
    item.matched = false;
  })

}
}