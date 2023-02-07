import Home from './connection/hello.svelte';
import Register from './connection/register.svelte';
import Login from './connection/login.svelte';
import Add from './droitAdmin/addLocation.svelte';
import Edit from './droitAdmin/editLocation.svelte';
import Delete from './droitAdmin/deleteLocation.svelte';


const routes = {
    "/" : Home,
    "/register" : Register,
    "/login" : Login,
    "/delete": Delete,
    "/add": Add,
    "/edit": Edit
};

export default routes
