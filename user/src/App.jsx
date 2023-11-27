import React, {
  useRef,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import * as Tone from "tone";
import "./App.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import { IconButton, inputClasses } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PianoIcon from "@mui/icons-material/Piano";
import Box from "@mui/material/Box";
import RadioIcon from "@mui/icons-material/Radio";
import StraightenIcon from "@mui/icons-material/Straighten";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import WavesIcon from "@mui/icons-material/Waves";
import SpatialAudioIcon from "@mui/icons-material/SpatialAudio";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import TimerIcon from "@mui/icons-material/Timer";
import { sequenceExample1, sequenceExample2 } from "./helper";

// notes = ["C", "D", "E", "F", "G", "A", "B"]
// octaves = [3, 4, 5]
// A = La, B = Si, C = Dó, D = Ré, E = Mi, F = Fa, G = Sol
// C, D, E, F, G, A, B
// 1. Dó | 2. Ré | 3. Mi | 4. Fa | 5. Sol | 6. Lá | 7. Si  ()

// Low sequence
// Main
// ["A3", "B3", "C4", "D4", "E4", "D4", "C4", "B3", "A3", "B3", "C4", "D4", "E4", "D4", "C4", "B3", "A3", "B3", "C4", "D4", "E4", "D4", "C4", "B3", "A3", "B3", "C4", "D4", "E4", "D4", "C4", "B3" ]
// Back
// ["C2", null, null, null, "C2", null, null, null, "G2", null, null, null, "G2", null, null, null, "C2", null, null, null, "C2", null, null, null, "G2", null, null, null, "G2", null, null, null]

// const sampler = new Tone.Sampler({
//   urls: {
//     A1: "A1.mp3",
//     A2: "A2.mp3",
//   },
//   baseUrl: "https://tonejs.github.io/audio/casio/",
// }).toDestination();

//Main Sequence Buffers
const buffer1 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/A0.mp3"
);
const buffer2 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/C1.mp3"
);
const buffer3 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Ds1.mp3"
);
const buffer4 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Fs1.mp3"
);
const buffer5 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/A1.mp3"
);
const buffer6 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/C2.mp3"
);
const buffer7 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Ds2.mp3"
);
const buffer8 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Fs2.mp3"
);
const buffer9 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/A2.mp3"
);
const buffer10 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/C3.mp3"
);
const buffer11 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Ds3.mp3"
);
const buffer12 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Fs3.mp3"
);
const buffer13 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/A3.mp3"
);
const buffer14 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/C4.mp3"
);
const buffer15 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Ds4.mp3"
);
const buffer16 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Fs4.mp3"
);
const buffer17 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/A4.mp3"
);
const buffer18 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/C5.mp3"
);
const buffer19 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Ds5.mp3"
);
const buffer20 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Fs5.mp3"
);
const buffer21 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/A5.mp3"
);
const buffer22 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/C6.mp3"
);
const buffer23 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Ds6.mp3"
);
const buffer24 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Fs6.mp3"
);
const buffer25 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/A6.mp3"
);
const buffer26 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/C7.mp3"
);
const buffer27 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Ds7.mp3"
);
const buffer28 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Fs7.mp3"
);
const buffer29 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/A7.mp3"
);
const buffer30 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/C8.mp3"
);

//Background Sequence Buffers
const buffer31 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/A0.mp3"
);
const buffer32 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/C1.mp3"
);
const buffer33 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Ds1.mp3"
);
const buffer34 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Fs1.mp3"
);
const buffer35 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/A1.mp3"
);
const buffer36 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/C2.mp3"
);
const buffer37 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Ds2.mp3"
);
const buffer38 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Fs2.mp3"
);
const buffer39 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/A2.mp3"
);
const buffer40 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/C3.mp3"
);
const buffer41 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Ds3.mp3"
);
const buffer42 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Fs3.mp3"
);
const buffer43 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/A3.mp3"
);
const buffer44 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/C4.mp3"
);
const buffer45 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Ds4.mp3"
);
const buffer46 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Fs4.mp3"
);
const buffer47 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/A4.mp3"
);
const buffer48 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/C5.mp3"
);
const buffer49 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Ds5.mp3"
);
const buffer50 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Fs5.mp3"
);
const buffer51 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/A5.mp3"
);
const buffer52 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/C6.mp3"
);
const buffer53 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Ds6.mp3"
);
const buffer54 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Fs6.mp3"
);
const buffer55 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/A6.mp3"
);
const buffer56 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/C7.mp3"
);
const buffer57 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Ds7.mp3"
);
const buffer58 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/Fs7.mp3"
);
const buffer59 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/A7.mp3"
);
const buffer60 = new Tone.Buffer(
  "https://tonejs.github.io/audio/salamander/C8.mp3"
);

