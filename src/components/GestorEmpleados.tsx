import useEmpleado from "../hooks/useEmpleado";
import EmpleadoForm from "./EmpleadoForm";
import EmpleadoList from "./EmpleadoList";

const GestorEmpleados = () => {
  const { empleados, formData, loading, handleInputChange, handleSubmit } = useEmpleado();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">
          Gestión de Empleados
        </h1>
        
        <EmpleadoForm 
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        
        <EmpleadoList 
          empleados={empleados}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default GestorEmpleados;