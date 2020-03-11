import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DashboardComponent } from './admin-panel/dashboard/dashboard.component';
import { SidebarComponent } from './admin-panel/sidebar/sidebar.component';
import { TopbarComponent } from './admin-panel/topbar/topbar.component';
import { PostVideoComponent } from './admin-panel/post-video/post-video.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPanelComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    PostVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
