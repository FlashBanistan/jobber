import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { User } from "../../shared/interfaces/user";

@Component({
  selector: "app-register-success-dialog",
  templateUrl: "./register-success-dialog.component.html",
  styleUrls: ["./register-success-dialog.component.scss"],
})
export class RegisterSuccessDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { user: User }
  ) {}

  ngOnInit() {}
}
