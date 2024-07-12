import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

function Chalan() {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button className="bg-blue-500 text-white py-2 px-4 rounded fixed bottom-3 right-40" >Print Chalan</button>}
        content={() => componentRef.current}
        documentTitle="new document"
        pageStyle="print"
        onAfterPrint={() => { console.log('document printed'); }}
      />
      <div className=''>
      <h1 className='text-3xl font-semibold text-center my-7'>Chalan</h1>
      </div>
      <div  className="  " ref={componentRef} > 
        
        <table className="border border-black border-collapse w-2/3 mx-auto mt-10">
          <tbody>
            <tr>
              <td className="border border-black p-2" >No.</td>
              <td className="border border-black p-2" id='schNo'>436</td>
              <td className="border border-black p-2" id='date'>DATE: 28/06/2024</td>
            </tr>
            <tr>
              <td colSpan="3" className="border border-black p-2">TO : THE STATE BANK OF PAKISTAN ISLAMABAD</td>
            </tr>
            <tr>
              <td colSpan="3" className=" border-black p-2">Pay Rs. <span>2,098,216</span> </td>
              
            </tr>
            <tr>
              <td colSpan="3" className="border border-black p-2" id='amountWords'>Amount in Words</td>
       
            </tr>
            <tr>
              <td colSpan="3" className="border border-black p-2">
                <div className='text-center'>
                  Federal Treasury Officer
                  <br />
                  Islamabad
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Chalan;
