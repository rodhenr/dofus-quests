import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IQuestCollection } from '../../data/interfaces';
import { questData } from '../../data/questsData';
import { QuestDataService } from '../../services/quest-data/quest-data.service';
import { QuestModalComponent } from '../quest-modal/quest-modal.component';
import { QuestComponent } from '../quest/quest.component';

@Component({
  selector: 'app-quest-collection',
  standalone: true,
  imports: [QuestComponent, NgFor, QuestModalComponent],
  templateUrl: './quest-collection.component.html',
  styleUrl: './quest-collection.component.scss',
})
export class QuestCollectionComponent {
  quests: IQuestCollection[] = questData;
  isModalVisible = false;

  constructor(private questDataService: QuestDataService) {}

  onSelectCollection(id: number): void {
    this.questDataService.setCollectionById(id);
    this.isModalVisible = true;
  }

  onModalClose(): void {
    this.isModalVisible = false;
  }
}
