import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultipleToolsFoundModalPage } from './multiple-tools-found-modal.page';

describe('MultipleToolsFoundModalPage', () => {
  let component: MultipleToolsFoundModalPage;
  let fixture: ComponentFixture<MultipleToolsFoundModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleToolsFoundModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleToolsFoundModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
