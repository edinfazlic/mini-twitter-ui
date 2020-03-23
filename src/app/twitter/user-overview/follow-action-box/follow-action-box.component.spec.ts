import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowActionBoxComponent } from './follow-action-box.component';

describe('FollowActionBoxComponent', () => {
  let component: FollowActionBoxComponent;
  let fixture: ComponentFixture<FollowActionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FollowActionBoxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowActionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
