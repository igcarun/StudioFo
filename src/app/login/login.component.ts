import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private apiService: AppService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.apiService.post('login', this.loginForm.value).subscribe(response => {
      console.log(JSON.stringify(response));
      this.router.navigate(['/home']);
    });
  }

}
