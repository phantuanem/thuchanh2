<template>
	<Form @submit.prevent="Submit()">
		<div class="form-group">
			<label for="name">Tên</label>
			<input
				name="name"
				type="text"
				class="form-control"
				v-model="contact.name"
			>
			<ErrorMessage name="name" class="error-feedback" />
		</div>
		<div class="form-group">
			<label for="email">E-mail</label>
			<input
				name="email"
				type="email"
				class="form-control"
				v-model="contact.email"
			/>
			<ErrorMessage name="email" class="error-feedback" />
		</div>
		<div class="form-group">
			<label for="address">Địa chỉ</label>
			<input
				name="address"
				type="text"
				class="form-control"
				v-model="contact.address"
			/>
			<ErrorMessage name="address" class="error-feedback" />
		</div>
		<div class="form-group">
			<label for="phone">Điện thoại</label>
			<input
				name="phone"
				type="tel"
				class="form-control"
				v-model="contact.phone"
			/>
			<ErrorMessage name="phone" class="error-feedback" />
		</div>
		<div class="form-group form-check">
			<input
				name="favorite"
				type="checkbox"
				class="form-check-input"
				v-model="contact.favorite"
				@click="changeFavorite()"
			/>
			<label for="favorite" class="form-check-label">
			<strong>Liên hệ yêu thích</strong>
			</label>
		</div>
		<div class="form-group">
			<button @click="updateContact(contact)" class="btn btn-primary">Lưu</button>
			<button
				v-if="contact.id"
				type="button"
				class="ml-2 btn btn-danger"
				@click="deleteContact(contact.id)"
			>
			Xóa
			</button>
		</div>
	</Form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
	name: "ContactForm",
	props: ['contact'],
	methods: {
		...mapActions(['updateContact', 'deleteContact']),
		Submit(){
		},
		changeFavorite(){
			console.log(this.contact.favorite)
		}
	},
	mounted() {
		this.contact.id = this.$route.query.id
	}
};
</script>
<style>
</style>