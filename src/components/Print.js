import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
 
class ComponentToPrint extends React.Component {
  render() {
    return (
       <div>
           <h1>Je suis une facture</h1>
       
       </div>
      
    );
  }
} 
const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
 
  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default Print;