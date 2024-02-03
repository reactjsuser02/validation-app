import './App.css';

function Step5() {
  return (
    <div className='card p-4 sbg-zinc-200 shadow-[0_2px_10px_1px_rgba(0,0,0,0.4)]'>
        <p className='font-semibold mb-4'>Step 5 - Consent to Personal Data Processing</p>
        <label htmlFor="login">Login:</label>
        <input className='border w-full h-10 mb-4 p-4' type="text" id='login' />
        <label htmlFor="password">Password:</label>
        <input className='border w-full h-10 mb-4 p-4' type="password" id='password' />
        <div className='block'>
          <label htmlFor="consent">Consent to Personal Data Processing:</label>
          <input type="checkbox" id='agree' />
          <label htmlFor="">I consent to personal data processing </label>
          <input type="checkbox" id='cookie_agree' />
        </div>
        
        <div className='buttons block'>
            <button className="text-white rounded px-3 py-1 mr-4 bg-purple-500">Previous</button>
            <button className="text-white rounded px-3 py-1 bg-purple-500">Next</button>  
        </div>
    </div>
  );
}

export default Step5;