//Instruments
// const piano = new Tone.Sampler({
//   volume: -10,
//   urls: {
//     A0: "A0.mp3",
//     C1: "C1.mp3",
//     "D#1": "Ds1.mp3",
//     "F#1": "Fs1.mp3",
//     A1: "A1.mp3",
//     C2: "C2.mp3",
//     "D#2": "Ds2.mp3",
//     "F#2": "Fs2.mp3",
//     A2: "A2.mp3",
//     C3: "C3.mp3",
//     "D#3": "Ds3.mp3",
//     "F#3": "Fs3.mp3",
//     A3: "A3.mp3",
//     C4: "C4.mp3",
//     "D#4": "Ds4.mp3",
//     "F#4": "Fs4.mp3",
//     A4: "A4.mp3",
//     C5: "C5.mp3",
//     "D#5": "Ds5.mp3",
//     "F#5": "Fs5.mp3",
//     A5: "A5.mp3",
//     C6: "C6.mp3",
//     "D#6": "Ds6.mp3",
//     "F#6": "Fs6.mp3",
//     A6: "A6.mp3",
//     C7: "C7.mp3",
//     "D#7": "Ds7.mp3",
//     "F#7": "Fs7.mp3",
//     A7: "A7.mp3",
//     C8: "C8.mp3",
//   },
//   baseUrl: "https://tonejs.github.io/audio/salamander/",
// })
//   .chain(tremolo, reverb)
//   .toDestination();

// const instruments = {
//   piano: piano,
//   amSynth: amSynth,
//   basicSynth: basicSynth,
// };

// Notes scale
const backgroundNotes = [
  "A2",
  "B2",
  "C2",
  "D2",
  "E2",
  "F2",
  "G2",
  "A3",
].reverse();

const mainNotes = ["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4"].reverse();

// Function to divide main sequence in 8 compass
// const chunkSequence = (sequence, size) => {
//   return sequence.reduce((acc, note, index) => {
//     const chunkIndex = Math.floor(index / size);
//     if (!acc[chunkIndex]) {
//       acc[chunkIndex] = []; // start a new chunk
//     }
//     acc[chunkIndex].push(note);
//     return acc;
//   }, []);
// };

// Number of compass and notes per compass
const notesPerCompass = 4;
const compass = 8;

// 1 = 60 bpm
// 2 = 30 bpm
// 0.5 = 120 bpm

