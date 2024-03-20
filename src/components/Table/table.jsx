/* eslint-disable react/prop-types */
import { DataGrid, GridToolbar, GridToolbarContainer} from '@mui/x-data-grid';
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../style/dark.css'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import NoDataScreen from '../NoDataScreen/noDataScreen';
function EditToolbar() {
    return (
      <GridToolbarContainer className='flex justify-between'>
        <GridToolbar/>
      </GridToolbarContainer>
    );
  }

const TableCom = ({url, col}) => {
    const { darkMode } = useContext(DarkModeContext);
    const [rows, setRows] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch rows data');
                }
                const data = await response.json();
                setRows(data);
            } catch (error) {
                console.error('Error fetching rows data:', error);
            }
        };
        fetchData();
    },[rows, url]);
    // const handleButtonClick = (rowData) => {
    //     console.log('Clicked row data:', rowData);
    // };
    return (
        <div>
            {(rows.length != 0) ?
                <div className={`${darkMode ? "DarkModeSideBar" : "LightModeSideBar"} m-4 p-4"`}>
                <DataGrid
                    rows={rows}
                    columns={col.map((colEle) => {
                        if (colEle.field === 'action'){
                            return {
                                ...colEle,
                                renderCell: () => (
                                    <div className='btn'>
                                        <FontAwesomeIcon icon={faPencil} className='mr-5 btn1 w-5 h-5'/>
                                        <FontAwesomeIcon icon={faTrash} className='mr-5 btn2 w-5 h-5'/>
                                        {/* <p onClick={() => handleButtonClick(params.row)}>Click Me</p> */}
                                    </div>
                                ),
                            }
                        }else{
                            return {
                                ...colEle
                            }
                        }
                    })}
                    sx={{
                        boxShadow: 1,
                        border: darkMode ? 1 : 0,
                        '& .MuiDataGrid-columnHeader': {
                            color: darkMode ? '#d3dadd' : '#000',
                            backgroundColor: darkMode ? '#222840' : '#f3f4f6',
                        },
                        '& .MuiDataGrid-cell': {
                            color: darkMode ? '#d3dadd' : '#000',
                            cursor: 'pointer'
                        },
                        '& .MuiCheckbox-root': {
                            color: darkMode ? '#d3dadd' : '#000',
                        },
                        '& .MuiPaginationItem-page': {
                            color: darkMode ? '#d3dadd' : '#000',
                        },
                        '& .MuiPaginationItem-page.Mui-selected': {
                            backgroundColor: darkMode ? '#28273f' : 'white', 
                            color: darkMode ? '#d3dadd' : '#000', 
                        },
                        '& .MuiDataGrid-row': {
                            borderBottom: 'none', 
                        },
                        '& .MuiDataGrid-cell .btn1:hover ': {
                            color: 'primary.main',
                            cursor: 'pointer',
                        },
                        '& .MuiDataGrid-cell .btn2:hover ': {
                            color: 'red',
                            cursor: 'pointer'
                        },
                    }}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    slots={{
                        toolbar: EditToolbar,
                    }}
                    pageSizeOptions={[5, 10, 15, 20]}
                    checkboxSelection
                />
            </div>
            : (
                <NoDataScreen/>
            )
        }
        </div>
    );
}

export default TableCom;