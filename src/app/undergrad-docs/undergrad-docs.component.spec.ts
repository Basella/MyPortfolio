import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndergradDocsComponent } from './undergrad-docs.component';

describe('UndergradDocsComponent', () => {
  let component: UndergradDocsComponent;
  let fixture: ComponentFixture<UndergradDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndergradDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndergradDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
