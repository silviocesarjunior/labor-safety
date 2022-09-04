import React, { useState } from 'react';

const Card = (props) => {
    const [modal, setModal] = useState(false)

    const toggleModal = ()=>{
        setModal(!modal)
    }
    return (
        <>
            <div className="box btn_shadow">
                <div className='img'>
                    <img src={props.image} alt="" onClick={toggleModal}/>
                </div>
                <div className="title">
                    <h2 onClick={toggleModal}>{props.title}</h2>
                    <a href="#popup" className="arrow" onClick={toggleModal}>
                        <i className="fas fa-arrow-right">
                        </i>
                    </a>
                </div>
            </div>
            {/* Popup Modal*/}
            {modal &&(
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content d_flex">
                        <div className="modal-img left">
                            <img src={props.image} alt=""/>
                        </div>
                        <div className="modal-text right">
                            <h1>{props.title}</h1>
                            <p>{props.content}</p>
                                <button className="close-modal btn_shadow" onClick={toggleModal}>
                                    <i className="fas fa-times"></i>
                                </button>
                        </div>
                    </div>
                </div>

            )}
        </>
    )
}

export default Card