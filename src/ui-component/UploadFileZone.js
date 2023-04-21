import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function UploadFileZone(props) {
    const { onDrop, getInputProps, getRootProps, acceptedFileItems, style } = props;
    const fruitStatus = [
        {
            status: 'This fruit is very fresh and has been recently picked from the farm. Enjoy!',
            color: 'green'
        },
        { status: 'This fruit has gone bad.', color: 'red' }
    ];
    const [fruitStatusItem, setFruitStatusItem] = useState({});
    function handleFruitFreshStatus() {
        // get random index value
        const randomIndex = Math.floor(Math.random() * fruitStatus.length);

        // get random item
        const item = fruitStatus[randomIndex];

        setFruitStatusItem(item);
    }

    const [showStatus, setShowStatus] = useState(false);
    useEffect(() => {
        if (acceptedFileItems.length === 0) {
            setShowStatus(false);
            handleFruitFreshStatus();
        } else if (acceptedFileItems.length > 0) {
            setShowStatus(true);
            handleFruitFreshStatus();
        }
    }, [acceptedFileItems]);

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
