<script>
    import { onMount } from "svelte";

    onMount(() => {
        console.log('Mounting')
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            const currentPath = window.location.pathname;
        })
    })
</script>

<div class="mainContainer">
    <slot />
</div>

<style>
    .mainContainer {
        min-height: 100vh;
        background: linear-gradient(to right, #000428, #000046);
        color: white;
        position: relative;
        display: flex;
        flex-direction: column;
    }
</style>
