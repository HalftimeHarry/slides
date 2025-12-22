<script lang="ts">import { T } from '@threlte/core';
import { Object3D } from 'three';
import { usePortalContext } from './usePortalContext.svelte';
let { id = 'default', object, children } = $props();
const { getPortal } = usePortalContext();
const portal = getPortal(id);
let target = $derived(object ?? portal.current);
</script>

{#if target}
  <T.Object3D attach={target}>
    {@render children?.()}
  </T.Object3D>
{/if}
