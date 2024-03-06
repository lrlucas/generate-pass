import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const lettersLowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const lettersUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '1234567890';
  const symbols = '@&%$#';


  const allCharacters = lettersLowerCase + lettersUpperCase + numbers + symbols;

  


  const [newPassword, setNewPassword] = useState('');


  function onClickButton() {

    let length = 15;
    let newPassword = '';
    
    for (let index = 0; index < length; index++) {

      const randomIndex = Math.floor(Math.random() * allCharacters.length);

      // console.log(randomIndex);

      newPassword += allCharacters[randomIndex];

      setNewPassword(newPassword);

      // console.log(`${Math.random()}`)

      /// Math.random() * allCharacters.length ===== 13.9
      // /// Math.floor(13.9) === 14
      // console.log(`tamaño: ${allCharacters.length}`)
      // console.log(Math.random() * allCharacters.length);
      // console.log(`resultado: ${Math.floor(Math.random() * allCharacters.length)}`)
      // console.log(`resultado: ${Math.floor(13.9)}`) /// 14

      
      
    }
    

  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      
      {/* <div class="input-group mb-3">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="passwords generated" aria-label="passwords generated" aria-describedby="button-addon2"/>
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Copy</button>
        </div>
      </div>
      <button type="button" class="btn btn-outline-secondary">Generate password</button> */}



      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col col-lg-1"></div>
          <div className="col-md-auto">
            {/* Variable width content */}
            {/* <div className="input-group mb-3">
             
            </div> */}

            <div className="input-group mb-3 input-group-lg">
                {/* aria-label="passwords generated" 
                    placeholder="passwords generated"           

                */}
                <input type="text" className="form-control" 
                      value={newPassword} readOnly/>
                <button className="btn btn-outline-secondary" type="button">Copy</button>
            </div>

            <button type="button" className="btn btn-outline-secondary" onClick={onClickButton}>Generate password</button>
          </div>
          <div className="col col-lg-1"></div>

        </div>
      </div>

    </>
  )
}

export default App
