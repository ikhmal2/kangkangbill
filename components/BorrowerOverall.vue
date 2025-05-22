<template>
	<div class="flex justify-between items-center">
		<UAvatar class="max-w-1/5" :alt="borrower.name" size="md" />
		<div class="max-w-2/5 text-ellipsis m-1">
			<p>{{ borrower.name }}</p>
		</div>
		<div v-if="borrower.amount > 0" class="text-green-600 text-ellipsis w-40 text-left">Owes you:
			RM {{
				(borrower.amount).toFixed(2) }}</div>
		<div v-else class="text-gray-500 w-40 text-left">settled up</div>
	</div>
</template>

<script setup lang="ts">
type borrower = {
	name: string,
	amount: number
}

defineProps<{
	borrower: borrower
}>()

</script>

<style scoped></style>