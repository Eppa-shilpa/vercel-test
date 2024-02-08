import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { DatabindingDemoComponent } from './components/databinding-demo/databinding-demo.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { DirectivesTaskComponent } from './components/directives-task/directives-task.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ServicesDemoComponent } from './components/services-demo/services-demo.component';
import { TemplateDerivenFormComponent } from './components/template-deriven-form/template-deriven-form.component';
import { RouterDemoComponent } from './components/router-demo/router-demo.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { ComponentTwoComponent } from './components/component-two/component-two.component';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonComponent } from './components/button/button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DatabindingDemoComponent,
    DirectivesComponent,
    DirectivesTaskComponent,
    PipesComponent,
    ServicesDemoComponent,
    TemplateDerivenFormComponent,
    RouterDemoComponent,
    HomeComponent,
    ContactUsComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ModalComponent,
    ButtonComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'contact-us',component:ContactUsComponent}
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
