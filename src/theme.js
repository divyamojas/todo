import { createTheme } from "@mui/material";


export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#093ca2',
            dark: '#00006c',
            contrastText: '#EBEBEB'
        },
        secondary: {
            main: '#7A7A86',
            contrastText: '#ffffff'
        },
        text: {
            primary: "#383838",
            secondary: "#6F6F6F",
            disabled: "#A4A4B0"
        },
        divider: "#6F7097",
        background: {
            default: '#EBEBEB',
            paper: '#7A7A86',
        }
    },
    typography: {
        fontFamily: "'Poppins', sans-serif"
    }
})
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#CF2A2A',
            dark: '#9C0000',
            contrastText: '#c8c8c8'
        },
        secondary: {
            main: '#222225',
            contrastText: '#d9d9d9'
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#9F9F9F",
            disabled: "#c0c0c0"
        },
        divider: "#625A5A",
        background: {
            default: '#202020',
            paper: '#222225'
        }
    },
    typography: {
        fontFamily: "'Poppins', sans-serif"
    }
})

const themes = { lightTheme, darkTheme }

export default themes