import LP from './data/laptops.json'


const Single = () => {

const currentRoute = window.location.pathname;
const laptop = LP.find(it => currentRoute.includes(it.slug))


return (<>
<h1>{laptop.name}</h1>
<img src={laptop.picture}></img>
<p>{laptop.description}</p>

</>);
}

export default Single;