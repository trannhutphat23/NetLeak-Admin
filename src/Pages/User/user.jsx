import './user.css'
import '../../style/dark.css'
import NavBar from "../../components/NavBar/navBar";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import TableCom from '../../components/Table/table';
import columns from './userCol';
// import ButtonAdd from '../../components/Button/buttonAdd';
// import { Link } from 'react-router-dom';

const User = () => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div className={`w-screen ${darkMode ?  'DarkMode' : 'LightMode'}`}>
            <NavBar/>
            <div>
                <TableCom url="http://localhost:8083/v1/api/admin/listAllUsers" col={columns}/>
            </div>
        </div>
    )
}

export default User;