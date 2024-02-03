import './App.css';

function Step3(props) {
  return (
    <div className='card p-4 sbg-zinc-200 shadow-[0_2px_10px_1px_rgba(0,0,0,0.4)]'>
        <p className='font-semibold mb-4'>User Registration Wizard - Step 3</p>
        <label htmlFor="first_name">First Name:</label>
        {props.error.first_name ? (
        <>
          <br />
          <span className="text-red-400">invalid field</span>
        </>
        ) : null}
        <input className='border w-full h-10 mb-4 p-4' type="text" id='first_name' onChange={props.step3Change} />
        <label htmlFor="last_name">Last Name:</label>
        {props.error.last_name ? (
        <>
          <br />
          <span className="text-red-400">invalid field</span>
        </>
        ) : null}
        <input className='border w-full h-10 mb-4 p-4' type="text" id='last_name' onChange={props.step3Change} />
        <label htmlFor="middle_name">Middle Name (optional):</label>
        <input className='border w-full h-10 mb-4 p-4' type="text" id='middle_name' onChange={props.step3Change} />
        <label htmlFor="birthdate">Birthdate:</label>
        {props.error.birthdate ? (
        <>
          <br />
          <span className="text-red-400">invalid field</span>
        </>
        ) : null}
        <input className='border w-full h-10 mb-4 p-4' type="date" id='birthdate' onChange={props.step3Change} />
        <label htmlFor="email">Email:</label>
        {props.error.email ? (
        <>
          <br />
          <span className="text-red-400">invalid field</span>
        </>
        ) : null}
        <input className='border w-full h-10 mb-4 p-4' type="text" id='email' onChange={props.step3Change} />
        <label htmlFor="gender">Gender:</label>
        {props.error.gender ? (
        <>
          <br />
          <span className="text-red-400">invalid field</span>
        </>
        ) : null}
        <select className='block border rounded w-full h-10 mb-4' id="gender" onChange={props.step3Change}>
            <option value="none">Choose an option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <div className='block'>
            Are you older than 18?
            <input className='mt-2 mb-4' type="checkbox" id="older_than" onChange={props.step3Change} />
            <label htmlFor="older_than">Yes</label>
            {props.error.older_than ? (
            <>
              <br />
              <span className="text-red-400">age does not meet requirements</span>
            </>
            ) : null}
        </div>
        <div className='buttons block'>
            <button className="text-white rounded px-3 py-1 mr-4 bg-purple-500" onClick={props.step3Submit}>Previous</button>
            <button className="text-white rounded px-3 py-1 bg-purple-500" onClick={props.step3Submit}>Next</button>  
        </div>
    </div>
  );
}

export default Step3;


