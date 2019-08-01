import React, { Component } from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';

class Aboutme extends Component {
  render() {
    return (
      <div className='contact-body' >
        <Grid className='contact-grid' >
          <Cell col={6}>
            <h2>Lizeth García</h2>
            <img
              src='./images/avatar.png'
              alt='avatar'
              style={{ height: '15em' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Desarrolladora Front-End.
            </p>
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              El mundo de la tecnología me produce gran fascinación, por los constantes retos que supone,
              y por la oportunidad de desarrollar el potencial creativo.
            </p><br />
            <hr style={{ borderTop: '.2em solid #833fb2', width: '100%' }} />
          </Cell>
          <Cell col={6}>
            {/* <hr /> */}
            <div className='contact-list'>
              <h2>Habilidades Técnicas</h2>
              <Cell col={12}>
                <img src='https://img2.freepng.es/20181209/yvf/kisspng-javascript-angularjs-node-js-computer-icons-clip-a-clipart-js-5c0d82819a4963.228658921544389249632.jpg'
                  className='icon-img' title='JavaScript'
                />
                <img src='http://www.wiquest.com/wp-content/uploads/html5-logo.png'
                  className='icon-img' title='HTML 5'
                />
                <img src='https://logosrated.net/wp-content/uploads/parser/W3C-Logo-1.png'
                  className='icon-img' title='CSS 3'
                />
                <img src='https://miro.medium.com/max/480/1*JktK87FL_sqDDnuxHxe6Fw.png'
                  className='icon-img' title='Firebase'
                />
                <img src='https://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png'
                  className='icon-img' title='React'
                />
                <img src='http://airemadrid.herokuapp.com/img/nodejs.png'
                  className='icon-img' title='NodeJs'
                />
                <img src='https://img.icons8.com/color/48/000000/npm.png'
                  className='icon-img' title='NPM'
                />
                <img src='https://img.icons8.com/material-sharp/48/000000/github.png'
                  className='icon-img' title='GitHub'
                />
                <img src='https://img.icons8.com/color/48/000000/git.png'
                  className='icon-img' title='Git'
                />
              </Cell>
              <hr style={{ borderTop: '.2em solid #e22947', width: '100%' }} />
            </div>
            <div className='contact-list'>
              <h2>Habilidades Blandas</h2>
              <Grid>
                <Cell col={6}>
                  <li align='left'>Adaptabilidad</li>
                  <li align='left'>Autoaprendizaje</li>
                  <li align='left'>Análisis</li>
                </Cell>
                <Cell col={6}>
                  <li align='left'>Trabajo en equipo</li>
                  <li align='left'>Mejora Continua</li>
                  <li align='left'>Creatividad</li>
                </Cell>
              </Grid>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}


export default Aboutme;