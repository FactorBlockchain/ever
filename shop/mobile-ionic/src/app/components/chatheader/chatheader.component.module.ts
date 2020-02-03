import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatheaderComponent } from './chatheader.component';

@NgModule({
	declarations: [ChatheaderComponent],
	imports: [CommonModule, IonicModule.forRoot()],
	exports: [ChatheaderComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatheaderComponentModule {}
