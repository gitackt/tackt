import React, { PureComponent } from 'react';


export class Name1Component extends PureComponent {

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className='name-container'>
          <div>
            <span style={{ color: '#2dd8ca' }}>Who</span> Are You?
            <br /><br />
            <p className='slide-content'>三橋拓人と申します。</p>
          </div>
        </div>
      </div>
    );
  }
}


export class Name2Component extends PureComponent {

  render() {
    return (
      <div className='name-container'>
        <div>
          <span style={{ color: '#2dd8ca' }}>What</span> do you do?
          <br /><br />
          <p className='slide-content'>Webエンジニアをしています。</p>
        </div>
      </div>
    );
  }
}


export class Name3Component extends PureComponent {

  render() {
    return (
      <div className='name-container'>
        <div>
          <span style={{ color: '#2dd8ca' }}>What</span> can you do?
          <br /><br />
          <p className='slide-content'>Webサイトやアプリを作れます。</p>
        </div>
      </div>
    );
  }
}

export class Name4Component extends PureComponent {

  render() {
    return (
      <div className='name-container'>
        <div>
          <span style={{ color: '#2dd8ca' }}>Welcome!</span>
          <br /><br />
          <div className='lead-to-content' onClick={this.props.onChange}>
          <p className='slide-content'>サイトを見る</p>
          </div>
        </div>
      </div>
    );
  }
}

