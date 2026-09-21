import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponents } from './page.components';

describe('PageComponents', () => {
  let component: PageComponents;
  let fixture: ComponentFixture<PageComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(PageComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
