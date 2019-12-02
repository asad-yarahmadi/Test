import React from 'react';

import Label from './Label';
import SelectionInput from './Inputs/SelectionInput';
import StringInput from './Inputs/StringInput';
import DateInput from './Inputs/DateInput';
import MapInput from './Inputs/MapInput'

class Movement1 extends React.Component {
    
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(attribute, value) {
    const interview = this.props.interview;
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
  
          <h3>Informations du déplacement 2 :</h3>
           
           <form >
               
             <SelectionInput 
             title="Quel est votre motif pour le déplacement?" name="motifPourDeplacement2" value={this.props.interview.motifPourDeplacement2} 
             options={[
              {value: 'Travail', label: 'Travail'},
              {value: 'Étude', label: 'Etudes'},
              {value: 'Loisir', label: 'Loisir'},
              {value: 'Accompagnement', label: 'Accompagnement'},
              {value: 'Autre', label: 'Autres'}]}
           
             onChange={this.handleChange}/>
             
             <Label title="Cliquez sur la carte votre lieu d'origine"/>
             <MapInput name="lieuOrigine2" value={this.props.interview.lieuOrigine2} onChange={this.handleChange}/>
  
             <Label title="Cliquez sur la carte votre lieu de destination"/>
             <MapInput name="lieuDestination2" value={this.props.interview.lieuDestination2} onChange={this.handleChange}/> 
  
             <Label title="Indiquez votre heure de départ"/>
             <DateInput name="heureDepart2" value={this.props.interview.heureDepart2} onChange={this.handleChange}/>
             
             <Label title="Indiquez votre heure d'arrivée"/>
             <DateInput name="heureArrivee2" value={this.props.interview.heureArrivee2} onChange={this.handleChange}/>
             
             <SelectionInput 
             title="Quel mode de transport avez-vous emprunté?" name="modeDeTransport2" value={this.props.interview.modeDeTransport2} 
             options={[
              {value: 'Automobile', label: 'Automobile'},
              {value: 'Transport en commun', label: 'Transport en commun'},
              {value: 'Bicyclette', label: 'Bicyclette'},
              {value: 'Marche', label: 'Marche'},
              {value: 'Autre', label: 'Autres'}]} 
             onChange={this.handleChange}/>
              
             <Label title="Si vous avez pris les transports en commun, indiquez les lignes utilisées?"/>
             <StringInput name="transportCommun2" value={this.props.interview.transportCommun2} onChange={this.handleChange}/> 
  
           </form>
         </div>
  
       );
  
     }
  
   }
  
   export default Movement1;