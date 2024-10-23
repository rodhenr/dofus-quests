import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IQuestsHome,
  QuestDataService,
} from '../../services/quest-data/quest-data.service';
import { QuestModalComponent } from '../quest-modal/quest-modal.component';
import { QuestComponent } from '../quest/quest.component';

@Component({
  selector: 'app-quest-collection',
  standalone: true,
  imports: [QuestComponent, NgFor, QuestModalComponent],
  templateUrl: './quest-collection.component.html',
  styleUrl: './quest-collection.component.scss',
})
export class QuestCollectionComponent implements OnInit {
  quests: IQuestsHome[] = [];
  isModalVisible = false;

  constructor(private questDataService: QuestDataService) {}

  ngOnInit(): void {
    this.quests = this.questDataService.getQuestsInfo();
  }

  onSelectCollection(id: number): void {
    this.questDataService.setCollectionById(id);
    this.isModalVisible = true;
  }

  onModalClose(): void {
    this.isModalVisible = false;
  }
}
