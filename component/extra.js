import React, { useState } from 'react'
//import the css here
import styles from '../styles/extra.module.css'
import { IoMdSend } from 'react-icons/io'
import { Fab } from "@mui/material";
import { BsChatDotsFill } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
// import { deepOrange, deepPurple } from '@mui/material/colors';
import { Scrollbar } from 'react-scrollbars-custom';



const PopChat = (props) => {
    let hide = {
        display: 'none',
    }
    let show = {
        display: 'block'
    }
    let textRef = React.createRef()
    // const { messages } = props
    const messages = [
        {
            msg: 'hello'
        },
        {
            msg: 'hi'
        },
        {
            msg: 'hello'
        },
        {
            msg: 'hi'
        },
        {
            msg: 'hello'
        },
        {
            msg: 'hi'
        },
        {
            msg: 'hello'
        },
        {
            msg: 'hi'
        },
        {
            msg: 'hello'
        },
        {
            msg: 'hi'
        },

    ]

    const [chatopen, setChatopen] = useState(false)
    const toggle = e => {
        setChatopen(!chatopen)
    }

    const handleSend = e => {
        const get = props.getMessage
        get(textRef.current.value)
    }

    return (
        <div className={styles.chatCon}>
            <div className={styles.chatbox} style={chatopen ? show : hide}>
                <div className={styles.header}><Avatar sx={{ bgcolor: '#f89500' }}>IB</Avatar>ibrar</div>

                <div className={styles.msgarea}>
                        {
                            messages.map((msg, i) => (
                                i % 2 ? (
                                    <p className={styles.right}><span>{msg.msg}</span></p>
                                ) : (
                                    <p className={styles.left}><span>{msg.msg}</span></p>
                                )
                            ))
                        }

                </div>

                <div className={styles.footer}>
                    <input type="text" ref={textRef} placeholder='Enter your Query' />
                    <div className={styles.buttonSend} >


                        <IoMdSend width={30} color='#f89500' onClick={handleSend} />
                    </div>
                </div>
            </div>
            <div className={styles.pop}>
                <p>
                    {chatopen ?
                        <><Fab onClick={toggle} color="warning" aria-label="edit">
                            <RxCross1 size={25} />
                        </Fab>

                        </> : <>
                            <Fab onClick={toggle} color="warning" aria-label="edit">
                                <BsChatDotsFill size={25} />
                            </Fab>
                        </>

                    }
                </p>
            </div>
        </div>
    )
}

export default PopChat