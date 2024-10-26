export interface IQuestCollection {
  id: number;
  levelRange: string;
  questsData: IQuestsData[];
}

export interface IQuestsData {
  type: ILanguage;
  quests: IQuest[];
  success: ISuccess | null;
}

export interface IQuest {
  questId: number;
  name: ILanguage;
  level: number;
  isRepeatable: boolean;
}

export interface ISuccess {
  name: ILanguage;
}

export interface ILanguage {
  pt: string;
  en: string;
  fr: string;
}
