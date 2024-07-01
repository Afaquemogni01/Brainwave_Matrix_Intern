import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicspaceComponent } from './picspace.component';

describe('PicspaceComponent', () => {
  let component: PicspaceComponent;
  let fixture: ComponentFixture<PicspaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicspaceComponent]
    });
    fixture = TestBed.createComponent(PicspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
