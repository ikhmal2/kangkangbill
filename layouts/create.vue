<template>
	<div class="flex justify-between pb-8">
		<NuxtLink to="/groups">
			<div class="text-green-300">Cancel</div>
		</NuxtLink>
		<div>Create a group</div>
		<NuxtLink to="/groups">
			<div class="text-green-300">Done</div>
		</NuxtLink>
	</div>

	<slot></slot>
</template>

<script setup lang="ts">

</script>

<style scoped></style>