import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

const feather = require('feather-icons');
setTimeout(() => {
    feather.replace();
}, 1000);

const gatos = [
    {
        name: "HP Victus",
        slug: 'laptop-1',
        description: "Descripcion Laptop 1",
        picture: 'https://www.efe.com.pe/media/catalog/product/1/5/15-fb0125la_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
    },
    {
        name: "Asus Tuf F15",
        slug: 'laptop-2',
        description: "Descripcion Laptop 2",
        picture: 'https://www.efe.com.pe/media/catalog/product/f/x/fx507zc4-hn002w_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
    },
    {
        name: "Lenovo Ideapad Gaming 3",
        slug: 'laptop-3',
        description: "Descripcion Laptop 3",
        picture: 'https://www.lacuracao.pe/media/catalog/product/8/2/82xv006elm_1_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
    },
];

const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return (
        <main>
            <Carousel
                indicators
                controls
                indicatorBg="#EBE5FA"
                nextIcon={<span className="carousel-control-next-icon" style={{ backgroundColor: '#7751DD' }} aria-hidden="true" />}
                prevIcon={<span className="carousel-control-prev-icon" style={{ backgroundColor: '#7751DD' }} aria-hidden="true" />}
            >
                {gatos.map((it, index) => (
                    <Carousel.Item key={index} onClick={() => handleClick(it.slug)}>
                        <img className='w-100 dark-image' src={it.picture} alt={it.name} />
                        <Carousel.Caption style={{ color: '#000000' }}>
                            <h3>{it.name}</h3>
                            <p>{it.description}</p>
                            <button className="btn btn-primary">Ver detalle</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <p>¡Bienvenido a nuestra tienda de laptops, tu destino definitivo para encontrar la compañera perfecta para tu vida digital! En nuestra tienda, nos enorgullece ofrecerte una amplia selección de las últimas y más innovadoras laptops de las principales marcas del mercado.

                Desde la potencia de procesamiento hasta la portabilidad y el diseño elegante, nuestras laptops están diseñadas para satisfacer las necesidades de todos, desde estudiantes y profesionales hasta entusiastas de la tecnología. Ya sea que necesites una laptop para tareas diarias, trabajo creativo o juegos intensos, tenemos algo para ti.</p>
            </div>
        </main>
    );
}

export default Main;