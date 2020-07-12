import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { AgmCoreModule } from '@agm/core'
import { GmapComponent } from './gmap/gmap.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    EmpprofileComponent,
    GmapComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAihjzinuaCoP0tlorGcJ4oMS9Fg8lPOMo'
    })
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
