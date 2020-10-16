import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

interface IUnderLinedTextFieldProperties {
    value: string;
}

class UnderLinedTextField extends React.Component<IUnderLinedTextFieldProperties> {
    
    constructor(props: IUnderLinedTextFieldProperties) {
        super(props);
        //this.state = { value: props.value };
      };

      render() {
          return (
            <TextField label="" defaultValue={this.props.value} underlined />
          )
      }     
}


export default UnderLinedTextField;


