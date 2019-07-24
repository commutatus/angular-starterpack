import { Component, OnInit } from '@angular/core';
import { LinearLoaderService } from './shared/components/linear-loader/linear-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-starterpack';
  showLoader = false;

  constructor(
    private progressBar: LinearLoaderService,
  ) {}

  ngOnInit() {
    this.progressBar.toggle$.subscribe(data => {
      this.showLoader = data;
    });
  }
}
