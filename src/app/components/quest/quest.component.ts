import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate/translate.pipe';
import { IQuestsHome } from '../../services/quest-data/quest-data.service';

@Component({
  selector: 'app-quest',
  standalone: true,
  imports: [NgFor, TranslatePipe, CommonModule],
  templateUrl: './quest.component.html',
  styleUrl: './quest.component.scss',
})
export class QuestComponent {
  @Input() data!: IQuestsHome;
}
