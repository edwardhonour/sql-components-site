import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteParameterResolver } from 'sql-components';
import { FacilitySaaTypePanelComponent } from './admin/panels/facility-saa-type-panel/facility-saa-type-panel.component';
import { SurveyTemplateOptionPanelComponent } from './admin/panels/survey-template-option-panel/survey-template-option-panel.component';
import { SurveyTemplatePanelComponent } from './admin/panels/survey-template-panel/survey-template-panel.component';
import { SurveyTemplateSectionPanelComponent } from './admin/panels/survey-template-section-panel/survey-template-section-panel.component';
import { ThreatTypePanelComponent } from './admin/panels/threat-type-panel/threat-type-panel.component';
import { PreviewSectionComponent } from './admin/survey/pages/preview-section/preview-section.component';
import { PreviewTemplateListComponent } from './admin/survey/pages/preview-template-list/preview-template-list.component';
import { TemplateDashboardComponent } from './admin/survey/pages/template-dashboard/template-dashboard.component';
import { TemplateListComponent } from './admin/survey/pages/template-list/template-list.component';
import { TemplateSectionDashboardComponent } from './admin/survey/pages/template-section-dashboard/template-section-dashboard.component';
import { ForcedLogoutComponent } from './auth/forced-logout/forced-logout.component';
import { InvalidTokenComponent } from './auth/invalid-token/invalid-token.component';
import { NewSigninComponent } from './auth/new-signin/new-signin.component';
import { UserEnrollComponent } from './auth/user-enroll/user-enroll.component';
import { UserLogoutComponent } from './auth/user-logout/user-logout.component';
import { DataResolver, MenuResolver, PingResolver, UserResolver } from './data.resolver';
import { AdminDashboardComponent } from './features/admin-dashboard/admin-dashboard.component';
import { AssessmentDashboardComponent } from './features/assessment/pages/assessment-dashboard/assessment-dashboard.component';
import { SurveyListComponent } from './features/assessment/pages/survey-list/survey-list.component';
import { SurveySectionComponent } from './features/assessment/pages/survey-section/survey-section.component';
import { FacilityDashboardComponent } from './features/facility/pages/facility-dashboard/facility-dashboard.component';
import { FacilityListComponent } from './features/facility/pages/facility-list/facility-list.component';
import { FacilityPropertyTypesComponent } from './features/facility/panels/facility-property-types/facility-property-types.component';
import { StakeholderDashboardComponent } from './features/stakeholder/pages/stakeholder-dashboard/stakeholder-dashboard.component';
import { StakeholderListComponent } from './features/stakeholder/pages/stakeholder-list/stakeholder-list.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';

const routes: Routes = [
  { path: '', component: NewSigninComponent },
  { path: 'survey-template-list', component: SurveyTemplatePanelComponent },
  { path: 'survey-template-sections', component: SurveyTemplateSectionPanelComponent },
  { path: 'survey-template-options', component: SurveyTemplateOptionPanelComponent },
  { path: 'test', component: TestPageComponent, resolve: { parameters: RouteParameterResolver } },
  { path: 'test/:id', component: TestPageComponent, resolve: { parameters: RouteParameterResolver } },
  { path: 'test/:id/:id2', component: TestPageComponent, resolve: { parameters: RouteParameterResolver } },
  { path: 'test/:id/:id2/:id3', component: TestPageComponent, resolve: { parameters: RouteParameterResolver } },
  { path: 'assessment-dashboard/:id', component: AssessmentDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }},
  { path: 'assessment-dashboard/:id', component: AssessmentDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }},
  { path: 'stakeholders', component: StakeholderListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver } },
  { path: 'stakeholder-dashboard/:id', component: StakeholderDashboardComponent,  resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver } },
  { path: 'facilities', component: FacilityListComponent,  resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver } },
  { path: 'facility-dashboard/:id', component: FacilityDashboardComponent,  resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver },},
  { path: 'preview-list', component: PreviewTemplateListComponent,  resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver } },
  { path: 'assessments', component: SurveyListComponent,  resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver },},
  { path: 'survey-section/:id/:id2', component: SurveySectionComponent,  resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver },},
  { path: 'templates', component: TemplateListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
  { path: 'template-dashboard/:id', component: TemplateDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
  { path: 'template-section-dashboard/:id', component: TemplateSectionDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }},
  { path: 'preview-section/:id/:id2', component: PreviewSectionComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver },},          
  { path: 'sadmin', component: AdminDashboardComponent, resolve: { data: DataResolver, userdata: UserResolver, menudata: MenuResolver }, },
  { path: 'template-list', component: TemplateListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }},
  { path: 'template-section-dashboard/:id', component: TemplateSectionDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }},
  { path: 'template-list', component: TemplateListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }},
  { path: 'template-dashboard', component: TemplateDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }},
  { path: 'landing-page', component: LandingPageComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }},
  { path: 'enroll/:id', component: UserEnrollComponent , resolve: { data: DataResolver }, },
  { path: 'e/:id', component: UserEnrollComponent, resolve: { data: DataResolver }, },
  { path: 'e', component: UserEnrollComponent, resolve: { data: DataResolver }, },
  { path: 'forced-off/:id', component: ForcedLogoutComponent },
  { path: 'forced-off', component: ForcedLogoutComponent },
  { path: 'sign-in', component: NewSigninComponent },
  { path: 'error', component: InvalidTokenComponent },
  { path: 'enroll', component: UserEnrollComponent, resolve: { data: DataResolver }, },
  { path: 'user-logout', component: UserLogoutComponent },
  { path: 'enroll/:id', component: UserEnrollComponent },
  { path: 'enroll', component: UserEnrollComponent },
  { path: 'saa-types', component: FacilitySaaTypePanelComponent },
  { path: 'threat-types', component: ThreatTypePanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
