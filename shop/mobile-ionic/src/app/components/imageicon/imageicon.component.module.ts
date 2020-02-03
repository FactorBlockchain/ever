import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageiconComponent } from './imageicon.component';
@NgModule({
	declarations: [ImageiconComponent],
	imports: [CommonModule, IonicModule.forRoot()],
	exports: [ImageiconComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ImageiconComponentModule {}
