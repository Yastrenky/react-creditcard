import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

function CreditCard({data}){
  const {namebank, number, cv2, date, ownername} = data;
  return(
<div className="credit-card">
<div className="image"></div>
<div className="logo"></div>
 <div className="bank-name">{namebank} </div>
 <div className="card-number">{number}</div>
 <div className="cv2-code">{cv2}</div>
 <div className="valid">Valid Thru
  <span className="expiration-date"> {date}</span>
 </div>
 <div className="owner-name">{ownername} </div>
 <div className="visa"></div>
</div>
);
}

CreditCard.PropTypes = {
data: PropTypes.shape({
namebank:PropTypes.string.isRequired,
number:PropTypes.number.isRequired,
cv2:PropTypes.number.isRequired,
date:PropTypes.string.isRequired,
ownername:PropTypes.string.isRequired
}).isRequired
}
const Card={
  namebank : 'Wells Fargo, Inc.',
  number: '3759   8765   4321   9010',
  cv2 : '3759',
  date : '05/18',
  ownername : 'Yastrenky Bravo'
}





ReactDOM.render(<CreditCard data={Card}/>, document.getElementById('root'));


//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function IconButton({ children }) {
//   return (
//     <button>
//       <i className="fa fa-bullseye" />
//       {children}
//     </button>
//   );
// }
//
// function Nav({ children }) {
//   let items = React.Children.toArray(children);
//   for (let i = items.length - 1; i >= 1; i--) {
//     items.splice(
//       i,
//       0,
//       <span key={i} className="separator">
//         |
//       </span>
//     );
//   }
//   return <div className="nav">{items}</div>;
// }
//
// function Demo() {
//   return (
//     <div>
//       <div style={{ marginBottom: 20 }}>
//         <div style={{ marginBottom: 10 }}>
//           <code>IconButton</code> with text:
//         </div>
//         <IconButton>Do Stuff</IconButton>
//       </div>
//       <IconButton>Do the Right Thing</IconButton>
//       <Nav>
//         <a href="https://google.com">Google</a>
//         <a href="https://slack.com">Slack</a>
//       </Nav>
//     </div>
//   );
// }
//
// ReactDOM.render(<Demo />, document.getElementById('root'));
