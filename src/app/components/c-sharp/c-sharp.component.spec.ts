import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSharpComponent } from './c-sharp.component';

describe('CSharpComponent', () => {
  let component: CSharpComponent;
  let fixture: ComponentFixture<CSharpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CSharpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CSharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
