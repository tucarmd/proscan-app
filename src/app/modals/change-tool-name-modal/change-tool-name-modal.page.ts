import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { IonInput, ModalController } from '@ionic/angular';
import { BaseController } from 'src/app/bases/base-controller';
import { AppState } from 'src/app/services/state/app.state';
import { CarMDUtils } from 'src/app/services/utility/carmd.utils';

const MAX_NAME_CHARACTERS = 15;
@Component({
  selector: 'app-change-tool-name-modal',
  templateUrl: './change-tool-name-modal.page.html',
  styleUrls: ['./change-tool-name-modal.page.scss'],
})
export class ChangeToolNameModalPage extends BaseController implements OnInit {
  @Input() toolId: string;
  @Input() toolName: string;
  @ViewChild('nameInput') nameInput: IonInput;
  couldConfirm = false;
  meetRequiredCriteria = true;
  newName: string;
  constructor(
    private modalController: ModalController,
    private changeDetector: ChangeDetectorRef,
    private keyboard: Keyboard
  ) {
    super('ChangeToolNameModalPage');
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.couldConfirm = false;
    this.meetRequiredCriteria = true;
    setTimeout(() => {
      this.nameInput.setFocus();
    }, 500);
  }

  close(newName = null) {
    return this.modalController.dismiss({
      newName,
    });
  }

  newNameChanges() {
    if (this.newName && this.newName.length > 0) {
      this.couldConfirm = true;
    } else {
      this.couldConfirm = false;
    }
    this.meetRequiredCriteria = true;
    CarMDUtils.refreshUI(this.changeDetector);
  }

  hideKeyboard() {
    if(AppState.isOnDevice){
      if (this.keyboard.isVisible) {
        this.keyboard.hide();
      }
    }
  }
  
  confirm() {
    this.hideKeyboard();
    if (!this.newName || this.newName.length > MAX_NAME_CHARACTERS) {
      this.meetRequiredCriteria = false;
      this.logger.debug('Exceed 15 characters');
      return;
    }
    if (this.newName.indexOf(' ') > -1
    ) {
      this.logger.debug('Have any spaces');
      this.meetRequiredCriteria = false;
      return;
    }
    this.meetRequiredCriteria = true;
    this.close(this.newName);
  }
}
