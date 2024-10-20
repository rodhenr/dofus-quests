import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IQuestCollection, questData } from '../data/questsData';
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
  selectedCollection: IQuestCollection | null = questData[0];
  isModalVisible = false;

  onModalClose(): void {
    this.isModalVisible = false;
  }

  selectCollection(id: number): void {
    if (this.selectCollection !== null) {
      const collection = this.quests!.find(x => x.id == id);

      if (collection) {
        this.selectedCollection = collection;
        this.isModalVisible = true;
      }
    }
  }
}
