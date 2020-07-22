import { Component, OnInit } from '@angular/core';
import { DataHolderService } from '../services/data-holder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-undergrad-docs',
  templateUrl: './undergrad-docs.component.html',
  styleUrls: ['./undergrad-docs.component.scss']
})
export class UndergradDocsComponent implements OnInit {

  constructor(
    public dataHolder: DataHolderService
  ) { }

  ngOnInit() {}
}
