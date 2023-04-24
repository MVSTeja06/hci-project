import { useEffect, useState } from 'react';

// material-ui
import { Button, Grid, Typography } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import FruitsTable from './FruitsTable';
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';
import AnimateButton from 'ui-component/extended/AnimateButton';
import SimpleModal from 'ui-component/SimpleModal';
import AdminChartCard from './AdminChartCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const userAuth = localStorage.getItem('dashboard');
    let isAdmin = userAuth == 'admin';
    let isUser = userAuth == 'user';

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <Grid container spacing={gridSpacing}>
            {!isAdmin && (
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={4} md={6} sm={6} xs={12}>
                            <EarningCard isLoading={isLoading} />
                        </Grid>
                        {/* <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard isLoading={isLoading} />
                    </Grid> */}
                        <Grid item lg={8} md={12} sm={12} xs={12}>
                            <Grid container spacing={gridSpacing}>
                                {/* <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                            </Grid> */}
                                {/* <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid> */}
                                <Grid sm={6} xs={12} md={6} lg={12}>
                                    <Box sx={{ p: 2 }}>
                                        <TotalGrowthBarChart isLoading={isLoading} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
            {isAdmin ? (
                <Grid item xs={12}>
                    <AdminChartCard isLoading={isLoading} />
                </Grid>
            ) : (
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        {/* <Grid item xs={12} md={12}>
                        <TotalGrowthBarChart isLoading={isLoading} />
                    </Grid> */}
                        <Grid container item xs={12} md={12}>
                            <Grid item xs={2} md={2}>
                                <Typography variant="h3" sx={{ fontWeight: 400 }}>
                                    Uploaded fruit images
                                </Typography>
                            </Grid>
                            <Grid item xs={10} md={10} display="flex">
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        onClick={setOpen}
                                    >
                                        Upload Image
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            {/* {isAdmin && <FruitsTable />} */}
                            <FruitsTable />
                        </Grid>
                        {/* <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid> */}
                    </Grid>
                    <SimpleModal open={open} setOpen={setOpen} handleClickOpen={handleClickOpen} />
                </Grid>
            )}
        </Grid>
    );
};

export default Dashboard;
