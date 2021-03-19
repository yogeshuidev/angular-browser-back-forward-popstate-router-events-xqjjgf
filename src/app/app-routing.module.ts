import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HandoffComponent } from "./handoff/handoff.component";
import { ProfileComponent } from "./profile/profile.component";
import { StepFiveComponent } from "./step-five/step-five.component";
import { StepFourComponent } from "./step-four/step-four.component";
import { StepOneComponent } from "./step-one/step-one.component";
import { StepThreeComponent } from "./step-three/step-three.component";
import { StepTwoComponent } from "./step-two/step-two.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "profile", component: ProfileComponent },
  { path: "handoff", component: HandoffComponent },
  { path: "step1", component: StepOneComponent },
  { path: "step2", component: StepTwoComponent },
  { path: "step3", component: StepThreeComponent },
  { path: "step4", component: StepFourComponent },
  { path: "step5", component: StepFiveComponent },
  { path: "**", redirectTo: "/profile" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
