import { Box } from '@material-ui/core';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getProductDetails } from  '../../redux/actions/productActions'

const DetailView = ({ match }) => {

    const { product } = useSelector(state => state.getProductDetails)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))
    }, [dispatch])
    
    return(
        <Box>

        </Box>

            </Box>
        </Box>
    )
}

export default DetailView