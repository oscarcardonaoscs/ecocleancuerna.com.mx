import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = () => {
  // Estado para los datos del formulario y mensajes de error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para validar los campos del formulario
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validación de campos obligatorios
    if (!formData.name) {
      newErrors.name = "El nombre es obligatorio.";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "El correo es obligatorio.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Por favor, ingresa un correo válido.";
      isValid = false;
    }

    // Validación de teléfono (debe tener exactamente 10 dígitos numéricos)
    if (!formData.phone) {
      newErrors.phone = "El teléfono es obligatorio.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "El teléfono debe contener 10 dígitos numéricos.";
      isValid = false;
    }

    if (!formData.message) {
      newErrors.message = "El mensaje es obligatorio.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el formulario antes de enviarlo
    if (!validateForm()) {
      return;
    }

    // Enviar los datos a EmailJS
    emailjs
      .send(
        "service_2cc4tbj", // Service ID
        "template_xzou3q8", // Template ID
        formData, // Datos del formulario
        "D6C0fXh294VYUNn_l" // User ID
      )
      .then(
        (response) => {
          console.log("Correo enviado", response);
          alert("¡Mensaje enviado con éxito!");
        },
        (error) => {
          console.error("Error al enviar correo", error);
          alert("Ocurrió un error al enviar el mensaje.");
        }
      );

    // Limpiar el formulario después de enviarlo
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Container className="my-5">
      <Row className="align-items-start">
        {/* Sección de Contacto */}
        <Col md={8}>
          <h2 className="text-primary-custom">Contacto</h2>
          <p>
            Estamos ubicados en <strong>PLAZA TAMAYO</strong>, calle Rufino
            Tamayo #52 local 10, Colonia Acapantzingo en Cuernavaca, Morelos.
          </p>
          <h4>Horario:</h4>
          <p>
            <strong>Lunes a Viernes:</strong> 8:00 a 18:00 Hrs. <br />
            <strong>Sábado:</strong> 9:00 a 16:00 Hrs.
          </p>
          <p>
            Permítanos atenderle, puede comunicarse al teléfono que aparece en
            esta página o visitarnos personalmente. ¡Le aseguramos limpieza a
            conciencia en cada una de sus prendas! ¡Venga y descubra cómo le
            facilitamos el cuidado de su ropa!
          </p>
        </Col>

        {/* Formulario de contacto */}
        <Col md={4}>
          <h2 className="text-primary-custom">Envíanos tus comentarios</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control
                type="text"
                placeholder="Nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Control
                type="tel"
                placeholder="Teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Mensaje"
                name="message"
                value={formData.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 bg-custom text-white"
            >
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Mapa de ubicación */}
      <Row className="mt-4">
        <Col>
          <h3>Ubicación</h3>
          <div className="ratio ratio-16x9">
            <iframe
              title="Ubicación Ecoclean Cuerna"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.476435367497!2d-99.22731462575258!3d18.91029435715558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddf078b99b76b%3A0x52bfc5a08c61502d!2sTintoreria%20y%20Lavanderia%20ECOCLEAN!5e0!3m2!1sen!2sus!4v1741466422147!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
