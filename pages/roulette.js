import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/layout";
import Dropdown from "../components/dropdown"
import dynamic from "next/dynamic";

const Wheel = dynamic(
  () => {
    return import("../components/wheel");
  },
  { ssr: false }
);

const data = [
  { option: '0' },
  { option: '1' },
  { option: '2' },
]


const Roulette = () => {
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [luckyNumber, setLuckyNumber] = useState(0);


  function IsWinner({ l, p }) {
    console.log("Numbers are: " + l + " " + p)
    if (l==p) {
      return <h1> Winner </h1>;
    } else {
      return <h1> Try again </h1>;
    }
  }


    return (
    <Layout>
      <h1>Play roulette</h1>

      <p>Choose your lucky number</p>
      <Dropdown
        data={data}
        selectedValue={luckyNumber}
        setSelectedValue={(e) => setLuckyNumber(e.target.value)}
      />
      <Wheel 
        iPrizeNumber={prizeNumber}
        data = {data}
        setWinningNumber={(e) => setPrizeNumber(e.value)}
      />

      <IsWinner
          l={luckyNumber}
          p={prizeNumber} 
        />
      

      
    </Layout>
  );
};

export default Roulette;
