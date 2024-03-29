import React, { useEffect, useState } from "react";
import EmployeesInfos from "../employeesInfos/EmployeesInfos";
import ModalContent from "../modalContent/ModalContent";
import { Link } from "react-router-dom";
import { useData } from "../../context/UserDataContext";
import { Form, Formik } from "formik";
import CustomInput from "../customInputs/CustomInputs";
import { newEmployeeSchema } from "../../schemas";
import CustomSelect from "../customSelect/CustomSelect";

export default function CreateEmployee() {
  const { addEmployee } = useData();
  const [cities, setCities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [update, setUpdate] = useState(0);
  const [message, setMessage] = useState("");
  const handleSubmit = async (values, actions) => {
    try {
      const employee = {
        firstName: values.firstname,
        lastName: values.lastname,
        dateOfStart: values.dateOfBegining,
        department: values.département,
        birthdate: values.birthdate,
        street: values.street,
        city: values.city,
        town: values.town,
        zipcode: values.zipcode,
      };

      await addEmployee(employee);
      const message = `Employé ${values.firstname} ${values.lastname} ajouté avec succès !`;
      setUpdate(update + 1);
      setShowModal(true);
      actions.resetForm();
      setMessage(message);
    } catch (error) {
      console.error(error);
    }
  };
const handleCloseModal = () => {
  setShowModal(false);
};
  useEffect(() => {
    const response = [
      { nom: "Paris" },
      { nom: "Marseille" },
      { nom: "Lyon" },
      { nom: "Toulouse" },
    ];
    setCities(response);
  }, []);

  return (
    <>
      <div className="globalState">
        <h1 className="create-employee">Ajouter un profil employé</h1>
        <div>
          <Formik
            initialValues={{
              firstname: "",
              département: "",
              birthdate: "",
              dateOfBegining: "",
              street: "",
              city: "",
              town: "",
              zipcode: "",
            }}
            validationSchema={newEmployeeSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="global-form">
                  <div className="formstyle">
                    <h3>Profil</h3>
                    <CustomInput
                      label="Prénom"
                      name="firstname"
                      type="text"
                      placeholder="Veuillez indiquer votre prénom"
                    />
                    <CustomInput
                      label="Nom"
                      name="lastname"
                      type="text"
                      placeholder="Veuillez indiquer votre nom"
                    />
                    <CustomInput
                      label="Date de naissance"
                      name="birthdate"
                      type="date"
                      min={`${new Date().getFullYear() - 60}-01-01`}
                      max={`${new Date().getFullYear() - 18}-12-31`}
                      placeholder="Veuillez choisir votre date de naissance"
                    />
                    <CustomInput
                      label="Date de début"
                      name="dateOfBegining"
                      type="date"
                      min={`${new Date().getFullYear() - 10}-01-01`}
                      max={`${new Date().getFullYear() + 1}-12-31`}
                      placeholder="Veuillez choisir votre date de début"
                    />
                    <CustomSelect
                      label="Département"
                      name="département"
                      placeholder="Veuillez choisir votre métier"
                    >
                      <option value="">Veuillez choisir votre métier</option>
                      <option value="Ventes">Ventes</option>
                      <option value="Commercial">Commercial</option>
                      <option value="RH">RH</option>
                      <option value="Juridique">Juridique</option>
                    </CustomSelect>
                  </div>
                  <div className="formstyle">
                    <h3>Adresse</h3>
                    <CustomInput
                      label="Rue"
                      name="street"
                      type="text"
                      placeholder="Veuillez indiquer votre rue"
                    />
                    <CustomInput
                      label="Ville"
                      name="city"
                      type="text"
                      placeholder="Veuillez indiquer votre ville"
                    />
                    <CustomSelect
                      label="Commune"
                      name="town"
                      placeholder="Veuillez choisir votre commune"
                    >
                      <option value="">Veuillez choisir votre commune</option>
                      {cities.map((city) => (
                                              <option key={city.nom} value={city.nom}>
                                              {city.nom}
                                            </option>
                                          ))}
                                        </CustomSelect>
                                        <CustomInput
                                          label="Code Postal"
                                          name="zipcode"
                                          type="number"
                                          placeholder="Veuillez indiquer votre code postal"
                                        />
                                      </div>
                                    </div>
                                    <div className="btn-container">
                                      <button className="sub-btn" type="submit">
                                        Submit
                                      </button>
                                    </div>
                                  </Form>
                                )}
                              </Formik>
                            </div>
                      
                            <div className="button-container">
                              <ModalContent
                                showModal={showModal}
                                onClose={handleCloseModal}
                                message={message}
                              />
                            </div>
                          </div>
                      
                          <EmployeesInfos updateList={update} />
                          <Link to="/employee-list">
                            <h3 className="create-employee">Liste complète des employés</h3>
                          </Link>
                        </>
                      );
                      }