import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { useState } from 'react';

const Contact = () => {
    const form = useRef();

    const [done,setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fx3oz6s', 'template_gr2us4c', form.current, 'user_ZlR7Sby7m2n2A6rsE9rRd')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className='contact-form' id='Contact'>
            <div className='w-left'>
                <div className='awesome'>
                    <span>Formulário de </span>
                    <span>Contato</span>
                    <div
                        className='blur s-blurl'
                        style={{ background: "#ABF1FF94" }}>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Nome" />
                    <input type="email" name="user_email" className="user" placeholder="E-mail" />
                    <textarea name="message" className="user" placeholder='Mensagem' />
                    <input type="submit" value="Enviar" className='button' />
                    <span>{done && "Obrigado pelo contato!"}</span>
                    <div
                        className='blur c-blurl'
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact