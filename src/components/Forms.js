import React from 'react';
import PersonalInfo  from './PersonalInfo';
import HouseHoldInfo  from './HouseHoldInfo';
import Job from './Job';


function Forms(props) {
  console.log('okeyyyyyyyyyyyyyyyyyyyyy.....')
  return (
    <div>
      <PersonalInfo updateInterview={props.updateInterview} email={props.email} interview={props.interview}/>
      <HouseHoldInfo updateInterview={props.updateInterview} email={props.email} interview={props.interview}/>
      <Job updateInterview={props.updateInterview} email={props.email} interview={props.interview}/>
    
    </div>
  );

}

export default Forms;