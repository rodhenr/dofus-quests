import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILanguage } from '../../data/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<keyof ILanguage>(
    this.getLanguage()
  );
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  setLanguage(language: keyof ILanguage): void {
    localStorage.setItem('language', language);
    this.currentLanguageSubject.next(language);
  }

  private getLanguage(): keyof ILanguage {
    return (localStorage.getItem('language') as keyof ILanguage) ?? 'en';
  }
}
