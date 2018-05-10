import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleVerseGeneratorComponent } from './bible-verse-generator.component';

describe('BibleVerseGeneratorComponent', () => {
  let component: BibleVerseGeneratorComponent;
  let fixture: ComponentFixture<BibleVerseGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibleVerseGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleVerseGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