export default function App() {
  const [backgroundInstrument, setBackgroundInstrument] = useState("piano");
  const [mainInstrument, setMainInstrument] = useState("piano");
  const [tempo, setTempo] = useState(0.5);
  const [play, setPlay] = useState(false);
  const [countTempo, setCountTempo] = useState(null);
  const intervalRef = useRef();

  const [reverbDecay, setReverbDecay] = useState(1);
  const [reverbDecayCommitted, setReverbDecayCommitted] = useState(1);

  const [tremoloFrequency, setTremoloFrequency] = useState(0);
  const [tremoloFrequencyCommitted, setTremoloFrequencyCommitted] = useState(0);

  const [backgroundVolume, setBackgroundVolume] = useState(-10);
  const [backgroundVolumeCommitted, setBackgroundVolumeCommitted] =
    useState(-10);

  const [mainVolume, setMainVolume] = useState(-10);
  const [mainVolumeCommitted, setMainVolumeCommitted] = useState(-10);

  const [numberOfBeats, setNumberOfBeats] = useState(120);
  const [numberOfBeatsCommitted, setNumberOfBeatsCommitted] = useState(120);

  const [backgroundSequence, setBackgroundSequence] = useState(
    sequenceExample1.backSequence
  );
  const [mainSequence, setMainSequence] = useState(
    sequenceExample1.mainSequence
  );

  // Effects
  const tremolo = useMemo(() => {
    return new Tone.Tremolo({
      frequency: tremoloFrequencyCommitted, // step="2" min="0" max="15
      depth: 0.8,
    })
      .toDestination()
      .start();
  }, [tremoloFrequencyCommitted]);

  const reverb = useMemo(() => {
    return new Tone.Reverb({
      decay: reverbDecayCommitted, // step="1" min="0" max="10"
      wet: 1,
    }).toDestination();
  }, [reverbDecayCommitted]);

  // Main Synths
  const mainSynths = useMemo(() => {
    const mainAmSynth = new Tone.FMSynth({
      volume: mainVolumeCommitted,
    })
      .chain(reverb, tremolo)
      .toDestination();

    const mainPiano = new Tone.Sampler({
      volume: mainVolumeCommitted,
      urls: {
        A0: buffer1,
        C1: buffer2,
        "D#1": buffer3,
        "F#1": buffer4,
        A1: buffer5,
        C2: buffer6,
        "D#2": buffer7,
        "F#2": buffer8,
        A2: buffer9,
        C3: buffer10,
        "D#3": buffer11,
        "F#3": buffer12,
        A3: buffer13,
        C4: buffer14,
        "D#4": buffer15,
        "F#4": buffer16,
        A4: buffer17,
        C5: buffer18,
        "D#5": buffer19,
        "F#5": buffer20,
        A5: buffer21,
        C6: buffer22,
        "D#6": buffer23,
        "F#6": buffer24,
        A6: buffer25,
        C7: buffer26,
        "D#7": buffer27,
        "F#7": buffer28,
        A7: buffer29,
        C8: buffer30,
      },
    })
      .connect(reverb, tremolo)
      .toDestination();

    const mainBasicSynth = new Tone.Synth({
      volume: mainVolumeCommitted,
    })
      .connect(reverb, tremolo)
      .toDestination();

    return {
      piano: mainPiano,
      amSynth: mainAmSynth,
      basicSynth: mainBasicSynth,
    };
  }, [mainVolumeCommitted, reverb, tremolo]);

  // Background Synths
  const backgroundSynths = useMemo(() => {
    const backAmSynth = new Tone.FMSynth({
      volume: backgroundVolumeCommitted,
    })
      .chain(reverb, tremolo)
      .toDestination();

    const backPiano = new Tone.Sampler({
      volume: backgroundVolumeCommitted,
      urls: {
        A0: buffer31,
        C1: buffer32,
        "D#1": buffer33,
        "F#1": buffer34,
        A1: buffer35,
        C2: buffer36,
        "D#2": buffer37,
        "F#2": buffer38,
        A2: buffer39,
        C3: buffer40,
        "D#3": buffer41,
        "F#3": buffer42,
        A3: buffer43,
        C4: buffer44,
        "D#4": buffer45,
        "F#4": buffer46,
        A4: buffer47,
        C5: buffer48,
        "D#5": buffer49,
        "F#5": buffer50,
        A5: buffer51,
        C6: buffer52,
        "D#6": buffer53,
        "F#6": buffer54,
        A6: buffer55,
        C7: buffer56,
        "D#7": buffer57,
        "F#7": buffer58,
        A7: buffer59,
        C8: buffer60,
      },
    })
      .chain(reverb, tremolo)
      .toDestination();

    const backBasicSynth = new Tone.Synth({
      volume: backgroundVolumeCommitted,
    })
      .chain(reverb, tremolo)
      .toDestination();

    return {
      piano: backPiano,
      amSynth: backAmSynth,
      basicSynth: backBasicSynth,
    };
  }, [backgroundVolumeCommitted, tremolo, reverb]);

  useEffect(() => {
    Tone.Transport.bpm.value = numberOfBeatsCommitted;
  }, [numberOfBeatsCommitted]);

  const getNext4ndIndex = (index) => {
    return index % 4 === 0;
  };

  const getNext8ndIndex = (index) => {
    return index % 8 === 0;
  };

  // Handling synth choice
  const handleMainInstrumentChoice = (event, synthChoice) => {
    setMainInstrument(synthChoice);
  };

  const handleBackInstrumentChoice = (event, synthChoice) => {
    setBackgroundInstrument(synthChoice);
  };

  const updateCountTempo = useCallback(
    (tempoForced) => {
      setCountTempo((previous) => {
        if (tempoForced) {
          return tempoForced === mainSequence.length - 1 ? 0 : tempoForced + 1;
        }
        return previous === mainSequence.length - 1 ? 0 : previous + 1;
      });
    },
    [mainSequence]
  );

  // Visual representation of time
  const startCountTempo = () => {
    setCountTempo(0);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(updateCountTempo, tempo * 1000);
  };

  const stopCountTempo = () => {
    setCountTempo(null);
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Use Effects
  useEffect(() => {
    const bSequence = new Tone.Sequence(
      (time, note) => {
        setPlay(true);
        backgroundSynths[backgroundInstrument].triggerAttackRelease(
          note,
          tempo * notesPerCompass,
          time
        );
      },
      backgroundSequence,
      tempo
    ).start(0);

    const mSequence = new Tone.Sequence(
      (time, note) => {
        setPlay(true);
        mainSynths[mainInstrument].triggerAttackRelease(note, tempo * 2, time);
      },
      mainSequence,
      tempo
    ).start(0);

    return () => {
      bSequence.clear();
      mSequence.clear();
    };
  }, [
    backgroundSequence,
    mainSequence,
    backgroundInstrument,
    mainInstrument,
    mainSynths,
    backgroundSynths,
    tempo,
  ]);

  const handleTogglePlay = () => {
    const nextPlayState = !play;
    if (nextPlayState) {
      Tone.Transport.start();
      startCountTempo();
    } else {
      Tone.Transport.stop();
      // backgroundInstrument.dispose();
      stopCountTempo();
    }
    setPlay(nextPlayState);
  };

  const handleToggleNoteBackSeq = (note, index, isBackNoteActive) => {
    if (!isBackNoteActive && !play) {
      const now = Tone.now();
      backgroundSynths[backgroundInstrument].triggerAttackRelease(
        note,
        "8n",
        now
      );
    }
    const copyBackgroundSequence = [...backgroundSequence];
    copyBackgroundSequence[index] =
      backgroundSequence[index] && backgroundSequence[index] === note
        ? null
        : note;
    setBackgroundSequence(copyBackgroundSequence);
  };

  const handleToggleNoteMainSeq = (note, index, isMainNoteActive) => {
    if (!isMainNoteActive && !play) {
      const now = Tone.now();
      mainSynths[mainInstrument].triggerAttackRelease(note, "8n", now);
    }
    const copyMainSequence = [...mainSequence];
    copyMainSequence[index] =
      mainSequence[index] && mainSequence[index] === note ? null : note;
    setMainSequence(copyMainSequence);
  };

  const renderNotesBackSequence = (indexCompass) =>
    backgroundNotes.map((note, indexNote) => {
      const isBackNoteActive = backgroundSequence[indexCompass] === note;
      return (
        <div
          key={`${indexCompass}-${indexNote}`}
          onClick={() =>
            handleToggleNoteBackSeq(note, indexCompass, isBackNoteActive)
          }
          className={`note ${isBackNoteActive && "active"}`}
        >
          {
            <div className={"text"}>
              <strong>{note}</strong>
            </div>
          }
        </div>
      );
    });

  const renderNotesMainSequence = (indexCompass) =>
    mainNotes.map((note, indexNote) => {
      const isMainNoteActive = mainSequence[indexCompass] === note;

      return (
        <div
          className={`note ${isMainNoteActive ? "active" : ""}`}
          key={`${indexCompass}-${indexNote}`}
          onClick={() =>
            handleToggleNoteMainSeq(note, indexCompass, isMainNoteActive)
          }
        >
          {
            <div className="text">
              <strong>{note}</strong>
            </div>
          }
        </div>
      );
    });

  let countBlock = 0;

  const handleMainVolumeChange = (event, newValue) => {
    setMainVolume(newValue);
  };

  const handleBackVolumeChange = (event, newValue) => {
    setBackgroundVolume(newValue);
  };

  const handleTremoloFrequencyChange = (event, newValue) => {
    setTremoloFrequency(newValue);
  };

  const handleReverbDecayChange = (event, newValue) => {
    setReverbDecay(newValue);
  };

  const handlePreSelectedSequence = (event, newValue) => {
    if (newValue === "sequenceExample1") {
      setMainSequence(sequenceExample1.mainSequence);
      setBackgroundSequence(sequenceExample1.backSequence);
    }
    if (newValue === "sequenceExample2") {
      setMainSequence(sequenceExample2.mainSequence);
      setBackgroundSequence(sequenceExample2.backSequence);
    }
  };

  const handleResetSequences = () => {
    setMainSequence(
      Array.from({ length: compass * notesPerCompass }).fill(null)
    );
    setBackgroundSequence(Array.from({ length: compass * 4 }).fill(null));
    setMainVolume(-10);
    setMainVolumeCommitted(-10);
    setBackgroundVolume(-10);
    setBackgroundVolumeCommitted(-10);
    setTremoloFrequency(0);
    setTremoloFrequencyCommitted(0);
    setReverbDecay(1);
    setReverbDecayCommitted(1);
  };

  const handleBpmChange = (event, newValue = 0) => {
    const inSeconds = 60 / newValue;
    console.log("bpm change", inSeconds);
    setNumberOfBeats(newValue);
  };

  const handleChangeBpmCommited = (event, newValue = 0) => {
    const inSeconds = 60 / newValue;

    clearInterval(intervalRef.current);
    updateCountTempo(countTempo);
    intervalRef.current = setInterval(updateCountTempo, inSeconds * 1000);

    setNumberOfBeatsCommitted(newValue);
    setTempo(inSeconds);
  };

  return (
    <div className="board">
      {/* <img src={`/images/soundscapes-logo.png`} className="logo-image" /> */}
      <div className="select-established-sequence">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
          <RadioGroup
            size="small"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={handlePreSelectedSequence}
            defaultValue={"sequenceExample1"}
          >
            <FormControlLabel
              value="sequenceExample1"
              control={<Radio />}
              label="Sequence 01"
            />
            <FormControlLabel
              value="sequenceExample2"
              control={<Radio />}
              label="Sequence 02"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="main-sequence-container">
        <div className="synth-options">
          <ToggleButtonGroup
            defaultValue="piano"
            value={mainInstrument}
            size="small"
            orientation="vertical"
            exclusive
            onChange={handleMainInstrumentChoice}
            sx={{ width: "60px" }}
          >
            <ToggleButton value="piano" aria-label="list">
              <PianoIcon sx={{ color: "#5e17eb" }} />
            </ToggleButton>
            <ToggleButton value="amSynth" aria-label="module">
              <RadioIcon sx={{ color: "#5e17eb" }} />
            </ToggleButton>

            <ToggleButton value="basicSynth" aria-label="quilt">
              <StraightenIcon sx={{ color: "#5e17eb" }} />
            </ToggleButton>
          </ToggleButtonGroup>
          <Stack
            spacing={1.5}
            direction="column"
            sx={{ mb: 1, mt: 2 }}
            alignItems="center"
          >
            <VolumeUp />
            <Slider
              aria-label="mainVolume"
              min={-25}
              max={0}
              sx={{ width: "5px", height: "80px" }}
              orientation="vertical"
              value={mainVolume}
              onChange={handleMainVolumeChange}
              onChangeCommitted={(e, value) => setMainVolumeCommitted(value)}
            />
            <VolumeDown />
          </Stack>
        </div>
        <div className="main-sequence">
          {mainSequence.map((_, index) => {
            if (getNext4ndIndex(index)) {
              countBlock++;
              return (
                <div className="compass" key={index}>
                  {mainSequence.map((_, subIndex) => {
                    const fromB =
                      countBlock * notesPerCompass - notesPerCompass;
                    const toB = countBlock * notesPerCompass;
                    if (subIndex >= fromB && subIndex < toB) {
                      const isHighlighted = countTempo === subIndex;
                      return (
                        <div
                          key={`${index}-${subIndex}`}
                          className={`notes ${
                            isHighlighted ? "highlighted" : ""
                          }`}
                        >
                          {renderNotesMainSequence(subIndex)}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              );
            }
          })}
        </div>
        <div className="main-sequence-slider">
          <Box>
            <Stack
              spacing={1.7}
              direction="column"
              sx={{ mb: 2, mt: 5, ml: 2 }}
              alignItems="center"
            >
              <WavesIcon />
              <Slider
                sx={{ width: "5px", height: "120px" }}
                orientation="vertical"
                aria-label="tremolo"
                value={tremoloFrequency}
                onChange={handleTremoloFrequencyChange}
                onChangeCommitted={(e, value) =>
                  setTremoloFrequencyCommitted(value)
                }
                step={2}
                marks
                min={0}
                max={60}
              />
              <WavesIcon sx={{ transform: "scale(0.8)" }} />
            </Stack>
          </Box>
          {/* <Box sx={{ width: '120px' }}>
              <Stack
                spacing={1.2}
                direction="row"
                sx={{ mb: 1, mt: 2 }}
                alignItems="center"
              >
                <TimerIcon sx={{ transform: 'scale(0.8)' }} />
                <Slider
                  aria-label="bpm"
                  value={numberOfBeats}
                  onChange={handleBpmChange}
                  onChangeCommitted={handleChangeBpmCommited}
                  step={10}
                  marks
                  min={40}
                  max={240}
                />
                <TimerIcon />
              </Stack>
            </Box> */}
        </div>
      </div>
      <div className="back-sequence-container">
        <div className="synth-options">
          <ToggleButtonGroup
            defaultValue="piano"
            value={backgroundInstrument}
            size="small"
            orientation="vertical"
            exclusive
            onChange={handleBackInstrumentChoice}
            sx={{ width: "60px" }}
          >
            <ToggleButton
              value="piano"
              aria-label="list"
              sx={{ maxHeight: "65px" }}
            >
              <PianoIcon sx={{ color: "#22C2F1" }} />
            </ToggleButton>
            <ToggleButton
              value="amSynth"
              aria-label="module"
              sx={{ maxHeight: "65px" }}
            >
              <RadioIcon sx={{ color: "#22C2F1" }} />
            </ToggleButton>

            <ToggleButton
              value="basicSynth"
              aria-label="quilt"
              sx={{ maxHeight: "65px" }}
            >
              <StraightenIcon sx={{ color: "#22C2F1" }} />
            </ToggleButton>
          </ToggleButtonGroup>
          <Box sx={{ height: "60px" }}>
            <Stack
              spacing={1.5}
              direction="column"
              sx={{ mb: 1, mt: 2 }}
              alignItems="center"
            >
              <VolumeUp />
              <Slider
                sx={{ width: "5px", height: "80px" }}
                color="secondary"
                orientation="vertical"
                aria-label="backVolume"
                min={-25}
                max={5}
                value={backgroundVolume}
                onChange={handleBackVolumeChange}
                onChangeCommitted={(e, value) =>
                  setBackgroundVolumeCommitted(value)
                }
              />
              <VolumeDown />
            </Stack>
          </Box>
        </div>

        <div className="back-sequence">
          {backgroundSequence.map((note, index) => {
            if (getNext4ndIndex(index)) {
              return (
                <div className="back-compass" key={index}>
                  {renderNotesBackSequence(index)}
                </div>
              );
            }
            return null;
          })}
        </div>
        <Box>
          <Stack
            spacing={1.7}
            direction="column"
            sx={{ mb: 1, mt: 5, ml: 2 }}
            alignItems="center"
          >
            <SpatialAudioIcon />
            <Slider
              color="secondary"
              sx={{ width: "5px", height: "120px" }}
              orientation="vertical"
              aria-label="reverb"
              value={reverbDecay}
              onChange={handleReverbDecayChange}
              onChangeCommitted={(e, value) => setReverbDecayCommitted(value)}
              step={2}
              marks
              min={1}
              max={15}
            />
            <SpatialAudioIcon sx={{ transform: "scale(0.8)" }} />
          </Stack>
        </Box>
      </div>
      <div className="buttons-container">
        <div className="play-stop-container">
          <IconButton
            size="medium"
            onClick={handleTogglePlay}
            className="play-stop-icon"
          >
            {play ? (
              <StopCircleIcon />
            ) : (
              <PlayCircleIcon sx={{ color: "#5e17eb" }} />
            )}
          </IconButton>
        </div>
        <div className="reset-container">
          <IconButton
            size="medium"
            onClick={handleResetSequences}
            className="reset-icon"
          >
            <RestartAltIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
