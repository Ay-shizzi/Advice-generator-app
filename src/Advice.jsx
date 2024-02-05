import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Advice.css";
import dice from "./assets/icon-dice.svg";
import divider from "./assets/pattern-divider-desktop.svg";

const Advice = () => {
  const [data, setData] = useState({
    id: "",
    advice: "",
  });

  const fetchAdvice = async () => {
    try {
      const response = await Axios.get("https://api.adviceslip.com/advice");
      const getResponse = response.data;

      setData({
        id: getResponse.slip.id,
        advice: getResponse.slip.advice,
      });
    } catch {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className="container">
      <div className="wrapper">
        <p className="advice-id">ADVICE #{data.id}</p>
        <div className="advice-card">
          <p className="advice">"{data.advice}"</p>
        </div>
        <img src={divider} className="divider" />
      </div>
      <div className="button">
        <img className="dice" src={dice} onClick={fetchAdvice} />
      </div>
    </div>
  );
};

export default Advice;
