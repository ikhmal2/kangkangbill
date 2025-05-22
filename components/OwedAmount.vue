<template>
	<div class="pb-4">
		Overall, you are owed <span class="text-green-500">RM{{ totalAmount?.toFixed(2) }}</span>
	</div>
</template>

<script setup lang="ts">
defineProps({
	totalAmount: Number
})

</script>

<style scoped></style>