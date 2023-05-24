// let osc;

// function App() {
//   // const [count, setCount] = useState(0);
//   const [isOscOn, setIsOscOn] = useState(false);
//   const [oscs, setOscs] = useState([]);
//   const [input, setInput] = useState(440);

//Osc starts on user action
// const handleUserAction = async () => {
//   if (!osc) {
//     osc = new Tone.Oscillator(440, "sine").toDestination();
//   }
//   try {
//     await Tone.start();
//     osc.start();
//     setIsOscOn(true);
//   } catch (error) {
//     console.log("Failed to start AudioContext:", error);
//   }
// };

// Osc stops on user action
// const handleStopOscillator = () => {
//   osc.stop();
//   setIsOscOn(false);
// };

// const handleClick = () => {
//   if (isOscOn === true) {
//     handleStopOscillator();
//   } else {
//     handleUserAction();
//   }
// };
//

//   function addOsc() {
//     setOscs((state) => [
//       ...state,
//       new Tone.Oscillator(input, "sine").toDestination(),
//     ]);
//   }

// // interval 4 starting (NEEDED?????)
// setTimeout(() => {
//   Tone.start();
//   // osc.start();
// }, 100);

// muting Osc (NOT NEEDED??)
// osc.mute = true;

// interval 4 stop
//   osc.stop();
// }, 5000);

// // test variable 4 stop osc
// const stopOscOne = () => {
//   osc.stop();
// };

//   useEffect(() => {
// // creating osc 1 (and starts??)
// const osc = new Tone.Oscillator(440, "sine").toDestination();
// // Osc starts on user action
// const handleUserAction = async () => {
//   try {
//     await Tone.start();
//     osc.start();
//     setIsOscOn(true);
//   } catch (error) {
//     console.log("Failed to start AudioContext:", error);
//   }
// };
// // Osc stops on user action
// const handleStopOscillator = () => {
//   osc.stop();
//   setIsOscOn(false);
// };
// const handleClick = () => {
//   if (isOscOn === true) {
//     handleStopOscillator();
//   } else {
//     handleUserAction();
//   }
// };
// // interval 4 starting (NEEDED?????)
// setTimeout(() => {
//   Tone.start();
//   // osc.start();
// }, 100);
// muting Osc (NOT NEEDED??)
// osc.mute = true;
// interval 4 stop
//   osc.stop();
// }, 5000);
// // test variable 4 stop osc
// const stopOscOne = () => {
//   osc.stop();
// };
// return () => {
//   osc.dispose();
// };
//   }, []);

//   return (
//     <div>
//       {/* <button onClick={() => handleClick()}>
//         {isOscOn ? "Stop Oscillator" : "Start Oscillator"}
//       </button> */}
//       {oscs.map((osc) => (
//         <button onClick={() => osc.start()}>Play</button>
//       ))}

//       <div>
//         <input value={input} onChange={(e) => setInput(e.target.value)} />
//         <button onClick={addOsc}>create new</button>
//       </div>
//     </div>
//   );
// }

// // <div></div>;
// //

// export default App;
