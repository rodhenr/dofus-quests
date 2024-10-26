import { IQuestCollection } from '../app/services/quest-data/quest-data.models';
import { dataLevel1 } from './dataLevel1-50';
import { dataLevel50 } from './dataLevel50-60';
import { dataLevel60 } from './dataLevel60-70';

export const questsDataCollection: IQuestCollection[] = [
  dataLevel1,
  dataLevel50,
  dataLevel60,
];
