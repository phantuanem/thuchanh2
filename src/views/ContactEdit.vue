<template>
	<div>
		<div v-if="contact.name" class="edit-form">
			<h4>Hiệu chỉnh Liên hệ</h4>
			<ContactForm :contact="contact"/>
			<p>{{ message }}</p>
		</div>
		<div v-else>
			<br />
			<p>Liên hệ không tìm thấy.</p>
		</div>
	</div>
</template>
<script>
import ContactForm from "../components/ContactForm";
import { mapActions, mapGetters } from 'vuex'

export default {
	name: "ContactEdit",
	components: {
		ContactForm,
	},
	data() {
		return {
			message: "",
		};
	},
	methods: {
		...mapActions(['getContact']),
	},
	computed: {
		...mapGetters(['contact'])
	},
	mounted() {
		this.message = "";
		this.getContact(this.$route.query.id);
	},
};
</script>
<style>
.edit-form {
	max-width: 400px;
	margin: auto;
}
</style>