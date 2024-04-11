const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'name',
        headerName: 'Name',
        sortable: false,
        width: 400,
    },
    {
        field: 'gender',
        headerName: 'Gender',
        type: ['Male', 'Female'],
        width: 300,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 300,
    }
]
export default columns;