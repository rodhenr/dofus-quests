import { IQuestCollection } from '../app/services/quest-data/quest-data.models';
import { dataLevel10 } from './dataLevel10';
import { dataLevel20 } from './dataLevel20-40';

export const questsDataCollection: IQuestCollection[] = [
  dataLevel10,
  dataLevel20,
];
