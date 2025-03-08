import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Tips = () => {
  return (
    <Container className="my-5">
      {/* Imagen grande */}
      <Row>
        <Col>
          <Image
            src={process.env.PUBLIC_URL + "/assets/washing_tips.jpg"}
            alt="Consejos de Lavado"
            fluid
            className="w-100 rounded"
          />
        </Col>
      </Row>

      {/* Párrafo introductorio */}
      <Row className="my-4">
        <Col>
          <p className="text-justify">
            La mayoría de los problemas del lavado de ropa, las telas dañadas,
            la falta de eliminación de manchas y los residuos de pelusa y mugre
            provienen de la mala limpieza. Con estos sencillos consejos,
            queremos ofrecerte información para mejorar el cuidado y lavado de
            tus prendas:
          </p>
        </Col>
      </Row>

      {/* Título Recomendaciones ocupando toda la fila */}
      <Row className="mb-3">
        <Col>
          <h2 className="text-primary-custom">Recomendaciones</h2>
        </Col>
      </Row>

      {/* Lista de recomendaciones en dos columnas */}
      <Row>
        <Col md={6}>
          <ul>
            <li>
              Divide la ropa según el color, la hechura, el tipo de tela, la
              textura de la superficie y la cantidad de suciedad.
            </li>
            <li>Identifica las manchas y trátalas según su origen.</li>
            <li>
              Mide la cantidad que se recomienda en el envase del lavado de
              ropa.
            </li>
            <li>
              Verifica que en las bolsas de las prendas no se encuentran objetos
              o pertenencias olvidadas.
            </li>
            <li>No sobrecargues la lavadora o secadora.</li>
            <li>
              Escoge la temperatura para lavar que se recomienda en la etiqueta
              de instrucciones de la prenda de vestir.
            </li>
            <li>Utiliza el ciclo correcto para lavar y secar según la tela.</li>
          </ul>
        </Col>

        <Col md={6}>
          <ul>
            <li>
              No usar blanqueador de cloro en prendas de vestir de seda, lana,
              spandex ni en prendas que se destiñen.
            </li>
            <li>
              Saca la ropa inmediatamente de la secadora y no seques la ropa más
              de lo debido.
            </li>
            <li>
              Limpia con regularidad todos los filtros de la lavadora y
              secadora.
            </li>
            <li>
              No guardes ropa sucia de una temporada a otra para evitar manchas
              imposibles de quitar.
            </li>
            <li>
              No dejes la ropa fuera de temporada en un lugar donde le pueda dar
              la luz directa, podría decolorarse.
            </li>
            <li>
              No guardes tu ropa en lugares húmedos como sótanos o desvanes, ni
              las dejes en bolsas de plástico.
            </li>
            <li>
              Cuando lleves tu ropa a la tintorería o lavandería, indica siempre
              las manchas que lleva y su origen.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Tips;
