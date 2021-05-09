import logo from './logo.svg';
import './App.css';
import FileInput from './Components/FileInput';
import ProcessFile from './Components/Helper';
import { useState } from 'react'
import TripReport from './Components/TripReport';

function App() {

  const [reportData, setReportData] = useState([]);

  const processFile = (recordsArr) => {
    console.log('finalData', ProcessFile(recordsArr));
    setReportData(ProcessFile(recordsArr));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FileInput onSelectFile={processFile} /> <br />
        <TripReport DataSource={reportData} />
      </header>

    </div>
  );
}

export default App;
