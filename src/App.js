// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { useState } from "react"

function App() {
  const storageJobs = JSON.parse(localStorage.getItem('jobs'))

  const [job, setjob] = useState('')
  const [jobs, setjobs] = useState(storageJobs ?? [])

  const handleSubmit = () => {
    setjobs(pre => {
      const newJobs = [...pre, job]

      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
    setjob('')
  }
  // console.log(job);
  // console.log(jobs);
  return (
    <div style={{ padding: 32}}>
      <input value={job} onChange={e => setjob(e.target.value)}/>
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job,index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  )
}
export default App;