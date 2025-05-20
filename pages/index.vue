<template>
	<div class="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 flex justify-center items-center flex-col">
		<h1>KangKangBill</h1>
		<div>
			<UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
				<UFormField label="Username" name="username">
					<UInput v-model="state.username" />
				</UFormField>
				<UFormField label="Password" name="password">
					<UInput v-model="state.password" type="password" />
				</UFormField>
				<UButton type="submit">
					Login
				</UButton>
			</UForm>
		</div>
	</div>
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
	username: z.string().min(4, 'Must be at least 4 characters').trim().toLowerCase(),
	password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
	username: undefined,
	password: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
	toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
	console.log(event.data)
}
</script>

<style scoped>
h1 {
	font-family: Fascinate, sans-serif;
	margin-top: 0px;
	margin-bottom: 50px;
	text-align: center;
	font-size: 3rem;
	letter-spacing: 0.15rem;
	text-transform: uppercase;
	color: #fff;
	text-shadow: -4px 4px #ef3550,
		-8px 8px #f48fb1,
		-12px 12px #7e57c2,
		-16px 16px #2196f3,
		-20px 20px #26c6da,
		-24px 24px #43a047,
		-28px 28px #eeff41,
		-32px 32px #f9a825,
		-36px 36px #ff5722;
}

@media screen and (max-width: 48rem) {
	h1 {
		font-size: 2rem;
		margin-left: 3.125rem;
	}
}
</style>
