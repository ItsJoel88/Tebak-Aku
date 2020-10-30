<script>
    import Card from "./components/Card.svelte";
    import { cards, fnCards } from "./store/cards.js";
    import { afterUpdate } from "svelte";

    afterUpdate(() => {
        if(fnCards.checkState()) {
            setTimeout(() => {
                fnCards.resetCards()
            }, 1500);
        }
    })
</script>

<style>
    
</style>

<!-- <button on:click={e => fnCards.resetCards()}>Reset</button> -->
<div class="scene__container">
    {#each Object.keys($cards) as key}
        <Card key={key} bind:data={$cards[key]} />
    {/each}
</div>