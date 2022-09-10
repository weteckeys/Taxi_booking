import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoooseAmountPage } from './chooose-amount.page';

describe('ChoooseAmountPage', () => {
  let component: ChoooseAmountPage;
  let fixture: ComponentFixture<ChoooseAmountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoooseAmountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoooseAmountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
