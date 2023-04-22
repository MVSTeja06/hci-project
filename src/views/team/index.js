// material-ui
import { CameraAlt } from '@mui/icons-material';
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
import User1 from 'assets/images/users/user-round.svg';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import { Box } from '@mui/system';

// ==============================|| TEam PAGE ||============================== //

const TeamPage = () => (
    <MainCard title="Team members" secondary={<CardSecondaryAction link="https://next.material-ui.com/system/typography/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={3}>
                <SubCard title="Member 1">
                    <Box display="flex" justifyContent="center">
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
                    </Box>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="First name" />
                                <ListItemText sx={{ textAlign: 'end' }} primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Last name" />
                                <ListItemText sx={{ textAlign: 'end' }} primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Email" />
                                <ListItemText sx={{ textAlign: 'end' }} primary="Drafts" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={3}>
                <SubCard title="Member 1">
                    <Box display="flex" justifyContent="center">
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
                    </Box>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="First name" />
                                <ListItemText sx={{ textAlign: 'end' }} primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Last name" />
                                <ListItemText sx={{ textAlign: 'end' }} primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Email" />
                                <ListItemText sx={{ textAlign: 'end' }} primary="Drafts" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={3}>
                <SubCard title="Member 1">
                    <Box display="flex" justifyContent="center">
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
                    </Box>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="First name" />
                                <ListItemText sx={{ textAlign: 'end' }} primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Last name" />
                                <ListItemText sx={{ textAlign: 'end' }} primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Email" />
                                <ListItemText sx={{ textAlign: 'end' }} primary="Drafts" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={3}>
                <SubCard title="Member 1">
                    <Box display="flex" justifyContent="center">
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
                    </Box>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="First name" />
                                <ListItemText sx={{ textAlign: 'end' }} primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Last name" />
                                <ListItemText sx={{ textAlign: 'end' }} primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Email" />
                                <ListItemText sx={{ textAlign: 'end' }} primary="Drafts" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default TeamPage;
