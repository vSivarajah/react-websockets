import React, {useEffect, useState, createContext} from 'react';
import axios from 'axios';


export const AppContext = createContext();



export default function(props) {
    const [test, setTest ] = useState('hello world');
    const [rs, setRs] = useState(0);
    const [ws, setWs] = useState(null);

    const [wsId, setWsId] = useState('');
    const [jwt, setJwt] = useState(null);
    const request = async (jwt, type, data) => {
        let payload = {
            jwt,
            type,
            data
        };
        ws.send(JSON.stringify(payload));
    }

    const heartbeat = async (ws) => {
        setTimeout(
            function() {
                if(rs !== ws.readyState){
                    setRs(ws.readyState)
                }
                heartbeat(ws);
            }
        .bind(this),
        1000
        );
    }

    const configureWebsocket = async() => {
        ws.onopen = function(open_event) {
            ws.onmessage = function(event) {
                console.log(event);
                let tjo = JSON.parse(event.data);
                switch(tjo['type']){
                    case "server-ws-connect-success-msg":
                        setWsId(tjo['data']);
                        break;
                    case "server-ws-connect-success-jwt":
                        setJwt(tjo['data']);
                        request(tjo['data'], 'test-jwt-message', 'noop');
                    default:
                        break;
                }
            }
            ws.onclose = function(close_event){
                console.log(close_event);
            }
            ws.onerror = function(error_event) {
                console.log(error_event);
            }
            request('^vAr^', 'register-client-msg', 'noop')
        }
    }


    useEffect(() => {
        if (ws === null) {
            setWs(new WebSocket('ws://localhost:1200/ws'))
        }
        if (ws !== null && rs === 0) {
            configureWebsocket();
            heartbeat(ws);
        }
    }, [ws, rs])
    return (
        <AppContext.Provider value={{
            test, setTest,
            rs,
            request,
            wsId,jwt,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}