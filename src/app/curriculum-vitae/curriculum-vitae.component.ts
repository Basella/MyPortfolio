import { Component, OnInit } from '@angular/core';
import { DataHolderService } from '../services/data-holder.service';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss']
})
export class CurriculumVitaeComponent implements OnInit {

  constructor(
    public dataHolder: DataHolderService
  ) { }

  ngOnInit(): void {}

}
