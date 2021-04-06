import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import {UseForm, Form } from '../components/UseForm'
import Controls from '../components/controls/Controls'
import * as empService from "../Services/EmployeeService";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';



const genderItems = [
  {id: 'male', title: 'Male'},
  {id: 'female', title: 'Female'},
  {id: 'other', title: 'Other'},
]


const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
}


function EmployeeForm(props) {
  const{addOrEdit,recordsForEdit}=props

    const validate = (fieldValues = values) =>{
    let temp = {...errors};
    if('fullName' in fieldValues)
      temp.fullName=fieldValues.fullName?"":"This Field is required"
    if('email' in fieldValues)
      temp.email=(/$^|\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(fieldValues.email)?"":"Email is not valid!"
    if('mobile' in fieldValues)
      temp.mobile=fieldValues.mobile.length > 9 ? "" :"Minimum 10 Digits required!"    
    if('city' in fieldValues)
      temp.city=fieldValues.city?"":"This Field is required"
    if('departmentId' in fieldValues)
      temp.departmentId=fieldValues.departmentId.length !== 0 ?"":"This Field is required"
    setErrors({
      ...temp
    })
    if(fieldValues === values)
    return Object.values(temp).every(x=> x=== "")

  }

  useEffect(() => {
    if (recordsForEdit !== null) {
      setValues({
        ...recordsForEdit
      })
      
    }
  }, [recordsForEdit])


  const{values,
    setValues,
    errors,
    setErrors,
    resetForm,
    handleInputChange}= UseForm(initialFValues,true,validate);
  
  
  const handleSubmit = (event)=>{
    event.preventDefault();
    if (validate()) {
      addOrEdit(values,resetForm);
    }
    
    
  }

    return (
          <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                      name='fullName'
                      label='Full Name'
                      value={values.fullName}
                      onChange={handleInputChange}
                      error={errors.fullName}
                    />
                    <Controls.Input
                      label="E-Mail"
                      name='email'
                      value={values.email}
                      onChange={handleInputChange}
                      error={errors.email}
                    />
                    <Controls.Input
                      name='mobile'
                      label='Mobile No'
                      value={values.mobile}
                      onChange={handleInputChange}
                      error={errors.mobile}
                    />
                    <Controls.Input
                      name='city'
                      label='City'
                      value={values.city}
                      onChange={handleInputChange}
                      error={errors.city}
                    />
                </Grid>

                <Grid item xs={6}>
                  <Controls.RadioGroup
                  label='Gender'
                  name='gender'
                  value={values.gender}
                  onChange={handleInputChange}
                  items={genderItems}
                  />
                  <Controls.Select
                  name='departmentId'
                  label="Department"
                  value={values.departmentId}
                  onChange={handleInputChange}
                  options={empService.getDepartmentCollection()}
                  error={errors.departmentId}
                  />
                  <Controls.CheckGroup 
                  label='Is Permanent ?'
                  name='isPermanent'
                  value={values.isPermanent}
                  onChange={handleInputChange}
                  />
                  <Controls.DatePicker
                  label='Date of Hire!'
                  name='hireDate'
                  value={values.hireDate}
                  onChange={handleInputChange}
                  />
                    <div>
                      <Controls.Button
                      color="secondary"
                      text='Submit'
                      type='submit'
                      startIcon={<CloudUploadIcon />}      
                      />
                      <Controls.Button
                      color="default"
                      text='Reset'
                      onClick={resetForm}
                      startIcon={<RotateLeftIcon />}      
                      />
                    </div>
                </Grid>
            </Grid>
          </Form>   
    )
}

export default EmployeeForm
