<script>

    let locationId = ''; // location id to be updated
    let filmType = '';
    let filmProducerName = '';
    let endDate = '';
    let filmName = '';
    let district = '';
    let geolocation = {
        coordinates: [],
        type: ''
    };
    let sourceLocationId = '';
    let filmDirectorName = '';
    let address = '';
    let startDate = '';
    let year = '';

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await fetch(process.env.BACKEND_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                     locationId, filmType, filmProducerName, endDate, filmName,
                    district, geolocation, sourceLocationId, filmDirectorName,
                    address, startDate, year
                })
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);

                })
                .catch(error => {
                    console.error(error);
                });

            alert('Location modifiée avec succès');
        } catch (error) {
            console.error(error);
            alert('Une erreur est survenue lors de la modification de la location');
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label>
        Location Id :
        <input type="text" bind:value={locationId}/>
    </label>
    <label>
        Film Type :
        <input type="text" bind:value={filmType}/>
    </label>
    <label>
        Film Producer Name :
        <input type="text" bind:value={filmProducerName}/>
    </label>
    <label>
        End Date :
        <input type="date" bind:value={endDate}/>
    </label>
    <label>
        Film Name :
        <input type="text" bind:value={filmName}/>
    </label>
    <label>
        District :
        <input type="text" bind:value={district}/>
    </label>
    <label>
        Geolocation :
        <input type="text" bind:value={geolocation.coordinates} placeholder="latitude, longitude"/>
        <input type="text" bind:value={geolocation.type} placeholder="type"/>
    </label>
    <label>
        Source Location Id :
        <input type="text" bind:value={sourceLocationId}/>
    </label>
    <label>
        Film Director Name :
        <input type="text" bind:value={filmDirectorName}/>
    </label>
    <label>
        Address :
        <input type="text" bind:value={address}/>
    </label>
    <label>
        Start Date :
        <input type="date" bind:value={startDate}/>
    </label>
    <label>
        Year :
        <input type="text" bind:value={year}/>
    </label>
    <button type="submit">Modifier</button>
</form>
