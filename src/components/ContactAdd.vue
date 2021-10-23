<template>
	<div>
		<h3>Thêm liên hệ mới</h3>
		<Form @submit.prevent="Submit()">
			<div class="form-group">
				<label for="name">Tên</label>
				<input
					name="name"
					type="text"
					class="form-control"
					v-model="name"
				>
				<ErrorMessage name="name" class="error-feedback" />
			</div>
			<div class="form-group">
				<label for="email">E-mail</label>
				<input
					name="email"
					type="email"
					class="form-control"
					v-model="email"
				/>
				<ErrorMessage name="email" class="error-feedback" />
			</div>
			<div class="form-group">
				<label for="address">Địa chỉ</label>
				<input
					name="address"
					type="text"
					class="form-control"
					v-model="address"
				/>
				<ErrorMessage name="address" class="error-feedback" />
			</div>
			<div class="form-group">
				<label for="phone">Điện thoại</label>
				<input
					name="phone"
					type="tel"
					class="form-control"
					v-model="phone"
				/>
				<ErrorMessage name="phone" class="error-feedback" />
			</div>
			<div class="form-group form-check">
				<input
					name="favorite"
					type="checkbox"
					class="form-check-input"
					v-model="favorite"
					@click="changeFavorite()"
				/>
				<label for="favorite" class="form-check-label">
				<strong>Liên hệ yêu thích</strong>
				</label>
			</div>
			<div class="form-group">
				<button @click="Save()" class="btn btn-primary">Lưu</button>
			</div>
		</Form>
	</div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
	name: "Contactadd",
	data() {
		return {
			name: '',
			email: '',
			phone: '',
			address: '',
			favorite: false
		}
	},
	methods: {
		...mapActions(['addContact']),
		Save(){
			var contact = {
				name: this.name,
				email: this.email,
				phone: this.phone,
				address: this.address,
				favorite: this.favorite
			}
			this.addContact(contact)
		},
		Submit(){

		}
	}
};
</script>
<style>
</style>