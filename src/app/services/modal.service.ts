import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertModalComponent } from '../components/alert-modal/alert-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private dialog: MatDialog) {}

  openAlert(title: string, message: string): void {
    this.dialog.open(AlertModalComponent, {
      data: { title, message },
      width: '300px',
    });
  }
}
