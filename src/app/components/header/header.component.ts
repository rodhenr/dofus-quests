import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ILanguage } from '../../data/interfaces';
import { LanguageService } from '../../services/language/language.service';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  currentLanguage: keyof ILanguage = 'en';

  private headerMessage: ILanguage = {
    en: 'Attention',
    fr: 'Attention',
    pt: 'Atenção',
  };

  private message: ILanguage = {
    en: 'Language changed successfully!',
    fr: 'Langue changée avec succès!',
    pt: 'Idioma alterado com sucesso!',
  };

  constructor(
    private languageService: LanguageService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  changeLanguage(lang: keyof ILanguage): void {
    if (lang !== this.currentLanguage) {
      this.languageService.setLanguage(lang);
      this.showAlert();
    }
  }

  private showAlert(): void {
    this.modalService.openAlert(
      this.headerMessage[this.currentLanguage],
      this.message[this.currentLanguage]
    );
  }
}
