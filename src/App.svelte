<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import { calculateNumbers } from './lib/Calculate';
  let strInput = ''
  let calculation = ''

  const strCalc = () => {
    let [left, operand, right] = strInput.split(" ")
    
    calculation = String(calculateNumbers(Number(left), operand, Number(right)))
  }
</script>

<main>
  <input placeholder="Enter calculation" bind:value={strInput} />
  <button on:click={strCalc}>Calculate</button>
  <p>Your result: {calculation}</p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>