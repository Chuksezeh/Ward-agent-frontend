import NavBar from "./navBar";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CTableRow,
    CTableHead,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CButton,
  } from '@coreui/react'
  import { Link } from 'react-router-dom'


const KeyContactsComponent = () => {




    return(

        <>

        <NavBar/>
        <div className="container"> 
           
           
        <CRow>
             <CCol xs={12}>
             <div><h2>KEY CONTACTS </h2></div>
       
               <CCard className="mb-4">
                 <CCardHeader>
                   <strong>Contact List</strong>
                 </CCardHeader>
                 <CCardBody>
                   <div className="table-responsive">
                     <CTable className="table table-striped">
                       <CTableHead>
                         <CTableRow>
                           <CTableHeaderCell scope="col">S/N</CTableHeaderCell>
                           <CTableHeaderCell scope="col">Contact Type</CTableHeaderCell>
                           <CTableHeaderCell scope="col">Level</CTableHeaderCell>
                           <CTableHeaderCell scope="col">Contact Name</CTableHeaderCell>
                           <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                           <CTableHeaderCell scope="col">WhatsApp</CTableHeaderCell>
                           <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                           <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                         </CTableRow>
                       </CTableHead>
                       <CTableBody>
                         <CTableRow>
                           <CTableHeaderCell scope="row">1</CTableHeaderCell>
                           <CTableDataCell>Igwe</CTableDataCell>
                           <CTableDataCell>Town</CTableDataCell>
                           <CTableDataCell>Igwe Ijikara 1</CTableDataCell>
                           <CTableDataCell>09065754445</CTableDataCell>
                           <CTableDataCell>09076667567</CTableDataCell>
                           <CTableDataCell>simple22@gmail.com</CTableDataCell>
                           <CTableDataCell>Active</CTableDataCell>
                         </CTableRow>
                         <CTableRow>
                           <CTableHeaderCell scope="row">1</CTableHeaderCell>
                           <CTableDataCell>PG</CTableDataCell>
                           <CTableDataCell>Town</CTableDataCell>
                           <CTableDataCell>Cheif Umoka Ezeibe</CTableDataCell>
                           <CTableDataCell>09065754455</CTableDataCell>
                           <CTableDataCell>09076665667</CTableDataCell>
                           <CTableDataCell>simple22@gmail.com</CTableDataCell>
                           <CTableDataCell>Active</CTableDataCell>
                         </CTableRow>
                        
                       </CTableBody>
                     </CTable>
                   </div>
                 </CCardBody>
               </CCard>
             </CCol>
           </CRow> 
           </div>
        
        </>
    )
}
export default KeyContactsComponent;    