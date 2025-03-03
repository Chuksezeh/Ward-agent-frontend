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


const CreateTown = () => {
  return (

    <>
    {/* <CRow>
      <CCol xs={12}>
       

        <CCard className="mb-4">
          <CCardHeader>
            <strong>CREATE TOWN </strong>
          </CCardHeader>
          <CCardBody>
            <div className="table-responsive">
              <CTable className="table table-striped">
                <CTableHead>
                  <CTableRow>
                  
                    <CTableHeaderCell scope="col">State Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Local Government</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Ward</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Town</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    
                    <CTableDataCell>Mark Hampa</CTableDataCell>
                    <CTableDataCell>
                    <select>

                      <option>dddddd</option>
                      <option>dddddd</option>
                    </select>
                     
                    </CTableDataCell>
                    <CTableDataCell>
                    <select>

                 <option>dddddd</option>
                <option>dddddd</option>
                    </select>

                    </CTableDataCell>
                      <Link to="/application-control/application-list/app-restriction-list">
                        <CButton color="primary">View/Add Town</CButton>
                      </Link> 
                  </CTableRow>
                  
                </CTableBody>
              </CTable>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
 */}


<CCard className="mb-4">
      <CCardHeader>
        <strong>CREATE TOWN</strong>
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
              <option value="General">Ward 1</option>
              <option value="Restricted">Ward 2</option>
            </CFormSelect>
            
          </CCol>

          <CCol md={6}>
            <CFormInput
              type="text"
              id="appName"
              label="Creat Town"
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
                Create Town
              </CButton>
            

          
            
           
          </CCol>
        </CForm>
      </CCardBody>
    </CCard>

    </>
    

  )
}

export default CreateTown
