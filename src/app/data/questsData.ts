export interface IQuestsData {
  type: ILanguage;
  levelRange: IQuestLevelRange;
  data: IQuests[];
  success: ISuccess;
}

export interface IQuests {
  quests: IQuest[];
  success: ISuccess;
}

export interface ILanguage {
  pt: string;
  en: string;
  fr: string;
}

export interface IQuestLevelRange {
  min: number;
  max: number;
}

export interface IQuest {
  name: ILanguage;
  links: ILanguage;
  xp: number;
  kamas: number;
  level: number;
  isRepeatable: boolean;
}

export interface ISuccess {
  name: ILanguage;
  links: ILanguage;
  rewards: ISuccessRewards;
}

export interface ISuccessRewards {
  xp: number;
  kamas: number;
}

export const questData: IQuestsData[] = [
  {
    type: {
      pt: 'Incarnam',
      en: 'Incarnam',
      fr: 'Incarnam',
    },
    levelRange: {
      min: 3,
      max: 10,
    },
    data: [
      {
        quests: [
          {
            name: {
              pt: 'Transporte Incomum',
              en: 'Uncommon Transport',
              fr: 'Transport peu commun',
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/Transporte_Incomum',
              en: 'https://dofuswiki.fandom.com/wiki/Uncommon_Transport',
              fr: 'https://www.dofuspourlesnoobs.com/transport-peu-commun.html',
            },
            level: 3,
            xp: 594,
            kamas: 24,
            isRepeatable: false,
          },
          {
            name: {
              pt: 'Vestígios dos Deuses',
              en: 'Vestiges of Legends',
              fr: 'Des vestiges de légende',
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/Vest%C3%ADgios_dos_Deuses',
              en: 'https://dofuswiki.fandom.com/wiki/Vestiges_of_Legends',
              fr: 'https://www.dofuspourlesnoobs.com/des-vestiges-de-leacutegende.html',
            },
            level: 5,
            xp: 2189,
            kamas: 52,
            isRepeatable: false,
          },
          {
            name: {
              pt: 'Visto do céu',
              en: "Bird's-eye",
              fr: 'Vu du ciel',
            },
            links: {
              pt: '',
              en: 'https://dofuswiki.fandom.com/wiki/Bird%27s-eye',
              fr: 'https://www.dofuspourlesnoobs.com/vu-du-ciel.html',
            },
            level: 6,
            xp: 2757,
            kamas: 68,
            isRepeatable: false,
          },
        ],
        success: {
          name: {
            pt: 'O Grande Explorador',
            en: 'High on Discovery',
            fr: 'Poussé par le vent',
          },
          links: {
            pt: 'https://dofus.fandom.com/pt-br/wiki/O_Grande_Explorador',
            en: 'https://dofuswiki.fandom.com/wiki/High_on_Discovery',
            fr: 'https://www.dofuspourlesnoobs.com/pousseacute-par-le-vent.html',
          },
          rewards: {
            xp: 11581,
            kamas: 560,
          },
        },
      },
      {
        quests: [
          {
            name: {
              pt: 'Posto à prova',
              en: 'Put to the Test',
              fr: "Mise à l'épreuve",
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/Posto_%C3%A0_prova',
              en: 'https://dofuswiki.fandom.com/wiki/Put_to_the_Test',
              fr: 'https://www.dofuspourlesnoobs.com/mise-agrave-leacutepreuve.html',
            },
            level: 3,
            xp: 534,
            kamas: 12,
            isRepeatable: false,
          },
          {
            name: {
              pt: 'Campos de Batalha',
              en: 'Battlefields',
              fr: 'Champs de bataille',
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/Campos_de_Batalha',
              en: 'https://dofuswiki.fandom.com/wiki/Battlefields',
              fr: 'https://www.dofuspourlesnoobs.com/champs-de-bataille.html',
            },
            level: 5,
            xp: 2045,
            kamas: 52,
            isRepeatable: false,
          },
          {
            name: {
              pt: 'Por àgua abaixo',
              en: 'Water Cutter',
              fr: "Coups d'épée dans l'eau",
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/Por_%C3%A1gua_abaixo',
              en: 'https://dofuswiki.fandom.com/wiki/Water_Cutter',
              fr: 'https://www.dofuspourlesnoobs.com/coups-deacutepeacutee-dans-leau.html',
            },
            level: 6,
            xp: 2757,
            kamas: 68,
            isRepeatable: false,
          },
          {
            name: {
              pt: 'Dizimando Papatudos',
              en: 'Gobball Decimation',
              fr: 'Décime-moi des bouftous',
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/Dizimando_Papatudos',
              en: 'https://dofuswiki.fandom.com/wiki/Gobball_Decimation',
              fr: 'https://www.dofuspourlesnoobs.com/deacutecime-moi-des-bouftous.html',
            },
            level: 7,
            xp: 3202,
            kamas: 84,
            isRepeatable: false,
          },
          {
            name: {
              pt: 'Caça aos Galmatunos',
              en: 'Spiritabby Hunt',
              fr: 'Chasse aux chapardams',
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/Ca%C3%A7a_aos_Galmatunos',
              en: 'https://dofuswiki.fandom.com/wiki/Spiritabby_Hunt',
              fr: 'https://www.dofuspourlesnoobs.com/chasse-aux-chapardams.html',
            },
            level: 8,
            xp: 4036,
            kamas: 102,
            isRepeatable: false,
          },
          {
            name: {
              pt: 'Lição de humildade',
              en: 'Lesson in Humility',
              fr: "Leçon d'humilité",
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/Li%C3%A7%C3%A3o_de_Humildade',
              en: 'https://dofuswiki.fandom.com/wiki/Lesson_in_Humility',
              fr: 'https://www.dofuspourlesnoobs.com/leccedilon-dhumiliteacute.html',
            },
            level: 8,
            xp: 4036,
            kamas: 102,
            isRepeatable: false,
          },
          {
            name: {
              pt: 'Faxina Macabra',
              en: 'March of the Chafers',
              fr: 'Des chafers qui marchent',
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/Faxina_Macabra',
              en: 'https://dofuswiki.fandom.com/wiki/March_of_the_Chafers',
              fr: 'https://www.dofuspourlesnoobs.com/des-chafers-qui-marchent.html',
            },
            level: 9,
            xp: 4551,
            kamas: 120,
            isRepeatable: false,
          },
        ],
        success: {
          name: {
            pt: 'Serviço na Milícia',
            en: 'Service in the Militia',
            fr: 'Service dans la milice',
          },
          links: {
            pt: 'https://dofus.fandom.com/pt-br/wiki/Servi%C3%A7o_na_Mil%C3%ADcia',
            en: 'https://dofuswiki.fandom.com/wiki/Service_in_the_Militia',
            fr: 'https://www.dofuspourlesnoobs.com/service-dans-la-milice.html',
          },
          rewards: {
            xp: 19116,
            kamas: 241,
          },
        },
      },
      {
        quests: [
          {
            name: {
              pt: 'Produtos naturais',
              en: 'Natural Products',
              fr: 'Produits naturels',
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/Produtos_Naturais',
              en: 'https://dofuswiki.fandom.com/wiki/Natural_Products',
              fr: 'https://www.dofuspourlesnoobs.com/produits-naturels.html',
            },
            level: 5,
            xp: 2127,
            kamas: 52,
            isRepeatable: false,
          },
          {
            name: {
              pt: 'O machado e a picareta',
              en: 'Hatchet and Pick',
              fr: 'La hache et la pioche',
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/O_Machado_e_a_Picareta',
              en: 'https://dofuswiki.fandom.com/wiki/Hatchet_and_Pick',
              fr: 'https://www.dofuspourlesnoobs.com/la-hache-et-la-pioche.html',
            },
            level: 6,
            xp: 2867,
            kamas: 68,
            isRepeatable: false,
          },
          {
            name: {
              pt: 'Tudo do Boon e do melhor',
              en: 'Boon Today, Boon Tomorrow',
              fr: 'Boune un jour, boune toujours',
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/Tudo_do_Boon_e_do_Melhor',
              en: 'https://dofuswiki.fandom.com/wiki/Boon_Today,_Boon_Tomorrow',
              fr: 'https://www.dofuspourlesnoobs.com/boune-un-jour-boune-toujours.html',
            },
            level: 7,
            xp: 6660,
            kamas: 169,
            isRepeatable: false,
          },
          {
            name: {
              pt: 'A escolha das armas',
              en: 'Weapon Choice',
              fr: 'Le choix des armes',
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/A_Escolha_das_Armas',
              en: 'https://dofuswiki.fandom.com/wiki/Weapon_Choice',
              fr: 'https://www.dofuspourlesnoobs.com/le-choix-des-armes.html',
            },
            level: 8,
            xp: 4197,
            kamas: 102,
            isRepeatable: false,
          },
        ],
        success: {
          name: {
            pt: 'Profissional qualificado',
            en: 'Harvest Time',
            fr: "C'est le métier qui rentre",
          },
          links: {
            pt: 'https://dofus.fandom.com/pt-br/wiki/Profissional_Qualificado',
            en: 'https://dofuswiki.fandom.com/wiki/Harvest_Time',
            fr: 'https://www.dofuspourlesnoobs.com/cest-le-meacutetier-qui-rentre.html',
          },
          rewards: {
            xp: 16952,
            kamas: 204,
          },
        },
      },
      {
        quests: [
          {
            name: {
              pt: 'A torta secreta',
              en: 'Secret Pancake',
              fr: 'La galette secrète',
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/A_Torta_Secreta',
              en: 'https://dofuswiki.fandom.com/wiki/Secret_Pancake',
              fr: 'https://www.dofuspourlesnoobs.com/la-galette-secregravete.html',
            },
            level: 7,
            xp: 3372,
            kamas: 84,
            isRepeatable: false,
          },
          {
            name: {
              pt: 'Morte ao rato!',
              en: 'Death to the Rat!',
              fr: 'Mort au rat !',
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/Morte_ao_Rato!',
              en: 'https://dofuswiki.fandom.com/wiki/Death_to_the_Rat!',
              fr: 'https://www.dofuspourlesnoobs.com/mort-au-rat.html',
            },
            level: 7,
            xp: 3372,
            kamas: 84,
            isRepeatable: false,
          },
          {
            name: {
              pt: 'Criptologia',
              en: 'Cryptology',
              fr: 'Cryptologie',
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/Criptologia',
              en: 'https://dofuswiki.fandom.com/wiki/Cryptology',
              fr: 'https://www.dofuspourlesnoobs.com/cryptologie.html',
            },
            level: 10,
            xp: 11032,
            kamas: 280,
            isRepeatable: false,
          },
          {
            name: {
              pt: 'Um pouco de pigmento',
              en: 'A Bit of Pigment',
              fr: 'Un peu de pigment',
            },
            links: {
              pt: 'https://dofus.fandom.com/pt-br/wiki/Um_Pouco_de_Pigmento',
              en: 'https://dofuswiki.fandom.com/wiki/A_Bit_of_Pigment',
              fr: 'https://www.dofuspourlesnoobs.com/un-peu-de-pigment.html',
            },
            level: 6,
            xp: 2757,
            kamas: 68,
            isRepeatable: false,
          },
        ],
        success: {
          name: {
            pt: 'Confusão em Incarnam',
            en: 'Incarnoob',
            fr: 'Ramdam sur Incarnam',
          },
          links: {
            pt: 'https://dofus.fandom.com/pt-br/wiki/Confus%C3%A3o_em_Incarnam',
            en: 'https://dofuswiki.fandom.com/wiki/Incarnoob',
            fr: 'https://www.dofuspourlesnoobs.com/ramdam-sur-incarnam.html',
          },
          rewards: {
            xp: 5791,
            kamas: 0,
          },
        },
      },
    ],
    success: {
      name: {
        pt: 'Um começo exemplar',
        en: 'Setting A Good Example',
        fr: '',
      },
      links: {
        pt: 'https://dofus.fandom.com/pt-br/wiki/Um_Come%C3%A7o_Exemplar',
        en: 'https://dofuswiki.fandom.com/wiki/Setting_A_Good_Example',
        fr: '',
      },
      rewards: {
        xp: 11581,
        kamas: 560,
      },
    },
  },
  {
    type: {
      pt: 'Teste 2',
      en: 'Teste 2',
      fr: 'Teste 2',
    },
    levelRange: {
      min: 10,
      max: 20,
    },
    data: [],
    success: {
      name: {
        pt: '',
        en: '',
        fr: '',
      },
      links: {
        pt: '',
        en: '',
        fr: '',
      },
      rewards: {
        xp: 0,
        kamas: 0,
      },
    },
  },
];

// {
//   quests: [
//     {
//       name: {
//         pt: '',
//         en: '',
//         fr: '',
//       },
//       links: {
//         pt: '',
//         en: '',
//         fr: '',
//       },
//       level: 0,
//       xp: 0,
//       kamas: 0,
//       isRepeatable: false,
//     },
//   ],
//   success: {
//     name: {
//       pt: '',
//       en: '',
//       fr: '',
//     },
//     links: {
//       pt: '',
//       en: '',
//       fr: '',
//     },
//   },
// },
