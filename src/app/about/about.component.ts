import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataHolderService } from '../services/data-holder.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    public dataHolder: DataHolderService
  ) { }

  ngOnInit(): void {}
}
