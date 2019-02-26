// import React, { Component } from 'react'

// export default class Authenticate extends Component {
    
//     const withConditionalRender()

//     render() {
//         return (
//         <div>
            
//         </div>
//         )
//     }
// }


import React from 'react';
// import Login from './component/Login';


const withConditionalRender = FirstComponent => SecondComponent => props => {
   if (localStorage.getItem('user')) {
     return <FirstComponent />;
   }

   return <SecondComponent/>;
 };

 export default withConditionalRender;