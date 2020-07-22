import { ReferencesComponent } from './../references/references.component';
import { PublicationsComponent } from './../publications/publications.component';
import { UndergradDocsComponent } from './../undergrad-docs/undergrad-docs.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { appRoutesLazyLoad } from './lazy-load.route';
import {
  ButtonsModule,
  CardsModule,
  CarouselModule,
  CheckboxModule,
  CollapseModule,
  NavbarModule,
  WavesModule,
  ModalModule,
  TooltipModule,
  PopoverModule,
  ModalDirective,
  TableModule,
  InputsModule,
  IconsModule,
} from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from '../about/about.component';


@NgModule({
  declarations: [
    MainpageComponent,
    UndergradDocsComponent,
    PublicationsComponent,
    AboutComponent,
    ReferencesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutesLazyLoad),
    ButtonsModule,
    CardsModule,
    CarouselModule,
    WavesModule,
    CheckboxModule,
    CollapseModule,
    NavbarModule,
    FormsModule,
    IconsModule,
    NavbarModule,
    TooltipModule,
    PopoverModule,
    TableModule,
    InputsModule,
    ModalModule
  ],
  exports: [
    CommonModule
  ]
})
export class MainpageModule { }
