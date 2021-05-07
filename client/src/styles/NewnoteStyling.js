import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    Paper : {
        backgroundColor: 'rgb(247 247 247)',
        padding: '0.5rem 2rem',
        textAlign: 'center',
        borderRadius: '1rem',
        margin: '0.5rem 0',
    },

    textField:{
        width: '80%',
    },
    textArea:{
        width: '80%',
        marginTop: "0.5rem",
        border: "none",
        background: "#fff"
    },
    btn: {
        marginTop: '0.5rem',
        padding: '0.5rem 1rem',
        marginLeft: '-75%',
        borderRadius: ' 1rem ',
        background: 'rgb(38 98 137)',
        marginTop: '3rem'
      },
    grid: {
        marginTop: '1rem',
    },  

}));