import { useState } from "react";
import { useEffect } from "react";
import * as Tone from "tone";
import { Sequence } from "tone";

import "./App.css";

let osc;
const initialSeq = ["C4", "E4", "G4", "B4", "C5", "A4"];
function App() {
  // const [count, setCount] = useState(0);
  const [isOscOn, setIsOscOn] = useState(false);
  const [oscs, setOscs] = useState([]);
  const [synth, setSynth] = useState(new Tone.Synth().toDestination());
  const [input, setInput] = useState();
  const [sequence, setSequence] = useState([]);
  const [loop, setLoop] = useState(null);

  const notes = ["C", "D", "E", "F", "G", "A", "B"];
  const octaves = [3, 4, 5];

  // display notes/sequence as buttons in the browser DONE
  // add 2 buttons to change each note up/down DONE
  // function: subir tono/bajar tono

  function addOsc() {
    setOscs((state) => [
      ...state,
      new Tone.Oscillator(input, "sine").toDestination(),
    ]);
  }

  function stopOsc(osc) {
    osc.stop();
  }

  function loopA(time) {
    // the sequence
    for (let i = 0; i < sequence.length; i++) {
      const note = sequence[i];
      synth.triggerAttackRelease(note, "8n", time + i * Tone.Time("8n"));
    }
  }

  function playSynth() {
    // let synth = new Tone.Synth().toDestination();
    setSequence(initialSeq);
    if (loop) {
      loop.dispose();
    }
    const newLoop = new Tone.Loop(loopA, "1n").start(0);
    setLoop(newLoop);
    Tone.Transport.start();
  }

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

  function chooseSeq() {}

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

  return (
    <div>
      {sequence.map((note, index) => (
        <div key={index} className="note-container">
          <button>{note}</button>
          <button onClick={() => changeNoteUp(index)}>Up</button>
          <button onClick={() => changeNoteDown(index)}>Down</button>
        </div>
      ))}
      <div>
        {oscs.map((osc) => (
          <div key={osc}>
            <button onClick={() => osc.start()}>Play</button>
            <button onClick={() => stopOsc(osc)}>Stop</button>
          </div>
        ))}
      </div>

      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addOsc}>add new osc</button>
        <button onClick={playSynth}>seq one</button>
        <button
          onClick={() => changeSequence(["D4", "F4", "A4", "C5", "G4", "B4"])}
        >
          seq two
        </button>
        <button onClick={randomSeq}>random seq</button>
      </div>
    </div>
  );
}

export default App;
