import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { InputText } from "primeng/inputtext";

@Component({
  selector: 'app-machine-filter-card',
  imports: [Card, InputText],
  templateUrl: './machine-filter-card.html',
  styleUrl: './machine-filter-card.scss',
})
export class MachineFilterCard {

}
