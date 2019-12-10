import { Component, Injector, OnInit } from '@angular/core';
import { AuthService } from 'app/pages/auth/services/auth/auth.service';
import { IPreference } from 'app/pages/setting/model/preference';
import { Extender } from 'shared/helpers/extender';
import { FirestoreService } from 'shared/services/firestore/firestore.service';

@Component({
	selector: 'app-notification-settings',
	templateUrl: './notification-settings.component.html',
	styleUrls: ['./notification-settings.component.scss']
})
export class NotificationSettingsComponent extends Extender implements OnInit {
	public model: IPreference = null;

	constructor(
		protected injector: Injector,
		private authService: AuthService,
		private firestoreService: FirestoreService
	) {
		super(injector);
	}

	/** get settings and current user */
	public async ngOnInit() {
		const { uid } = await this.authService.getUser();
		this.firestoreService
			.doc$<IPreference>(`preferences/${uid}`)
			.subscribe((setting: IPreference) => (this.model = setting));
	}

	/** save preference */
	public savePreference(setting: IPreference) {
		this.firestoreService.set<IPreference>(
			`preferences/${this.model.uid}`,
			setting
		);
	}
}
