import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="mt-4">
      {/* Sección de "Quiénes Somos" */}
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="text-primary">¿Quiénes Somos?</h1>
          <p>
            Ecoclean, es una microempresa cuernavaquense establecida en el año
            2008, especializada en el cuidado y mantenimiento de tu ropa.
            Nuestras instalaciones están preparadas para limpiar, planchar y
            mantener las prendas. Podemos encargarnos también de composturas de
            ropa.
          </p>
          <p>
            Seguimos un esmerado proceso de selección de las prendas por colores
            y tejidos. Con nuestro proceso de limpieza garantizamos un
            tratamiento bactericida, el cual se realiza con detergentes
            especiales, que aseguran una higiene total, además de, una limpieza
            sana, porque en todo momento cuidamos el medio ambiente al utilizar
            productos desmanchantes y biodegradables.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <Image
            src={process.env.PUBLIC_URL + "/assets/lavadoras.jpg"}
            alt="Lavadoras Ecoclean"
            fluid
            rounded
          />
        </Col>
      </Row>

      {/* Sección de Misión y Valores */}
      <Row className="mt-5">
        <Col md={6}>
          <Image
            src={process.env.PUBLIC_URL + "/assets/local.jpg"}
            alt="Lavadoras Ecoclean"
            fluid
            rounded
          />
        </Col>
        <Col md={6}>
          <h2 className="text-primary-custom">Misión</h2>
          <p>
            Ofrecer un servicio innovador con calidad y puntualidad en nuestros
            procesos, para satisfacer a nuestros clientes en la necesidad de
            ropa limpia.
          </p>
          <h2 className="text-primary-custom">Valores</h2>
          <ul>
            <li>
              <strong>Ecología,</strong> siempre pendientes de usar equipos con
              el menor margen de deterioro al medio ambiente.
            </li>
            <li>
              <strong>Integridad,</strong> comprometidos a dar la respuesta más
              honesta a las necesidades de nuestros clientes.
            </li>
            <li>
              <strong>Responsabilidad,</strong> emitiendo soluciones en cada una
              de las áreas en tiempo y forma.
            </li>
            <li>
              <strong>Servicio,</strong> siempre en la asistencia de nuestros
              clientes.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
