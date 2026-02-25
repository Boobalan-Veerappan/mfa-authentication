import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioMetricsComponent } from './bio-metrics/bio-metrics.component';
import { PassKeyComponent } from './pass-key/pass-key.component';
import { OtpCodeComponent } from './otp-code/otp-code.component';
import { FaceRecognitionComponent } from './face-recognition/face-recognition.component';

const routes: Routes = [{
  path: 'bio',
  component: BioMetricsComponent
},
{
  path: 'pass',
  component: PassKeyComponent
},{
  path: 'otp',
  component: OtpCodeComponent
},
{
  path: 'face',
  component: FaceRecognitionComponent
},
{
  path: '',
  redirectTo: '/bio',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
