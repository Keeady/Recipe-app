import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges{
    loadedFeature = 'shopping';

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {}

    handlerouteclickevent(data) {
      this.loadedFeature = data;
    }
}
