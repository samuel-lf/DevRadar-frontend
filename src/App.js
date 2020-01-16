import React from 'react';
import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  return (
    <div id="App">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input type="text" name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/36999289?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Samuel Leonel</strong>
                <span>Angular, Vue JS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum sapiente magnam mollitia, eveniet et! Repudiandae vero, corrupti odio beatae dignissimos omnis iste ut sequi adipisci incidunt, maiores tempore. Quos.</p>
            <a href="">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/36999289?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Samuel Leonel</strong>
                <span>Angular, Vue JS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum sapiente magnam mollitia, eveniet et! Repudiandae vero, corrupti odio beatae dignissimos omnis iste ut sequi adipisci incidunt, maiores tempore. Quos.</p>
            <a href="">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/36999289?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Samuel Leonel</strong>
                <span>Angular, Vue JS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum sapiente magnam mollitia, eveniet et! Repudiandae vero, corrupti odio beatae dignissimos omnis iste ut sequi adipisci incidunt, maiores tempore. Quos.</p>
            <a href="">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/36999289?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Samuel Leonel</strong>
                <span>Angular, Vue JS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum sapiente magnam mollitia, eveniet et! Repudiandae vero, corrupti odio beatae dignissimos omnis iste ut sequi adipisci incidunt, maiores tempore. Quos.</p>
            <a href="">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
