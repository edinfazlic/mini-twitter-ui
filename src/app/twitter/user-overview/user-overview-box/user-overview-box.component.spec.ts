import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOverviewBoxComponent } from './user-overview-box.component';

describe('UserOverviewBoxComponent', () => {
  let component: UserOverviewBoxComponent;
  let fixture: ComponentFixture<UserOverviewBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserOverviewBoxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOverviewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
