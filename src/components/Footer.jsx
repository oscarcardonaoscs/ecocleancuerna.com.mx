import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-3 mt-4">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Texto de derechos reservados alineado a la izquierda */}
        <p>
          &copy; {new Date().getFullYear()} Derechos reservados Ecocleancuerna
        </p>
        {/* Icono de Facebook alineado a la derecha */}
        <a
          href="https://www.facebook.com/ecocleancuerna"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <i className="fab fa-facebook fa-2x"></i>
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
