<template>
	<div>
		<div class="flex justify-between">
			<UIcon name="material-symbols:grid-on-outline-sharp" class="size-8" />
			<div>{{ groupName }}</div>
			<div class="text-green-600 text-xs">you are owed RM 112.35</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	groupName: String
})
</script>

<style scoped></style>