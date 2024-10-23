import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IQuestsHome } from '../../services/quest-data/quest-data.service';

@Component({
  selector: 'app-quest',
  standalone: true,
  imports: [NgFor],
  templateUrl: './quest.component.html',
  styleUrl: './quest.component.scss',
})
export class QuestComponent {
  @Input() data!: IQuestsHome;
}
