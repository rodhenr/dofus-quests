import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageKey = 'quests';
  private savedIds = new BehaviorSubject<number[]>([]);
  savedIds$ = this.savedIds.asObservable();

  constructor() {
    this.savedIds.next(this.getQuestIds());
  }

  getQuestIds(): number[] {
    const quests = localStorage.getItem(this.storageKey);
    return quests ? JSON.parse(quests) : null;
  }

  addQuestId(id: number): void {
    const data = [...this.savedIds.value, id];

    localStorage.setItem(this.storageKey, JSON.stringify(data));
    this.savedIds.next(data);
  }

  removeQuestId(id: number): void {
    const data = this.savedIds.value.filter(x => x !== id);

    localStorage.setItem(this.storageKey, JSON.stringify(data));
    this.savedIds.next(data);
  }

  clearQuestIds(): void {
    localStorage.removeItem(this.storageKey);
    this.savedIds.next([]);
  }

  addQuestList(list: number[]): void {
    const data = [...this.savedIds.value, ...list];

    localStorage.setItem(this.storageKey, JSON.stringify(data));
    this.savedIds.next(data);
  }

  removeQuestList(list: number[]): void {
    const data = this.savedIds.value.filter(x => !list.includes(x));

    localStorage.setItem(this.storageKey, JSON.stringify(data));
    this.savedIds.next(data);
  }
}
