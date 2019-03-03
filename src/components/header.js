import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const header = (props) => {
  
  return (
    <div className="header">
            <Link to={`/`}>Home</Link>
            <Link to={`/myorders`}>orders</Link>
    </div>
  );
};

export default header;