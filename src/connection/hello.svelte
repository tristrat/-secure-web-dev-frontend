<script>
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
    import {link} from 'svelte-spa-router'
    function redirectAddLocation(){
        navigate('/droitAdmin/addLocation')
    }
    function redirectEditLocation(){
        navigate('/droitAdmin/editLocation')
    }
    function redirectDeleteLocation(){
        navigate('/droitAdmin/deleteLocation')
    }
    let user;
    let locations=[];
    onMount(async () => {
        const response = await fetch("http://localhost:8000/locations'");
        let locations = await response.json();
    });

</script>

{#if !user}
    <h1>Vous devez vous enregistrer pour accéder à cette page</h1>
    <a href="/register" use:link>S'Enregistrer</a>
    <a href="/login" use:link>Se connecter</a>
{:else}
    {#if user.role === 'admin'}

        <h1>Bienvenue, admin</h1>
        <button on:click={redirectAddLocation}>Add a location</button>
        <button on:click={redirectEditLocation}>Edit a location</button>
        <button on:click={redirectDeleteLocation}>Delete a Location</button>
    {:else}
        <h1>Bienvenue, utilisateur</h1>
    {/if}
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Adresse</th>
            <th>Ville</th>
        </tr>
        </thead>
        <tbody>
        {#each locations as location}
            <tr>
                <td>{location.id}</td>
                <td>{location.address}</td>
                <td>{location.city}</td>
            </tr>
        {/each}
        </tbody>
    </table>

{/if}
