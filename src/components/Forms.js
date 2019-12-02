import React from 'react';
import PersonalInfo  from './PersonalInfo';



function Forms(props) {
  console.log('okeyyyyyyyyyyyyyyyyyyyyy.....')
  return (
    <div>
      <PersonalInfo updateInterview={props.updateInterview} email={props.email} interview={props.interview}/>
          
    </div>
  );

}

export default Forms;