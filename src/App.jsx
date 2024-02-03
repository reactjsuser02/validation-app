import './App.css';

import React, { useState } from 'react';

import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';

function DisplayPage(props) {
    if(props.page == 0) {
        return <Step1
        submit={props.step1Submit}
        onChange={props.step1Change}
        form={props.form}
        />
    }
    if(props.page == 1) {
        return <Step2
        step2Change={props.step2Change}
        step2Submit={props.step2Submit}
        previousPage={props.previousPage}
        />
    }
    if(props.page == 2) {
        return <Step3
        step3Change={props.step3Change}
        step3Submit={props.step3Submit}
        error={props.error}
        previousPage={props.previousPage}
        />
    }
}


function changePage(direction) {

}

function App() {

    const [page, setPage] = useState(0)
    const [form, setForm] = useState({
        login: '',
        password: '',
        confirm_password: '',
    })
    const [subscription, setSubscription] = useState(null)
    const [step3Form, setStep3Form] = useState({
        first_name: '',
        last_name: '',
        middle_name: '',
        birthdate: '',
        email: '',
        gender: '',
        older_than: false,
    })
    const [error, setError] = useState({
        first_name: false,
        last_name: false,
        birthdate: false,
        email: false,
        gender: false,
        older_than: false,
    })

    function step1Change(event) {
        console.log(event.target.id)
        console.log(form)
        const newForm = {
          login: form.login,
          password: form.password,
          confirm_password: form.confirm_password,
        }
        newForm[event.target.id] = event.target.value.toLowerCase()
    
        setForm(newForm)
    }
    function step1Submit() {
        if(form.password === form.confirm_password) {
            setPage(page+1)
        }
    }
    function step2Change(event) {
        console.log(event.target.value)
        setSubscription(event.target.value)
    }
    function step2Submit() {
        if(subscription) {
            const newForm = step3Form
            newForm.older_than = false
            setStep3Form(newForm)
            setPage(page+1)
        }
    }
    function step3Change(event) {
        console.log(event.target.id)
        console.log(event.target.value)
        console.log(step3Form)
        // return
        if(event.target.id == 'older_than') {
            console.log('older')
            const newForm = step3Form
            newForm.older_than = !step3Form.older_than
            setStep3Form(newForm)
            return
        }
        const newForm = {
            first_name: step3Form.first_name,
            last_name: step3Form.last_name,
            middle_name: step3Form.middle_name,
            birthdate: step3Form.birthdate,
            email: step3Form.email,
            gender: step3Form.first_gendername,
            older_than: step3Form.older_than,
        }
        newForm[event.target.id] = event.target.value
        setStep3Form(newForm)
    }
    function step3Submit() {
        console.log()
        let check = 0
        const newError = error
        if(step3Form.first_name !== '') {
            check++
        } else {
            newError.first_name = true
        }
        if(step3Form.last_name !== '') {
            check++
        } else {
            newError.last_name = true
        }
        if(step3Form.birthdate !== '') {
            check++
        } else {
            newError.birthdate = true
        }
        if(step3Form.email !== '') {
            check++
        } else {
            newError.email = true
        }
        if(step3Form.gender !== '') {
            check++
        } else {
            newError.gender = true
        }
        if(step3Form.older_than) {
            check++
        } else {
            newError.older_than = true
        }
        if(check == 6) {
            setPage(page+1)
        } else {
            setError(newError)
        }
    }
    function previousPage() {
        setPage(page-1)
    }


    return (
        <div className="App p-4">
            <DisplayPage
            page={page}
            step1Change={step1Change}
            step1Submit={step1Submit}
            form={form}
            step2Change={step2Change}
            step2Submit={step2Submit}
            step3Change={step3Change}
            step3Submit={step3Submit}
            error={error}
            previousPage={previousPage}
            />
            {/* <Step1 />
            <Step2 />
            <Step3 /> */}
            {/* <Step4 /> */}
        </div>
    );
}

export default App;
