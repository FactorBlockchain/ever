import { IUser } from 'app/pages/auth/helpers/model'

export interface ICall {
	id?: string
	participants?: IUser[]
	participantsId: string[] | number[]
	createdAt: firebase.firestore.Timestamp
	updateAt: firebase.firestore.Timestamp
	uid: string
	sessionToken: string
}
