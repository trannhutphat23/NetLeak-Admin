import Button from '@mui/material/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonAdd = () => {
    return (
        <div className='bg-blue-500 mb-1 mt-5 mx-4 max-w-max flex justify-between items-center'>
            <Button variant="contained" color="primary">
                <FontAwesomeIcon icon={faPlus} className='mr-1' color='white'/>
                <p className='text-white'>Add record</p>
            </Button>
        </div>
    );
}

export default ButtonAdd;