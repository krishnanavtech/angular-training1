import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { CardComponent } from './card/card.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { DynamicStylingComponent } from './dynamic-styling/dynamic-styling.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { Comp1Component } from './view-encapsulation/comp1/comp1.component';
import { Comp2Component } from './view-encapsulation/comp2/comp2.component';
import { HostlistenerHostbindingComponent } from './hostlistener-hostbinding/hostlistener-hostbinding.component';
import { ProductComponent } from './hostlistener-hostbinding/product/product.component';
import { BgcolorDirective } from './hostlistener-hostbinding/product/bgcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    EventbindingComponent,
    TwoWayBindingComponent,
    StructuralDirectivesComponent,
    DynamicStylingComponent,
    ViewEncapsulationComponent,
    Comp1Component,
    Comp2Component,
    HostlistenerHostbindingComponent,
    ProductComponent,
    BgcolorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
