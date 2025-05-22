<template>
	<div>
		<OwedAmount :total-amount="totalAmountOwed" />
		<GroupItem v-for="i in groupList" :group-name="i" />
	</div>
</template>

<script setup lang="ts">
import { FriendList as list, groupList } from '~/assets/utils/mock';

const totalAmountOwed = computed(() => {
	let amount = 0;
	list.forEach(item => {
		amount += item.amount;
	})
	return amount;
})
</script>

<style scoped></style>