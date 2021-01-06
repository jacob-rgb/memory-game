import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// type para definir card
// name para mostrar el nombre
// visible para mostrar/ocultar el nombre
export type card = {
  name: string,
  visible: boolean,
  matched:boolean,
  background: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // input prop card para hacer display de la card
 
  @Input() card: card = {name: '', visible: false, matched: false, background: ""};
  // output prop cardClick para emitir cuando se hace un click
  @Output() cardClick: EventEmitter<card> = new EventEmitter<card>();

  // constructor de la clase, no haremos nada
  constructor() { }

  // ngOnInit de la clase, no haremos nada
  ngOnInit(): void {
  }

  // método hasClicked para capturar el evento y emitir por el output la card entera
  hasClicked(event: any) {
    this.card.visible = !this.card.visible;
    this.cardClick.emit(this.card);
  }

}
