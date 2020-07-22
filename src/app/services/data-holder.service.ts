import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHolderService {
  private dsNavbarVar = new BehaviorSubject<boolean>(null);
  private dsAboutC = new BehaviorSubject<boolean>(null);
  private dsUndergradDocsC = new BehaviorSubject<boolean>(null);
  private dsPubC = new BehaviorSubject<boolean>(null);
  private dsCVC = new BehaviorSubject<boolean>(null);

  navbarVar = this.dsNavbarVar.asObservable();
  aboutC = this.dsAboutC.asObservable();
  undergradDocsC = this.dsUndergradDocsC.asObservable();
  pubC = this.dsPubC.asObservable();
  cvC = this.dsCVC.asObservable();
  constructor() { }

  sendNavbarVar(navbarVar: any) {
    this.dsNavbarVar.next(navbarVar);
  }

  sendAbout(aboutClicked: any) {
    this.dsAboutC.next(aboutClicked);
  }
  sendUgDocs(ugdocsClicked: any) {
    this.dsUndergradDocsC.next(ugdocsClicked);
  }
  sendPub(pubClicked: any) {
    this.dsPubC.next(pubClicked);
  }
  sendCV(cvClicked: any) {
    this.dsCVC.next(cvClicked);
  }
}
