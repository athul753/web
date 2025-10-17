import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [date, setDate] = useState(null);
  const [webdev, setWebdev] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleNameChange = (e) => {
    const val = e.target.value;
    if (/^[A-Za-z\s]*$/.test(val)) setName(val);
  };

  const handleRegChange = (e) => {
    const val = e.target.value;
    if (/^\d{0,9}$/.test(val)) setReg(val);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      {/* Header */}
      <div className="w-full flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-6">
        <img src="/mist-logo.png" alt="MIST" className="h-10" />
        <p>Athul John, 240905474, 9449450048</p>
      </div>

      <div className="flex gap-10">
        {/* Left Form */}
        <div className="flex flex-col gap-6">
          <div>
            <label>Enter Name<br /><span className="text-sm text-gray-400">(Should be letters only)</span></label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="block w-64 p-2 bg-gray-600 border-none rounded mt-1"
            />
          </div>

          <div>
            <label>Enter Reg Number<br /><span className="text-sm text-gray-400">(Should be 9 numbers only)</span></label>
            <input
              type="text"
              value={reg}
              onChange={handleRegChange}
              className="block w-64 p-2 bg-gray-600 border-none rounded mt-1"
            />
          </div>

          <div>
            <label>Enter birthday<br /><span className="text-sm text-gray-400">(Use react calendar form validation here)</span></label>
            <div className="mt-2">
              <button
                className="bg-gray-600 px-4 py-2 rounded"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                {date ? date.toLocaleDateString() : "Select Date"}
              </button>
              {showCalendar && (
                <div className="mt-2 bg-white p-2 rounded">
                  <Calendar onChange={(d) => { setDate(d); setShowCalendar(false); }} value={date} />
                </div>
              )}
            </div>
          </div>

          <div>
            <label>Is webdev the best domain? :)<br />
              <span className="text-sm text-gray-400">(On clicking green here, the red disappears)</span>
            </label>
            <div className="flex gap-3 mt-2">
              <button
                onClick={() => setWebdev(true)}
                className={`px-6 py-2 rounded ${webdev === true ? "bg-green-500" : "bg-green-700"}`}
              >
                YES
              </button>
              {webdev !== true && (
                <button
                  onClick={() => setWebdev(false)}
                  className={`px-6 py-2 rounded ${webdev === false ? "bg-red-500" : "bg-red-700"}`}
                >
                  NO
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Preview Card */}
        <div className="bg-white text-black rounded-2xl p-6 w-80">
          <h2 className="text-center font-semibold mb-4">MIST Mancomm Member 69</h2>
          <p>My name is <span className="font-semibold">{name || "____"}</span></p>
          <p className="mt-2">My registration number is <span className="font-semibold">{reg || "_________"}</span></p>
          <p className="mt-2">
            My birthday is on{" "}
            <span className="font-semibold">
              {date ? date.toLocaleDateString() : "DD/MM/YYYY"}
            </span>
          </p>

          <p className="mt-4 text-center">Is webdev the best domain? :)</p>
          {webdev === null && (
            <div className="flex flex-col items-center mt-2 gap-2">
              <button className="bg-green-400 text-black px-6 py-2 rounded-full">YES</button>
              <button className="bg-red-400 text-black px-6 py-2 rounded-full">NO</button>
            </div>
          )}
          {webdev === true && (
            <div className="flex justify-center mt-2">
              <button className="bg-green-400 text-black px-6 py-2 rounded-full">YES</button>
            </div>
          )}
          {webdev === false && (
            <div className="flex justify-center mt-2">
              <button className="bg-red-400 text-black px-6 py-2 rounded-full">NO</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
