import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DemoRoutingModule } from './demo-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { VideoplayComponent } from './videoplay/videoplay.component';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    NgbModule
  ],
  declarations: [CarouselComponent, VideoplayComponent]
})
export class DemoModule { }
