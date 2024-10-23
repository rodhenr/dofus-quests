export interface IQuestCollection {
  id: number;
  level: number;
  questsData: IQuestsData[];
}

export interface IQuestsData {
  type: ILanguage;
  quests: IQuest[];
  success: ISuccess;
}

export interface IQuest {
  questId: number;
  name: ILanguage;
  links: ILanguage;
  level: number;
  isRepeatable: boolean;
}

export interface ISuccess {
  name: ILanguage;
  links: ILanguage;
}

export interface ILanguage {
  pt: string;
  en: string;
  fr: string;
}
