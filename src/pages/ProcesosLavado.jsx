import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const ProcesosLavado = () => {
  return (
    <Container className="my-5">
      {/* Título */}
      <Row>
        <Col className="text-center">
          <h2 className="text-primary-custom">Procesos de Lavado</h2>
        </Col>
      </Row>

      {/* Imagen grande */}
      <Row className="my-4">
        <Col>
          <Image
            src={process.env.PUBLIC_URL + "/assets/processes.jpg"}
            alt="Procesos de Lavado"
            fluid
            className="w-100 rounded"
          />
        </Col>
      </Row>

      {/* Párrafo descriptivo */}
      <Row>
        <Col>
          <p className="text-justify">
            Prevenir el deterioro prematuro de una prenda de vestir requiere
            respetar las indicaciones que el fabricante hace mediante etiquetas
            de lavado, cosidas en su interior. Los símbolos que aparecen en
            ellas indican las restricciones, por método y tipo, que se deben
            respetar para lavar la tela.
          </p>
          <p className="text-justify">
            Estos símbolos de lavado expresan lo que está permitido hacer con la
            prenda y lo que no está permitido, durante su proceso de limpieza.
            Pero lo cierto es que poco caso hacemos a la hora de lavar la ropa y
            luego vemos las consecuencias: el pantalón nuevo se arrugó, su
            camisa favorita se destiñó y su suéter se encogió.
          </p>
          <p className="text-justify">
            Por eso, te presentamos los símbolos que representan los ciclos de
            lavado en agua y en seco, más comunes.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProcesosLavado;
