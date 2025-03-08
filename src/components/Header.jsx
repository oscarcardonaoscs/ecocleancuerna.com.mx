import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <header className="bg-primary text-white py-3">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo para pantallas grandes */}
        <img
          src="/assets/logo_EcoCleanCuerna.png"
          alt="Ecoclean Cuerna"
          className="d-none d-md-block"
          height="80"
        />
        {/* Logo para móviles */}
        <img
          src="/assets/logo_EcoCleanCuerna.png"
          alt="Ecoclean Cuerna"
          className="d-md-none d-block"
          height="50"
        />
        <div className="text-end">
          <p className="mb-1">ecocleancuerna@gmail.com</p>
          <p className="mb-1">Tel: (777) 312 23 54</p>
          <a
            href="https://wa.me/7772245849"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <i className="fab fa-whatsapp"></i> 777 224 5849
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Header;
