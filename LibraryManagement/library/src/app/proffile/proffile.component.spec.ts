import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffileComponent } from './proffile.component';

describe('ProffileComponent', () => {
  let component: ProffileComponent;
  let fixture: ComponentFixture<ProffileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProffileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProffileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
