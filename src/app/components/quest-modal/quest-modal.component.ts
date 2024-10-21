import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ILanguage,
  IQuest,
  IQuestCollection,
  IQuestsData,
} from '../../data/questsData';
import { LanguageService } from '../../services/language.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-quest-modal',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule],
  templateUrl: './quest-modal.component.html',
  styleUrl: './quest-modal.component.scss',
})
export class QuestModalComponent implements OnInit {
  @Input() collectionData: IQuestCollection | null = null;
  @Input() level: number | null = null;
  @Input() isModalOpen = false;
  @Output() modalClosed = new EventEmitter<void>();
  questsData: IQuestsData | undefined = undefined;
  localStorageQuestIds: number[] = [];
  currentLanguage: keyof ILanguage | null = null;

  constructor(
    private localStorageService: LocalStorageService,
    private languageService: LanguageService
  ) {
    this.getLocalStorageQuestIds();
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  changeLanguage(lang: keyof ILanguage): void {
    this.languageService.setLanguage(lang);
  }

  getLocalStorageQuestIds(): void {
    this.localStorageQuestIds = this.localStorageService.getQuestIds() || [];
  }

  addQuestId(id: number): void {
    this.localStorageQuestIds.push(id);
    this.localStorageService.setQuestIds(this.localStorageQuestIds);
  }

  removeQuestId(id: number): void {
    this.localStorageQuestIds = this.localStorageQuestIds.filter(x => x !== id);
    this.localStorageService.setQuestIds(this.localStorageQuestIds);
  }

  clearQuestIds(): void {
    this.localStorageService.clearQuestIds();
    this.localStorageQuestIds = [];
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
    return this.localStorageQuestIds.includes(id);
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

    return ids.every(x => this.localStorageQuestIds.includes(x));
  }

  onAllCheckboxChange(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    const ids = this.questsData?.quests.map(x => x.questId) ?? [];

    this.localStorageQuestIds = this.localStorageQuestIds.filter(
      x => !ids?.includes(x)
    );

    if (isChecked) {
      this.localStorageQuestIds = [...this.localStorageQuestIds, ...ids];
    }

    this.localStorageService.setQuestIds(this.localStorageQuestIds);
  }
}
