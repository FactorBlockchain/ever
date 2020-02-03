import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Map2Page } from './map2.page';
import 'rxjs/add/operator/map';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { GeoLocationsMerchantsService } from 'app/services/geo-location-merchants.service';
import { GeoLocationService } from 'app/services/geo-location';
import { MapModule } from './map/map.module';
import { ChatheaderComponentModule } from '../../components/chatheader/chatheader.component.module';
const routes: Routes = [
	{
		path: '',
		component: Map2Page
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ChatheaderComponentModule,
		RouterModule.forChild(routes),
		TranslateModule.forChild(),
		MapModule
	],
	declarations: [Map2Page],
	providers: [GeoLocationsMerchantsService, GeoLocationService]
})
export class Map2PageModule {}
