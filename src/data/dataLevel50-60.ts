import { IQuestCollection } from '../app/services/quest-data/quest-data.models';

export const dataLevel50: IQuestCollection = {
  id: 2,
  levelRange: '50-60',
  questsData: [
    {
      type: {
        pt: 'Calabouços',
        en: 'Dungeons',
        fr: 'Donjons',
      },
      quests: [
        {
          questId: 896,
          name: {
            pt: 'Calabouço de musgo',
            en: 'Foam Dungeon',
            fr: 'Donjon en mousse',
          },
          level: 20,
          isRepeatable: false,
        },
        {
          questId: 2005,
          name: {
            pt: 'Volta ao mundo',
            en: 'Trip Around the World',
            fr: 'Le tour du monde',
          },
          level: 20,
          isRepeatable: false,
        },
        {
          questId: 2006,
          name: {
            pt: 'Cortar Paparneirinhos',
            en: 'Back to Our Gobblies',
            fr: 'Revenons à nos bouftons',
          },
          level: 30,
          isRepeatable: false,
        },
        {
          questId: 2003,
          name: {
            pt: 'Calabouço miúdo',
            en: 'Rikiki Dungeon',
            fr: 'Donjon rikiki',
          },
          level: 40,
          isRepeatable: false,
        },
        {
          questId: 897,
          name: {
            pt: 'Calabouço em farrapos',
            en: 'Raggy Dungeon',
            fr: 'Donjon en lambeaux',
          },
          level: 40,
          isRepeatable: false,
        },
        {
          questId: 153,
          name: {
            pt: 'O mestre das chaves',
            en: 'The Key Master',
            fr: 'Le maître des clefs',
          },
          level: 40,
          isRepeatable: false,
        },
        {
          questId: 898,
          name: {
            pt: 'Calabouço fofo',
            en: 'Cosy Dungeon',
            fr: 'Donjon douillet',
          },
          level: 50,
          isRepeatable: false,
        },
        {
          questId: 899,
          name: {
            pt: 'Calabouço Magistral',
            en: 'Brilliant Dungeon',
            fr: 'Donjon magistral',
          },
          level: 50,
          isRepeatable: false,
        },
        {
          questId: 154,
          name: {
            pt: 'Os escudeiros do mestre (Parte 1)',
            en: "The Master's Henchmen (Part 1)",
            fr: 'Les sbires du maître (Partie 1)',
          },
          level: 50,
          isRepeatable: false,
        },
      ],
      success: null,
    },
  ],
};
