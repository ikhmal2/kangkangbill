<template>
	<div>
		<section>
			<OwedAmount :total-amount="totalAmountOwed" />
			<GroupItem v-for="i in pendingSettlements" :group="i" />
			<div class="w-1/2 m-auto pt-4">
				<RouterLink to="add-group">
					<UButton icon="material-symbols:group-add-outline-rounded">Start a new group</UButton>
				</RouterLink>
			</div>
		</section>

		<section class="pt-8 pb-10">
			<div class="flex">
				<h4>Previosly settled groups</h4>
				<UButton @click="showSettledGroup = !showSettledGroup" size="sm" variant="ghost">{{
					settledGroup ? 'Hide' : 'Show' }}</UButton>
			</div>
			<div v-show="showSettledGroup">
				<GroupItem v-for="i in settledGroup" :group="i" />
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { FriendList as list, groupList } from '~/assets/utils/mock';

const showSettledGroup = ref(true);

const totalAmountOwed = computed(() => {
	let amount = 0;
	list.forEach(item => {
		amount += item.amount;
	})
	return amount;
})

const pendingSettlements = computed(() => {
	return groupList.filter((x) => x.amount > 0)
})

const settledGroup = computed(() => {
	return groupList.filter((x) => x.amount === 0)
})


</script>

<style scoped></style>