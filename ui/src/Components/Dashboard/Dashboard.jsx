import React from 'react'
import Cards from './Cards'
import Form from 'react-bootstrap/Form';
import AppCards from './AppCards';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GpsTable from './Gpstable';
import Taches from '../Tâches/Taches';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Filler,
  plugins,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  plugins,
  Title,
  Filler
);

const labelArray = ["fev1", "fev2", "fev3","fev4","fev5","fev6","fev7",],
  Technician1 = [55, 82, 32,55, 82, 32,42],
  Technician2 = [27, 30, 53,55, 82, 32,30];

const data = {
  labels: labelArray,
  datasets: [
    {
      label: "Technician 1",
      data: Technician1,
      backgroundColor: "#00DEA3",
   
    },
    {
      label: "Technician 2 ",
      data: Technician2,
      backgroundColor: "#16294D",
 
    },

  ],
}
const options = {
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  plugins: {
    datalabels: {
      color: "white",
      font: {
        weight: "bold",
      },
      formatter: function (value, context) {
        return Math.round(value) + "%";
      },
    },
  },
};

export default function Dashboard() {
  return (
    <div>
       <div className='dashcontainer'>
       <Row className="mb-5">
       <Form.Group as={Col} md="5" controlId="validationCustom04">
          <Form.Select aria-label="Default select example">
             <option disabled>Veuillez choisir un profil</option>
      <option value="1">Technicien</option>
      <option value="2">Support technique</option>
    </Form.Select>       
        </Form.Group>

        <Form.Group as={Col} md="5" controlId="validationCustom04">
          <Form.Select aria-label="Default select example">
             <option disabled>Veuillez choisir la période</option>
      <option value="1">Jour </option>
      <option value="2">Semaine</option>
      <option value="3">Mois</option>
    </Form.Select>     
      
        </Form.Group>   
        <Form.Group as={Col} md="2" controlId="validationCustom04">
        <Button variant="primary" >
            Valider
          </Button>     
      
        </Form.Group>   

     
      </Row>
     
        </div>
        <h4>Statistiques des tâches </h4>
       
        <br />
              <Cards/>
        <br /> <br /> 

        <h4>Statistiques des appareils</h4>

         <br /> 
         <AppCards/> 

        <div className='chart-dash'>

              <div className='chart' >
              <div style={{ width: "38rem", height:"20rem" }}>
              
                    <Bar data={data} options={options} />
              
               </div>
              </div>

              <div style={{ marginTop:'2rem' , minWidth:'20rem' }} >

            
              <GpsTable/>


              </div>
        </div>

        <Taches/>
    </div>
  )
}
