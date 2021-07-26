import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import { History } from './About';
import Contact from './Contact';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

 const App = () => {
    return (
       <>
       <div style={{textAlign:'center'}}>
        <CssBaseline />
      <Container maxWidth="md">
       <Menu/>
       <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about-us' component={About}/>
        <Route exact path='/about-us/history' component={History}/>
        <Route exact path='/contact-us' component={Contact}/>
       </Switch>
       </Container>
       </div>
        </>
    )
}
export default App;