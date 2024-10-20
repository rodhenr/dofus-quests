import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestCollectionComponent } from './quest-collection/quest-collection.component';
import { QuestComponent } from './quest/quest.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestComponent, QuestCollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dofus-quests';
}
