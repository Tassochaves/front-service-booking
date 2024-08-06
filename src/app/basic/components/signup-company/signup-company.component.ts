import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../../service/auth/auth.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-signup-company',
  standalone: true,
  imports: [NzFormModule, NzButtonModule, NzInputModule, ReactiveFormsModule],
  templateUrl: './signup-company.component.html',
  styleUrl: './signup-company.component.scss'
})
export class SignupCompanyComponent {

  fb = inject(FormBuilder);
  authService = inject(AuthService);
  notification = inject(NzNotificationService);
  router = inject(Router);

  validateForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      phone: [null],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required]],
    })
  }

  submitForm(){
    this.authService.registerCompany(this.validateForm.value).subscribe(res =>{
      this.notification
      .success(
        'SUCCESS',
        'Cadastrado com sucesso!!',
        {nzDuration: 5000}
      );
      this.router.navigateByUrl('/login');
    }, error =>{
      this.notification
      .error(
        'ERROR',
        `${error.error}`,
        {nzDuration: 5000}
      );
    });
  }
}
