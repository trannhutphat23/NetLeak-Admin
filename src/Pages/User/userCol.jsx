const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
        field: 'name',
        headerName: 'Name',
        sortable: false,
        width: 220,
    },
    {
        field: 'email',
        headerName: 'Email',
        sortable: false,
        width: 240,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 100,
    },
    {
        field: 'gender',
        headerName: 'Gender',
        type: ['Male', 'Female'],
        width: 100,
    },
    {
        field: 'phone',
        headerName: 'Phone Number',
        width: 220,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 120,
    }
]
export default columns;