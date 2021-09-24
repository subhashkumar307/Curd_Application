import { Box, Typography } from '@material-ui/core';
import manage from '../Asses/AssesImage/Management5.jpg';
import manget from '../Asses/AssesImage/Management7.jpg';


const Codefor = () => {
    return (

        <Box styele={{ margin: 50, fontSize: '20px' }} >
            <Typography varient='h2' style={{ margin: 50, fontSize: '35px' }} >Data for Warehouse</Typography>

            <Box style={{ display: 'flex' }}>
                <img src={manage} style={{ width: '50%', height: '50%' }} />
                <img src={manget} style={{ width: '50%', height: '50%' }} />
            </Box>
        </Box>
    );
}
export default Codefor;