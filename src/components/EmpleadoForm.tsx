import type { EmpleadoFormProps } from "../types/EmpleadoFormProps";

const EmpleadoForm = ({ formData, handleInputChange, handleSubmit, loading }: EmpleadoFormProps) => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Agregar Nuevo Empleado
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Nombre</label>
          <input 
            type="text" 
            name="nombre" 
            value={formData.nombre}
            onChange={handleInputChange} 
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">DNI</label>
          <input 
            type="text" 
            name="dni" 
            value={formData.dni}
            onChange={handleInputChange} 
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Dirección</label>
          <input 
            type="text" 
            name="direccion" 
            value={formData.direccion}
            onChange={handleInputChange} 
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleInputChange} 
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>

        <div className="flex justify-center">
          <button 
            type="submit" 
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300" 
            disabled={loading}
          >
            {loading ? 'Guardando' : 'Guardar Empleado'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmpleadoForm;