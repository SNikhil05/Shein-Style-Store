import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsSettingPage } from './blogs-setting.page';

describe('BlogsSettingPage', () => {
  let component: BlogsSettingPage;
  let fixture: ComponentFixture<BlogsSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsSettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
