import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import type { FormData } from "../types/FormData";
import type { Empleado } from "../types/Empleado";

const useEmpleado = () => {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    dni: '',
    direccion: '',
    email: ''
  });

  const API_URL = 'https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado';

  const successAlert = (mensaje: string) => {
    Swal.fire({
      title: mensaje,
      icon: 'success'
    });
  };

  const errorAlert = (mensaje: string) => {
    Swal.fire({
      title: mensaje,
      icon: 'error'
    });
  };
 
  const fetchEmpleados = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Empleado[]>(API_URL);
      setEmpleados(response.data);
    } catch (err) {
      errorAlert('Error al cargar los empleados');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmpleados();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validarEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarDNI = (dni: string): boolean => {
    const regex = /^[0-9]+$/;
    return regex.test(dni);
  };

  const validarNombre = (nombre: string): boolean => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(nombre);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.dni || !formData.direccion || !formData.email) {
      errorAlert('Todos los campos son obligatorios');
      return;
    }

    if (!validarNombre(formData.nombre)) {
      errorAlert('El nombre solo debe contener letras');
      return;
    }

    if (!validarDNI(formData.dni)) {
      errorAlert('El DNI solo debe contener numeros');
      return;
    }

    if (!validarEmail(formData.email)) {
      errorAlert('El formato del email no es valido');
      return;
    }

    setLoading(true);
    try {
      await axios.post(API_URL, formData);
      
      successAlert('Empleado agregado exitosamente');
      
      setFormData({
        nombre: '',
        dni: '',
        direccion: '',
        email: ''
      });
      
      await fetchEmpleados();
    } catch (error) {
      errorAlert('Error al guardar el empleado, verifique los datos.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    empleados,
    formData,
    loading,
    handleInputChange,
    handleSubmit
  };
};

export default useEmpleado;