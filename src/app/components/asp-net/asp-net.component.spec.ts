import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspNetComponent } from './asp-net.component';

describe('AspNetComponent', () => {
  let component: AspNetComponent;
  let fixture: ComponentFixture<AspNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AspNetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AspNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
