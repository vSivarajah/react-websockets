import React, {useState,useContext} from 'react';
import styled from 'styled-components';
import {AppContext} from '../AppContext.js';


const StyledSignupModal = styled.div`
position: fixed;
z-index: 0;
width: 100vw;
height: 100vh;
top: 0px;
left: 0px;
overflow: hidden;
background-color: rgba(41,48,59,.8);
z-index:4;

#sign-up-center-dialog {
    position: relative;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    border-radius: 6px;
    
    background: #fff;
    color: #29303b;
    max-width: 380px;
    max-height: 700px;
    box-shadow: 0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1);

    #sign-up-center-dialog-header {
        border-bottom: solid 1px #dedfe0;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        
        color: #29303b;
        display: block;
        font-weight: 600;
        font-size: 20px;
        padding: 24px 24px 24px 24px;

        #sign-up-center-dialog-header-close{
            font-size: 3.6rem;
            display: inline-block;
            width: 20px;
            height: 20px;
            background: #686f7a;
            -webkit-mask: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzAxLjA3NiAzMDEuMDc2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDEuMDc2IDMwMS4wNzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNOTguMTU5LDE1MC41MzlMMTAuODU4LDIzNy44NGMtMTQuNDYxLDE0LjQ2OS0xNC40NjEsMzcuOTM2LDAsNTIuMzk3DQoJCWMxNC40NTMsMTQuNDUzLDM3LjkyLDE0LjQ1Myw1Mi4zNzIsMGw4Ny4zMDktODcuMzE3bDg3LjI5Myw4Ny4zMTdjMTQuNDY5LDE0LjQ1MywzNy45MiwxNC40NTMsNTIuMzgxLDANCgkJYzE0LjQ3Ny0xNC40NjksMTQuNDYxLTM3LjkzNiwwLTUyLjM5N2wtODcuMjkzLTg3LjMwMWw4Ny4zMDEtODcuMjg1YzE0LjQ2OS0xNC40NzcsMTQuNDY5LTM3LjkzNiwwLTUyLjM5Nw0KCQljLTE0LjQ2OS0xNC40NzctMzcuOTItMTQuNDc3LTUyLjM4OSwwbC04Ny4yOTMsODcuMzA5TDYzLjIzLDEwLjg1OGMtMTQuNDUzLTE0LjQ3Ny0zNy45Mi0xNC40NzctNTIuMzgxLDANCgkJYy0xNC40NjEsMTQuNDYxLTE0LjQ2MSwzNy44OTUsMCw1Mi4zNjRMOTguMTU5LDE1MC41Mzl6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==");
            mask: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzAxLjA3NiAzMDEuMDc2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDEuMDc2IDMwMS4wNzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNOTguMTU5LDE1MC41MzlMMTAuODU4LDIzNy44NGMtMTQuNDYxLDE0LjQ2OS0xNC40NjEsMzcuOTM2LDAsNTIuMzk3DQoJCWMxNC40NTMsMTQuNDUzLDM3LjkyLDE0LjQ1Myw1Mi4zNzIsMGw4Ny4zMDktODcuMzE3bDg3LjI5Myw4Ny4zMTdjMTQuNDY5LDE0LjQ1MywzNy45MiwxNC40NTMsNTIuMzgxLDANCgkJYzE0LjQ3Ny0xNC40NjksMTQuNDYxLTM3LjkzNiwwLTUyLjM5N2wtODcuMjkzLTg3LjMwMWw4Ny4zMDEtODcuMjg1YzE0LjQ2OS0xNC40NzcsMTQuNDY5LTM3LjkzNiwwLTUyLjM5Nw0KCQljLTE0LjQ2OS0xNC40NzctMzcuOTItMTQuNDc3LTUyLjM4OSwwbC04Ny4yOTMsODcuMzA5TDYzLjIzLDEwLjg1OGMtMTQuNDUzLTE0LjQ3Ny0zNy45Mi0xNC40NzctNTIuMzgxLDANCgkJYy0xNC40NjEsMTQuNDYxLTE0LjQ2MSwzNy44OTUsMCw1Mi4zNjRMOTguMTU5LDE1MC41Mzl6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==");
            float: right;
            top: -20px;
            position: relative;

            &:hover {
                cursor:pointer;
            }
        }

       
    }

    & #sign-up-center-dialog-form {
        padding: 24px 24px 24px 24px;
        
        #sign-up-validation-errors {
            border: 1px solid #f00;
            margin-bottom: 20px;
            padding: .2rem;
            margin-top: 1px;
            font-size: 15px;
            border-radius: .2rem;
            border: 1px solid transparent;
            border-color: transparent;
            background-color: #faebeb;
            font-weight: 400;
            color: #521822;
        }
        & span {
            display: inline-block;
             position: relative;
             width: 100% important;
        }
        & span input {
            border-radius: 5px;
            color: #29303b;
            font-size: 18px;
            height: auto;
            padding: 11px 60px 12px 40px;
            border: 1px solid #cacbcc;
        }
        & span input:placeholder {
            color: #686f7a;
        }

      

        & span.sign-up-center-dialog-form-full-name-field:before {
            width: 1.8rem;
            height: 1.8rem;
            content: '';
            -webkit-mask: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNiAxNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTYgMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0ibmV3X3BlcnNvbiI+Cgk8Zz4KCQk8cGF0aCBkPSJNOS4xMiwxMi42OWMtMS4xNy0wLjUzLTEuMDEtMC44NS0xLjA1LTEuMjljLTAuMDEtMC4wNi0wLjAxLTAuMTItMC4wMS0wLjE5YzAuNC0wLjM3LDAuNzMtMC44NywwLjk0LTEuNDQKCQkJYzAsMCwwLjAxLTAuMDMsMC4wMS0wLjA0QzkuMDYsOS41OSw5LjEsOS40Niw5LjEzLDkuMzNDOS40LDkuMjcsOS41Niw4Ljk3LDkuNjIsOC43YzAuMDYtMC4xMSwwLjE5LTAuMzksMC4xNi0wLjcKCQkJQzkuNzQsNy41OSw5LjU4LDcuNCw5LjQsNy4zMmMwLTAuMDIsMC0wLjA1LDAtMC4wN0M5LjQsNi43NCw5LjM1LDYsOS4yNiw1LjUxYy0wLjAyLTAuMTMtMC4wNS0wLjI3LTAuMDktMC40CgkJCUM5LDQuNTEsOC42NCwzLjk3LDguMTYsMy41OUM3LjY2LDMuMiw2Ljk2LDMsNi4zMywzQzUuNzEsMyw1LDMuMiw0LjUxLDMuNTlDNC4wMiwzLjk3LDMuNjYsNC41MSwzLjQ5LDUuMTEKCQkJQzMuNDUsNS4yNCwzLjQyLDUuMzcsMy40LDUuNTFDMy4zMSw2LDMuMjcsNi43NCwzLjI3LDcuMjVjMCwwLjAyLDAsMC4wNCwwLDAuMDZDMy4wOCw3LjM5LDIuOTIsNy41OCwyLjg4LDcuOTkKCQkJYy0wLjAzLDAuMzEsMC4xLDAuNTksMC4xNiwwLjdjMC4wNiwwLjI4LDAuMjIsMC41OSwwLjUsMC42NEMzLjU3LDkuNDcsMy42MSw5LjYsMy42NSw5LjczYzAsMC4wMSwwLjAxLDAuMDIsMC4wMSwwLjAybDAsMC4wMQoJCQljMC4yMiwwLjU5LDAuNTUsMS4xLDAuOTYsMS40NmMwLDAuMDYtMC4wMSwwLjEyLTAuMDEsMC4xN2MtMC4wNCwwLjQ0LDAuMDgsMC43Ni0xLjA5LDEuMjljLTEuMTcsMC41My0yLjkzLDEuMS0zLjI5LDEuOTUKCQkJQy0wLjEyLDE1LjUsMC4wMywxNiwwLjAzLDE2aDEyLjZjMCwwLDAuMTUtMC41LTAuMjItMS4zNkMxMi4wNSwxMy43OSwxMC4yOSwxMy4yMiw5LjEyLDEyLjY5eiBNMTQuODksMmgtMVYxYzAtMC41NS0wLjQ1LTEtMS0xCgkJCXMtMSwwLjQ1LTEsMXYxaC0xYy0wLjU1LDAtMSwwLjQ1LTEsMXMwLjQ1LDEsMSwxaDF2MWMwLDAuNTUsMC40NSwxLDEsMXMxLTAuNDUsMS0xVjRoMWMwLjU1LDAsMS0wLjQ1LDEtMVMxNS40NCwyLDE0Ljg5LDJ6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==");
            mask: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNiAxNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTYgMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0ibmV3X3BlcnNvbiI+Cgk8Zz4KCQk8cGF0aCBkPSJNOS4xMiwxMi42OWMtMS4xNy0wLjUzLTEuMDEtMC44NS0xLjA1LTEuMjljLTAuMDEtMC4wNi0wLjAxLTAuMTItMC4wMS0wLjE5YzAuNC0wLjM3LDAuNzMtMC44NywwLjk0LTEuNDQKCQkJYzAsMCwwLjAxLTAuMDMsMC4wMS0wLjA0QzkuMDYsOS41OSw5LjEsOS40Niw5LjEzLDkuMzNDOS40LDkuMjcsOS41Niw4Ljk3LDkuNjIsOC43YzAuMDYtMC4xMSwwLjE5LTAuMzksMC4xNi0wLjcKCQkJQzkuNzQsNy41OSw5LjU4LDcuNCw5LjQsNy4zMmMwLTAuMDIsMC0wLjA1LDAtMC4wN0M5LjQsNi43NCw5LjM1LDYsOS4yNiw1LjUxYy0wLjAyLTAuMTMtMC4wNS0wLjI3LTAuMDktMC40CgkJCUM5LDQuNTEsOC42NCwzLjk3LDguMTYsMy41OUM3LjY2LDMuMiw2Ljk2LDMsNi4zMywzQzUuNzEsMyw1LDMuMiw0LjUxLDMuNTlDNC4wMiwzLjk3LDMuNjYsNC41MSwzLjQ5LDUuMTEKCQkJQzMuNDUsNS4yNCwzLjQyLDUuMzcsMy40LDUuNTFDMy4zMSw2LDMuMjcsNi43NCwzLjI3LDcuMjVjMCwwLjAyLDAsMC4wNCwwLDAuMDZDMy4wOCw3LjM5LDIuOTIsNy41OCwyLjg4LDcuOTkKCQkJYy0wLjAzLDAuMzEsMC4xLDAuNTksMC4xNiwwLjdjMC4wNiwwLjI4LDAuMjIsMC41OSwwLjUsMC42NEMzLjU3LDkuNDcsMy42MSw5LjYsMy42NSw5LjczYzAsMC4wMSwwLjAxLDAuMDIsMC4wMSwwLjAybDAsMC4wMQoJCQljMC4yMiwwLjU5LDAuNTUsMS4xLDAuOTYsMS40NmMwLDAuMDYtMC4wMSwwLjEyLTAuMDEsMC4xN2MtMC4wNCwwLjQ0LDAuMDgsMC43Ni0xLjA5LDEuMjljLTEuMTcsMC41My0yLjkzLDEuMS0zLjI5LDEuOTUKCQkJQy0wLjEyLDE1LjUsMC4wMywxNiwwLjAzLDE2aDEyLjZjMCwwLDAuMTUtMC41LTAuMjItMS4zNkMxMi4wNSwxMy43OSwxMC4yOSwxMy4yMiw5LjEyLDEyLjY5eiBNMTQuODksMmgtMVYxYzAtMC41NS0wLjQ1LTEtMS0xCgkJCXMtMSwwLjQ1LTEsMXYxaC0xYy0wLjU1LDAtMSwwLjQ1LTEsMXMwLjQ1LDEsMSwxaDF2MWMwLDAuNTUsMC40NSwxLDEsMXMxLTAuNDUsMS0xVjRoMWMwLjU1LDAsMS0wLjQ1LDEtMVMxNS40NCwyLDE0Ljg5LDJ6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==");
            position: absolute;
            top: 50%;
            left: 10px;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            background: #cacbcc;
        }

        & span.sign-up-center-dialog-form-email-field:before {
            width: 1.8rem;
            height: 1.8rem;
            content: '';
            mask: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNiAxNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTYgMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0ibWFpbF8yXyI+Cgk8Zz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAsMy4wNnY5Ljg4TDQuOTQsOEwwLDMuMDZ6IE0xNC45NCwySDEuMDZMOCw4Ljk0TDE0Ljk0LDJ6IE04LjUzLDEwLjUzCgkJCUM4LjM5LDEwLjY3LDguMjEsMTAuNzUsOCwxMC43NXMtMC4zOS0wLjA4LTAuNTMtMC4yMkw2LDkuMDZMMS4wNiwxNGgxMy44OEwxMCw5LjA2TDguNTMsMTAuNTN6IE0xMS4wNiw4TDE2LDEyLjk0VjMuMDZMMTEuMDYsOHoiCgkJCS8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==");
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            background: #cacbcc;
        }
        & span.sign-up-center-dialog-form-email-field:before {
            width: 1.8rem;
            height: 1.8rem;
            content: '';
            mask: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNiAxNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTYgMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0ibWFpbF8yXyI+Cgk8Zz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAsMy4wNnY5Ljg4TDQuOTQsOEwwLDMuMDZ6IE0xNC45NCwySDEuMDZMOCw4Ljk0TDE0Ljk0LDJ6IE04LjUzLDEwLjUzCgkJCUM4LjM5LDEwLjY3LDguMjEsMTAuNzUsOCwxMC43NXMtMC4zOS0wLjA4LTAuNTMtMC4yMkw2LDkuMDZMMS4wNiwxNGgxMy44OEwxMCw5LjA2TDguNTMsMTAuNTN6IE0xMS4wNiw4TDE2LDEyLjk0VjMuMDZMMTEuMDYsOHoiCgkJCS8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==");
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            background: #cacbcc;
        }

        & span.sign-up-center-dialog-form-password-field:before {
            width: 1.8rem;
            height: 1.8rem;
            content: '';
            mask: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNiAxNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTYgMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBpZD0ibG9ja18zXyIgZD0iTTEzLjk2LDdIMTJWMy45NUMxMiwxLjc3LDEwLjIxLDAsOCwwUzQsMS43Nyw0LDMuOTVWN0gxLjk2QzEuNDEsNywxLDcuMzUsMSw3Ljl2Ni45MUMxLDE1LjM1LDEuNDEsMTYsMS45NiwxNgoJaDEyYzAuNTUsMCwxLjA0LTAuNjUsMS4wNC0xLjE5VjcuOUMxNSw3LjM1LDE0LjUxLDcsMTMuOTYsN3ogTTYsN1YzLjk1YzAtMS4wOSwwLjktMS45NywyLTEuOTdzMiwwLjg4LDIsMS45N1Y3SDZ6Ii8+Cjwvc3ZnPgo=");
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            background: #cacbcc;
        }

        #submit-signup-form-btn {
            widht: 100%;
            height: 4.8rem;
            text-align: center;
            line-height: 4.8rem;
            font-size: 1.8rem;
            color: #fff;
            background-color: #ec5252;
            border: 1px solid transparent;  
            border-radius: 2px;
            font-family: 'Hackman-Bold';
        }

        #submit-signup-form-btn:hover {
            color: #fff;
            background-color: #992337;
            border-color: transparent;
            cursor:pointer;
        }
        
    }
    #sign-up-center-dialog-form-email-field,
    #sign-up-center-dialog-form-password-field,
    #submit-signup-form-btn {
        margin-top: .5rem;
    }
    #sign-up-password-strength-indicator span {
        width: 42px;
        height: 4px;
        background: #dedfe0;
        display: inline-block;
        position: relative;

    }
    #sign-up-password-strength-indicator span:not(:first-child) {
        margin-left: 2px;
    } 
    
}
`;


