import type { Empleado } from "./Empleado";

export interface EmpleadoListProps {
  empleados: Empleado[];
  loading: boolean;
}