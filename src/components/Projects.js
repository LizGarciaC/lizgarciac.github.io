import React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className='projects-grid'>
                    {/* Card Proyectos en JavaScript - Cifrado César */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{ color: 'black', height: '32vh', background: 'url(https://wondersite.it/wp-content/uploads/2018/04/gdpr-1.jpg) center / cover' }} ></CardTitle>
                        <CardText>
                            Cipher-Code / Generador de contraseñas seguras   <hr/>
                            Este programa permite a los usuarios generar contraseñas más seguras para sus cuentas de e-mail ó programas similares. La contraseña a cifrar puede ser una palabra ó mensaje breve.
                    </CardText>
                    <CardActions border>
                            <Button colored href='https://github.com/LizGarciaC/gdl-2019-01-bc-core-cipher' target='_blank'>GitHub</Button>
                            <Button colored href='https://lizgarciac.github.io/gdl-2019-01-bc-core-cipher/src/' target='_blank'>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                    </CardMenu>
                    </Card>
                    {/* Card Proyectos en JavaScript - Data Lovers */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'black', height: '28vh', background: 'url(https://abrilmdemulher.files.wordpress.com/2017/08/filtro-pikachu-snapchat.jpg) center / cover' }} ></CardTitle>
                    <CardText>
                        Data Lover´s / Pokemon for Dummies
                    <hr/>
                            Es una página que permite al usuario introducirse al mundo de Pokémon GO, ofreciendo ayuda visual para conocer a todos los pokémos con sus características básicas.
                    </CardText>
                    <CardActions border>
                            <Button colored href='https://github.com/LizGarciaC/GDL002-data-lovers' target='_blank'>GitHub</Button>
                            <Button colored href='https://lizgarciac.github.io/GDL002-data-lovers/src/index.html'target='_blank'>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                    </CardMenu>
                    </Card>
                    {/* Card Proyectos en JavaScript - Red Social */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'black', height: '28vh', background: 'url(https://viajaporelmundo.com.ar/wp-content/uploads/2018/02/vuelos-a-mexico-768x319.jpg) center / cover' }} >Viaja por: </CardTitle>
                    <CardText>
                            Es una aplicación red social en la cual el usuario podrá compartir publicaciones y experiencias de sus viajes en México. Además de crear conciencia del cuidado del medio ambiente.
                    </CardText>
                    <CardActions border>
                            <Button colored href='https://github.com/LizGarciaC/GDL002-social-network' target='_blank'>GitHub</Button>
                            <Button colored href='https://lizgarciac.github.io/GDL002-social-network/src/' target='_blank'>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                    </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className='projects-grid'>
                {/* Card Proyectos en React - Burger Queen*/}
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '28vh', background: 'url(https://www.ubeo.app/cdn/products/11308/600x300/leganes-diner.png) center / cover' }} >Burger Queen</CardTitle>
                    <CardText>
                    Interfaz para un pequeño restaurante de hamburguesas, que está creciendo y necesita tomar pedidos usando una tablet, y enviarlos a la cocina para que se preparen ordenada y eficientemente. La interfaz muestra dos menús (desayuno y resto del día), y el total de la compra.
                </CardText>
                <CardActions border>
                        <Button colored href='https://github.com/LizGarciaC/GDL002-burger-queen' target='_blank'>GitHub</Button>
                        <Button colored href='https://lizgarciac.github.io//GDL002-burger-queen/#/' target='_blank'>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                        <IconButton name='share' />
                </CardMenu>
                </Card>
                {/* Card Proyectos en React - Food Finder*/}
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{ color: 'black', height: '28vh', background: 'url(https://i2.wp.com/elportaldesalta.com.ar/wp-content/uploads/2019/05/Google-Pixel-3a-7.jpg?resize=800%2C445&ssl=1) center / cover' }} >Food Finder</CardTitle>
                <CardText>

                Es una aplicación que te permite encontrar y conocer restaurantes cerca de ti. En la pagina principal podrás encontrar un mapa que te muestra tu ubicación y los restaurantes cercanos, también podrás seleccionar algunos filtros como órden alfabético, rango de precios, tipo de comida.
                </CardText>
                <CardActions border>
                        <Button colored href='https://github.com/LizGarciaC/GDL-open-house' target='_blank'>GitHub</Button>
                        <Button colored href='https://lizgarciac.github.io/GDL-open-house/#/' target='_blank'>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                        <IconButton name='share' />
                </CardMenu>
                </Card>
                {/* Card Proyectos en React - Tic Tac Toe */}
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{ color: 'black', height: '28vh', background: 'url(https://i.pinimg.com/736x/0d/c0/d9/0dc0d9fa716462f825e8e17a136677eb.jpg) center / cover' }} >Espace Tic Tac Toe</CardTitle>
                <CardText>
                        Juego en 2D, con la temática simple de 3 en linea, conocido también como michi o tic tac toe en inglés, para celulares y tabletas
                </CardText>
                <CardActions border>
                        <Button colored href='https://github.com/LizGarciaC/GDL002-mobile-game' target='_blank'>GitHub</Button>
                        <Button colored href='https://expo.io/@lizgarciac/example' target='_blank'>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                        <IconButton name='share' />
                </CardMenu>
                </Card>
            </div>
        )                 
        } else if (this.state.activeTab === 2) {
            return (
                // <div><h1>This is MongoDB </h1></div>
                <div className='projects-grid'>
                {/* Card Proyectos en React - Burger Queen*/}
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <cardTitle style={{ color: 'black', height: '28vh', background: 'url(http://linkredglue.com/wp-content/uploads/caspio-features-illustr_cloud-data_3_2x.png?w=640) center / cover' }} >Burger Queen Back End</cardTitle>
                    <CardText>
                    Continuación del proyecto Burger Queen. Un programa que escucha en un puerto de red, a través del cual podemos enviar consultas (request) y obtener respuestas (response).
                </CardText>
                <CardActions border>
                        <Button colored href='https://github.com/LizGarciaC/GDL002-burger-queen-backend' target='_blank'>GitHub</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                        <IconButton name='share' />
                </CardMenu>
                </Card>
            </div>
            )
        }

    }
    render() {
        return (
            <div className='Category-Tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Javascript</Tab>
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                {/* <section className='projects-grid'> */}
                <Grid>
                    <Cell col={12}>
                        <div className='content'>  {this.toggleCategories()} </div>
                    </Cell>
                </Grid>
                {/* </section> */}
            </div>

        )
    }
}

export default Projects;