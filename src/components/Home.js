import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends React.Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='home-grid' >
                    <Cell col={12}>
                    <img src= './images/LogoLG.PNG'
                    alt='avatar'
                    className='avatar-img'
                    />
                    <div className='banner-text'>
                        <h1> LIZETH GARCIA </h1>
                        <h2> Front-End Developer</h2>
                        <h2> Ingeniero en Electrónica </h2>
                         <hr/> 
                            {/* <p> HTML/CSS | JAVASCRIPT | REACT | GIT | GITHUB | NODEJS | EXPRESS | MONGODB | FIREBASE</p> */}
                    <div className='social-links'
                    img src='https://cdn.shopify.com/s/files/1/1393/2855/products/ramo-10-de-mayo-flores-mama.jpg?v=1559084175'>
                        {/* Icono LinkedIn */}
                        <a href='https://linkedin.com/in/lizethsarahigarcia' rel='noopener noreferrer' target='_blank' title='linkedin'> 
                        <i className='fa fa-linkedin-square' aria-hidden='true' />
                        </a>
                        {/* Icono GitHub */}
                        <a href='https://github.com/LizGarciaC' rel='noopener noreferrer' target='_blank' title='GitHub'> 
                        <i className='fa fa-github-square' aria-hidden='true' />
                        </a>
                        {/* Icono Curriculum */}
                        <a href='https://twitter.com/lunanobel' rel='noopener noreferrer' target='_blank' title='Twitter'> 
                        <i className='fa fa-twitter-square' aria-hidden='true' />
                        </a>
                    </div>
                    </div>
                        
                    </Cell>
                </Grid>
            </div>
        //    minuto 18:45, video 2
        )
    }
}

export default Home;