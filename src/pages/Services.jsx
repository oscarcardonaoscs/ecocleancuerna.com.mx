import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Services = () => {
  return (
    <Container className="mt-4">
      {/* Sección de "Servicios" */}
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <h2 className="text-primary-custom">Servicios en local </h2>
          <p>
            TODO EN UN MISMO LUGAR!!!
            <ul>
              <li>Tintorería</li>
              <li>Lavado de prendas de piel y gamuza</li>
              <li>Lavado de vestidos de novia</li>
              <li>Lavado de edredones y colchas</li>
              <li>Lavado rellenos de pluma</li>
              <li>Lavandería ropa general</li>
              <li>Planchado</li>
              <li>Compostura de ropa</li>
            </ul>
          </p>
          <p>
            Permítanos atenderle, puede comunicarse al teléfono que aparece en
            esta página o visitarnos personalmente. ¡Le aseguramos limpieza a
            conciencia en cada una de sus prendas! ¡Venga y descubra cómo le
            facilitamos el cuidado de su ropa!
          </p>
        </Col>
        <Col md={6} className="text-center">
          <Image
            src={process.env.PUBLIC_URL + "/assets/services.jpg"}
            alt="Lavadoras Ecoclean"
            fluid
            rounded
          />
        </Col>
      </Row>
      <Row className="align-items-center mb-4">
        <Col md={4} className="text-center">
          <Image
            src={process.env.PUBLIC_URL + "/assets/serv01.jpg"}
            alt="Lavadoras Ecoclean"
            fluid
            rounded
          />
        </Col>
        <Col md={4} className="text-center">
          <Image
            src={process.env.PUBLIC_URL + "/assets/serv02.jpg"}
            alt="Lavadoras Ecoclean"
            fluid
            rounded
          />
        </Col>
        <Col md={4} className="text-center">
          <Image
            src={process.env.PUBLIC_URL + "/assets/serv03.jpg"}
            alt="Lavadoras Ecoclean"
            fluid
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
