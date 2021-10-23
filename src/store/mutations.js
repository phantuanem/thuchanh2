import router from '../router'

export default {
	getContact(state, id){
		state.contact = {...state.contacts[id]}
	},
	async removeAllContacts(state){
		state.contacts = {...{}}
	},
	async updateContact(state, contact){
		state.contacts[contact.id] = {...contact}
		router.push('/')
	},
	async deleteContact(state, id){
		state.contacts.splice(id,1)
		router.push('/')
	},
	async addContact(state, contact){
		state.contacts.push(contact)
		router.push('/')
	}
}