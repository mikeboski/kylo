import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTopComponent } from './info-top.component';

describe('InfoTopComponent', () => {
  let component: InfoTopComponent;
  let fixture: ComponentFixture<InfoTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
