<template>
	<div class="absolute bottom-0 left-0 w-full p-4 border-t-2 border-t-amber-500">
		<div class="flex justify-between">
			<NuxtLink to="/friends">
				<div>
					<UIcon name="material-symbols:camera-front-outline-rounded" class="size-9" />
					<p class="text-xs">Friends</p>
				</div>
			</NuxtLink>
			<NuxtLink to="/groups">
				<div>
					<UIcon name="material-symbols:groups-2" class="size-9" />
					<p class="text-xs">Groups</p>
				</div>
			</NuxtLink>
			<NuxtLink to="/addexpense">
				<div>
					<UIcon name="material-symbols:add-box-outline-sharp" class="size-9" />
				</div>
			</NuxtLink>
			<NuxtLink to="/activity">
				<div>
					<UIcon name="material-symbols:browse-activity-outline-sharp" class="size-9" />
					<p class="text-xs">Activity</p>
				</div>
			</NuxtLink>
			<NuxtLink to="/account">
				<div>
					<UIcon name="material-symbols:account-circle" class="size-9" />
					<p class="text-xs">Account</p>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>