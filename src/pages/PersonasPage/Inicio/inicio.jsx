import { useState } from 'react';
import { ArrowLeft, Check } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import { serviceCreatePerson } from '../../../services/personas/personas';

export const AddPersona = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nroDocumento: '',
    nombre1: '',
    nombre2: '',
    nombre3: '',
    apellido1: '',
    apellido2: '',
    apellido3: '',
    fechaNacimiento: '',
    sexo: '',
    tipoDocumento: 1,
    tipoPersona: 1,
    estadoCivil: 1,
    ciudad: 1,
    nacionalidad: 1,
  });

  const handleFormChange = (e) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await serviceCreatePerson(form);
      navigate('/personas');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <></>
  );
}
