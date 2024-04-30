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
        description: "Descripcion Pagina 1",
        picture: 'https://www.efe.com.pe/media/catalog/product/1/5/15-fb0125la_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
    },
    {
        name: "Asus Tuf F15",
        slug: 'laptop-2',
        description: "Descripcion Pagina 2",
        picture: 'https://www.efe.com.pe/media/catalog/product/f/x/fx507zc4-hn002w_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
    },
    {
        name: "Lenovo Ideapad Gaming 3",
        slug: 'laptop-3',
        description: "Descripcion Pagina 3",
        picture: 'https://www.lacuracao.pe/media/catalog/product/8/2/82xv006elm_1_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
    },
];

const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return <main>
        <Carousel>
            {
                gatos.map(it => {
                    return (<Carousel.Item onClick={(e) => {
                        e.preventDefault(); handleClick(it.slug)
                    }}>
                        <img className='w-100 dark-image' src={it.picture}></img>
                        <Carousel.Caption>
                            <h3>{it.name}</h3>
                            <p>{it.description}</p>
                            <button className="btn btn-primary" >Ver detalle</button>
                        </Carousel.Caption>
                    </Carousel.Item>);
                })
            }
        </Carousel>
    </main >;
}

export default Main;