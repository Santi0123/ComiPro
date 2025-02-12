import { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
    },
}));

export default function Header({ searchQuery, setSearchQuery }) {
    return (
        <>
            <AppBar
                position="fixed"
                sx={{ top: 0, width: '100vw', zIndex: 1100, backgroundColor: '#082E4D' }}
            >
                <Box
                    component="img"
                    src="data:image/png;base64,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"
                    alt="Avatar del usuario"
                    sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        margin: "16px auto",
                        display: "block",
                    }}
                />
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        ComiPro
                    </Typography>
                    {/* Buscador */}
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Buscar…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
            <Box sx={{ marginTop: '64px' }} />
        </>
    );
}
