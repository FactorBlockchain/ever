import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
	selector: 'e-cu-translator',
	templateUrl: './translator.page.html',
	styleUrls: ['./translator.page.css']
})
export class TranslatorPage implements OnInit {
	constructor(private router: Router) {}

	public gotosetting() {
		this.router.navigateByUrl('/profile');
	}

	public gotopay() {
		this.router.navigateByUrl('');
	}

	public gototranslator() {
		this.router.navigateByUrl('/translator');
	}

	public gotochat() {
		this.router.navigateByUrl('/messages');
	}

	public gotofriend() {
		this.router.navigateByUrl('/people');
	}
	ngOnInit() {}
}
