import NavBar from "../../components/NavBar/navBar";
import ButtonAdd from '../../components/Button/buttonAdd';
import { Link } from 'react-router-dom';
// import TableCom from '../../components/Table/table';
// import columns from './actorCol';
import TableExam from "../../components/Table/tableExam";

// import Card from "../../components/Card/card";
const Actor = () => {
    return (
        <div className="bg-[#f4f7fe] w-screen">
            <NavBar/>
            <Link to="/user/add" className="inline-block max-w-max">
                <ButtonAdd/>
            </Link>
            {/* <div classNameName="grid grid-cols-3 gap-4">
                <Card/>
                <Card/>
                <Card/>
            </div> */}
            <div>
                {/* <TableCom url="http://localhost:8081/v1/api/admin/listAllUsers" col={columns}/> */}
                <TableExam/>
            </div>
        </div>
    )
}

export default Actor;