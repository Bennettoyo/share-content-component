import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareContentCardComponent } from './share-content-card.component';

describe('ShareContentCardComponent', () => {
  let component: ShareContentCardComponent;
  let fixture: ComponentFixture<ShareContentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareContentCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShareContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
