import React, { useContext, useEffect, useState } from 'react'
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
import BasicModal from './Modal';
import { constants } from '../utils/constants';
import NoteContext from '../pages/context/notecontext';
import axios from 'axios';
import { apiHandle } from '../pages/config/apiHandle';



const PopChat = (props, data) => {


    const apiData = useContext(NoteContext)

    const { state, update } = apiData
    // let token = localStorage.getItem("token")

    const [msgDataGet, setMsgDataGet] = useState([])
    useEffect(() => {

        apiHandle(localStorage.getItem('token')).get('/get-user-chats').then((res) => {
            setMsgDataGet(res?.data?.chats)

        }).catch((err) => {
            console.log(err);
        })


    }, [])

    console.log(msgDataGet);


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
            msg: 'how are you'
        },
        {
            msg: 'am good'
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
    const [userData, setUserData] = useState('')
    const [dataa, setDataa] = useState('')


    const toggle = e => {
        setChatopen(!chatopen)
    }
    console.log(data);

    const handleSend = e => {
        // const get = props.getMessage
        // get(textRef.current.value)
        apiHandle(localStorage.getItem('token')).post('/chat/auth-chat', { message: dataa }).then((res) => {
            // update(dataa, constants.CHAT_SEND)
            setMsgDataGet(res?.data?.data)
            setDataa('')
            // console.log("ajaaaaaaaaaaaaa",res);
        }).catch((err) => {
            console.log(err);
        })

    }

    useEffect(() => {
        setUserData(localStorage.getItem("user"))

    }, [])


    const abc = () => {
        setUserData(localStorage.getItem("user"))

    }


    return (
        <div className={styles.chatCon}>
            <div className={styles.chatbox} style={chatopen ? show : hide}>
                <div className={styles.header}><BasicModal abc={abc} /></div>

                <div className={styles.msgarea}>
                    {
                        msgDataGet?.map((e, i) => (
                            <p className={styles.right}><span>{e.message}</span></p>
                        ))
                    }

                </div>

                {userData ?
                    <div className={styles.footer}>
                        <input value={dataa} onChange={(e) => setDataa(e.target.value)} color='black' type="text" ref={textRef} placeholder='Enter your Query' />
                        <div className={styles.buttonSend} >


                            <IoMdSend width={30} color='#f89500' onClick={handleSend} />
                        </div>
                    </div>
                    : null}

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