import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PagesModuleGuard } from './pages/pages.module.guard';
import { MaintenanceModuleGuard } from './maintenance-info/maintenance-info.module.guard';
import { Store } from './services/store.service';

const routes: Routes = [
	{
		path: '',
		loadChildren: './pages/pages.module#PagesModule',
		canActivate: [PagesModuleGuard]
	},
	{
		path: 'maintenance-info',
		loadChildren:
			'./maintenance-info/maintenance-info.module#MaintenanceInfoPageModule',
		canActivate: [MaintenanceModuleGuard]
	},
	{
		path: 'server-down',
		loadChildren: './+server-down/server-down.module#ServerDownPageModule'
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: ''
	},
	{ path: 'mall', loadChildren: './mall/mall.module#MallPageModule' },
	{
		path: 'painting',
		loadChildren: './painting/painting.module#PaintingPageModule'
	},
	{
		path: 'promotion',
		loadChildren: './promotion/promotion.module#PromotionPageModule'
	},
	{
		path: 'memedia',
		loadChildren: './memedia/memedia.module#MemediaPageModule'
	},
	{
		path: 'bestmenu',
		loadChildren: './bestmenu/bestmenu.module#BestmenuPageModule'
	},
	{
		path: 'localmom',
		loadChildren: './localmom/localmom.module#LocalmomPageModule'
	},
	{
		path: 'myhomepage',
		loadChildren: './myhomepage/myhomepage.module#MyhomepagePageModule'
	},
	{
		path: 'testcomplete',
		loadChildren:
			'./testcomplete/testcomplete.module#TestcompletePageModule'
	},
	{
		path: 'howmuch',
		loadChildren: './howmuch/howmuch.module#HowmuchPageModule'
	},
	{
		path: 'peoplebar',
		loadChildren: './peoplebar/peoplebar.module#PeoplebarPageModule'
	},
	{
		path: 'myfavourite',
		loadChildren: './myfavourite/myfavourite.module#MyfavouritePageModule'
	},
	{
		path: 'yourlocation',
		loadChildren:
			'./yourlocation/yourlocation.module#YourlocationPageModule'
	},
	{
		path: 'restaurantdetail',
		loadChildren:
			'./restaurantdetail/restaurantdetail.module#RestaurantdetailPageModule'
	},
	{
		path: 'translator',
		loadChildren: './translator/translator.module#TranslatorPageModule'
	}
	//{ path: 'search', loadChildren: './search/search.module#SearchPageModule' }
	//{ path: 'order-empty', loadChildren: './order-empty/order-empty.module#OrderEmptyPageModule' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
	constructor(private store: Store, private router: Router) {
		const serverConnection = Number(this.store.serverConnection);

		if (serverConnection === 0) {
			this.router.navigate(['server-down']);
		}
	}
}
