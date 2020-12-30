import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

export interface IUnderLinedTextFieldProperties {
    value: string | undefined;
    updateField: (_newValue: string | undefined) => void;
}

export class UnderLinedTextField extends React.Component<IUnderLinedTextFieldProperties> {

    constructor(props: IUnderLinedTextFieldProperties) {
        super(props);
        //this.state = { value: props.value };
        console.log("Props:", props);
      
      };

      render() {
          return (
            <TextField 
              label="" 
              onChange={(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => { this.props.updateField(newValue); }} 
              defaultValue={this.props.value} 
              underlined 
            />
          )
      }     
}



export default UnderLinedTextField;


