import {Box, makeStyles} from "@material-ui/core";
import Title from "./Title";
import Search from "./Search";
import Image from "next/image";

const useStyles = makeStyles({
    root: {
        position: 'relative',
        overflow: 'hidden',
        borderBottomRightRadius: '20px',
        borderBottomLeftRadius: '20px',
    },
    content: {
        position: 'absolute',
        bottom: '10px'
    }
})

const SearchHeader = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box className={classes.content} p={12}>
                <Title/>
                <Search/>
            </Box>
        </Box>
    )
}

export default SearchHeader