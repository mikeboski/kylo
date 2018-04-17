import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileKeyStatsComponent } from './profile-key-stats.component';

describe('ProfileKeyStatsComponent', () => {
  let component: ProfileKeyStatsComponent;
  let fixture: ComponentFixture<ProfileKeyStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileKeyStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileKeyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
