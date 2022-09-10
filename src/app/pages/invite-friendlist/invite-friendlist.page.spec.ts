import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InviteFriendlistPage } from './invite-friendlist.page';

describe('InviteFriendlistPage', () => {
  let component: InviteFriendlistPage;
  let fixture: ComponentFixture<InviteFriendlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteFriendlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InviteFriendlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
