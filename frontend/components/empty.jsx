import React from 'react';
import Modal from 'react-modal';

class Empty extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='container'>
        No {this.props.subject}
      </div>
    );
  }
}

export default Empty;
