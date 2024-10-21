import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestCollectionComponent } from './quest-collection.component';

describe('QuestCollectionComponent', () => {
  let component: QuestCollectionComponent;
  let fixture: ComponentFixture<QuestCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestCollectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
