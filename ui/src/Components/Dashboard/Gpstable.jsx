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
const GpsTable = () => {
  const [task, setTask] = useState([]);
  const [paginaed, setPaginated] = useState([]);
  const [currentPage, setCurrentPage] = useState();

  const tasks = [
    {
        id: "1",
        Nombre: "32",
        Modéle: "A",
        Type: "B",
  
    },
    {
        id: "2",
        Nombre: "2",
        Modéle: "A",
        Type: "B",
  
    },
    {
        id: "3",
        Nombre: "23",
        Modéle: "A",
        Type: "B",
  
    },
    {
        id: "4",
        Nombre: "23",
        Modéle: "A",
        Type: "B",
  
    },
    {
      id: "5",
      Nombre: "10",
      Modéle: "A",
      Type: "B",

    },
 
 
  ];
  useEffect(() => {
    setTask(tasks);
    setPaginated(_(tasks).slice(0).take(pageSize).value());
  }, []);
  const pageCount = task ? Math.ceil(task.length / pageSize) : 0;
  if (pageCount === 1) {
    return null;
  }
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedTask = _(task).slice(startIndex).take(pageSize).value();
    setPaginated(paginatedTask);
  };
  return (
 
    <div style={{ backgroundColor:'white' , padding:'2rem 2rem 0.2rem 2rem' , minWidth:'' , borderRadius:'2rem'  }}>
        <p>Nombre de gps installée est : 122</p>
      <MDBTable align="middle">
        <MDBTableHead style={{  border:'30px' }} >
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Modéle</th>
            <th scope="col">Type</th>
     
          </tr>
        </MDBTableHead>
        {paginaed.map((TASK) => (
          <MDBTableBody>
            <tr key={TASK.id}>
              <td>
                <div className="d-flex align-items-center">
              
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{TASK.Nombre}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{TASK.Modéle}</p>
              </td>
              <td>
              <p className="fw-normal mb-1">{TASK.Type}</p>
              </td>
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

export default GpsTable;