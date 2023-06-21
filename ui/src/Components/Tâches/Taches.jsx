import React, { useEffect, useState } from "react";
import _ from "lodash";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
const pageSize = 4;
const Taches = () => {
  const [task, setTask] = useState([]);
  const [paginaed, setPaginated] = useState([]);
  const [currentPage, setCurrentPage] = useState();

  const tasks = [
    {
      id: "1",
      imgURL: "",
      NomClient: "amin",
      TypeTaches: "installation",
      TypeApp: "A",
      Sim: "0667374536",
      GPS: "secondaire",
      Status: "en cours",
    },
    {
      id: "2",
      imgURL: "",
      NomClient: "Zobir",
      TypeTaches: "configuration",
      TypeApp: "B",
      Sim: "0667374836",
      GPS: "primaire",
      Status: "terminé",
    },
    {
      id: "2",
      imgURL: "",
      NomClient: "Zobir",
      TypeTaches: "configuration",
      TypeApp: "B",
      Sim: "0667374836",
      GPS: "primaire",
      Status: "terminé",
    },
    {
      id: "2",
      imgURL: "",
      NomClient: "Zobir",
      TypeTaches: "configuration",
      TypeApp: "B",
      Sim: "0667374836",
      GPS: "primaire",
      Status: "terminé",
    },
    {
      id: "2",
      imgURL: "",
      NomClient: "Zobir",
      TypeTaches: "configuration",
      TypeApp: "B",
      Sim: "0667374836",
      GPS: "primaire",
      Status: "terminé",
    },
 

  ];
  useEffect(() => {
    setTask(tasks);
    setPaginated(_(tasks).slice(0).take(pageSize).value());
  }, []);
  const pageCount = task ? Math.ceil(task.length / pageSize): 0;
  // if (pageCount === 1) {
  //   return null;
  // }
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedTask = _(task).slice(startIndex).take(pageSize).value();
    setPaginated(paginatedTask);
  };
  return (
 
    <div style={{ backgroundColor:'white' , padding:'2rem' , marginTop:'1rem', borderRadius:'2rem'  }}>
      <MDBTable align="middle">
        <MDBTableHead >
          <tr>
            <th scope="col">Nom du client</th>
            <th scope="col">Type du taches</th>
            <th scope="col">Date</th>
            <th scope="col">Type App</th>
            <th scope="col">Sim</th>
            <th scope="col">Gps</th>
            <th scope="col">Affectée </th>
            <th scope="col">Status</th>
          </tr>
        </MDBTableHead>
        {paginaed.map((TASK) => (
          <MDBTableBody>
            <tr key={TASK.id}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{TASK.NomClient}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{TASK.TypeTaches}</p>
              </td>
              <td>
                <p className="fw-normal mb-1">{TASK.TypeTaches}</p>
              </td>
              <td>
                <MDBBadge color="success" pill>
                  {TASK.TypeApp}
                </MDBBadge>
              </td>
              <td>{TASK.Sim}</td>
              <td>{TASK.GPS}</td>
              <td>{TASK.GPS}</td>
              <td><button style={{ width:'80%' , borderRadius:'10px ', padding:'10px' }}>{TASK.Status}</button> </td>
            </tr>
          </MDBTableBody>
        ))}
      </MDBTable>
      <nav className="d-flex justify-content-end">
        <ul className="pagination">
          {pages.map((page) => (
            <div
              className={`${
                page === currentPage ? "page-item active" : "page-item"
              }`}
            >
              <p className="page-link" onClick={() => pagination(page)}>
                {page}
              </p>
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Taches;