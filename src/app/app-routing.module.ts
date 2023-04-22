import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutMeComponent} from "./about-me/about-me.component";
import {ExperienceComponent} from "./experience/experience.component";
import {EducationComponent} from "./education/education.component";
import {SkillsComponent} from "./skills/skills.component";
import {InterestsComponent} from "./interests/interests.component";

const routes: Routes = [
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'interests', component: InterestsComponent },
  { path: '**', component: AboutMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
