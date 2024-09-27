import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { UrlTree } from '@angular/router';
import { NavigationOptions } from '@ionic/angular/providers/nav-controller';
import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { RoutePath } from '../app-routing.module';
@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private backBtnSubs: Subscription[] = [];
  constructor(
    private navCtrl: NavController,
    private plt: Platform,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  get snapshot() {
    return this.activatedRoute.snapshot;
  }
  getQueryParam(key: string) {
    return this.snapshot?.queryParams[key];
  }
  urlIncludes(text: string) {
    return this.router.url.includes(text);
  }
  isCurrentUrl(text: string) {
    return this.router.url === text || this.router.url === '/' + text;
  }
  popToRoot(
    path: string = '/',
    opts?: NavigationOptions,
  ) {
    return this.navCtrl.navigateRoot(path, opts);
  }
  goTo(
    path: string | any[] | UrlTree,
    opts?: NavigationOptions
  ) {
    return this.navCtrl.navigateForward(path, opts);
  }

  goBack(
    path?: string | any[] | UrlTree,
    opts?: NavigationOptions,
  ) {
    return path ? this.navCtrl.navigateBack(path, opts) : this.navCtrl.back();
  }

  overrideHardwareBack(callableFunction: VoidFunction, description?: string) {
    const desc = description ? description : `${callableFunction}`;
    const priority = 99999999 + this.backBtnSubs.length;
    const subs = this.plt.backButton.subscribeWithPriority(priority, () => {
      // callableFunction.bind(context);
      callableFunction();
    });
    subs.add(() => {
      console.log(`Remove back action ${desc}`);
    });
    console.log(`Override back action with "${desc}"`);
    this.backBtnSubs.push(subs);
  }
  restoreHardwareBack() {
    if (this.backBtnSubs.length) {
      const subs = this.backBtnSubs.shift();
      subs.unsubscribe();
    }
  }
  popToHomes(latestVin: string) {
    return this.popToRoot(RoutePath.Home);//Sprint 4
    // if (latestVin) {
    //   return this.popToRoot(Routing.RSLite.Home.fullPath);
    // } else {
    //   return this.popToRoot(Routing.Welcome.path);
    // }
  }
}
