import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoneyAddPage } from './money-add.page';

describe('MoneyAddPage', () => {
  let component: MoneyAddPage;
  let fixture: ComponentFixture<MoneyAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoneyAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
