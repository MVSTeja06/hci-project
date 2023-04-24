// material-ui
import { CameraAlt, PersonAdd } from '@mui/icons-material';
import {
    Avatar,
    Badge,
    Button,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField,
    Typography
} from '@mui/material';
import { gridSpacing } from 'store/constant';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';
import Avan from 'assets/images/users/avantika.jpeg';
import Liki from 'assets/images/users/likkita-prof.jpeg';
import Madu from 'assets/images/users/madhubala.jpeg';
import Manas from 'assets/images/users/manasa.jpeg';
// import User1 from 'assets/images/users/user-round.svg';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import { Box } from '@mui/system';
import AnimateButton from 'ui-component/extended/AnimateButton';

// ==============================|| TEam PAGE ||============================== //

const EditButton = () => (
    <Grid
        item
        xs={9}
        md={9}
        display="flex"
        justifyContent="flex-end
                                "
    >
        <AnimateButton>
            <Button disableElevation fullWidth size="small" type="submit" variant="contained" color="secondary" onClick={() => {}}>
                Edit
            </Button>
        </AnimateButton>
    </Grid>
);

const AddButton = () => (
    <Grid
        item
        xs={1}
        md={1}
        display="flex"
        justifyContent="flex-end
                                "
    >
        <AnimateButton>
            <Button
                startIcon={<PersonAdd />}
                disableElevation
                fullWidth
                size="small"
                type="submit"
                variant="contained"
                color="secondary"
                onClick={() => {}}
            >
                Add user
            </Button>
        </AnimateButton>
    </Grid>
);
const TeamPage = () => {
    const userAuth = localStorage.getItem('dashboard');
    let isAdmin = userAuth == 'admin';
    return (
        <MainCard
            title={(() => (
                <>
                    <Grid container item xs={12} md={12} display="flex" justifyContent="flex-start">
                        <Grid item xs={1} md={3}>
                            <Typography variant="h1" sx={{ fontWeight: 400 }}>
                                Team members
                            </Typography>
                        </Grid>
                        {isAdmin && <AddButton />}
                    </Grid>
                </>
            ))()}
            // secondary={<CardSecondaryAction link="https://next.material-ui.com/system/typography/" />}
        >
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={3}>
                    <SubCard
                        title={(() => (
                            <>
                                <Grid container item xs={12} md={12}>
                                    <Grid item xs={3} md={3}>
                                        <Typography variant="body1" sx={{ fontWeight: 400 }}>
                                            Madhubala
                                        </Typography>
                                    </Grid>
                                    {isAdmin && <EditButton />}
                                </Grid>
                            </>
                        ))()}
                    >
                        <Box display="flex" justifyContent="center">
                            <Avatar
                                src={Madu}
                                sx={{
                                    width: 200,
                                    height: 200,
                                    cursor: 'pointer'
                                }}
                                aria-haspopup="true"
                                color="inherit"
                            />
                        </Box>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="First name" />
                                    <ListItemText sx={{ textAlign: 'end' }} primary="Madhubala" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Last name" />
                                    <ListItemText sx={{ textAlign: 'end' }} primary="Mantena" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Email" />
                                    <ListItemText sx={{ textAlign: 'end' }} primary="vmant001@odu.edu" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <SubCard
                        title={(() => (
                            <>
                                <Grid container item xs={12} md={12}>
                                    <Grid item xs={3} md={3}>
                                        <Typography variant="body1" sx={{ fontWeight: 400 }}>
                                            {isAdmin ? 'Welcome Manasa !' : 'Welcome Avantika'}
                                        </Typography>
                                    </Grid>
                                    {isAdmin && <EditButton />}
                                </Grid>
                            </>
                        ))()}
                    >
                        <Box display="flex" justifyContent="center">
                            <Avatar
                                src={Avan}
                                sx={{
                                    width: 200,
                                    height: 200,
                                    cursor: 'pointer'
                                }}
                                aria-haspopup="true"
                                color="inherit"
                            />
                        </Box>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="First name" />
                                    <ListItemText sx={{ textAlign: 'end' }} primary="Avantika" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Last name" />
                                    <ListItemText sx={{ textAlign: 'end' }} primary="Mittapally" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Email" />
                                    <ListItemText sx={{ textAlign: 'end' }} primary="amitt002@odu.edu" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <SubCard
                        title={(() => (
                            <>
                                <Grid container item xs={12} md={12}>
                                    <Grid item xs={3} md={3}>
                                        <Typography variant="body1" sx={{ fontWeight: 400 }}>
                                            Likhita
                                        </Typography>
                                    </Grid>
                                    {isAdmin && <EditButton />}
                                </Grid>
                            </>
                        ))()}
                    >
                        <Box display="flex" justifyContent="center">
                            <Avatar
                                src={Liki}
                                sx={{
                                    width: 200,
                                    height: 200,
                                    cursor: 'pointer'
                                }}
                                aria-haspopup="true"
                                color="inherit"
                            />
                        </Box>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="First name" />
                                    <ListItemText sx={{ textAlign: 'end' }} primary="Likitha" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Last name" />
                                    <ListItemText sx={{ textAlign: 'end' }} primary="Kathireddy" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Email" />
                                    <ListItemText sx={{ textAlign: 'end' }} primary="lkath001@odu.edu" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <SubCard
                        title={(() => (
                            <>
                                <Grid container item xs={12} md={12}>
                                    <Grid item xs={3} md={3}>
                                        <Typography variant="body1" sx={{ fontWeight: 400 }}>
                                            Manasa
                                        </Typography>
                                    </Grid>
                                    {isAdmin && <EditButton />}
                                </Grid>
                            </>
                        ))()}
                    >
                        <Box display="flex" justifyContent="center">
                            <Avatar
                                src={Manas}
                                sx={{
                                    width: 200,
                                    height: 200,
                                    cursor: 'pointer'
                                }}
                                aria-haspopup="true"
                                color="inherit"
                            />
                        </Box>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="First name" />
                                    <ListItemText sx={{ textAlign: 'end' }} primary="Manasa" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Last name" />
                                    <ListItemText sx={{ textAlign: 'end' }} primary="Vallabhapurapu" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Email" />
                                    <ListItemText sx={{ textAlign: 'end' }} primary="svall003@odu.edu" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default TeamPage;
