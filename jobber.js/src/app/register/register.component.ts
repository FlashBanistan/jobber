import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnInit,
  Input,
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Register } from "../register/register.interface";
import { MustMatch } from "../shared/validators/must-match-validator";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  @Input() error: string;
  @Input() isLoading: boolean;
  @Output() register = new EventEmitter<Register>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.fb.group(
      {
        email: ["", [Validators.required, Validators.email]],
        first_name: [""],
        last_name: [""],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirm_password: [""],
      },
      {
        validator: MustMatch("password", "confirm_password"),
      }
    );
  }
}
