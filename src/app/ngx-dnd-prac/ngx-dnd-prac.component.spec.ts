import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDndPracComponent } from './ngx-dnd-prac.component';

describe('NgxDndPracComponent', () => {
  let component: NgxDndPracComponent;
  let fixture: ComponentFixture<NgxDndPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDndPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDndPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
