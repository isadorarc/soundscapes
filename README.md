# Soundscapes

<a name="Table of Contents"></a>

![UI](/user/public/images/front-app-1_1_1.png)

## Table of Contents

- [App Overview](#app-overview)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Features](#features)
- [Tech Details](#tech-details)
  - [Dependencies](#dependencies)
  - [Dev Dependencies](#dev-dependencies)
- [Contributing](#contributing)
- [License](#license)

<a name="App Overview"></a>

# App Overview

**SOUNDSCAPES** is a work in progress **SYNTH APP** that allows the user to create unique **soundscapes tracks** with a few simple but curated sound options: two sequencers, texture adder, nature sounds and a noise generator.

The project started as an mvp for my fullstack bootcamp and is in currently development.

<a name="Tech Stack"></a>

# Tech Stack

- **ReactJS**: the core of the project provinding a fast, responsive and powerful user interface.

- **Material-UI**: the React UI framework for the current user interface of the project, easy, responsive and attractive.

- **Tone.js**: a versatile and complete audio library that provides from simple to complex and creative sound explorations, like classic and experimental synthesis.

- **Web Audio API**: A high-level JavaScript API for processing and synthesizing audio in web applications.

  - **Standardized Audio Context**: A library providing a standardized interface to the AudioContext API.
  - **Automation Events**: A module for working with automation events in the Web Audio API.

- **Backend Framework**: Express.js (Node.js) will be used as the backend server to handle requests related to track recording and storage.

- **Database**: MongoDB will be used to store information about recorded tracks, such as metadata, file paths, and user details.

- **File Storage and Authentication**: Microsoft Azure Blob Storage and Firebase Authentication.

<a name="Installation and Setup"></a>

# Installation and Setup

### Required downloads

- React.js
- Node.js
- NPM

### Clone the Repository

```
git clone -repo-
```

### Install Libraries

[Tone.js](https://tonejs.github.io/)

> Tone.js is a Web Audio framework for creating interactive music in the browser. The architecture of Tone.js aims to be familiar to both musicians and audio programmers creating web-based audio applications. On the high-level, Tone offers common DAW (digital audio workstation) features like a global transport for synchronizing and scheduling events as well as prebuilt synths and effects. Additionally, Tone provides high-performance building blocks to create your own synthesizers, effects, and complex control signals.

> To install:

Run

```
 npm install tone@next
```

To import Tone.js

```
import * as Tone from 'tone'
```

[Material-UI](https://tonejs.github.io/)

> Material-UI is a React UI framework that provides a set of pre-designed React components, implementing Google's Material Design principles. It offers a quick and easy way to create aesthetically pleasing and responsive user interfaces.

> To install:

Run

```
 npm install @mui/material @emotion/react @emotion/styled;
```

To import Material-UI components

```
import { PlayCircleIcon, IconButton, inputClasses, ... } from '@mui/material';
```

### Running the Frontend

Run

```
cd user
```

Install dependencies

```
npm install
```

```
npm run dev
```

### Getting Started

Now Soundscapes should be accessible from [http://localhost:5173](http://localhost:5173/)!!

<a name="Features"></a>

# Features

Soundscapes is in current development for some of the features.

### Current Features

**Sequencer**

- Two sequencers playing at the same time: Main Sequence and Background Sequence.

- Two pre-established main sequences.

- The possibility of choosing/playing 4 notes per compass, with 8 compasses - main sequence.

- The possibility of choosing/playing 1 note per compass, with 8 compasses - background sequence.

- Volume adjustment for each of the sequences.

- 3 instruments options for each of the sequences (Piano, Basic Synth, AM Synth).

**Effects**

- The possibility of applying two different to the sequence: Tremolo and Reverb.

- Adjustable intensity for the music effects.

<a name="Tech Details"></a>

# Tech Details

### Dependencies

- React: Version 18.2.0
- Tone.js: Version 14.8.49
- Standardized Audio Context: Version 25.3.46
- Automation Events: Version 6.0.1
- @mui/material: Version X.X.X (Replace with the actual version)

### Dev Dependencies

- @types/react: Type definitions for React.
- @vitejs/plugin-react: Vite plugin for React.
- eslint: JavaScript linting tool.
- prettier: Code formatter.
- vite: Front-end build tool.

## Contributing

Contributions are welcome! :)
