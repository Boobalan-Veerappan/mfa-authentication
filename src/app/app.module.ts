import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioMetricsComponent } from './bio-metrics/bio-metrics.component';
import { FaceRecognitionComponent } from './face-recognition/face-recognition.component';
import { PassKeyComponent } from './pass-key/pass-key.component';
import { OtpCodeComponent } from './otp-code/otp-code.component';

@NgModule({
  declarations: [
    AppComponent,
    BioMetricsComponent,
    FaceRecognitionComponent,
    PassKeyComponent,
    OtpCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
