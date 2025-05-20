<template>
	<div class="flex justify-between">
		<UIcon name="material-symbols:search-rounded" class="size-8" />
		<div>{{ headerCTA }}</div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const headerCTA = computed(() => {
	if (route.path === '/dashboard') {
		return 'Add friends'
	} else if (route.path === '/groups') {
		return 'Create group'
	}
})
</script>

<style scoped></style>