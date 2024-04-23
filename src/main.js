import Carousel from 'react-bootstrap/Carousel';
function UncontrolledExample() {
  return (<>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://concepto.de/wp-content/uploads/2018/09/pagina-web1-e1537371844166.jpg"
          alt="First slide"
        ></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://a2colores.es/wp-content/uploads/2020/02/cabecera-ventales-web-wordpress-800x400-1.jpg"
          alt="Second slide"
        ></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.comunicare.es/wp-content/uploads/2021/08/web-2.0-e1534779139902.jpg"
          alt="Third slide"
        ></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et est justo. Nam volutpat felis vel gravida dignissim. Morbi sed commodo mauris, nec venenatis tellus. Proin viverra nisl orci. Duis quis massa tristique massa lobortis interdum. Aliquam erat volutpat. Nullam pharetra blandit tellus in dictum. Nam ex ipsum, venenatis et risus id, pretium sollicitudin felis. Nunc sem libero, dictum at leo vel, placerat maximus urna. Pellentesque semper velit nibh, eu dictum est faucibus ac. Fusce volutpat sapien elit, vel sagittis nisi mollis eget. Fusce aliquet arcu id dolor hendrerit pulvinar.</p>
    <p>Sed vel iaculis quam. Fusce sollicitudin vehicula vehicula. Pellentesque commodo est semper, dapibus turpis eget, congue quam. Praesent et posuere nisi, ut eleifend ante. In vel tincidunt lacus, vel sodales enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in justo leo. Vivamus sed felis ac purus congue maximus. Ut ut pellentesque lacus. Ut mattis ipsum eros, at euismod nibh viverra vel. Nam placerat sed nunc sed ultricies. Curabitur in justo venenatis, vulputate tellus et, fringilla quam.</p>
    </>
  );
}
export default UncontrolledExample;