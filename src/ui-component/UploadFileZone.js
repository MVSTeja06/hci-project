import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function UploadFileZone(props) {
    const { onDrop, getInputProps, getRootProps, acceptedFileItems, style, filesInState } = props;
    const fruitStatus = [
        {
            status: 'This fruit is very fresh and has been recently picked from the farm. Enjoy!',
            color: 'green'
        },
        { status: 'This fruit has gone bad.', color: 'red' }
    ];
    const [fruitStatusItem, setFruitStatusItem] = useState({});
    function handleFruitFreshStatus(name) {
        if (name.toLowerCase().includes('fresh')) {
            setFruitStatusItem(fruitStatus[0]);
        } else {
            setFruitStatusItem(fruitStatus[1]);
        }
    }

    const [showStatus, setShowStatus] = useState(false);
    useEffect(() => {
        if (filesInState.length === 0) {
            setShowStatus(false);
            // handleFruitFreshStatus(filesInState[0].name || '');
        } else if (filesInState.length > 0) {
            setShowStatus(true);
            handleFruitFreshStatus(filesInState[0].name);
        }
    }, [JSON.stringify(filesInState)]);

    console.log({ filesInState, fruitStatusItem });

    return (
        <section className="container">
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <em>(You can upload only one file)</em>
            </div>
            <aside
                style={{
                    paddingTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {/* <Typography variant="body1">Images uploaded</Typography> */}
                <ul
                    style={{
                        listStyleType: 'none',
                        padding: '0'
                    }}
                >
                    {acceptedFileItems}
                </ul>
                {showStatus && (
                    <Typography variant="h3" color={fruitStatusItem.color}>
                        {fruitStatusItem.status}
                    </Typography>
                )}
            </aside>
        </section>
    );
}
