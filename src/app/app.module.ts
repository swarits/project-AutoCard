import { BrowserModule, EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

//material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginnavComponent } from './components/login/loginnav/loginnav.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { PassbookComponent } from './components/passbook/passbook.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ManageCardsComponent } from './components/manage-cards/manage-cards.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { CardDialogComponent } from './components/manage-cards/card-dialog/card-dialog.component';
import { NewCardDialogComponent } from './components/manage-cards/new-card-dialog/new-card-dialog.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavComponent } from './components/signup/nav/nav.component';
import { KeysPipe } from './custom-pipes/keys-pipe.pipe';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { EmailDialogComponent } from './components/login/email-dialog/email-dialog.component';
import { PaymentGatewayComponent } from './components/payment-gateway/payment-gateway.component';
import { P2pPaymentGatewayComponent } from './components/p2p-payment-gateway/p2p-payment-gateway.component';

//utility classes

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginnavComponent,
    LoginPageComponent,
    PassbookComponent,
    TopNavComponent,
    ManageCardsComponent,
    NotificationsComponent,
    CardDialogComponent,
    NewCardDialogComponent,
    SignupComponent,
    NavComponent,
    KeysPipe,
    ResetPasswordComponent,
    EmailDialogComponent,
    PaymentGatewayComponent,
    P2pPaymentGatewayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    Ng4LoadingSpinnerModule.forRoot(),

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatMenuModule,
    MatDividerModule,

    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,

    MatSnackBarModule,

    MatSidenavModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CardDialogComponent,
    NewCardDialogComponent,
    EmailDialogComponent
  ]
})
export class AppModule { }
