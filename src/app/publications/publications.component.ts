import { Component, OnInit } from '@angular/core';
import { DataHolderService } from '../services/data-holder.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  constructor(
    public dataHolder: DataHolderService
  ) { }

  ngOnInit() {}
}
