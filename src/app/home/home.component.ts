import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: AppService) { }

  ngOnInit(): void {
    this.apiService.get('home').subscribe(response => {
      console.log(JSON.stringify(response));
    });
  }

}
