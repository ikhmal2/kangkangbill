<template>
	<div class="flex items-center gap-4">
		<div class="border-2 border-dotted h-10 w-1/5 bg-gray-600 p-4 rounded-sm flex justify-center items-center">
			<UIcon name="material-symbols:add-a-photo-outline-rounded" size="25" />
		</div>
		<UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
			<UFormField label="Group Name" name="groupname" size="sm">
				<UInput v-model="state.groupname" />
			</UFormField>
		</UForm>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'create',
})

import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
	groupname: z.string().min(4, 'Must be at least 4 characters').trim().toLowerCase(),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
	groupname: undefined,
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
	toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
	console.log(event.data)
}
</script>

<style scoped></style>