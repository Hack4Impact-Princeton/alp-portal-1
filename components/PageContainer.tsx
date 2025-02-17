import { Box, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import InboxIcon from '@mui/icons-material/Inbox';
import Navbar from '../components/Navbar'
import { getSession, signOut } from "next-auth/react"

type PageContainerProps = {
    fName: String;
    currPage: "dash-volunteer" | "profile" | "instruction-steps" | "h4i-team" | "forum" | "leaderboard";
}

const PageContainer: React.FC<PageContainerProps> = ({fName, currPage}) => {
    const WhiteTextButton = styled(Button)<ButtonProps>(() => ({
        color: 'white',
    }));

    let pageName = "";
    switch(currPage) {
        case "dash-volunteer": {
            pageName="Home"; 
            break;
        }
        case "profile": {
            pageName="Profile";
            break;
        }
        case "instruction-steps": {
            pageName="Organizer Steps";
            break;
        }
        case "h4i-team": {
            pageName="The Developer Team";
            break;
        }
        case "forum": {
            pageName="Forum";
            break;
        }
        case "leaderboard": {
            pageName="Leaderboard";
            break;
        }
    }

    const handleSignOut = () => {
        console.log("Signing out user");
        signOut();
        window.location.href = '/';
    }

    return(
    <>
        <Grid>
            <Navbar active={currPage}></Navbar>
            <Box sx={{
                float: 'right',
                height: '7vh',
                width: '30vw',
                backgroundColor: '#fe9834',
                borderRadius: '5px',
                pt: '5px'
            }}>
                <Grid container flex-direction="row"
                    justifyContent="flex-end"
                    alignItems="center">
                    <Grid xs={4}><h3>Welcome, {fName}</h3></Grid>
                    <Grid xs={1}><InboxIcon></InboxIcon></Grid>              
                    <Grid xs={3}><WhiteTextButton variant="text"  onClick={handleSignOut}> Sign Out </WhiteTextButton></Grid>
                    <Grid xs={2}><img src="/alp-logo.png" alt="alp-logo" height="55px"></img></Grid>
                </Grid> 
            </Box>
        </Grid>
        <Grid xs={12} sx={{
            pl: '10vw',
        }}>
            <Box sx={{
                height: '12vh',
            }}></Box>
            <h1 style={{ textAlign: "left", fontSize: "90px", paddingRight: 10 }}>{pageName}</h1>
        </Grid>
    </>);
}

export default PageContainer;