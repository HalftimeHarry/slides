<script context="module"></script>

<script
	generics="T extends any, U extends BindingOptions = BindingOptions, V extends BindingRef = BindingRef"
>
	import Binding from '../core/Binding.svelte'
	import { shallowEqual } from 'fast-equals'
	export let value
	export let ref = void 0
	export let options = void 0
	const key = Symbol('key')
	function getValue() {
		return value
	}
	function setValue() {
		if (!shallowEqual(value, object[key])) {
			object[key] = value
		}
	}
	$: object = { [key]: getValue() }
	$: value = object[key]
	$: value, setValue()
</script>

<Binding bind:object bind:ref on:change {key} {options} {...$$restProps} />
