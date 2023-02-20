import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddModifyComponent } from './user-add-modify.component';

describe('UserAddModifyComponent', () => {
  let component: UserAddModifyComponent;
  let fixture: ComponentFixture<UserAddModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
