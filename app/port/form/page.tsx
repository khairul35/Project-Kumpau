import Component from "./component";
import { FormProps } from "./props";

const PortForm = (props: FormProps) => {
    return (
        <Component 
            onCancelForm={props.onCancelForm}
            showForm={props.showForm}
        />
    );
};

export default PortForm;
