import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { ControllesearchComponent } from './controllesearch/controllesearch.component';
import { FormsModule } from '@angular/forms';
import { SimpleGraphComponent } from './simple-graph/simple-graph.component';
import { GraphDashComponent } from './graph-dash/graph-dash.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { SecondBarChartComponent } from './second-bar-chart/second-bar-chart.component';
import { StudentGraphComponent } from './student-graph/student-graph.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { FilterComponent } from './filter/filter.component';
import { SearchCourseComponent } from './search-course/search-course.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    NotificationComponent,
    SearchComponent,
    ControllesearchComponent,
    SimpleGraphComponent,
    GraphDashComponent,
    BarChartComponent,
    SecondBarChartComponent,
    StudentGraphComponent,
    EmpDetailsComponent,
    FilterComponent,
    SearchCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
