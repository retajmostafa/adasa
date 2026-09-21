import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsComponents } from './about-us.components';

describe('AboutUsComponents', () => {
  let component: AboutUsComponents;
  let fixture: ComponentFixture<AboutUsComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
