import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IQuestCollection } from '../../data/interfaces';
import { questData } from '../../data/questsData';

export interface IQuestsHome {
  id: number;
  level: number;
}

@Injectable({
  providedIn: 'root',
})
export class QuestDataService {
  private selectedCollectionData = new BehaviorSubject<IQuestCollection | null>(
    null
  );
  private questCount = new BehaviorSubject<number>(0);

  selectedCollection$ = this.selectedCollectionData.asObservable();
  questCount$ = this.questCount.asObservable();

  constructor() {}

  setCollectionById(id: number): void {
    const collection = questData.find(x => x.id === id) ?? null;

    this.questCount.next(
      collection?.questsData.reduce((total, q) => {
        return total + q.quests.length;
      }, 0) ?? 0
    );
    this.selectedCollectionData.next(collection);
  }
}
