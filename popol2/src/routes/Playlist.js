import React, { Component } from "react";
import '../scss/Playlist.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedButton: 'playlist',
    };
  }

  handleButtonClick = (buttonName) => {
    this.setState({ selectedButton: buttonName });
  }

  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <button
            onClick={() => this.handleButtonClick('MyPage')}
            className={this.state.selectedButton === 'MyPage' ? 'active' : ''}
          >
            MyPage
          </button>
          <button
            onClick={() => this.handleButtonClick('Playlist')}
            className={this.state.selectedButton === 'Playlist' ? 'active' : ''}
          >
            Playlist
          </button>
          <button
            onClick={() => this.handleButtonClick('New Playlist')}
            className={this.state.selectedButton === 'New Playlist' ? 'active' : ''}
          >
            New Playlist
          </button>
        </div>
        <div className="content">
          {this.state.selectedButton === 'MyPage' && <h2>마이페이지</h2>}
          {this.state.selectedButton === 'Playlist' && <h2>플레이리스트</h2>}
          {this.state.selectedButton === 'New Playlist' && <h2>새 플레이리스트</h2>}
        </div>
      </div>
    );
  }
}

export default App;