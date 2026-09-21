import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildComponents } from './wild.components';

describe('WildComponents', () => {
  let component: WildComponents;
  let fixture: ComponentFixture<WildComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WildComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(WildComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
