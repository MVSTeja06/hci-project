import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { Button, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// third-party

// project imports
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';

// chart data
import SimpleModal from 'ui-component/SimpleModal';
import AnimateButton from 'ui-component/extended/AnimateButton';
import chartData from './chart-data/total-growth-bar-chart';

const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading }) => {
    const [value, setValue] = useState('today');
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);

    const { navType } = customization;
    const { primary } = theme.palette.text;
    const darkLight = theme.palette.dark.light;
    const grey200 = theme.palette.grey[200];
    const grey500 = theme.palette.grey[500];

    const primary200 = theme.palette.primary[200];
    const primaryDark = theme.palette.primary.dark;
    const secondaryMain = theme.palette.secondary.main;
    const secondaryLight = theme.palette.secondary.light;

    useEffect(() => {
        const newChartData = {
            ...chartData.options,
            colors: [primary200, primaryDark, secondaryMain, secondaryLight],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [primary]
                    }
                }
            },
            grid: {
                borderColor: grey200
            },
            tooltip: {
                theme: 'light'
            },
            legend: {
                labels: {
                    colors: grey500
                }
            }
        };

        // do not load chart when loading
        if (!isLoading) {
            // ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
        }
    }, [navType, primary200, primaryDark, secondaryMain, secondaryLight, primary, darkLight, grey200, isLoading, grey500]);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <Typography variant="h3">Fruit Freshness Detection</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    {/* <TextField
                                        id="standard-select-currency"
                                        select
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                    >
                                        {status.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField> */}
                                    {/* <AnimateButton>
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
                                    </AnimateButton> */}
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            {/* <Chart {...chartData} /> */}
                            {/* <h2>Fruit Freshness Detection</h2> */}
                            <Typography variant="subtitle1" gutterBottom sx={{ marginBottom: '20px', fontWeight: 400 }}>
                                This project is to develop an accurate fruit freshness detection system using OpenCV and Python. The system
                                will be capable of determining the freshness of various fruits with high precision.
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 400 }}>
                                Preprocessing the fruit dataset using advanced techniques like feature extraction, resize, crop, and
                                normalization to prepare it for further analysis. Categorizing fruits based on their freshness state by
                                utilizing the extracted features and training various machine learning models.Fine-tuning the
                                hyperparameters of the machine learning models to enhance the accuracy of fruit freshness
                                detection.Utilizing OpenCV image processing methods such as filtering, edge detection, and object
                                identification to identify relevant features from the fruit images and classify them accordingly. By
                                accomplishing these objectives, this project intends to contribute towards developing an efficient and
                                reliable fruit freshness detection system that can assist the food industry in ensuring high-quality and
                                safe products for their consumers.
                            </Typography>
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

TotalGrowthBarChart.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalGrowthBarChart;
