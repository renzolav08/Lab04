import LP from './data/laptops.json'

const Single = () => {
  const currentRoute = window.location.pathname;
  const laptop = LP.find(it => currentRoute.includes(it.slug))

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{laptop.name}</h1>
      <hr></hr>
      <img src={laptop.picture} alt={laptop.name}></img>
      <p>{laptop.description}</p>
    </div>
  );
}

export default Single;
