import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { Auth } from 'two-step-auth';

// material-ui
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// third party
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Google from 'assets/images/icons/social-google.svg';
import { useNavigate } from 'react-router';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);
    const [checked, setChecked] = useState(true);

    const googleHandler = async () => {
        console.error('Login');
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [showOTP, setShowOTP] = useState(false);

    const [validateOTP, setValidateOTP] = useState(false);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const navigate = useNavigate();

    const handleSignUp = () => {
        var to = '/dashboard/default';
        navigate(to);
    };

    const { errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, submitForm } = useFormik({
        initialValues: {
            email: 'info@codedthemes.com',
            password: '123456',
            otp: '',
            submit: null
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            password: Yup.string().max(255).required('Password is required')
        }),
        onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
                // if (scriptedRef.current) {
                setTimeout(() => {
                    setStatus({ success: true });
                    setSubmitting(false);
                    handleSignUp();
                }, 2000);
                // }
            } catch (err) {
                console.error(err);
                if (scriptedRef.current) {
                    setStatus({ success: false });
                    setErrors({ submit: err.message });
                    setSubmitting(false);
                }
            }
        }
    });

    const handleSendOTP = async () => {
        setValidateOTP(false);
        const form = new FormData();
        form.append('channel', '"email"');
        form.append('email', values.email);
        form.append('callback_url', '""');
        form.append('success_redirect_url', '""');
        form.append('fail_redirect_url', '""');
        form.append('metadata', '"{}"');
        form.append('captcha', '"true"');
        form.append('hide', '"true"');
        form.append('lang', '"en"');

        try {
            var myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            var raw = JSON.stringify({
                email: values.email
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            const responseRaw = await fetch('http://localhost:4000/sendotp', requestOptions);

            const response = await responseRaw.json();

            console.log({ response });
            setValidateOTP(true);
            // submitForm();
        } catch (error) {
            console.error(error);
            setValidateOTP(false);
        }
    };
    const handleSubmitForm = (loginType) => {
        console.log({ loginType, otp: values.otp });
        if (loginType == 'user') {
            localStorage.setItem('dashboard', 'user');
        } else {
            localStorage.setItem('dashboard', 'admin');
        }
        if (!values.otp && loginType == 'user') {
            setShowOTP(true);
            handleSendOTP();
        } else {
            submitForm();
        }
    };

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <AnimateButton>
                        <Button
                            disableElevation
                            fullWidth
                            onClick={googleHandler}
                            size="large"
                            variant="outlined"
                            sx={{
                                color: 'grey.700',
                                backgroundColor: theme.palette.grey[50],
                                borderColor: theme.palette.grey[100]
                            }}
                        >
                            <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
                            </Box>
                            Sign in with Google
                        </Button>
                    </AnimateButton>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

                        <Button
                            variant="outlined"
                            sx={{
                                cursor: 'unset',
                                m: 2,
                                py: 0.5,
                                px: 7,
                                borderColor: `${theme.palette.grey[100]} !important`,
                                color: `${theme.palette.grey[900]}!important`,
                                fontWeight: 500,
                                borderRadius: `${customization.borderRadius}px`
                            }}
                            disableRipple
                            disabled
                        >
                            OR
                        </Button>

                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Sign in with Email address</Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* <Formik validateOnChange={false} validateOnBlur={false}> */}
            {/* {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => ( */}
            <form noValidate>
                <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                    <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-email-login"
                        type="email"
                        value={values.email}
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label="Email Address / Username"
                        inputProps={{}}
                    />
                    {touched.email && errors.email && (
                        <FormHelperText error id="standard-weight-helper-text-email-login">
                            {errors.email}
                        </FormHelperText>
                    )}
                </FormControl>

                <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
                    <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password-login"
                        type={showPassword ? 'text' : 'password'}
                        value={values.password}
                        name="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    size="large"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        inputProps={{}}
                    />
                    {touched.password && errors.password && (
                        <FormHelperText error id="standard-weight-helper-text-password-login">
                            {errors.password}
                        </FormHelperText>
                    )}
                </FormControl>
                {showOTP && (
                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                        <FormControl fullWidth error={Boolean(touched.otp && errors.otp)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-otp-login">OTP</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-otp-login"
                                type="text"
                                value={values.otp}
                                name="otp"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="OTP"
                                inputProps={{}}
                            />
                            {touched.otp && errors.otp && (
                                <FormHelperText error id="standard-weight-helper-text-otp-login">
                                    {errors.otp}
                                </FormHelperText>
                            )}
                        </FormControl>
                    </Stack>
                )}
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={(event) => setChecked(event.target.checked)}
                                name="checked"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                        Forgot Password?
                    </Typography>
                </Stack>
                {errors.submit && (
                    <Box sx={{ mt: 3 }}>
                        <FormHelperText error>{errors.submit}</FormHelperText>
                    </Box>
                )}

                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <AnimateButton>
                        <Button
                            disableElevation
                            disabled={isSubmitting}
                            size="large"
                            onClick={() => handleSubmitForm('user')}
                            variant="contained"
                            color="secondary"
                        >
                            Sign in as user
                        </Button>
                    </AnimateButton>

                    <AnimateButton>
                        <Button
                            disableElevation
                            disabled={isSubmitting}
                            size="large"
                            onClick={() => handleSubmitForm('admin')}
                            variant="contained"
                            color="secondary"
                        >
                            Sign in as admin
                        </Button>
                    </AnimateButton>
                </Box>
            </form>
            {/* )} */}
            {/* </Formik> */}
        </>
    );
};

export default FirebaseLogin;
