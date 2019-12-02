import React from 'react';

 import Text  from './Text';
 import MapInput from './Inputs/MapInput';
 import Label from './Label';
 import SelectionInput from './Inputs/SelectionInput';

 class Travail extends React.Component {

   constructor(props) {
     super(props);
     this.handleChange = this.handleChange.bind(this);

   }


   handleChange(attribute, value) {
     const interview  = this.props.interview;
     interview[attribute] = value;

     this.props.updateInterview(interview);

     fetch(`http://localhost:3000/${this.props.email}` , {
       headers: {"Content-Type": "application/json"},
       method : 'PUT',
       body   : JSON.stringify(interview)
     });

   }
   
   render() {

     return (
       <div>
         <Text title="Information form job:"/>

         <form >

           <Label title="Select your office position"/>
           <MapInput name="OfficePlace" value={this.props.interview.lieuOccupation} onChange={this.handleChange}/> 

           <SelectionInput 
           title="Travel time to work or school" name="Traveltimetowork" value={this.props.interview.tempsDeplacementOccupation} 
           options={[
            {value: 'Less Than 20 minutes', label: 'Less Than 20 minutes'},
            {value: '20-40 min', label: '20-40 min'},
            {value: '40-60 min', label: '40-60 min'},
            ]} 
 
           onChange={this.handleChange}/>

         </form>
       </div>

     );

   }

 }

 export default Travail;