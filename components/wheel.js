import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'


export default ({iPrizeNumber, data, setWinningNumber}) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      console.log("wheel prize number: " + newPrizeNumber)
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}

        onStopSpinning={() => {
          setMustSpin(false);
          setWinningNumber({value: prizeNumber})
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  )
}