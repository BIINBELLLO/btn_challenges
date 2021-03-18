import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ButtonsComponent } from "./buttons/buttons.component";

const routes: Routes = [
  { path: "", redirectTo: "buttons", pathMatch: "full" },
  { path: "buttons", component: ButtonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
