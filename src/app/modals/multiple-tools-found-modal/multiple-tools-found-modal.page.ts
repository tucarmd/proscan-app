import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BaseController } from 'src/app/bases/base-controller';

@Component({
  selector: 'app-multiple-tools-found-modal',
  templateUrl: './multiple-tools-found-modal.page.html',
  styleUrls: ['./multiple-tools-found-modal.page.scss'],
})
export class MultipleToolsFoundModalPage extends BaseController implements OnInit {
  constructor(
    private modalController: ModalController
  ) {
    super('MultipleToolsFoundModalPage');
  }

  ngOnInit() {}

  ionViewDidEnter() {
    
  }

  close() {
    return this.modalController.dismiss();
  }
}