export function SignupModal() {


    const { request } = useContext(AppContext)
    const [u, setU] = useState(''); //username
    const [e, setE] = useState(''); //email
    const [p, setP] = useState(''); //password
    
    const [errAFR, setErrAFR] = useState(false); //all fields required err
    const [errENV, setErrENV] = useState(false); //email not valid
    const [errPSE, setErrPSE] = useState(false); //password strength err

    function emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const handleSubmit = async() => {
        setErrAFR(false);
        setErrENV(false);
        setErrPSE(false);

        if(u == "" || e == "" || p == ""){
            setErrAFR(true);
            return;
        }
        if(!emailIsValid(e)){
            setErrENV(true);
            return;
        }


    
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if(!strongRegex.test(p)) {
            setErrPSE(true);
            return;
        }
        let create_user = {
            name: u,
            email: btoa(e),
            password: btoa(p),
        }
        request("vAr", "create-user", JSON.stringify(create_user));
    }

    return (
        <StyledSignupModal>
            <div id="sign-up-center-dialog">
                <div id ="sign-up-center-dialog-header">
                        <div id="sign-up-center-dialog-header-text">Sign up</div>
                        <div id="sign-up-center-dialog-header-close">X</div>
                   
                </div>
                <div id ="sign-up-center-dialog-form">
                { (errAFR === true|| errENV === true|| errPSE ===true) &&
                    <div id="sign-up-validation-errors">
                    Form Validation Errors.
                    <ul>
                        {errAFR && <li>All Fields Required</li>}
                        {errENV && <li>Email is not valid</li>}
                        
    
                      {errPSE &&
                        <>
                        <li>Password needs Upper Case Letter</li>
                        <li>Password needs Lower Case Letter</li>
                        <li>Password needs at least 1 Number</li>
                        <li>Password needs 8 or More Characters</li>
                        <li>Password needs at least 1 Special Character</li>}  
                        </>
                      }
                    </ul>
                 </div>
                }
                
                <span className="sign-up-center-dialog-form-full-name-field"><input type="text" placeholder="Full Name" onChange={(e) => setU(e.target.value)}></input></span>
                <span className="sign-up-center-dialog-form-email-field"><input type="text" placeholder="Email" onChange={(e) => setE(e.target.value)}></input></span>
                <span className="sign-up-center-dialog-form-password-field"><input type="password" placeholder="Password" onChange={(e) => setP(e.target.value)}></input></span>
                <div id="sign-up-password-strength-indicator"><span className="pwd-has-upper-lower"></span><span className="pwd-has-number"></span><span className="pwd-is-special"></span><span className="pwd-is-long"></span></div>

                <div id="submit-signup-form-btn" onClick={(e) => handleSubmit()}>Sign up</div>
                </div>
            </div>
        </StyledSignupModal>
    )
}