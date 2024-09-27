import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { RoutePath } from 'src/app/app-routing.module';
import { AuthServiceProvider } from 'src/app/services/auth-service/auth-service';
import { HelperService } from 'src/app/services/helper.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { BaseController } from 'src/app/bases/base-controller';
import { AppConstants, StorageKeys } from 'src/app/models/app.constant';
import { AppState } from 'src/app/services/state/app.state';
import { UserState } from 'src/app/services/state/user.state';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseController implements OnInit {
  watchSub: Subscription;
  isLoading = false;
  public loginForm: FormGroup;
  errorMessage = null;
  formSubmitted = false;
  // Property used to store the callback of the event handler to unsubscribe to it when leaving this page
  public unregisterBackButtonAction: any;
  isKeyboardActive = false;
  constructor(
    public navCtrl: NavController,
    private authService: AuthServiceProvider,
    private formBuilder: FormBuilder,
    private helper: HelperService,
    private navigationService: NavigationService,
    private alert: AlertController,
    public platform: Platform,
    public keyboard: Keyboard,
    private zone: NgZone
  ) {
    super('LoginPage');
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      rememberMe: [localStorage.getItem(StorageKeys.USER_NAME) ? true : false],
    });
  }

  ionViewWillEnter() {
    this.keyboard.onKeyboardWillShow().subscribe((event) => {
      this.zone.run(() => {
        this.isKeyboardActive = true;
      });
    });
    this.keyboard.onKeyboardWillHide().subscribe((event) => {
      this.zone.run(() => {
        this.isKeyboardActive = false;
      });
    });
  }

  ionViewDidEnter() {
    if (localStorage.getItem(StorageKeys.USER_NAME)) {
      this.loginForm.controls.email.setValue(
        localStorage.getItem(StorageKeys.USER_NAME)
      );
    }
    if (UserState.isAuth) {
      this.navigationService.popToRoot(RoutePath.Home);
    } else {
      if (!localStorage.getItem(StorageKeys.FIRST_RUN)) {
        localStorage.setItem(StorageKeys.FIRST_RUN, 'done');
        setTimeout(() => {
          this.navigationService.goTo(RoutePath.Tutorial);
        }, 500);
      }
    }
  }

  goToForgotPassword() {
    this.navigationService.goTo(RoutePath.ForgotPassword);
  }

  hideKeyboard() {
    if(AppState.isOnDevice){
      if (this.keyboard.isVisible) {
        this.keyboard.hide();
      }
    }
  }

  async doLogin(event) {
    this.hideKeyboard();
    this.isLoading = true;
    this.errorMessage = null;
    let u = this.loginForm.value.email;
    let p = this.loginForm.value.password;

    const resp = await this.authService.login(u, p);
    this.isLoading = false;
    if (resp && resp.success) {
      this.authService.setUserInfo(resp.data);
      await this.helper.hideLoading();
      if (this.loginForm.value.rememberMe) {
        localStorage.setItem(StorageKeys.USER_NAME, u);
      } else {
        localStorage.removeItem(StorageKeys.USER_NAME);
      }

      this.navigationService
        .popToRoot(RoutePath.Home)
        .then(() => {
          this.formSubmitted = false;
          this.loginForm.reset();
        });
    } else {
      this.formSubmitted = false;
      if (resp && resp.message) {
        if(resp.message.code === 2009){
          const confirm = this.alert.create({
            header: 'Login Failed',
            message:
              'Account not active. Please check email for activation link.',
            buttons: [
              {
                text: 'Close',
                role: 'cancel',
                handler: (data) => {
                  this.logger.debug('Close clicked');
                },
              },
              {
                text: 'Contact Us',
                handler: (data) => {
                  this.logger.debug('Contact Us clicked');
                  window.open(
                    AppConstants.contactUsUrl,
                    '_system',
                    'location=yes'
                  );
                },
              },
            ],
          });
          (await confirm).present();
        } else if(resp.message.code === -1){
          this.errorMessage = 'Make sure Wi-Fi or cellular data is turned on, then try again.';
        } else {
          this.errorMessage = 'Login Failed. Invalid Email/Password.';
        }
      } else {
        this.errorMessage = 'Login Failed. Invalid Email/Password.';
      }
    }
  }
}
