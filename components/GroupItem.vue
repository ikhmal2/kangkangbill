<template>
	<div class="p-4 m-4 rainbow-box rounded-2xl">
		<div class="flex justify-between">
			<UIcon name="material-symbols:grid-on-outline-sharp" class="size-8" />
			<div>{{ group.name }}</div>
			<div class="text-green-600 text-xs">you are owed RM {{ group.amount.toFixed(2) }}</div>
		</div>
		<div class="pl-12">
			<ul class="">
				<li v-for="(i, index) in pendingSettlements" :key="index" class="text-xs text-gray-400"
					:class="[index !== 0 ? 'pt-1' : '']">&#8594; {{ i.name }} owes you <span class="text-green-500">RM
						{{ i.amount }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { GroupCollection } from "../assets/types";

const props = defineProps<{
	group: GroupCollection
}>()

const pendingSettlements = computed(() => {
	let pendingList = [];
	for (let i = 0; i < props.group.participants.length; i++) {
		if (props.group.participants[i].amount > 0) {
			pendingList.push(props.group.participants[i])
		}
	}
	return pendingList;
})

</script>

<style scoped>
.rainbow-box {
	border: 1px solid transparent;
	border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
	border-image-slice: 1;
}
</style>