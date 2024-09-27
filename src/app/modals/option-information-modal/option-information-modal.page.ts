import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OptionInformationModel } from 'src/app/models/app.model';

@Component({
  selector: 'app-option-information-modal',
  templateUrl: './option-information-modal.page.html',
  styleUrls: ['./option-information-modal.page.scss'],
})
export class OptionInformationModalPage implements OnInit {
  @Input() optionInformation: OptionInformationModel;
  constructor(private modalController: ModalController) { }

  ngOnInit() {

  }

  dismiss(){
    this.modalController.dismiss();
  }

}
