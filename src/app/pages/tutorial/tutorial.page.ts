import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { RoutePath } from 'src/app/app-routing.module';
import { AuthServiceProvider } from 'src/app/services/auth-service/auth-service';
import { HelperService } from 'src/app/services/helper.service';
import { IonSlides } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { BaseController } from 'src/app/bases/base-controller';
import { UserState } from 'src/app/services/state/user.state';
import { AppState } from 'src/app/services/state/app.state';
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage extends BaseController implements OnInit {
  @ViewChild('slides') slides: IonSlides;
  currentIndex = 0;
  totalSlides = 7;
  fromHome = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    private helper: HelperService,
    private route: ActivatedRoute) {
      super('TutorialPage');
  }

  ngOnInit(): void {
    
  }

  ionViewWillEnter(){
  }

  ionViewDidEnter() {
    this.fromHome = this.route.snapshot.queryParamMap.get('fromHome') != null ? true : false;
    let ctx = this;
    setTimeout( ()=> {
      if (ctx.slides) {
        //ctx.totalSlides = Number.parseInt(ctx.slides.length().toString());
        ctx.currentIndex = Number.parseInt(ctx.slides.getActiveIndex().toString());
      }
    }, 500);
  }

  async slideChanged() {
    this.currentIndex = await this.slides.getActiveIndex();
    if (this.currentIndex > this.totalSlides - 1) {
      this.currentIndex = this.totalSlides - 1;
    }
  }

  skip() {
    this.slides.slideTo(this.totalSlides - 1, 500);
  }

  closeTutorial() {
    if (UserState.isAuth) {
      this.helper.popToRoot(RoutePath.Home).then(() => {
        this.slides.slideTo(0);
        this.currentIndex = 0;
      });
    } else {
      this.helper.popToRoot(RoutePath.Login).then(() => {
        this.slides.slideTo(0);
        this.currentIndex = 0;
      });;
    }
  }

}
