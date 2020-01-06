import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPresentationComponent } from './signup-presentation.component';

describe('PresentationComponent', () => {
  let component: SignupPresentationComponent;
  let fixture: ComponentFixture<SignupPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupPresentationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
