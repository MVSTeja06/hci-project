import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadFileZone from './UploadFileZone';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

export default function SimpleModal({ open, setOpen, handleClickOpen }) {
    const handleClose = () => {
        setOpen(false);
        clearFiles();
    };

    const [filesInState, setFilesInState] = useState([]);

    const onDrop = (acceptedFiles) => {
        setFilesInState(acceptedFiles);
    };

    const clearFiles = () => {
        setFilesInState([]);
    };

    console.log({ filesInState });
    const acceptedFileItems = filesInState.map((file) => (
        <li key={file.path}>
            {/* {file.path} - {file.size} bytes */}
            <img width={150} height={150} src={URL.createObjectURL(file)} alt="" />
        </li>
    ));

    const { acceptedFiles, fileRejections, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
        accept: { 'image/*': [] },
        maxFiles: 1,
        onDropAccepted: onDrop
    });
    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isFocused ? focusedStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {})
        }),
        [isFocused, isDragAccept, isDragReject]
    );
    // program to get a random item from an array

    return (
        <React.Fragment>
            <Dialog fullWidth={true} maxWidth={'sm'} open={open} onClose={handleClose}>
                <DialogTitle>
                    <Typography variant="h2"> Upload image</Typography>
                </DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>{handleFruitFreshStatus()}</DialogContentText> */}
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto'
                            // width: 'fit-content'
                        }}
                    >
                        <UploadFileZone
                            fileRejections={fileRejections}
                            getInputProps={getInputProps}
                            getRootProps={getRootProps}
                            acceptedFileItems={acceptedFileItems}
                            style={style}
                            onDrop={onDrop}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
