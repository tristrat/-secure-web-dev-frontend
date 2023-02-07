<script>
  import {navigate} from "svelte-routing";
  let email = "";
  let password = "";
  function handleSubmit() {
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  }

</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} required />
  <label for="password">Password:</label>
  <input type="password" id="password" bind:value={password} required />
  <button type="submit" on:click={() => navigate('/')}>Se connecter</button>
  <button on:click={() => navigate('/#/register')}>créé un compte</button>
</form>


