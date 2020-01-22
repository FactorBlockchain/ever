import { TestBed, inject } from '@angular/core/testing';

import { VoiceOpenViduService } from './openvidu.service';

describe('OpenviduService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [VoiceOpenViduService]
		});
	});

	it('should be created', inject(
		[VoiceOpenViduService],
		(service: VoiceOpenViduService) => {
			expect(service).toBeTruthy();
		}
	));
});
