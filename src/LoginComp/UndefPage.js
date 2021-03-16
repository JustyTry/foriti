import React from "react";

var rootStyle = {
  background: "#15cdfc",
  color: "white",
  height: "100%",
  'minHeight':'100vh',
  display: 'flex',  
  justifyContent:'center', 
  alignItems:'center'
};

const UndefPage = () => {
  return (
    <div style={rootStyle}>
      <div>
        <h1 style={{ 'font-size':100 }}>Ошибка 404</h1>
        <br></br>
        <h3 style={{ align: "center" }}>Данной страницы не существует(</h3>
      </div>
    </div>
  );
};

export default UndefPage;
