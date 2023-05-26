import { useState } from "react";
import { useEffect } from "react";
import * as Tone from "tone";
import { Sequence } from "tone";

import "./App.css";

let osc;
const initialSeq = ["C4", "E4", "G4", "B4", "C5", "A4"];
function App() {
  // const [count, setCount] = useState(0);
  //
  const [isOscOn, setIsOscOn] = useState(false);
  const [oscs, setOscs] = useState([]);
  const [synth, setSynth] = useState(new Tone.Synth().toDestination());
  const [input, setInput] = useState();
  const [sequence, setSequence] = useState([]);
  const [loop, setLoop] = useState(null);

  const notes = ["C", "D", "E", "F", "G", "A", "B"];
  const octaves = [3, 4, 5];
  // const newSequence = [];

  function addOsc() {
    setOscs((state) => [
      ...state,
      new Tone.Oscillator(input, "sine").toDestination(),
    ]);
  }

  // function syncFrequency() {
  //   osc.syncFrequency((Tone.Transport.bpm.value *= 2));
  //   console.log(osc.syncFrequency());
  // }

  function stopOsc(osc) {
    osc.stop();
  }

  function playSynth() {
    // let synth = new Tone.Synth().toDestination();
    setSequence(initialSeq);
    if (loop) {
      loop.start();
    }
    // Tone.Transport.start();

    // synth.triggerAttackRelease("C4", "2n");
  }
  // // function addSynth() {
  // //   setSynth((state) => [new Tone.Synth("C4", "4n").toDestination()]);
  // // }

  function changeSequence(newSequence) {
    setSequence(newSequence);
  }

  // define random generated sequences
  function randomSeq() {
    const newSequence = [];

    for (let i = 0; i < 6; i++) {
      const randomNote = notes[Math.floor(Math.random() * notes.length)];
      const randomOctave = octaves[Math.floor(Math.random() * octaves.length)];
      newSequence.push(randomNote + randomOctave);
    }
    setSequence(newSequence);
  }

  // function loopA() {
  //   const loop = new Tone.Loop((time) => {
  //     console.log(time);
  //     // Play the sequence
  //     for (let i = 0; i < sequence.length; i++) {
  //       const note = sequence[i];
  //       // Trigger the attack and release of each note in the sequence
  //       Tone.Transport.schedule((time) => {
  //         osc.triggerAttackRelease(note, "8n", time);
  //       }, time);
  //     }
  //   }, "2n").start(0);
  //   Tone.Transport.start(0.1);
  //   setLoop(loop);
  // }

  // function loopA() {
  //   const loop = new Tone.Loop((time) => {
  //     // synth.triggerAttackRelease(note, time);
  //     // console.log(time);
  //   }, "2n").start(0);
  //   Tone.Transport.start(0.1);
  // }

  useEffect(() => {
    const synthseq = new Tone.Synth().toDestination();
    const seq = new Tone.Sequence((time, note) => {
      synthseq.triggerAttackRelease(note, 0.1, time);
    }, sequence).start(0);
    Tone.Transport.start();
    // tone.transport timing/rhythm/sequencing

    return () => {
      seq.stop();
      synthseq.dispose();
    };
  }, [sequence]);

  // useEffect(() => {
  //   if (loop) {
  //     loop.dispose();
  //   }
  //   const newLoop = new Tone.Loop((time) => {
  //     for (let i = 0; i < sequence.length; i++) {
  //       const note = sequence[i];
  //       const synth = new Tone.Synth().toDestination();
  //       synth.triggerAttackRelease(note, "1n", time + i * Tone.Time("1n"));
  //     }
  //   }, Tone.Time("4n"));
  //   setLoop(newLoop);
  //   return () => {
  //     newLoop.dispose();
  //   };
  // }, [sequence]);

  // sync oscillators
  // play synth + add effects -- SEQUENCER, LOOP
  // add textures
  return (
    <div>
      {/* <button onClick={() => handleClick()}>
        {isOscOn ? "Stop Oscillator" : "Start Oscillator"}
      </button> */}
      {/* {oscs.map((osc) => (
        <>
          <button onClick={() => osc.start()}>Play</button>
        </>
      ))} */}
      {oscs.map((osc) => (
        <div key={osc}>
          <button onClick={() => osc.start()}>Play</button>
          <button onClick={() => stopOsc(osc)}>Stop</button>
        </div>
      ))}

      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addOsc}>add new osc</button>
        <button onClick={playSynth}>play synth</button>
        <button
          onClick={() => changeSequence(["D4", "F4", "A4", "C5", "G4", "B4"])}
        >
          change sequence
        </button>
        <button onClick={randomSeq}>random sequence</button>
      </div>
    </div>
  );
}

export default App;
