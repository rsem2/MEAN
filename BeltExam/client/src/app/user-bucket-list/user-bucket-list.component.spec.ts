import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBucketListComponent } from './user-bucket-list.component';

describe('UserBucketListComponent', () => {
  let component: UserBucketListComponent;
  let fixture: ComponentFixture<UserBucketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBucketListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBucketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
