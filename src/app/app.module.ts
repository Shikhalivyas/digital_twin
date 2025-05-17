import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModelViewerComponent } from './model-viewer/model-viewer.component';
import { TeammembersComponent } from './teammembers/teammembers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { EnergyChartComponent } from './energy-chart-component/energy-chart-component.component';
import { HttpClientModule } from '@angular/common/http';
import { UtilityChartComponent } from './utility-chart/utility-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroBannerComponent,
    CardComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ModelViewerComponent,
    TeammembersComponent,
    EnergyChartComponent,
    UtilityChartComponent
  ],
 imports: [
  BrowserModule,              // KEEP this
  BrowserAnimationsModule,
  ReactiveFormsModule,
  AppRoutingModule,
  NgxSpinnerModule.forRoot(),
  NgChartsModule,
  HttpClientModule,
  ToastrModule.forRoot({
    timeOut: 3000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
  })
],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NgxSpinnerModule,
    NgChartsModule,
    ToastrModule,
    EnergyChartComponent
  ]
})
export class AppModule { }