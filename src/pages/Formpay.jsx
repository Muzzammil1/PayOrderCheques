import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

function Formpay() {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Data Recording</h1>
      <form className='flex flex-col mx-auto w-3/4'>



        <div className='flex flex-col gap-4 flex-1 '>

          <div className='flex gap-6 flex-wrap'>

            <div className='flex items-center gap-2'>
              <input type="number" min='1' max='5000' required id='bedrooms'
                className='p-3 border border-gray-300 rounded-lg'
              />
              <p>: Schedule No </p>
            </div>
            <div className='flex items-center gap-2'>
              <input type="number" min='1' max='10' required id='bathrooms'
                className='p-3 border border-gray-300 rounded-lg'
              />
              <p>: Book No </p>
            </div>
            <div>
              <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className='flex items-center gap-2'>
              <input type="number" required id='regularPrice'
                className='p-3 border border-gray-300 rounded-lg'
              />
              <div className='flex flex-col items-center'>
                <p>Cheque No</p>

              </div>


            </div>


            {/* {formData.offer && (<div className='flex items-center gap-2'>
                    <input type="number" min='0' max='5000' required id='discountPrice'
                        className='p-3 border border-gray-300 rounded-lg' 
                     
                        />
                    <div className='flex flex-col items-center'>
                        <p>Discounted Price</p>
                        <span className='text-xs'>($ / Month)</span>
                    </div>
                </div>)} */}
          </div>

          <input
            type="text"
            placeholder='Payees Name'
            className='border p-3 
        rounded-lg'
            id='name'
            maxLength='62'

            required
          >
          </input>
        </div>
        {/* <p className='text-red-700 text-sm'>{imageUploadError && imageUploadError}</p> */}

        {/* {

                formData.imageUrls.length > 0 && formData.imageUrls.map((url, index) => (
                    <div key={url} className='flex justify-between border p-3 items-center'>
                        <img src={url} alt="listing image" className='w-20 h-20 object-contain rounded-lg' />
                        <button type='button' onClick={() => handleRemoveImage(index)} className='p-3 text-red-700 rounded-lg uppercase hover-opacity-75'>Delete</button>
                    </div>
                ))
            } */}


        {/* {error && <p className='text-red-700 text-sm'>{error}</p>} */}

        <button className='my-10 p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Submit</button>
      </form>
    </main>
  )
}

export default Formpay
