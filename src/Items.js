
import Home from './components/pages/Home'
import Test from './components/pages/Test'
import Chatbot from './components/pages/Chatbot'
import Location from './components/pages/Location'
import About from './components/pages/About'
import React from 'react'

export  const items = [
            {
                title: "Home",
                comp: <Home/>,
                path : "/"
            },
            {
                title: "Test",
                comp: <Test/>,
                path: '/test'
            },
            {
                title: "Chatbot",
                comp: <Chatbot/>,
                path: '/chatbot'
            },
            {
                title: "Loaction",
                comp: <Location/>,
                path: '/location'
            },
            {
                title: "About us",
                comp: <About/>,
                path: '/about'
            }
          ]



// const items = () => (
//     [
//         {
//             title: "Home",
//             comp: <Home/>,
//             path : "/"
//         },
//         {
//             title: "Test",
//             comp: <Test/>,
//             path: '/test'
//         },
//         {
//             title: "Chatbot",
//             comp: <Chatbot/>,
//             path: '/chatbot'
//         },
//         {
//             title: "Loaction",
//             comp: <Location/>,
//             path: '/location'
//         },
//         {
//             title: "ABout us",
//             comp: <About/>,
//             path: '/about'
//         }
//       ]
// )

//   export default items;