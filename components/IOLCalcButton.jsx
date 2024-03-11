import Button from '@mui/material/Button';
import CalculateIcon from '@mui/icons-material/Calculate';
import CalcModal from '../components/CalcModal';
import  {useState } from 'react';

function IOLCalcButton() {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    return (
    <div>  
    <Button style={styles.buttonStyle} onClick={handleOpenModal}>
        <CalculateIcon /> 
        IOL Calculator
    </Button>
    <CalcModal open={openModal} handleClose={handleCloseModal} />
    </div>
  );
}

const styles = {

    buttonStyle:
      {
      backgroundColor: 'transparent', // Transparent background by default
      color: '#000', // Black text color
      fontWeight: 'bold', // Bold text
      padding: '8px 16px', // Padding
      borderRadius: '4px', // Rounded corners
      // border: '1px solid #ccc', // Border
      transition: 'background-color 0.3s', // Smooth transition for background color
      '&:hover': {
        backgroundColor: '#ccc', // Grey background on hover
      },
      '&:active': {
        backgroundColor: '#999', // Darker grey background on click
      },
    },
};

export default IOLCalcButton;
