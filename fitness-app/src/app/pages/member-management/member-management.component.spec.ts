import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberManagementComponent } from './member-management.component';

describe('MemberManagementComponent', () => {
  let component: MemberManagementComponent;
  let fixture: ComponentFixture<MemberManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
