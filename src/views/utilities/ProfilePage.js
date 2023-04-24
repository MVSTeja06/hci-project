import { Avatar, Badge, Button, Card, CardContent, CardMedia, Grid, Link, TextField } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import Avan from 'assets/images/users/avantika.jpeg';

import Manasa from 'assets/images/users/manasa.jpeg';
import { useTheme } from '@mui/system';
import { Upload, UploadFile, CameraAlt } from '@mui/icons-material';

// ==============================|| TYPOGRAPHY ||============================== //

const ProfilePage = () => {
    const theme = useTheme();

    const userAuth = localStorage.getItem('dashboard');
    let isAdmin = userAuth == 'admin';

    return (
        <MainCard title="Profile section" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={3}>
                    <SubCard title="Image">
                        <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={<CameraAlt />}>
                            <Avatar
                                src={isAdmin ? Manasa : Avan}
                                sx={{
                                    width: 200,
                                    height: 200,
                                    cursor: 'pointer'
                                }}
                                aria-haspopup="true"
                                color="inherit"
                            />
                        </Badge>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <SubCard title="About me">
                        <Grid container spacing={2}>
                            <Grid container item xs={12} display="flex" justifyContent="space-between">
                                <Grid xs={4} item>
                                    <TextField
                                        fullWidth
                                        required
                                        id="outlined-required"
                                        label="First name"
                                        defaultValue={isAdmin ? 'Manasa V' : 'Avantika Mittapally'}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        fullWidth
                                        id="outlined-disabled"
                                        label="Last name"
                                        defaultValue={isAdmin ? 'Manasa V' : 'Avantika Mittapally'}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} display="flex" justifyContent="space-between">
                                {/* <Grid xs={4} item> */}
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="email"
                                    defaultValue={isAdmin ? 'svall@odu.edu' : 'amitt002@odu.edu'}
                                />
                                {/* </Grid> */}
                            </Grid>
                            <Grid container item xs={12} display="flex" justifyContent="space-between">
                                {/* <Grid xs={4} item> */}
                                <TextField fullWidth required id="outlined-required" label="phone" defaultValue="757-xxx-xxxx" />
                                {/* </Grid> */}
                            </Grid>

                            <Grid container item xs={12} display="flex" justifyContent="flex-end">
                                <Grid xs={2} item display="flex" alignItems="flex-end">
                                    <Button variant="text">cancel</Button>
                                </Grid>

                                <Grid xs={2} item display="flex" alignItems="flex-end">
                                    <Button variant="contained">Submit</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default ProfilePage;
