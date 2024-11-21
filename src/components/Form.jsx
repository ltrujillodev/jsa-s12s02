import React, { useState } from "react";
import "../components/css/Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    opcionSeleccionada: "",
    preferencias: {
      musica: false,
      deportes: false,
      tecnologia: false,
    },
    genero: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        preferencias: {
          ...formData.preferencias,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, opcionSeleccionada, preferencias, genero } = formData;

    // Crear un mensaje para mostrar en la alerta
    const mensaje = `
      Nombre: ${nombre}
      Opción seleccionada: ${opcionSeleccionada}
      Preferencias: 
        - Música: ${preferencias.musica ? "Sí" : "No"}
        - Deportes: ${preferencias.deportes ? "Sí" : "No"}
        - Tecnología: ${preferencias.tecnologia ? "Sí" : "No"}
      Género: ${genero || "No especificado"}
    `;

    alert(mensaje);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Formulario Interactivo</h1>
      <form onSubmit={handleSubmit} className="form">
        {/* Input de texto */}
        <div className="form-group">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Escribe tu nombre"
            className="form-input"
            required
          />
        </div>

        {/* Select */}
        <div className="form-group">
          <label className="form-label">Selecciona una opción:</label>
          <select
            name="opcionSeleccionada"
            value={formData.opcionSeleccionada}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">--Seleccionar--</option>
            <option value="Opción 1">Opción 1</option>
            <option value="Opción 2">Opción 2</option>
            <option value="Opción 3">Opción 3</option>
          </select>
        </div>

        {/* Checkboxes */}
        <div className="form-group">
          <label className="form-label">Selecciona tus preferencias:</label>
          <div>
            <label className="form-checkbox-label">
              <input
                type="checkbox"
                name="musica"
                checked={formData.preferencias.musica}
                onChange={handleChange}
                className="form-checkbox"
              />
              Música
            </label>
            <label className="form-checkbox-label">
              <input
                type="checkbox"
                name="deportes"
                checked={formData.preferencias.deportes}
                onChange={handleChange}
                className="form-checkbox"
              />
              Deportes
            </label>
            <label className="form-checkbox-label">
              <input
                type="checkbox"
                name="tecnologia"
                checked={formData.preferencias.tecnologia}
                onChange={handleChange}
                className="form-checkbox"
              />
              Tecnología
            </label>
          </div>
        </div>

        {/* Radio Buttons */}
        <div className="form-group">
          <label className="form-label">Género:</label>
          <div>
            <label className="form-radio-label">
              <input
                type="radio"
                name="genero"
                value="Masculino"
                onChange={handleChange}
                className="form-radio"
              />
              Masculino
            </label>
            <label className="form-radio-label">
              <input
                type="radio"
                name="genero"
                value="Femenino"
                onChange={handleChange}
                className="form-radio"
              />
              Femenino
            </label>
            <label className="form-radio-label">
              <input
                type="radio"
                name="genero"
                value="Otro"
                onChange={handleChange}
                className="form-radio"
              />
              Otro
            </label>
          </div>
        </div>

        {/* Botón de envío */}
        <button type="submit" className="form-button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
