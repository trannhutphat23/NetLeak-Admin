import '../../style/dark.css'
import NavBar from "../../components/NavBar/navBar";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { 
    InputLabel, 
    TextField, 
    RadioGroup, 
    FormControlLabel, 
    Radio, 
    Grid, 
    Paper, 
    Button, 
    InputAdornment,
    Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AddUser = () => {
    const { darkMode } = useContext(DarkModeContext)
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    console.log(value)
    return (
        <div className={`w-screen ${darkMode ?  'DarkMode' : 'LightMode'}`}>
            <NavBar/>
            <div className='mx-5 flex flex-row mt-5'>
                <Link to="/user">
                    <Button variant="contained" color="primary">
                        <FontAwesomeIcon icon={faArrowLeft} color='white'/>
                        <p className='ml-3'>Back</p>
                    </Button>
                </Link>
                <p className='text-2xl font-semibold mx-5'>Thêm người dùng</p>
            </div>
            <Box className="flex flex-row mx-4 my-3">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Paper className='p-3'>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25chs' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <InputLabel htmlFor="outlined-required" sx={{fontSize: '16px', fontWeight: '600'}}>Email: </InputLabel>
                                <TextField 
                                    id="outlined-required" 
                                    required
                                    label="Email"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <div>@gmail.com</div>
                                            </InputAdornment>
                                        ),
                                        placeholder: "Enter phone Email",
                                    }}
                                    sx={{ width: '400px', height: '43px' }}
                                />

                                <InputLabel htmlFor="outlined-required" sx={{fontSize: '16px', fontWeight: '600'}}>Password: </InputLabel>
                                <TextField 
                                    id="outlined-required" 
                                    required
                                    label="Password"
                                    placeholder="Enter your password"
                                    sx={{ width: '400px', height: '43px' }}
                                />

                                <InputLabel htmlFor="radio-required" sx={{fontSize: '16px', fontWeight: '600'}}>Gender: </InputLabel>
                                <TextField
                                    id="age"
                                    label="Age"
                                    type="number"
                                    sx={{ width: '150px', height: '43px'}}
                                    inputProps={{
                                        min: 18,
                                        max: 90,
                                    }}
                                    required
                                />

                                <InputLabel htmlFor="radio-required" sx={{fontSize: '16px', fontWeight: '600'}}>Gender: </InputLabel>
                                <RadioGroup
                                    id="radio-required"
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className='p-3'>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25chs' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <InputLabel htmlFor="radio-required" sx={{fontSize: '16px', fontWeight: '600'}}>Phone Number: </InputLabel>
                                <TextField
                                    id="phone"
                                    label="Phone Number"
                                    type="tel"
                                    sx={{ width: '400px', height: '43px' }}
                                    InputProps={{
                                        placeholder: "Enter phone number",
                                    }}
                                    required
                                />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default AddUser;