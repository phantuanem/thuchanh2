export default {
	getContact(context, id){
		context.commit('getContact', id)
	},
	removeAllContacts(context){
		context.commit('removeAllContacts')
	},
	updateContact(context, contact){
		context.commit('updateContact', contact)
	},
	deleteContact(context, id){
		context.commit('deleteContact', id)
	},
	addContact(context, contact){
		context.commit('addContact', contact)
	}
}