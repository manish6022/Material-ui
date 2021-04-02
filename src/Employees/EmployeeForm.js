import React from 'react'
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
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'female',
    departmentId:'',
    hireDate:new Date(),
    isPermanent:false,
}

function EmployeeForm() {

   const{values,handleInputChange}= UseForm(initialFValues);
    return (
          <Form>
            <Grid container>
              <Grid item xs={6}>
                 <Controls.Input
                 name='fullName'
                 label='Full Name'
                 value={values.fullName}
                 onChange={handleInputChange}
                 type='text'
                 />
                  <Controls.Input
                    label="E-Mail"
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    type='email'     
                  />
                  <Controls.Input
                 name='mobile'
                 label='Mobile No'
                 value={values.mobile}
                 onChange={handleInputChange}
                 type='tel'
                 />
                 <Controls.Input
                 name='city'
                 label='City'
                 value={values.city}
                 onChange={handleInputChange}
                 type='text'
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
                options={empService.getDepatmentCollection()}
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
      startIcon={<RotateLeftIcon />}      
      />
    </div>
              </Grid>
            </Grid>
            </Form>   
    )
}

export default EmployeeForm
