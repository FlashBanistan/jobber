import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/core/models';

@Component({
  selector: 'app-register-success-dialog',
  templateUrl: './register-success-dialog.component.html',
  styleUrls: ['./register-success-dialog.component.scss'],
})
export class RegisterSuccessDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { user: User },
  ) {}

  ngOnInit() {
    setTimeout(() => console.log('THIS: ', this), 4000);
  }
}
