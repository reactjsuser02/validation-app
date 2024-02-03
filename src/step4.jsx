import './App.css';

function Step4() {
  return (
    <div className='card p-4 sbg-zinc-200 shadow-[0_2px_10px_1px_rgba(0,0,0,0.4)]'>
        <p className='font-semibold mb-4'>User Registration Wizard - Step 4</p>
        <label htmlFor="card_number">Card Number:</label>
        <input className='border w-full h-10 mb-4 p-4' type="text" id='card_number' />
        <div className='buttons block'>
            <button className="text-white rounded px-3 py-1 mr-4 bg-purple-500">Previous</button>
            <button className="text-white rounded px-3 py-1 bg-purple-500">Next</button>  
        </div>
    </div>
  );
}

export default Step4;




