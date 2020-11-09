import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  const [currentCampo, setCurrentCampo] = useState(0);
  const [currentContrato, setCurrentContrato] = useState(0);
  const [currentOperadora, setCurrentOperadora] = useState(0);
  const [currentDepartamento, setCurrentDepartamento] = useState(0);
  const [campos, setCampos] = useState([]);
  const [contratos, setContratos] = useState([]);
  const [operadoras, setOperadoras] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  useEffect(async () => {
    await fetch('http://localhost:5000/campos').then(res => res.json()).then(data => {
      alert(data.data)
      setCampos(data.data);
    });
    await fetch('http://localhost:5000/contratos').then(res => res.json()).then(data => {
      setContratos(data.data);
    });
    await fetch('http://localhost:5000/operadoras').then(res => res.json()).then(data => {
      setOperadoras(data.data);
    });
    await fetch('http://localhost:5000/departamentos').then(res => res.json()).then(data => {
      setDepartamentos(data.data);
    });
    fetch('http://localhost:5000/campo/' + campos[0]).then(res => res.json()).then(data => {
      setCurrentCampo(data.data);
    });
    fetch('http://localhost:5000/contrato/' + contratos[0]).then(res => res.json()).then(data => {
      setCurrentContrato(data.data);
    });
    fetch('http://localhost:5000/operadora/' + operadoras[0]).then(res => res.json()).then(data => {
      setCurrentOperadora(data.data);
    });
    fetch('http://localhost:5000/departamento/' + departamentos[0]).then(res => res.json()).then(data => {
      setCurrentDepartamento(data.data);
    });
  }, []);

  return (
    <Container>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Campo" {...a11yProps(0)} />
          <Tab label="Contrato" {...a11yProps(1)} />
          <Tab label="Operadora" {...a11yProps(2)} />
          <Tab label="Departamento" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <LineChart
          width={500}
          height={300}
          data={campos}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="val" stroke="#8884d8" />
        </LineChart>
        <Typography variant="h4" component="h1" gutterBottom>
          The current time is {currentCampo}.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <Typography variant="h4" component="h1" gutterBottom>
          The current time is {currentContrato}.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
        <Typography variant="h4" component="h1" gutterBottom>
          The current time is {currentOperadora}.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
        <Typography variant="h4" component="h1" gutterBottom>
          The current time is {currentDepartamento}.
        </Typography>
      </TabPanel>
    </Container>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default App;