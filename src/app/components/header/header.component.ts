import { Component, OnInit } from '@angular/core';
import { ILanguage } from '../../data/questsData';
import { LanguageService } from '../../services/language.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  currentLanguage: keyof ILanguage | null = null;

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
    this.languageService.setLanguage(lang);
    this.showAlert();
  }

  private showAlert(): void {
    this.modalService.openAlert('Atenção!', 'O idioma foi alterado.');
  }
}
