import { RouterModule, Routes } from "@angular/router";
import { CreateResidentComponent } from "./create-resident-component/create-resident-component";
import { NgModule } from "@angular/core";
import { ViewResidentComponent } from "./view-resident-component/view-resident-component";
import { ResidentListComponent } from "./resident-list-component/resident-list-component";

const routes: Routes = [
    { path: "", component: ResidentListComponent },
    { path: "create", component: CreateResidentComponent },
    { path: "view/:id", component: ViewResidentComponent }
]

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)
export class ResidentRoutingModule { };