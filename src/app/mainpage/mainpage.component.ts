import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DataHolderService } from '../services/data-holder.service';
import { PublicationsComponent } from '../publications/publications.component';
import { UndergradDocsComponent } from '../undergrad-docs/undergrad-docs.component';
import { AboutComponent } from '../about/about.component';
import { CurriculumVitaeComponent } from '../curriculum-vitae/curriculum-vitae.component';

@Component({
  selector: 'app-home',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit, AfterViewInit {
  // @ViewChild(AboutComponent) about: AboutComponent;
  // @ViewChild(UndergradDocsComponent) undergradDocs;
  // @ViewChild(PublicationsComponent) pub;
  // @ViewChild(CurriculumVitaeComponent) cv;

currentYear: number;
fulll: boolean;
aboutC: boolean;
undergradDocsC: boolean;
pubC: boolean;
cvC: boolean;
aboutChckd: boolean;
undergradDocsChckd: boolean;
pubChckd: boolean;
cvChckd: boolean;

  constructor(
    public dataHolder: DataHolderService
  ) { }

  ngOnInit(): void {
    const now = new Date();
    this.currentYear = now.getUTCFullYear();
    this.checkAbout();
    this.checkUndergrad();
    this.checkPub();
    this.checkCV();
  }

  ngAfterViewInit() {
  }

  checkAbout() {
    this.dataHolder.aboutC.subscribe((res) => {
      console.log("res about is: ", res)
      if (res === true) {
        this.aboutChckd = true;
      } else {
        this.aboutChckd = false;
      }
    });
  }

  checkUndergrad() {
    this.dataHolder.undergradDocsC.subscribe((res) => {
      console.log("res ug is: ", res)
      if (res === true) {
        this.undergradDocsChckd = true;
      } else {
        this.undergradDocsChckd = false;
      }
    });
  }

  checkPub() {
    this.dataHolder.pubC.subscribe((res) => {
      console.log("res pub is: ", res)
      if (res === true) {
        this.pubChckd = true;
      } else {
        this.pubChckd = false;
      }
    });
  }

  checkCV() {
    this.dataHolder.cvC.subscribe((res) => {
      console.log("res cv is: ", res)
      if (res === true) {
        this.cvChckd = true;
      } else {
        this.cvChckd = false;
      }
    });
  }

  aboutClick() {
    this.dataHolder.sendAbout(this.aboutC);
    // this.aboutC = true;
    // this.undergradDocsC = false;
    // this.pubC = false;
    // this.cvC = false;
  }
  undergradDocsClick() {
    this.dataHolder.sendUgDocs(this.undergradDocsC);
    // this.aboutC = false;
    // this.undergradDocsC = true;
    // this.pubC = false;
    // this.cvC = false;
  }
  pubClick() {
    this.dataHolder.sendPub(this.pubC);
    // this.aboutC = false;
    // this.undergradDocsC = false;
    // this.pubC = true;
    // this.cvC = false;
  }
  cvClick() {
    this.dataHolder.sendCV(this.cvC);
    // this.aboutC = false;
    // this.undergradDocsC = false;
    // this.pubC = false;
    // this.cvC = true;
  }

}
