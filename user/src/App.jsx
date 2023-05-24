import { useState } from "react";
import { useEffect } from "react";
import * as Tone from "tone";

import "./App.css";

let osc;

// let synth;

// const synth = new Tone.Synth().toDestination();
// synth.triggerAttackRelease("C4", "4n");
// console.log(synth);

function App() {
  // const [count, setCount] = useState(0);
  //
  const [isOscOn, setIsOscOn] = useState(false);
  const [oscs, setOscs] = useState([]);
  const [synth, setSynth] = useState(new Tone.Synth().toDestination());
  const [input, setInput] = useState();

  function addOsc() {
    setOscs((state) => [
      ...state,
      new Tone.Oscillator(input, "sine").toDestination(),
    ]);
  }

  function playSynth() {
    // let synth = new Tone.Synth().toDestination();
    // console.log(synth);
    synth.triggerAttackRelease("C4", "2n");
    // synth.triggerAttackRelease("C4", "4n");
  }
  // function addSynth() {
  //   setSynth((state) => [new Tone.Synth("C4", "4n").toDestination()]);
  // }

  useEffect(() => {}, []);

  // to add: Stop button osc
  // play synth + effect
  return (
    <div>
      {/* <button onClick={() => handleClick()}>
        {isOscOn ? "Stop Oscillator" : "Start Oscillator"}
      </button> */}
      {oscs.map((osc) => (
        <>
          <button onClick={() => osc.start()}>Play</button>
        </>
      ))}

      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addOsc}>create new</button>
        <button onClick={playSynth}>play synth</button>
      </div>
    </div>
  );
}

export default App;
