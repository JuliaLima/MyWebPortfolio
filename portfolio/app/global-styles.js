import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
    margin: 0rem;
    padding: 0rem;
    font-family: 'Lato';
    display: flex;
    background-color: black;
    width: 100%;
  }

  body {
    color: white;
    margin: 0rem;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }

  .BGwhite {
    background-color: white;
  }

  .black {
    color: black;
  }  

  .bounce {
    -webkit-animation-name: bounce;
    -moz-animation-name: bounce;
    -o-animation-name: bounce;
    animation-name: bounce;
  }

  .animated{-webkit-animation-fill-mode:both;
  -moz-animation-fill-mode:both;
  -ms-animation-fill-mode:both;
  -o-animation-fill-mode:both;

  animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;

  animation-fill-mode:both;
  -webkit-animation-duration:2s;
  -moz-animation-duration:2s;
  -ms-animation-duration:2s;
  -o-animation-duration:2s;
  animation-duration:2s;
  }

  @-webkit-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);}	40% {-webkit-transform: translateY(-30px);}
    60% {-webkit-transform: translateY(-15px);}
  }

  @-moz-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {-moz-transform: translateY(0);}
    40% {-moz-transform: translateY(-30px);}
    60% {-moz-transform: translateY(-15px);}
  }

  @-o-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {-o-transform: translateY(0);}
    40% {-o-transform: translateY(-30px);}
    60% {-o-transform: translateY(-15px);}
  }
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-30px);}
    60% {transform: translateY(-15px);}
  }

  .bar { 
    height:1rem; 
  }

  .effect {
    width:100%; 
    -moz-animation:effect 2s ease-out;
    -webkit-animation:effect 2s ease-out;
    background-color: #00A79D;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#00A79D), to(#00A79D));
    background-image: -webkit-linear-gradient(top, #00A79D, #00A79D);
    background-image: -moz-linear-gradient(top, #00A79D, #00A79D);
    background-image: -ms-linear-gradient(top, #00A79D, #00A79D);
    background-image: -o-linear-gradient(top, #00A79D, #00A79D);
    background-image: linear-gradient(top, #00A79D, #00A79D);
  }

  @-moz-keyframes effect {0%  { width:0px;} 100%{ width:100%;} }
  @-webkit-keyframes effect       { 0%  { width:0px;} 100%{ width:100%;}  }
`;
