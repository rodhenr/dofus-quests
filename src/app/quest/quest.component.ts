import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IQuestsData } from '../data/questsData';

@Component({
  selector: 'app-quest',
  standalone: true,
  imports: [NgFor],
  templateUrl: './quest.component.html',
  styleUrl: './quest.component.scss',
})
export class QuestComponent {
  @Input() data!: IQuestsData;
}
