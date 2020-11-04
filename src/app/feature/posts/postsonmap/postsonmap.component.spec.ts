import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsonmapComponent } from './postsonmap.component';

describe('PostsonmapComponent', () => {
  let component: PostsonmapComponent;
  let fixture: ComponentFixture<PostsonmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsonmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsonmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
