<script lang="ts">
	import { onMount } from 'svelte'
	
	let layout = false
	let logoError = false
	
	function handleLogoError() {
		logoError = true
	}
</script>

<div class="relative h-[1080px] w-[1920px] overflow-hidden" class:layout>
	<!-- Shadcn-styled border frame -->
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute inset-4 border-[18px] border-border/60 rounded-lg shadow-2xl"></div>
		<div class="absolute inset-16 border-[8px] border-primary/30 rounded-lg"></div>
	</div>
	
	<!-- Logo in footer center, overlaying border -->
	<div class="absolute left-1/2 transform -translate-x-1/2 z-50 pointer-events-none" style="bottom: 40px; transform: translateX(-50%) translateY(50%)">
		<div class="bg-background rounded-full p-2 shadow-xl border-2 border-primary/40">
			{#if !logoError}
				<img 
					src="/images/brand/shields/fli_logo.png" 
					alt="FLI Golf Logo" 
					class="h-[75px] w-[75px] object-contain"
					on:error={handleLogoError}
				/>
			{:else}
				<div class="h-[75px] w-[75px] flex items-center justify-center text-primary text-3xl font-bold">
					FLI
				</div>
			{/if}
		</div>
	</div>
	
	<div class="relative h-full p-16">
		<slot />
	</div>
</div>

<style>
	.layout {
		outline: 4px solid aqua;
		outline-offset: -6px;
	}
</style>
