import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageKey = 'quests';

  constructor() {}

  getQuestIds(): number[] {
    const quests = localStorage.getItem(this.storageKey);
    return quests ? JSON.parse(quests) : null;
  }

  setQuestIds(data: number[]): void {
    const questsString = JSON.stringify(data);
    localStorage.setItem(this.storageKey, questsString);
  }

  clearQuestIds(): void {
    localStorage.removeItem(this.storageKey);
  }
}
