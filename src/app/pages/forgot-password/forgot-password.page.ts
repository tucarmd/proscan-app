import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from '@ionic/angular';
import { RoutePath } from 'src/app/app-routing.module';
import { AppConfig, AppStrings } from 'src/app/configs/app.config';
import { BaseController } from 'src/app/bases/base-controller';
import { GlobalValidator } from 'src/app/global-validators';
import { AuthServiceProvider } from 'src/app/services/auth-service/auth-service';
import { HelperService } from 'src/app/services/helper.service';
import { AppState } from 'src/app/services/state/app.state';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage extends BaseController implements OnInit {
  forgotPasswordForm: FormGroup;
  formSubmitted = false;
  errorMessage = null;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthServiceProvider,
    private formBuilder: FormBuilder,
    private helper: HelperService) {
    super('ForgotPasswordPage');
  }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, GlobalValidator.mailFormat])]
    });
  }

  async ionViewWillEnter(){
    this.formSubmitted = false;
  }

  async doResetPassword(event) {
    this.errorMessage = null;
    this.helper.showLoading();
    const u = this.forgotPasswordForm.value.email;
    const data = await this.authService.reset(u);
    this.helper.hideLoading();
    if (data.success) {
      this.helper.alert(AppStrings.MSG_RESET_PASSWORD_SUCCESS, AppStrings.SUCCESS);
      this.formSubmitted = false;
      this.forgotPasswordForm.controls["email"].setValue('');
    } else {
      this.errorMessage = 'User Not Found';
    }
  }

  goBack(){
    this.helper.goTo(RoutePath.Login);
  }

  emailChange() {
    this.errorMessage = null;
  }
}
