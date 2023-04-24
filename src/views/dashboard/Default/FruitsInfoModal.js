import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TotalOrderLineChartCard, { CardWrapper } from './TotalOrderLineChartCard';
import { Avatar, Card, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import { Box } from '@mui/system';

import Rapple from 'assets/images/rotten_apple.jpeg';
import Freshnessindicator from 'layout/MainLayout/Sidebar/MenuCard/FreshnessIndicator';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2)
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1)
    }
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500]
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired
};

export default function FruitsInfoModal({ open, setOpen, handleClickOpen, handleClose }) {
    return (
        <div>
            <Dialog fullWidth={true} maxWidth={'sm'} open={open} onClose={handleClose}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <Typography variant="h1" gutterBottom sx={{ fontWeight: 400 }}>
                        Fruit Information
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <Grid item xs={12} sm={12}>
                        <Box display="flex" justifyContent="space-between">
                            <Avatar
                                src={Rapple}
                                sx={{
                                    width: 200,
                                    height: 200,
                                    cursor: 'pointer'
                                }}
                                aria-haspopup="true"
                                color="inherit"
                            />
                            <Freshnessindicator percetn={10} />
                        </Box>
                        {/* <img width={150} height={150} src={Rapple} alt="" /> */}
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Fruit name" />
                                    <ListItemText sx={{ textAlign: 'end' }} primary="Apple" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Fruit Color" />
                                    <ListItemText sx={{ textAlign: 'end' }} primary="Red" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Freshness" />
                                    <ListItemText sx={{ textAlign: 'end' }} primary="10%" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
