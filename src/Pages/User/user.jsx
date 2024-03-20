import './user.css'
import '../../style/dark.css'
import NavBar from "../../components/NavBar/navBar";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import TableCom from '../../components/Table/table';
import columns from './userCol';
import Button from '@mui/material/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';

const User = () => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div className={`w-screen ${darkMode ?  'DarkMode' : 'LightMode'}`}>
            <NavBar/>
            <div className='bg-blue-500 mb-1 mt-5 mx-4 max-w-max flex justify-between items-center'>
                <Button color="primary">
                    <FontAwesomeIcon icon={faPlus} className='mr-1' color='white'/>
                    <p className='text-white'>Add record</p>
                </Button>
            </div>
            <div>
                <TableCom url="http://localhost:8081/v1/api/admin/listAllUsers" col={columns}/>
            </div>
        </div>
    )
}

export default User;