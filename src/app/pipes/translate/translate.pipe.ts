import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LanguageService } from '../../services/language/language.service';
import { ILanguage } from '../../services/quest-data/quest-data.models';

type ITranslations = {
  key: string;
  values: ILanguage;
};

@Pipe({
  name: 'translate',
  standalone: true,
})
export class TranslatePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

  transform(value: string): Observable<string> {
    return this.languageService.currentLanguage$.pipe(
      map(language => this.getTranslation(value, language))
    );
  }

  private getTranslation(key: string, language: keyof ILanguage): string {
    const translations: ITranslations[] = [
      {
        key: 'completedQuests',
        values: {
          en: 'completed quests',
          fr: 'missions Complétées',
          pt: 'missões completadas',
        },
      },
      {
        key: 'level',
        values: {
          en: 'Level',
          fr: 'Niveau',
          pt: 'Nível',
        },
      },
      {
        key: 'success',
        values: {
          en: 'Success',
          fr: 'Succès',
          pt: 'Sucessos',
        },
      },
      {
        key: 'noData',
        values: {
          en: 'No data to display',
          fr: 'Aucune donnée à afficher',
          pt: 'Sem dados para exibir',
        },
      },
      {
        key: 'noType',
        values: {
          en: 'No type selected',
          fr: 'Aucun type sélectionné',
          pt: 'Nenhum tipo selecionado',
        },
      },
    ];

    return translations.find(x => x.key == key)?.values[language] ?? '';
  }
}
