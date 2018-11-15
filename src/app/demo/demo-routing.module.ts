import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarouselComponent } from './carousel/carousel.component';
import { VideoplayComponent } from './videoplay/videoplay.component';

const routes: Routes = [{
  path: 'carousel',
  component: CarouselComponent,
  data: {
    title: 'Carousel'
    }
  },
  {
    path: 'video-play',
    component: VideoplayComponent,
    data: {
      title: 'Video'
    }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
