import React from 'react';
import Home from '../home';
import {Box} from '@mui/material';
import AppBarHeader from './components/Appbar';

function App() {
    return (
        <Box sx={{height: '100%', width: '100%', boxSizing: 'border-box'}}>
            <AppBarHeader />
            <Home />
        </Box>
    );
}

export default App;
