import React from 'react';
import Text  from './Text';


class Email extends React.Component {

  constructor(props) {
    super(props);
    this.state = {email: '', interview: {}};
    
  }

  render() {
    const emails = [
      {value: 'asad.yarahmadi@test.com', label: 'asad.yarahmadi@test.com'},
      {value: 'pierre-leo@test.com', label: 'pierre-leo@test.com'},
      
    ]
    return (
      <div>
        <Text title="Welcome"/>

    </div>
    
    );

  }

}

export default Email;
