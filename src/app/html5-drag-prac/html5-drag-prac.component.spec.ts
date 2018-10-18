import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5DragPracComponent } from './html5-drag-prac.component';

describe('Html5DragPracComponent', () => {
  let component: Html5DragPracComponent;
  let fixture: ComponentFixture<Html5DragPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html5DragPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5DragPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
