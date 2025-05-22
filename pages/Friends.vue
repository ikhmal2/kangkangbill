<template>
	<div class="h-full">
		<OwedAmount :total-amount="totalAmountOwed" />
		<div class="flex flex-col justify-around gap-4 h-full">
			<BorrowerOverall v-for="i in list" :borrower="i" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { FriendList as list } from '~/assets/utils/mock';

const totalAmountOwed = computed(() => {
	let amount = 0;
	list.forEach(item => {
		amount += item.amount;
	})
	return amount;
})
</script>

<style scoped></style>