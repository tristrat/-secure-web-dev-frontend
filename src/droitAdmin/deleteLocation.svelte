<script>
    let locationId = ''; // location id to be deleted

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await fetch('http://localhost:8000/locations', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    locationId: 123
                })
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    // Use the data returned from the function here
                })
                .catch(error => {
                    console.error(error);
                });
            alert('Location supprimée avec succès');
        } catch (error) {
            console.error(error);
            alert('Une erreur est survenue lors de la suppression de la location');
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label>
        Location Id :
        <input type="text" bind:value={locationId}/>
    </label>
    <button type="submit">Supprimer</button>
</form>
