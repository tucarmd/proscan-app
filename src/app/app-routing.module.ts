import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
export const RoutePath = {
  Home: 'home',
  Login: 'login',
  ConnectionFailed: 'connection-failed',
  DlcLocator: 'dlc-locator',
  DlcLocatorDetails: 'dlc-locator-details',
  DtcDetails: 'dtc-details',
  DtcErase: 'dtc-erase',
  ForgotPassword: 'forgot-password',
  ReportHistory: 'report-history',
  ScanComplete: 'scan-complete',
  Tutorial: 'tutorial',
  VehicleLinking: 'vehicle-linking',
  ViewLogs: 'view-logs',
  Template: 'template',
  TemplateModel: 'template-model',
  EnterVin: 'enter-vin',
  VehicleSelection: 'vehicle-selection',
  Modals: 'modals',
  OptionInformationModal: 'option-information-modal',
  ChangeToolName: 'change-tool-name',
  MultipleToolsFoundModal: 'multiple-tools-found-modal',
  ChangeToolNameModal: 'change-tool-name-modal'
}
const routes: Routes = [
  {
    path: RoutePath.Home,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: RoutePath.Login,
    pathMatch: 'full'
  },
  {
    path: RoutePath.Login,
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: RoutePath.ConnectionFailed,
    loadChildren: () => import('./pages/connection-failed/connection-failed.module').then(m => m.ConnectionFailedPageModule)
  },
  {
    path: RoutePath.DlcLocator,
    loadChildren: () => import('./pages/dlc-locator/dlc-locator.module').then(m => m.DlcLocatorPageModule)
  },
  {
    path: RoutePath.DlcLocatorDetails,
    loadChildren: () => import('./pages/dlc-locator-details/dlc-locator-details.module').then(m => m.DlcLocatorDetailsPageModule)
  },
  {
    path: RoutePath.DtcDetails,
    loadChildren: () => import('./pages/dtc-details/dtc-details.module').then(m => m.DtcDetailsPageModule)
  },
  {
    path: RoutePath.DtcErase,
    loadChildren: () => import('./pages/dtc-erase/dtc-erase.module').then(m => m.DtcErasePageModule)
  },
  {
    path: RoutePath.ForgotPassword,
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: RoutePath.ReportHistory,
    loadChildren: () => import('./pages/report-history/report-history.module').then(m => m.ReportHistoryPageModule)
  },
  {
    path: RoutePath.ScanComplete,
    loadChildren: () => import('./pages/scan-complete/scan-complete.module').then(m => m.ScanCompletePageModule)
  },
  {
    path: RoutePath.Tutorial,
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialPageModule)
  },
  {
    path: RoutePath.VehicleLinking,
    loadChildren: () => import('./pages/vehicle-linking/vehicle-linking.module').then(m => m.VehicleLinkingPageModule)
  },
  {
    path: RoutePath.ViewLogs,
    loadChildren: () => import('./pages/view-logs/view-logs.module').then(m => m.ViewLogsPageModule)
  },
  {
    path: RoutePath.Template,
    loadChildren: () => import('./pages/template/template.module').then(m => m.TemplatePageModule)
  },
  {
    path: RoutePath.TemplateModel,
    loadChildren: () => import('./pages/template-model/template-model.module').then(m => m.TemplateModelPageModule)
  },
  {
    path: RoutePath.EnterVin,
    loadChildren: () => import('./pages/enter-vin/enter-vin.module').then(m => m.EnterVinPageModule)
  },
  {
    path: RoutePath.VehicleSelection,
    loadChildren: () => import('./modals/vehicle-selection/vehicle-selection.module').then( m => m.VehicleSelectionPageModule)
  },
  {
    path: 'modals',
    loadChildren: () => import('./pages/modals/modals.module').then( m => m.ModalsPageModule)
  },
  {
    path: RoutePath.OptionInformationModal,
    loadChildren: () => import('./modals/option-information-modal/option-information-modal.module').then( m => m.OptionInformationModalPageModule)
  },
  {
    path: RoutePath.MultipleToolsFoundModal,
    loadChildren: () => import('./modals/multiple-tools-found-modal/multiple-tools-found-modal.module').then( m => m.MultipleToolsFoundModalPageModule)
  },
  {
    path: RoutePath.ChangeToolName,
    loadChildren: () => import('./pages/change-tool-name/change-tool-name.module').then( m => m.ChangeToolNamePageModule)
  },
  {
    path: RoutePath.ChangeToolNameModal,
    loadChildren: () => import('./modals/change-tool-name-modal/change-tool-name-modal.module').then( m => m.ChangeToolNameModalPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
