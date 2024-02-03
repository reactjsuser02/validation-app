import './App.css';

function Step2(props) {

  function handleChange(event) {
    props.step2Change(event)
  }
  function handleClick() {
    props.step2Submit()
  }

  return (
    <div className='card p-4 sbg-zinc-200 shadow-[0_2px_10px_1px_rgba(0,0,0,0.4)]'>
        <p className='font-semibold mb-4'>User Registration Wizard - Step 1</p>
        <label htmlFor="select">Selection Type:</label>
        <select className='block border rounded w-full h-10 mb-4' name="select" id="select" onChange={handleChange}>
            <option value="none">Choose an option</option>
            <option value="free">Free usage</option>
            <option value="monthly">Monthly subscription</option>
            <option value="yearly">Yearly subscription</option>
        </select>
        <button className="text-white rounded px-3 py-1 bg-purple-500" onClick={handleClick}>Next</button>
    </div>
  );
}

export default Step2;


