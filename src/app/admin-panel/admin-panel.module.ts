import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostVideoComponent } from './post-video/post-video.component';

@NgModule({
  declarations: [AdminPanelComponent, DashboardComponent, PostVideoComponent],
  imports: [
    CommonModule
  ]
})
export class AdminPanelModule { }
