import { Link } from "react-router-dom";
import EmployeeTable from "../employeeTable/EmployeeTable";

export default function EmployeeList() {
  return (
    <>
      <EmployeeTable />
      <Link to="/"> {/* Rediriger vers la page de création d'un nouvel employé */}
        <div className="add-worker">
          {" "}
          <h2>Ajout d'un nouvel employé</h2>
        </div>
      </Link>
    </>
  );
}
