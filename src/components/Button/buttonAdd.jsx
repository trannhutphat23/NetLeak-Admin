import Button from '@mui/material/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonAdd = () => {
    return (
        <div className='m-3'>
            <Button variant="contained" color="primary">
                <FontAwesomeIcon icon={faPlus} className='mr-1' color='white'/>
                <p className='text-white'>Add</p>
            </Button>
        </div>
    );
}

export default ButtonAdd;