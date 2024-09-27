import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlcLocatorDetailsPageRoutingModule } from './dlc-locator-details-routing.module';

import { DlcLocatorDetailsPage } from './dlc-locator-details.page';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
// import { ImagePipe } from 'src/app/components/image-pipe/image.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicImageLoaderModule,
    DlcLocatorDetailsPageRoutingModule
  ],
  declarations: [ DlcLocatorDetailsPage],
  /*declarations: [ImagePipe, DlcLocatorDetailsPage],
  exports: [
    ImagePipe
  ]*/
})
export class DlcLocatorDetailsPageModule {}
