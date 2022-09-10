import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PromocodeModalPage } from './promocode-modal.page';

describe('PromocodeModalPage', () => {
  let component: PromocodeModalPage;
  let fixture: ComponentFixture<PromocodeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocodeModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PromocodeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
