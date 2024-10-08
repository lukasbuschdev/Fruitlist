import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fruit } from '../../types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singlefruit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})

export class SinglefruitComponent {
  @Input() fruit: Fruit = {
    name: "Melone",
    img:"orange.png",
    description: "Das Innere der Orangenschale ist weiß und kann nicht gegessen werden. Es muss vor dem Verzehr abgeschält werden. Orangen können zu verschiedenen Produkten verarbeitet werden. Ihre gepressten Säfte werden als Orangensaft verkauft. Den Duft der Orangenschale nutzt man zur Herstellung eines Parfüms. Der Tee wird aus getrockneten Orangenschalen hergestellt.",
    genus: "Pflanzenart aus der Familie der  Rautengewächse",
    stars: 4.7,
    reviews:[]
  };

  inputData = '';

  @Output() fruitcomment = new EventEmitter<string>();

  sendInputData() {
    this.fruitcomment.emit(this.inputData);
    this.inputData = "";
  }
}
