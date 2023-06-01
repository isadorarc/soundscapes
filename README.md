# Soundscapes

## **mvp project by isa**

_-- not finished yet!_

The project idea is a synthesizer where the user can create generative sequences of sound with different options of sounds, a sequencer and modulation.

## Tech stack and installation

The project has been created using React.
The llibrary used for the sound generation and interface is tone.js.
The back has not been built yet.

**Installation of Tone.js**

[Tone.js](https://tonejs.github.io/)

To install:

Run `npm install tone@next`

To import Tone.js:

`import * as Tone from 'tone'`

Sound llibrary >> [API documentation Tone.js](https://tonejs.github.io/docs/14.7.77/index.html)

> Tone.js is a Web Audio framework for creating interactive music in the browser. The architecture of Tone.js aims to be familiar to both musicians and audio programmers creating web-based audio applications. On the high-level, Tone offers common DAW (digital audio workstation) features like a global transport for synchronizing and scheduling events as well as prebuilt synths and effects. Additionally, Tone provides high-performance building blocks to create your own synthesizers, effects, and complex control signals.

## Current features

The front currently has the following features:

**Oscillator**

A basic oscillator sound source + the option to add more than one oscillator choosing the frequency by user.

**Sequencer**

A few sequencer options with the Synth type of sound ([Synth](https://tonejs.github.io/docs/14.7.77/Synth)).

Sequences options:

Initial sequence (seq 1)

Second sequence (seq 2)

Random generated sequences (random seq)

Optional manual change sequence (all)

The optional manual change sequence displays the notes of the current sequence + the buttons to change up and down each note and octave (3).

## Future features!

Effects and modulation to add (loop, reverb..)

Sounds (harmonic oscillation, noise, texture sound)

Samples

Add a Save feature (back) and a Replay feature

Add the PLAY/STOP functions

Styling (css + tailwind?)
