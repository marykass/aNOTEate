// import React from 'react';
// import './App.css';

import {
  ChakraProvider,
  Heading,
  Center
} from "@chakra-ui/react";

function App() {
  return (
    <div
       style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='900' preserveAspectRatio='none' viewBox='0 0 1440 900'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1274%26quot%3b)' fill='none'%3e%3crect width='1440' height='900' x='0' y='0' fill='url(%23SvgjsLinearGradient1275)'%3e%3c/rect%3e%3cpath d='M0 0L695.17 0L0 285.46z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 285.46L695.17 0L869.2099999999999 0L0 330.71z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 330.71L869.2099999999999 0L914.55 0L0 636.54z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 636.54L914.55 0L1143.46 0L0 743.89z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M1440 900L1163.1100000000001 900L1440 615.9100000000001z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M1440 615.9100000000001L1163.1100000000001 900L797.7500000000001 900L1440 565.5600000000001z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M1440 565.56L797.75 900L396.13 900L1440 386.5999999999999z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M1440 386.6L396.1300000000001 900L116.0700000000001 900L1440 273.34000000000003z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1274'%3e%3crect width='1440' height='900' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='9.37%25' y1='-15%25' x2='90.63%25' y2='115%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1275'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(181%2c 64%2c 135%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
       width: '100vw',
       height: '100vh' }}
    >
      <ChakraProvider>
        <Center>
          <Heading size="4xl" textAlign="center" color="white" margin="15%">aNOTEate</Heading>
        </Center>
      </ChakraProvider>
    </div>
  )
}

export default App;
