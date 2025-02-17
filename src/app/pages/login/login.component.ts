import {Component, inject, OnInit} from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe} from "@angular/common";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  // Injectors
  #authService = inject(AuthService);
  #fb = inject(FormBuilder);

  // Data
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.#initForm();
  }



  #initForm(): void {
    this.form = this.#fb.group({
      username: ['mor_2314', [Validators.required]],
      password: ['83r5^_', [Validators.required]],
    },);


    // this.form = new FormGroup({
    //   username: new FormControl("", Validators.required),
    //   password: new FormControl("", Validators.required),
    // })
  }

  formSubmit(formValue: any) {
    console.log('form submitted', formValue);
    if (this.form.valid) {
      this.#authService.login(formValue).subscribe({
        next: (res: any) => {
          console.log('login success', res);
        },
        complete: () => {},
        error: () => {}
      });
    }
  }

  reset() {
    console.log('form reset()');
  }
}


//   {
//     username: "mor_2314",
//     password: "83r5^_"
// }
