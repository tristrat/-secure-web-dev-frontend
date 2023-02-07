<script>
    import {navigate} from "svelte-routing";

    let name, email, password;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await response.json();
            console.log(data);
            /*il faut enregistrer la data dans la base de donnée */
        } catch (error) {
            console.error(error);
        }
    };
</script>

<form on:submit={handleSubmit}>
    <input type="text" bind:value={name} placeholder="Nom" />
    <input type="email" bind:value={email} placeholder="Adresse email" />
    <input type="password" bind:value={password} placeholder="Mot de passe" />
    <button type="submit" on:click={() => navigate('/#/login')}>j'ai deja un compte</button>
    <button on:click={() => navigate('/')}>S'enregistrer</button>
</form>
