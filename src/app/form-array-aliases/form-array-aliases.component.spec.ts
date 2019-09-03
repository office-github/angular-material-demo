import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayAliasesComponent } from './form-array-aliases.component';

describe('FormArrayAliasesComponent', () => {
  let component: FormArrayAliasesComponent;
  let fixture: ComponentFixture<FormArrayAliasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArrayAliasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayAliasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
