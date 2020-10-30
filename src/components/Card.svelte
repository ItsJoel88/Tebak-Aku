<script>
    export let key;
    export let data;
    import { fnCards } from '../store/cards.js'

    function handleClick() {
       data.flipped = !data.flipped
       data.clickable = false
       setTimeout(() => {
           fnCards.updateCards(key)
       }, 1000);
    }
</script>

<style>

</style>

<div class="scene scene__card">
    <div class={'card' + ` ${data.flipped && 'is-flipped'}`} on:click={data.clickable ? handleClick : null}>
        <div class="card__face card__face--front">{key}</div>
        <div class="card__face card__face--back">{data.code}</div>
    </div>
</div>