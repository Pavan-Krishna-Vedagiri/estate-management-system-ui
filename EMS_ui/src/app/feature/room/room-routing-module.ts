import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewRoomsComponent } from './view-rooms-component/view-rooms-component'
import { ViewRoomDetailComponent } from './view-rooms-component/view-room-detail-component/view-room-detail-component'

const routes: Routes = [
    { path: "", component: ViewRoomsComponent },
    { path: ":roomId", component: ViewRoomDetailComponent }
]

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)
export class RoomRoutingModule {
}