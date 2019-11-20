import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllRoomsPageRoutingModule } from './all-rooms-routing.module';

import { AllRoomsPage } from './all-rooms.page';
import {RoomDetailPageModule} from '../room-detail/room-detail.module';
import {RoomCardComponent} from '../../components/room-card/room-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AllRoomsPageRoutingModule,
        RoomDetailPageModule
    ],
    exports: [
        RoomCardComponent
    ],
    declarations: [AllRoomsPage, RoomCardComponent]
})
export class AllRoomsPageModule {}
