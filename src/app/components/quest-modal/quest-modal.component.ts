import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import {
  ILanguage,
  IQuest,
  IQuestCollection,
  IQuestsData,
} from '../../services/quest-data/quest-data.models';
import { QuestDataService } from '../../services/quest-data/quest-data.service';

@Component({
  selector: 'app-quest-modal',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule],
  templateUrl: './quest-modal.component.html',
  styleUrl: './quest-modal.component.scss',
})
export class QuestModalComponent implements OnInit {
  @Input() isModalOpen = false;
  @Output() modalClosed = new EventEmitter<void>();
  collectionData: IQuestCollection | null = null;
  questsData: IQuestsData | undefined = undefined;
  completedQuestsIds: number[] = [];
  currentLanguage: keyof ILanguage | null = null;
  questCount = 0;
  completedQuests = 0;

  constructor(
    private localStorageService: LocalStorageService,
    private languageService: LanguageService,
    private questDataService: QuestDataService
  ) {
    this.completedQuestsIds = this.localStorageService.getQuestIds() || [];
  }

  ngOnInit(): void {
    this.completedQuests = 0;

    this.questDataService.questCount$.subscribe(count => {
      this.questCount = count;
    });

    this.questDataService.selectedCollection$.subscribe(c => {
      this.collectionData = c;
    });

    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    this.localStorageService.savedIds$.subscribe(ids => {
      this.completedQuestsIds = ids;
      this.completedQuests =
        this.completedQuestsIds.filter(x => ids.includes(x)).length ?? 0;
    });
  }

  addQuestId(id: number): void {
    this.localStorageService.addQuestId(id);
  }

  removeQuestId(id: number): void {
    this.localStorageService.removeQuestId(id);
  }

  clearQuestIds(): void {
    this.localStorageService.clearQuestIds();
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.modalClosed.emit();
  }

  findQuestsByType(type: string): void {
    this.questsData = this.collectionData?.questsData.find(
      x => x.type.pt === type
    );
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  flatQuests(data: IQuest[]): IQuest[] {
    return data.flat(2);
  }

  verifyQuestCompletation(id: number): boolean {
    return this.completedQuestsIds.includes(id);
  }

  onCheckboxChange(number: number, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.addQuestId(number);
    } else {
      this.removeQuestId(number);
    }
  }

  verifyAllCompleteByType(): boolean {
    const ids = this.questsData?.quests.map(x => x.questId) ?? [];

    return ids.every(x => this.completedQuestsIds.includes(x));
  }

  onAllCheckboxChange(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    const ids = this.questsData?.quests.map(x => x.questId) ?? [];

    const idsList = ids.filter(x =>
      isChecked
        ? !this.completedQuestsIds?.includes(x)
        : this.completedQuestsIds?.includes(x)
    );

    if (isChecked) {
      this.localStorageService.addQuestList(idsList);
    } else {
      this.localStorageService.removeQuestList(idsList);
    }
  }
}
