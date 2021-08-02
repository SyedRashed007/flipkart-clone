import { makeStyles, InputBase } from "@material-ui/core"
import {Search} from '@material-ui/icons'

const useStyle = makeStyles(theme => ({
    search: {
        borderRadius: 2,
        backgroundColor: '#fff',
        width: '38%',
        marginLeft: 10,
        display: 'flex'
    },
    searchIcon: {
        padding: 5,
        display: 'flex',
        marginLeft: 'auto',
        color: 'blue'
    },
    inputRoot: {
        fontSize: 'unset',
        width: '100%'
    },
    inputInput: {
        paddingLeft: 20,
        width: '100%',
    },
}))

const SearchBar = () => {
    const classes = useStyle();
    return(
        <div className={classes.search}>
            <InputBase
              placeholder="Search for products, brands and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
              <Search />
            </div>
          </div>
    )
}

export default SearchBar