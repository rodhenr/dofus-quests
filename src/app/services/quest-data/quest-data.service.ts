import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { questsDataCollection } from '../../../data/questsData';
import { IQuestCollection } from './quest-data.models';

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
    const collection = questsDataCollection.find(x => x.id === id) ?? null;

    if (collection !== null) {
      collection.questsData =
        collection?.questsData.map(q => {
          const questsOrderedByLevel = q.quests.sort(
            (a, b) => a.level - b.level
          );

          return { ...q, quests: questsOrderedByLevel };
        }) ?? null;
    }

    this.questCount.next(
      collection?.questsData.reduce((total, q) => {
        return total + q.quests.length;
      }, 0) ?? 0
    );
    this.selectedCollectionData.next(collection);
  }

  getQuestsInfo(): IQuestsHome[] {
    return questsDataCollection.map(x => {
      return { id: x.id, level: x.level };
    });
  }
}
