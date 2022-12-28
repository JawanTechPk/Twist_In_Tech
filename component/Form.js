import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from '../styles/custom.module.css'
import { Grid } from '@mui/material';




const theme = createTheme();

export default function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Container>





            <Grid container spacing={3} alignItems='center'  >


              <Grid item sm={6} md={12} xs={12}    >
                <label>Name</label>
                <input  placeholder='Name' className={styles.inp} />
              </Grid>
              <Grid item sm={6} md={12} xs={12}    >
              <label>Email</label>
                <input placeholder='Email' className={styles.inp} />
              </Grid>
              <Grid item sm={6} md={12} xs={12}    >
              <label>Subject</label>
                <input placeholder='Subject' className={styles.inp} />
              </Grid>
              <Grid item sm={6} md={12} xs={12}    >
              <label>Message / FeedBack</label>
              {/* <textarea */}
                <textarea   placeholder='Message / FeedBack' className={styles.textArea} />
              </Grid>


              <Grid item sm={6} md={12} xs={12}   >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2,backgroundColor:"#f89500" }}
                >
                  submit
                </Button>
              </Grid>






            </Grid>
          </Container>
        </Box>
      </Container >
    </ThemeProvider >
  );
}