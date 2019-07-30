import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';


class App extends Component {
  render() {
    return (

      < div className="demo-big-content">
        <Layout>
          <Header className='header-color' title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Inicio</Link>} >
            <Navigation>
              <Link to='/Aboutme'>Sobre mi</Link>
              <Link to='/Projects'>Proyectos</Link>
              <Link to='/Contact'>Contacto</Link>
              <Link to='/Curriculum'>Curriculum</Link>
            </Navigation>
          </Header>
          {/* Menu hamburguesa */}
          <Drawer title="Portafolio">
            <Navigation>
              <Link to='/'>Inicio</Link>
              <Link to='/Aboutme'>Sobre mi</Link>
              <Link to='/Projects'>Proyectos</Link>
              <Link to='/Contact'>Contacto</Link>
              <Link to='/Curriculum'>Curriculum</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div >
    );
  }
}
export default App;
