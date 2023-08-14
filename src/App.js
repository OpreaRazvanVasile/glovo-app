import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [comenzi, setComezi] = useState('')
  const [realocari, setRealocari] = useState('')
  const [rata, setRata] = useState('')
  const [realocariPosibile, setRealocariPosibile] = useState('')
  const [prag, setPrag] = useState('')


  useEffect(() => {
    const rata = +((realocari * 100) / comenzi).toFixed(2)
    setRata(rata)
    setPrag(9)
    if (rata >= prag) {
      setRealocariPosibile(0)
    }
    else {
      const diferenta = rata - prag;

      setRealocariPosibile(Math.abs(comenzi * diferenta / 100).toFixed(0))

    }


  }, [comenzi, realocari])



  return (
    <div className="App-header">
      <div className="App-table">
        <form className='table-form'>
          <label>Comenzi: </label>
          <input key='comenzi' onChange={
            (e) => {
              setComezi(+e.target.value)
            }
          } type='text' name="comenzi" value={comenzi} required maxLength="5"></input><br></br>
          <label>Realocari: </label>
          <input onChange={(e) => {
            setRealocari(+e.target.value)


          }} type='text' name="realocari" value={realocari} required maxLength="5"></input>
          <br></br>
          <label>Realocari Disponibile: </label>
          <input disabled type='text' value={realocariPosibile} name='realocariPosibile'  ></input>
          <br></br>
          <label>Rata Alocare: </label>
          <input type='text' disabled name='rata' value={rata} ></input>
          <label>% </label>
          <input id="sub" type='submit'></input>

        </form>

      </div>
    </div>
  );
}

export default App;
