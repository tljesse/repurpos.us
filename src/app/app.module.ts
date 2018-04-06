import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


// import { DataTableModule, DataTable, DataTableResource } from 'angular-2-data-table';
// import { DataTableModule, DataTable, DataTableResource } from './table/index';

import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppRoutingModule, routedComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";
import { CompoundSearchComponent, CompoundSearchOptionsComponent, SearchBoxComponent, SearchResultComponent, SearchResultsTableComponent } from './compound-search/index';

import {cytoscape} from 'cytoscape';
import {NgCytoscape} from "./compound-search/ng2-cytoscape";
import {CompoundDataComponent} from './compound-data/compound-data.component';
// import {InteractionTableComponent, InteractionTableDataService} from './interaction-table/interaction-table.component';
// import { DiseaseDataComponent } from './disease-data/disease-data.component';
import {CIDService, NglComponent} from './ngl/ngl.component';
import { IndicationsGraphComponent, GraphDataService } from './compound-data/indications-graph/indications-graph.component';
// import { SearchResultTableComponent } from './compound-search/search-result-table/search-result-table.component';
import {HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {
  // MatAutocompleteModule,
  MatButtonModule,
  // MatButtonToggleModule,
  // MatCardModule,
  // MatCheckboxModule,
  // MatChipsModule,
  // MatDatepickerModule,
  MatDialogModule,
  // MatExpansionModule,
  // MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  // MatMenuModule,
  // MatNativeDateModule,
  MatPaginatorModule,
  // MatProgressBarModule,
  MatProgressSpinnerModule,
  // MatRadioModule,
  // MatRippleModule,
  MatSelectModule,
  // MatSidenavModule,
  // MatSliderModule,
  // MatSlideToggleModule,
  // MatSnackBarModule,
  // MatSortModule,
  MatTableModule,
  // MatTabsModule,
  // MatToolbarModule,
  MatTooltipModule,
  // MatStepperModule,
} from '@angular/material';

import {
  MailSignupComponent, MailSignupDialog,
} from './mail-signup/mail-signup.component';
import { ShowMoreButtonComponent, ShowMorePane } from './compound-data/show-more-button/show-more-button.component';
import {CdkTableModule} from "@angular/cdk/table";
import { RecaptchaModule } from 'ng-recaptcha';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { AssaysComponent } from './assays/assays.component';
import {
  AssayDataComponent,
  AssayPaginationComponent,
  AssayPlotsComponent,
  DotPlotComponent,
  CmpdTooltipComponent
} from './assay-data/index';

import { 
  AssayDwnldComponent,
  AssayTypeBtnComponent,
  ForgotPassButtonComponent,
  LoaderComponent,
  QuickSearchComponent,
  UserLoginComponent,
  UserRegButtonComponent,
  DialogOverviewExample,
  DialogOverviewExampleDialog,
  EditItemComponent,
  MenuBarComponent,
  MenubarItemComponent
} from './_components/index';

import { ForgotPasswordComponent, LoginFailComponent, TermsComponent, UserRegistrationComponent } from './_dialogs/index';
import { AuthGuard } from './_guards/auth.guard';
import { LoaderInterceptorService } from './_interceptors/loader-interceptor.service';
import {
  AuthService,
  GoogleAnalyticsService,
  LoaderStateService,
  LoginStateService,
  SearchResultService,
  WDQService
} from './_services/index';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  exports: [
    CdkTableModule,
    // MatAutocompleteModule,
    MatButtonModule,
    // MatButtonToggleModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    // MatStepperModule,
    // MatDatepickerModule,
    MatDialogModule,
    // MatExpansionModule,
    // MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    // MatMenuModule,
    // MatNativeDateModule,
    MatPaginatorModule,
    // MatProgressBarModule,
    MatProgressSpinnerModule,
    // MatRadioModule,
    // MatRippleModule,
    MatSelectModule,
    // MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatSnackBarModule,
    // MatSortModule,
    MatTableModule,

    // MatTabsModule,
    // MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [],

})
export class MaterialModule {}


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenubarItemComponent,
    CompoundSearchComponent,
    SearchResultComponent,
    SearchBoxComponent,
    NgCytoscape,
    IndicationsGraphComponent,
    CompoundDataComponent,
    ConfirmEmailComponent,

    AboutComponent,
    AssaysComponent,
    AssayDataComponent,
    AssayPlotsComponent,
    DotPlotComponent,
    AssayDwnldComponent,
    AssayTypeBtnComponent,
    AssayPaginationComponent,
    CmpdTooltipComponent,
    // InteractionTableComponent,
    // DiseaseDataComponent,
    NglComponent,
    CompoundSearchOptionsComponent,
    IndicationsGraphComponent,
    // SearchResultTableComponent,
    AuthGuard,
    EditItemComponent,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
    MailSignupComponent,
    MailSignupDialog,
    ShowMorePane,
    ShowMoreButtonComponent,
    SearchResultsTableComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    UserRegButtonComponent,
    ForgotPassButtonComponent,
    TermsComponent,
    LoginFailComponent,
    LoaderComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    QuickSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //RouterModule.forRoot(routes),
    // DataTableModule,
    HttpClientModule,
    MaterialModule,

    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    // MatNativeDateModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),

    RecaptchaModule.forRoot(),
  ],

  providers: [
    { provide: APP_BASE_HREF,    useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: SearchResultService, useClass: SearchResultService },
    { provide: GraphDataService, useClass: GraphDataService },
    { provide: WDQService, useClass: WDQService },
    // { provide: InteractionTableDataService, useClass: InteractionTableDataService },
    { provide: CIDService, useClass: CIDService},
    { provide: AuthService, useClass: AuthService},
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
    LoaderStateService,
    LoginStateService,
    GoogleAnalyticsService
  ],
  entryComponents: [
    DialogOverviewExample,
    DialogOverviewExampleDialog,

    MailSignupDialog,
    // UserLoginComponent,
    // UserRegComponent,
    UserRegistrationComponent,
    TermsComponent,
    LoginFailComponent,
    ForgotPasswordComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
