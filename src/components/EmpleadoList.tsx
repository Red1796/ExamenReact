import type { EmpleadoListProps } from "../types/EmpleadoListProps";

const EmpleadoList = ({ empleados, loading }: EmpleadoListProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Lista de Empleados
      </h2>
      
      {loading && <div className="text-center text-gray-500 mb-4">Cargando empleados...</div>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {empleados.map(empleado => (
          <div key={empleado.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{empleado.nombre}</h3>
            <p className="text-sm text-gray-600 mb-1"><strong>DNI:</strong> {empleado.dni}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Dirección:</strong> {empleado.direccion}</p>
            <p className="text-sm text-gray-600"><strong>Email:</strong> {empleado.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmpleadoList;