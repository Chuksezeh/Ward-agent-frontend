import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CForm,
  CTableRow,
  CTableHead,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CFormInput,
  CFormSelect,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
} from '@coreui/react'
import { Link } from 'react-router-dom'


const CreateQuaters = () => {
  return (

    <>
    


<CCard className="mb-4">
      <CCardHeader>
        <strong>CREATE QUARTERS</strong>
      </CCardHeader>
      <CCardBody>
        <CForm  className="row g-3">


        <CCol md={6}>
            <CFormSelect
              id="appLevel"
              label="Select State"
              name="appLevel"
              
            >
              <option value="">Choose...</option>
              <option value="General">Abia</option>
              <option value="Restricted">Adamawa</option>
            </CFormSelect>
            
          </CCol>

          <CCol md={6}>
            <CFormSelect
              id="appLevel"
              label="Select Local Government"
              name="appLevel"
              
            >
              <option value="">Choose...</option>
              <option value="General">Umunne</option>
              <option value="Restricted">Yola</option>
            </CFormSelect>
            
          </CCol>
          <CCol md={6}>
            <CFormSelect
              id="appLevel"
              label="Select Ward"
              name="appLevel"
              
            >
              <option value="">Choose...</option>
              <option value="General">Umu 1</option>
              <option value="Restricted">umu 2</option>
            </CFormSelect>
            
          </CCol>
          
          <CCol md={6}>
            <CFormSelect
              id="appLevel"
              label="Select Town"
              name="appLevel"
              
            >
              <option value="">Choose...</option>
              <option value="General">Ward 1</option>
              <option value="Restricted">Ward 2</option>
            </CFormSelect>
            
          </CCol>

          <CCol md={6}>
            <CFormInput
              type="text"
              id="appName"
              label="Creat Quarter"
              name="appName"
             
            />
           
          </CCol>
          <CCol md={6}>
            <CFormInput
              type="text"
              id="appName"
              label="Logitude"
              name="appName"
             
            />
           
          </CCol>
          <CCol md={6}>
            <CFormInput
              type="text"
              id="appName"
              label="Latitude"
              name="appName"
             
            />
           
          </CCol>

          

          

          <CCol xs={12} style={{float:"right", justifyContent:"center", textAlign:"center"}}>
           
              <CButton  className="me-2 btn btn-primary" style={{width:"200px"}} type="button">
                Create Quarter
              </CButton>
            

          
            
           
          </CCol>
        </CForm>
      </CCardBody>
    </CCard>

    </>
    

  )
}

export default CreateQuaters
