import { Avatar, Badge, Button, Card, CardContent, CardMedia, Grid, Link, TextField } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import User1 from 'assets/images/users/user-round.svg';
import { useTheme } from '@mui/system';
import { Upload, UploadFile, CameraAlt } from '@mui/icons-material';

// ==============================|| TYPOGRAPHY ||============================== //

const ProfilePage = () => {
    const theme = useTheme();

    return (
        <MainCard title="Profile section" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={3}>
                    <SubCard title="Image">
                        <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={<CameraAlt />}>
                            <Avatar
                                src={User1}
                                sx={{
                                    width: 200,
                                    height: 200,
                                    cursor: 'pointer'
                                }}
                                aria-haspopup="true"
                                color="inherit"
                            />
                        </Badge>
                        {/* <Avatar
                            src={User1}
                            sx={{
                                // ...theme.typography.extraLargeAvatar,
                                // margin: '8px 0 8px 8px !important',
                                width: 56,
                                height: 56,
                                cursor: 'pointer'
                            }}
                            aria-haspopup="true"
                            color="inherit"
                        /> */}
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <SubCard title="About me">
                        <Grid container spacing={2}>
                            <Grid container item xs={12} display="flex" justifyContent="space-between">
                                <Grid xs={4} item>
                                    <TextField fullWidth required id="outlined-required" label="First name" defaultValue="First name" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField fullWidth id="outlined-disabled" label="Last name" defaultValue="Last name" />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} display="flex" justifyContent="space-between">
                                {/* <Grid xs={4} item> */}
                                <TextField fullWidth required id="outlined-required" label="email" defaultValue="email" />
                                {/* </Grid> */}
                            </Grid>
                            <Grid container item xs={12} display="flex" justifyContent="space-between">
                                {/* <Grid xs={4} item> */}
                                <TextField fullWidth required id="outlined-required" label="phone" defaultValue="email" />
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
                {/* <Grid item xs={12} sm={6}>
                    <SubCard title="Body">
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <MuiTypography variant="body1" gutterBottom>
                                    body1. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur unde suscipit, quam
                                    beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat
                                    deleniti? Eum quasi quidem quibusdam.
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="body2" gutterBottom>
                                    body2. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur unde suscipit, quam
                                    beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat
                                    deleniti? Eum quasi quidem quibusdam.
                                </MuiTypography>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Extra">
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <MuiTypography variant="button" display="block" gutterBottom>
                                    button text
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="caption" display="block" gutterBottom>
                                    caption text
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="overline" display="block" gutterBottom>
                                    overline text
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography
                                    variant="body2"
                                    color="primary"
                                    component={Link}
                                    href="https://berrydashboard.io"
                                    target="_blank"
                                    display="block"
                                    underline="hover"
                                    gutterBottom
                                >
                                    https://berrydashboard.io
                                </MuiTypography>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid> */}
            </Grid>
        </MainCard>
    );
};

export default ProfilePage;
