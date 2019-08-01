import React from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';
// import {Image} from './Components/Image/avatar.png'

class Contact extends React.Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-form'>
                    <div class="row">
                        <form action="https://formspree.io/lunanobel@hotmail.com" method="POST">
                        <h4 class="widget-title"><strong>CONTACTAME</strong></h4>
                            <fieldset class='col-md-4 col-sm-6'>
                                <input type="text" size='32' placeholder="Tu nombre..." />
                            </fieldset>
                            <fieldset class="col-md-4 col-sm-6">
                                <input type="email" id="email" placeholder="Email" name="_replyto" size='32'/>
                            </fieldset>
                                <fieldset class="col-md-4 col-sm-12">
                                <input name="Subject" type="text" id="Asunto" size='32' placeholder="Asunto" />
                            </fieldset>
                            <fieldset class="col-md-12 col-sm-12">
                                <textarea name="message" id="message" cols="30" rows="6"
                                    placeholder="Deja tu mensaje"></textarea>
                            </fieldset>
                            <fieldset class="col-md-12 col-sm-12">
                                <input type="submit" class="button big default" value="Send" />
                            </fieldset>
                        </form>
                    </div>
                </Grid >
            </div >
        )
    }
}

export default Contact;