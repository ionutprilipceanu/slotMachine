import { Component, OnInit } from '@angular/core';

interface Card {
  value: string;
  image: string;
  flipped: boolean;
}

@Component({
  selector: 'app-parent-content',
  templateUrl: './parent-content.component.html',
  styleUrls: ['./parent-content.component.scss'],
})
export class ParentContentComponent {}
