import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentContentComponent } from './parent-content/parent-content.component';
import { HeadingComponent } from './heading/heading.component';
import { EngineComponent } from './engine/engine.component';
import { LegendComponent } from './legend/legend.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentContentComponent,
    HeadingComponent,
    EngineComponent,
    LegendComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
