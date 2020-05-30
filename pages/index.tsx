import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { Grid, makeStyles, Button, Paper, TextField, Snackbar } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import WebIcon from '@material-ui/icons/Web';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

export default function Index() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sendEmail = async ()=>{
    console.log(email);
    console.log(message);
    const ret = axios.get('/api/email', {
      params: {
        email,
        message
      }
    });
    if(ret) {
      setOpen(true);
    }
  }

  const handleCloseMessage = ()=>{
    setOpen(false);
  }

  return (
    <>
      <header className={classes.header}>
        <Container className={classes.header__content} >
          <div className={classes.header__left}>
            <WebIcon className={classes.header_icon} />
            <a style={{textDecoration: 'none', color: '#fff'}} href="#">
            <Typography variant="h6" component="h1">
              haibo.dev
            </Typography>
            </a>
          </div>
          <div className={classes.header__right}>
            <Hidden mdUp>
              <IconButton color='inherit' aria-controls="simple-menu" aria-haspopup="true" component="span" onClick={handleOpenMenu}>
                <ListIcon />
              </IconButton>
              <Menu
                classes={{
                  paper: classes.menu
                }}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><a style={{textDecoration: 'none', color: '#fff'}} href="#services">SERVICES</a></MenuItem>
                <MenuItem onClick={handleClose}><a style={{textDecoration: 'none', color: '#fff'}} href="#portfolio">PORTFOLIO</a></MenuItem>
                <MenuItem onClick={handleClose}><a style={{textDecoration: 'none', color: '#fff'}} href="#pricing">PRICING</a></MenuItem>
              </Menu>
            </Hidden>
            <Hidden smDown>
              <a style={{textDecoration: 'none', color: '#fff'}} href="#services">
              <Typography variant="body1" component="h1" className={classes.largeMenu}>
                SERVICES
              </Typography>
              </a>
              <a style={{textDecoration: 'none', color: '#fff'}} href="#portfolio">
              <Typography variant="body1" component="h1" className={classes.largeMenu}>
                PORTFOLIO
              </Typography>
              </a>
              <a style={{textDecoration: 'none', color: '#fff'}} href="#pricing">
              <Typography variant="body1" component="h1" className={classes.largeMenu}>
                PRICING
              </Typography>
              </a>
            </Hidden>
            
          </div>
        </Container>
      </header>
      <main>
        <section className={classes.hero}>
          <div className={classes.hero__inner}>
            <Container className={classes.introduction} maxWidth='sm' >
              <Typography variant="h4" component="h1" gutterBottom>
                WEB APP & MOBILE APP DEVELOPMENT
              </Typography>
              <p>
                Specializing in ReactJS/PHP Web development. If you're a business seeking a web presence or are looking to hire, <a style={{color: '#fff', fontWeight: 'bold'}} href="#touch">contact me</a>
              </p>
              <Button style={{marginTop: 16}} variant="contained" color="secondary" href="#pricing">Get Started</Button>
            </Container>
          </div>
        </section>
        <section>
          <a id='services' style={{position: 'relative', top: -82}}></a>
           <Container>
             <Grid container spacing={2}>
               <Grid item sm={12} md={4} style={{paddingTop: 32}}>
                  <Container className={classes.service}>
                    <WebIcon color='primary' fontSize='inherit' />
                    <Typography variant="h6" component="h2">
                      DESIGN + DEVELOPMENT
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      Clean, modern designs - optimized for performance, search engines, and converting users to customers.
                    </Typography>
                  </Container>
               </Grid>
               <Grid item sm={12} md={4} style={{paddingTop: 32}}>
                  <Container className={classes.service}>
                    <MobileFriendlyIcon color='primary' fontSize='inherit' />
                    <Typography variant="h6" component="h2">
                      Mobile-friendly
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      A responsive design makes your website accessible to all users, regardless of their device.
                    </Typography>
                  </Container>
               </Grid>
               <Grid item sm={12} md={4} style={{paddingTop: 32}}>
                  <Container className={classes.service}>
                    <ShoppingCartIcon color='primary' fontSize='inherit' />
                    <Typography variant="h6" component="h2">
                      ECOMMERCE
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      Experience developing Modern Web APP in various industries including ecommerce, car dealer, CMS.
                    </Typography>
                  </Container>
               </Grid>
             </Grid>
             <Box display="flex" justifyContent="center" my={4} >
              <Button variant="contained" color='primary' size='large' href='#pricing'>Learn more</Button>
             </Box>
           </Container>
        </section>
        <section>
        <a id='portfolio' style={{position: 'relative', top: -82}}></a>
          <hr/>
          <Container style={{paddingTop: 32, paddingBottom: 32}}>
            <Grid container spacing={2}>
                <Grid item sm={12} md={6} style={{padding: 16}}>
                  <img style={{width: '100%'}} src="/nextcar.jpg" />
               </Grid>
               <Grid item sm={12} md={6} style={{padding: 24}}>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Next Car
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    Developed using ReactJS and NodeJS. A Platform for evaluating, selling and buying used car. Features including evaluate car price by plate, used car marketplace, finance, insurance.
                  </Typography>
               </Grid>
             </Grid>
          </Container>
          <hr/>
          <Container style={{paddingTop: 32, paddingBottom: 32}}>
            <Grid container spacing={2}>
                <Grid item sm={12} md={6} style={{padding: 16}}>
                  <Box display="flex">
                    <img style={{width: '50%', margin: 'auto'}} src="/goodeal.jpg" />
                  </Box>
               </Grid>
               <Grid item sm={12} md={6} style={{padding: 24}}>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Goodeal APP
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    Developed using React Native. A Platform similar to Groupon combined with Uber Eats. Providing attractive deals and ecommerce for local merchants.
                  </Typography>
               </Grid>
             </Grid>
          </Container>
          <hr/>
          <Container style={{paddingTop: 32, paddingBottom: 32}}>
            <Grid container spacing={2}>
                <Grid item sm={12} md={6} style={{padding: 16}}>
                  <img style={{width: '100%'}} src="/VincentCapital.jpg" />
               </Grid>
               <Grid item sm={12} md={6} style={{padding: 24}}>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Vincent Capital
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    Developed using ReactJS. Finance company website also includes an internal loan management system for customers.
                  </Typography>
               </Grid>
             </Grid>
          </Container>
        </section>
        <section className={classes.hero}>
          <a id='pricing' style={{position: 'relative', top: -82}}></a>
          <div style={{padding: '60px 0'}}>
            <Container>
            <Typography variant="h6" component="h1" gutterBottom style={{textAlign: 'center', paddingBottom: 24}}>
              PRICING
            </Typography>
            <Grid container spacing={4}>
               <Grid item sm={12} md={4} style={{paddingLeft: 64, paddingRight: 64, width: '100%'}}>
                  <Paper style={{textAlign: 'center', paddingBottom: 32}}>
                    <div style={{backgroundColor: '#80808024', padding: 16}}>
                      <Typography variant="h5" component="h1" style={{color: 'grey'}}>
                        BASIC
                      </Typography>
                    </div>
                    <Typography variant="body2" component="div" gutterBottom>
                      <p>Website Audit</p>
                      <p>Design</p>
                      <p>Development</p>
                    </Typography>
                    <br/>
                    <Button variant="outlined" href="#touch">Request Quote</Button>
                  </Paper>
               </Grid>
               <Grid item sm={12} md={4} style={{paddingLeft: 64, paddingRight: 64, width: '100%'}}>
                <Paper style={{textAlign: 'center', paddingBottom: 32}}>
                  <div style={{backgroundColor: '#7205f7', padding: 16}}>
                    <Typography variant="h5" component="h1" style={{color: 'white'}}>
                      STANDARD
                    </Typography>
                    </div>
                    <Typography variant="body2" component="div" gutterBottom>
                      <p>Website Audit</p>
                      <p>Design</p>
                      <p>Development</p>
                      <p>Web APP Features</p>
                      <p>Backend API</p>
                    </Typography>
                    <br/>
                    <Button variant="contained" color="primary" href="#touch">Request Quote</Button>
                  </Paper>
               </Grid>
               <Grid item sm={12} md={4} style={{paddingLeft: 64, paddingRight: 64, width: '100%'}}>
                <Paper style={{textAlign: 'center', paddingBottom: 32}}>
                <div style={{backgroundColor: '#ffcd00', padding: 16}}>
                    <Typography variant="h5" component="h1" style={{color: 'white'}}>
                      PREMIUM
                    </Typography>
                    </div>
                    <Typography variant="body2" component="div" gutterBottom>
                      <p>Website Audit</p>
                      <p>Design</p>
                      <p>Development</p>
                      <p>Web APP Features</p>
                      <p>Backend API</p>
                      <p>Native Mobile APP</p>
                      <p>Outsourcing Team</p>
                    </Typography>
                    <br/>
                    <Button variant="contained" color="secondary" href="#touch">Request Quote</Button>
                  </Paper>
               </Grid>
             </Grid>
             </Container>
          </div>
        </section>
        <section>
        <a id='touch' style={{position: 'relative', top: -82}}></a>
          <Container style={{paddingTop: 50}}>
          <Typography variant="h4" component="h1" style={{color: 'black', textAlign: 'center'}}>
            Get in touch
          </Typography>
          <form>
            <Container maxWidth="xs" style={{paddingTop: 24}}>
              <TextField id="email" label="Email" variant="outlined" fullWidth onChange={e=>setEmail(e.target.value)}  />
            </Container>
            <Container maxWidth="xs" style={{paddingTop: 24}}>
              <TextField
                id="message"
                label="Message"
                multiline
                rows={5}
                variant="outlined"
                fullWidth
                onChange={e=>setMessage(e.target.value)}
              />
            </Container>
            <Container maxWidth="xs" style={{paddingTop: 24, textAlign: 'center'}}>
              <Button variant="contained" color="primary" onClick={sendEmail}>Send</Button>
            </Container>
          </form>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseMessage}>
            <MuiAlert onClose={handleCloseMessage} severity="success">
              Message Sent! I will come back to you soon!
            </MuiAlert>
          </Snackbar>
          </Container>
        </section>
        <footer>
          <Container style={{padding: 50, textAlign: 'center'}}>
            <a target='_blank' style={{padding: 16}} href="https://www.linkedin.com/in/haibojiang/">LinkedIn</a>
            <a style={{padding: 16}} href="mailto:jianghaibo1985@gmail.com">Email</a>
            <a target='_blank' style={{padding: 16}} href="https://github.com/haibo3318">GitHub</a>
          </Container>
        </footer>
      </main>
    </>
  );
}

const useStyles = makeStyles({
  header_icon: {
    marginRight: 8
  },
  menu: {
    backgroundColor: '#741ce8',
    color: 'white'
  },
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    color: '#fff',
    backgroundColor: '#741ce8',
    zIndex: 100
  },
  header__content: {
    height: 82,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  header__left: {
    display: 'flex',
    alignItems: 'center',
  },
  header__right: {
    display: 'flex',
    alignItems: 'center',
  },
  hero: {
    background: 'linear-gradient(to bottom,#7a19f1,#332179)',
    backgroundAttachment: 'fixed',
    color: '#fff'
  },
  hero__inner: {
    padding: '60px 0',
    height: 432
  },
  introduction: {
    paddingTop: 100,
    paddingBottom: 80,
    textAlign: 'center'
  },
  service: {
    textAlign: 'center',
    fontSize: 60,
    '& h2': {
      color: '#741ce8'
    }
  },
  largeMenu: {
    padding: '30px 20px'
  }
});