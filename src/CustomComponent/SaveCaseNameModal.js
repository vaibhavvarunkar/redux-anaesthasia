import React from 'react'
import Modal from 'react-modal'
import '../css/savecasename.css'
const SaveCaseNameModal = (props) => {
    const customStyles = {
        content : {
          top                   : '35%',
          left                  : '42%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
            backgroundColor:"black",
            width:350,
            height:350
        }
      };

    return (
        <div>
        <Modal
          isOpen={props.saveVisible}
          onRequestClose={props.onClose}
          style={customStyles}
          contentLabel="Example Modal"
         >
        <div className="savecasemodal-container" >
          <input onChange={(e)=>props.onCaseNameChange(e.target.value)} placeholder="APPENDECTOMY_12-19-2020_18YO_MALE" type="text" className="save-case-name-input" />  
          <div onClick={()=>props.postRequest()}  className="close-without-saving-case-container" >
           Save 
        </div>
      
        <div onClick={()=>props.closeNameModal()}  className="close-without-saving-case-container" >
           Cancel
        </div>
      
        </div>
        </Modal>
        </div>
    )
}

export default SaveCaseNameModal
