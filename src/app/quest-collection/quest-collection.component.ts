import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IQuestsData, questData } from '../data/questsData';
import { QuestComponent } from '../quest/quest.component';

@Component({
  selector: 'app-quest-collection',
  standalone: true,
  imports: [QuestComponent, NgFor],
  templateUrl: './quest-collection.component.html',
  styleUrl: './quest-collection.component.scss',
})
export class QuestCollectionComponent {
  quests: IQuestsData[] = questData;
}
