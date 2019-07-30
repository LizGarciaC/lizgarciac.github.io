import React from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';
// import {Image} from './Components/Image/avatar.png'



class Contact extends React.Component {
    render() {
        return (
            <div className='contact-body'>
                {/* <Grid className='contact-grid'> */}


                    <div className='contact'>
                            <div class="col-md-12">
                                <h4 class="widget-title"><strong>CONTACTAME</strong></h4>
                            </div>
                        </div>
                        <div class="row">
                            <form action="https://formspree.io/lunanobel@hotmail.com" method="POST" class="contact-form">
                                <fieldset class='col-md-4 col-sm-6'>
                                    <input type="text" placeholder="Tu nombre..." />
                                </fieldset>
                                <fieldset class="col-md-4 col-sm-6">
                                    <input type="email" id="email" placeholder="Email" name="_replyto" />
                                </fieldset>
                                <fieldset class="col-md-4 col-sm-12">
                                    <input name="Subject" type="text" id="Asunto" placeholder="Subject..." />
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
                    <hr className="contact-hr"/>
                {/* </Grid > */}
            </div >
        )
    }
}

export default Contact;