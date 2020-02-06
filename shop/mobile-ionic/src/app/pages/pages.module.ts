import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModuleGuard } from './+products/products.module.guard';
import { InviteModuleGuard } from './+invite/invite.module.guard';
import { InfoModuleGuard } from './+info/info.module.guard';
import { MaintenanceService } from '@modules/client.common.angular2/services/maintenance.service';
import { OrderTakeawayInfoModuleGuard } from './+products/+order/takeaway/+page/takeaway-page.module.guard';
import { OrderInfoPageModuleGuard } from './+products/+order/+order-info/order-info.module.guard';
import { OrdersHistoryModuleGuard } from './+orders-history/orders-history.module.guard';
import { MerchantsPageModuleGuard } from './+merchants/merchants.module.guard';
import { AuthGuard } from 'app/pages/auth/guards/auth/auth.guard';
import { FirstPageGuard } from 'app/pages/auth/guards/first-page/first-page.guard';

const routes: Routes = [
	{
		path: 'video-room/:roomName/video',
		loadChildren: '../video-room/video-room.module#VideoRoomPageModule'
	},
	{
		path: 'voice-room/:roomName/voice',
		loadChildren: '../voice-room/video-room.module#VideoRoomPageModule'
	},
	{
		path: 'chatbot',
		loadChildren: './chatbot/chatbot.module#chatbotPageModule'
	},
	{
		path: 'products',
		loadChildren: './+products/products.module#ProductsPageModule',
		canLoad: [ProductsModuleGuard]
	},
	{
		path: 'products/product-details/:id',
		loadChildren:
			'./+products/product-details/product-details.module#ProductDetailsPageModule'
		// canLoad: [ ProductsModuleGuard ]
	},
	{
		path: 'orders-history',
		loadChildren:
			'./+orders-history/orders-history.module#OrdersHistoryPageModule',
		canLoad: [OrdersHistoryModuleGuard]
	},
	{
		path: 'invite',
		loadChildren: './+invite/invite.module#InvitePageModule',
		canLoad: [InviteModuleGuard]
	},
	{
		path: 'info',
		loadChildren: './+info/info.module#InfoModule',
		canLoad: [InfoModuleGuard]
	},
	{
		path: 'language',
		loadChildren: './+language/language.module#LanguagePageModule'
	},
	{
		path: 'errors',
		loadChildren: './+errors/errors.module#ErrorsModule'
	},
	{
		path: 'order-info',
		loadChildren:
			'./+products/+order/+order-info/order-info.module#OrderInfoPageModule',
		canLoad: [OrderInfoPageModuleGuard]
	},
	{
		path: 'order-info-takeaway',
		loadChildren:
			'./+products/+order/takeaway/+page/takeaway-page.module#OrderTakeawayInfoPageModule',
		canLoad: [OrderTakeawayInfoModuleGuard]
	},
	{
		path: 'merchants',
		loadChildren: './+merchants/merchants.module#MerchantsPageModule',
		canLoad: [MerchantsPageModuleGuard]
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'auth'
	},
	{
		path: 'map2',
		loadChildren: './+map2/map2.module#Map2PageModule'
	},
	{
		path: 'paymentlist',
		loadChildren:
			'./+products/+order/common/paymentlist/paymentlist.module#PaymentlistPageModule'
	},
	{
		canActivate: [FirstPageGuard],
		path: 'auth',
		loadChildren: () =>
			import('./auth/auth.module').then((m) => m.AuthModule)
	},
	{
		canActivate: [AuthGuard],
		path: 'dashboard',
		loadChildren: () =>
			import('../pages/dashboard/dashboard.module').then(
				(m) => m.DashboardModule
			)
	},
	{
		canActivate: [AuthGuard],
		path: 'people',
		loadChildren: () =>
			import('../pages/people/people.module').then((m) => m.PeopleModule)
	},
	{
		canActivate: [AuthGuard],
		path: 'feed',
		loadChildren: () =>
			import('../pages/feed/feed.module').then((m) => m.FeedModule)
	},
	{
		canActivate: [AuthGuard],
		path: 'profile',
		loadChildren: () =>
			import('../pages/profile/profile.module').then(
				(m) => m.ProfileModule
			)
	},
	{
		canActivate: [AuthGuard],
		path: 'messages',
		loadChildren: () =>
			import('../pages/messages/messages.module').then(
				(m) => m.MessagesModule
			)
	},
	{
		canActivate: [AuthGuard],
		path: 'setting',
		loadChildren: () =>
			import('../pages/setting/setting.module').then(
				(m) => m.SettingModule
			)
	},
	{
		path: 'page1',
		loadChildren: '../pages/page1/page1.module#Page1PageModule'
	},
	{
		path: 'order-empty',
		loadChildren:
			'../pages/order-empty/order-empty.module#OrderEmptyPageModule'
	},
	{
		path: 'mall',
		loadChildren: '../mall/mall.module#MallPageModule'
	},
	{
		path: 'painting',
		loadChildren: '../painting/painting.module#PaintingPageModule'
	},
	{
		path: 'promotion',
		loadChildren: '../promotion/promotion.module#PromotionPageModule'
	},
	{
		path: 'memedia',
		loadChildren: '../memedia/memedia.module#MemediaPageModule'
	},
	{
		path: 'bestmenu',
		loadChildren: '../bestmenu/bestmenu.module#BestmenuPageModule'
	},
	{
		path: 'localmom',
		loadChildren: '../localmom/localmom.module#LocalmomPageModule'
	},
	{
		path: 'myhomepage',
		loadChildren: '../myhomepage/myhomepage.module#MyhomepagePageModule'
	},
	{
		path: 'testcomplete',
		loadChildren:
			'../testcomplete/testcomplete.module#TestcompletePageModule'
	},
	{
		path: 'howmuch',
		loadChildren: '../howmuch/howmuch.module#HowmuchPageModule'
	},
	{
		path: 'peoplebar',
		loadChildren: '../peoplebar/peoplebar.module#PeoplebarPageModule'
	},
	{
		path: 'myfavourite',
		loadChildren: '../myfavourite/myfavourite.module#MyfavouritePageModule'
	},
	{
		path: 'yourlocation',
		loadChildren:
			'../yourlocation/yourlocation.module#YourlocationPageModule'
	},
	{
		path: 'restaurantdetail',
		loadChildren:
			'../restaurantdetail/restaurantdetail.module#RestaurantdetailPageModule'
	},
	{
		path: 'search',
		loadChildren: '../search/search.module#SearchPageModule'
	},
	{
		path: 'placedetails',
		loadChildren:
			'../placedetails/placedetails.module#PlacedetailsPageModule'
	},
	{
		path: 'filtersfull',
		loadChildren: '../filtersfull/filtersfull.module#FiltersfullPageModule'
	},
	{
		path: 'collectionsby',
		loadChildren:
			'../collectionsby/collectionsby.module#CollectionsbyPageModule'
	},
	{
		path: 'phoneverification',
		loadChildren:
			'../phoneverification/phoneverification.module#PhoneverificationPageModule'
	},
	{
		path: 'verifyphone',
		loadChildren: '../verifyphone/verifyphone.module#VerifyphonePageModule'
	},
	{
		path: 'pathtraking',
		loadChildren: '../pathtraking/pathtraking.module#PathtrakingPageModule'
	},
	{
		path: 'translator',
		loadChildren: '../translator/translator.module#TranslatorPageModule'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	providers: [
		ProductsModuleGuard,
		InviteModuleGuard,
		InfoModuleGuard,
		MaintenanceService,
		OrderTakeawayInfoModuleGuard,
		OrderInfoPageModuleGuard,
		OrdersHistoryModuleGuard,
		MerchantsPageModuleGuard
	],
	exports: [RouterModule]
})
export class PagesModule {}
