import { Modal,Box } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'
import Radio from '@mui/material/Radio';
import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../src/index.css';
import '../src/App.css';

// eslint-disable-next-line react/prop-types
function CalcModal({ open, handleClose }) {
  const [value, setEyeValue] = useState('1');
  const [toricValue, setToricValue] = useState('yes');
  const [selectedIOLModel, setSelectedIOLModel] = useState('');   
  const [formData1, setFormData1] = useState({});
   const [formData2, setFormData2] = useState({});
  const handleEyeChange = (event, newValue) => {
    setEyeValue(newValue);
  };

  const handleToricChange = (event) => {
    setToricValue(event.target.value);
  };

  const handleIOLModelChange = (event) => {
    setSelectedIOLModel(event.target.value); 
  };

   const handleCalculate = () => {
  if (value === '1') {
    const data1 = {
      eye: value,
      axialLength: document.getElementById('axial-length-os').value,
      anteriorChamberLength: document.getElementById('ant-cham-len-os').value,
      k1: document.getElementById('k1-os').value,
      flatAxis: document.getElementById('flat-axis-os').value,
      k2: document.getElementById('k2-os').value,
      steepAxis: document.getElementById('steep-axis-os').value,
      refractiveIndex: document.getElementById('ref-in-os').value,
      deltaK: document.getElementById('delta-k-os').value,
      targetRefSE: document.getElementById('target-ref-os').value,
      incisionOrientation: document.getElementById('incision-orient-os').value,
      sia: document.getElementById('sia-os').value,
      IOLModel: selectedIOLModel,
    };
    setFormData1(data1);
    console.log(data1); // Output the form data for eye = 1
  } else {
    const data2 = {
      eye: value,
      axialLength: document.getElementById('axial-length-od').value,
      anteriorChamberLength: document.getElementById('ant-cham-len-od').value,
      k1: document.getElementById('k1-od').value,
      flatAxis: document.getElementById('flat-axis-od').value,
      k2: document.getElementById('k2-od').value,
      steepAxis: document.getElementById('steep-axis-od').value,
      refractiveIndex: document.getElementById('ref-in-od').value,
      deltaK: document.getElementById('delta-k-od').value,
      targetRefSE: document.getElementById('target-ref-od').value,
      incisionOrientation: document.getElementById('incision-orient-od').value,
      sia: document.getElementById('sia-od').value,
      IOLModel: selectedIOLModel,
    };
    setFormData2(data2);
    console.log(data2); // Output the form data for eye = 2
  }
};


  const refractiveIndexValues = [
  {
    value: 1.3315,
    label: '1.3315',
  },
  {
    value: 1.332,
    label: '1.332',
  },
  {
    value: 1.336,
    label: '1.336',
  },
  {
    value: 1.3375,
    label: '1.3375',
  },
  {
    value: 1.336,
    label: '1.336',
  }
];

const IOLModels = {
  toric: [
    { value: 'toric1', label: 'Toric Option 1' },
    { value: 'toric2', label: 'Toric Option 2' },
    { value: 'toric3', label: 'Toric Option 3' },
  ],
  nonToric: [
    { value: 'nonToric1', label: 'Non-Toric Option 4' },
    { value: 'nonToric2', label: 'Non-Toric Option 5' },
    { value: 'nonToric3', label: 'Non-Toric Option 6' },
  ]
};
  
  return (
    <Modal open={open} onClose={handleClose}>
        <Box sx={styles.modalStyle}>
        <Typography variant="h5" style={{ fontFamily: 'Roboto', fontWeight: 500 }}>
        IOL CALCULATOR
        </Typography>
          <div className='formItems' style={styles.formItems}>           
            <TextField id="p-name" label="Patient Name" variant="outlined" />
            <TextField id="p-id" label="Patient ID" variant="outlined" />
          </div>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleEyeChange} aria-label="lab API tabs example">
                  <Tab label="Oculus Sinister" value="1" />
                  <Tab label="Oculus Dexter" value="2" />
                </TabList>
              </Box>
              
              <TabPanel value="1">
                <div className='formItems' style={styles.formItems}>
                  <TextField id="axial-length-os" label="Axial Length" helperText="(15.00 - 40.00 mm)" variant="outlined" />
                  <TextField id="ant-cham-len-os" label="Anterior Chamber Length" helperText="(1.50 - 6.00 mm)" variant="outlined" />
                  <TextField id="k1-os" label="K1 (Flat)" helperText="(5.00 - 10.00 mm / 35.00 - 65.00 D)" variant="outlined" />
                  <TextField id="flat-axis-os" label="Flat Axis"  helperText="(0 - 180°)" variant="outlined" onChange={(event) => {
                      const flatAxisValue = event.target.value;
                      const steepAxisValue = 180 - parseFloat(flatAxisValue);
                      document.getElementById('steep-axis-os').value = steepAxisValue;
                    }} />
                  <TextField id="k2-os" label="K2 (Steep)" helperText="(5.00 - 10.00 mm / 35.00 - 65.00 D)" variant="outlined" />
                  <TextField disabled id="steep-axis-os" label="Steep Axis" variant="outlined" />
                  <TextField id="ref-in-os" select label="Refractive Index"  helperText="Enter Refractive Index"
                  // defaultValue="1.3315"
                    >
                      {refractiveIndexValues.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                  </TextField>
                  <TextField disabled id="delta-k-os" label="Cyl (ΔK)" variant="outlined" />
                  <TextField id="target-ref-os" label="Target Refract. SE" helperText='(-5.00 - 5.00 D, optional)' variant="outlined" />
                  <TextField id="incision-orient-os" label="Incision Orientation" helperText="(0 - 360°, optional)" variant="outlined" />
                  <TextField id="sia-os" label="SIA (Surgically Induced Astigmatism)" helperText="(0.00 - 0.75 D, optional)" variant="outlined" />
                  <div>
                    <FormControlLabel control={<Radio checked={toricValue === 'yes'} onChange={handleToricChange} value="yes" name="toric-radio" />} label="Toric" />
                    <FormControlLabel control={<Radio checked={toricValue === 'no'} onChange={handleToricChange} value="no" name="toric-radio" />} label="Non-Toric" />
                  </div>
                  <TextField 
                        id="iol-model-os" 
                        select 
                        label="Select IOL Model"
                        value={selectedIOLModel} 
                        onChange={handleIOLModelChange}
                        style={{ width: '100%' }}
                    >
                      {toricValue === 'yes' ? (
                        IOLModels.toric.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))
                      ) : (
                        IOLModels.nonToric.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))
                      )}
                    </TextField>
                    <Button variant="contained" onClick={handleCalculate}>Calculate</Button>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className='formItems' style={styles.formItems}>
                  <TextField id="axial-length-od" label="Axial Length" helperText="(15.00 - 40.00 mm)" variant="outlined" />
                  <TextField id="ant-cham-len-od" label="Anterior Chamber Length" helperText="(1.50 - 6.00 mm)" variant="outlined" />
                  <TextField id="k1-od" label="K1 (Flat)" helperText="(5.00 - 10.00 mm / 35.00 - 65.00 D)" variant="outlined" />
                  <TextField id="flat-axis-od" label="Flat Axis"  helperText="(0 - 180°)" variant="outlined" />
                  <TextField id="k2-od" label="K2 (Steep)" helperText="(5.00 - 10.00 mm / 35.00 - 65.00 D)" variant="outlined" />
                  <TextField disabled id="steep-axis-od" label="Steep Axis" variant="outlined" />
                  <TextField id="ref-in-od" select label="Refractive Index"  helperText="Enter Refractive Index"
                  // defaultValue="1.3315"
                    >
                      {refractiveIndexValues.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                  </TextField>
                  <TextField disabled id="delta-k-od" label="Cyl (ΔK)" variant="outlined" />
                  <TextField id="target-ref-od" label="Target Refract. SE" helperText='(-5.00 - 5.00 D, optional)' variant="outlined" />
                  <TextField id="incision-orient-od" label="Incision Orientation" helperText="(0 - 360°, optional)" variant="outlined" />
                  <TextField id="sia-od" label="SIA (Surgically Induced Astigmatism)" helperText="(0.00 - 0.75 D, optional)" variant="outlined" />
                  <div>
                    <FormControlLabel control={<Radio checked={toricValue === 'yes'} onChange={handleToricChange} value="yes" name="toric-radio" />} label="Toric" />
                    <FormControlLabel control={<Radio checked={toricValue === 'no'} onChange={handleToricChange} value="no" name="toric-radio" />} label="Non-Toric" />
                  </div>
                  <TextField 
                        id="iol-model-od" 
                        select 
                        label="Select IOL Model"
                        value={selectedIOLModel} // Use the selectedIOLModel state to control the value
                        onChange={handleIOLModelChange} // Handle changes to update the selected IOL model
                        style={{ width: '100%' }}
                    >
                      {toricValue === 'yes' ? (
                        IOLModels.toric.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))
                      ) : (
                        IOLModels.nonToric.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))
                      )}
                    </TextField>
                    <Button variant="contained" onClick={handleCalculate}>Calculate</Button>
                </div>
              </TabPanel>
              
            </TabContext>
          </Box>    
        </Box>
    </Modal>
  );
}

const styles= {
    modalStyle:{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          backgroundColor: "white",
          color: 'black', // Set text color to white
          boxShadow: 24,
          p: 4,
          borderRadius: 4,
          textAlign: 'center',
          overflowY:'scroll',
          height:'90%',
          display:'block',
    },
   formItems: {
    display: 'flex',
    flexDirection: 'row', // Arrange items horizontally
    flexWrap: 'wrap', // Allow items to wrap to next row if needed
    justifyContent: 'space-between', // Distribute space between items
    gap: '20px', // Add vertical and horizontal gap between items
    alignItems: 'center', // Center items vertically
    padding: '20px', // Add padding around items
  },
}

export default CalcModal;