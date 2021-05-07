import React, { useState, useEffect } from 'react'
import Header from '../CustomComponent/Header'
import { Link } from 'react-router-dom'
import { API_ROOT } from '../constants'
import '../css/preoperativeevalution.css'
const PreoperativeEvaluation = (props) => {
    const [medicalHistoryArray, setmedicalHistoryArray] = useState([])
    const [medicalHistory, setmedicalHistory] = useState([])
    const [medicationsArray, setmedicationsArray] = useState([])
    const [medication, setmedication] = useState([])
  


    useEffect(() => {
        getCaseSummary()
    }, [])


    const getCaseSummary = async () => {
        var token = localStorage.getItem("token")

        fetch(API_ROOT + `case-summary-form-data?device_type=Android&device_token=123`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }

        })
            .then(response => response.json())
            .then(res => {
                if (res.status === "true" && res.message === "Case Summary Form Data") {

                    res.data.drugList.forEach(element => {
                        element.value = element.id;
                        element.label = element.drug_name
                    });

                    setmedicationsArray(res.data.drugList)


                    setmedicalHistory(res.data.medicalHistories)
                }
            })


    }

    const onSiteChanged = (e) => {
        if (e.target.value === "Yes") {
            medicalHistoryArray.push(e.target.name)
        }

    }

    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }

    const onMedicationValue = (e, obj) => {
        if (e.target.value === "Yes") {
            medication.push(obj)
        }

    }



    return (
        <div>
            <Header onMenuClick={() => burgerMenuClick()} />

            <div className="preoperative-question-container" >



                <div className="preoperative-medical-history-question-container" >

                    <div className="preoperative-medical-history-main-container" >
                    <div>Medical History</div>

                        {
                            medicalHistory.map((data) => {
                                return (
                                    <div style={{width:"100%"}} >
                                        <div className="preoperative-medical-history-question-header" >
                                            <div>{data.id}.{data.name}</div>

                                        </div>

                                        <div className="preoperative-medical-history-sub-question-sub-container" >
                                            {
                                                data.medical_history_sub_type.map((data) => {
                                                    return (
                                                        <div className="preoperative-sub-question-container" >
                                                            <div>{data.name}</div>
                                                            <div className="preoperative-option-box-container" >
                                                                <input onChange={(e) => onSiteChanged(e)} type="radio" value="Yes" name={data.name} /> Yes
                               <input onChange={(e) => onSiteChanged(e)} type="radio" value="No" name={data.name} /> No
                               </div>
                                                        </div>

                                                    )
                                                })
                                            }



                                        </div>

                                    </div>

                                )
                            })
                        }
 <div>Medication</div>

                        {
                            medicationsArray.map((data) => {
                                return (
                                    <div  className="preoperative-medication-sub-question-container" >
                                        <div>{data.label}</div>
                                        <div className="preoperative-option-box-container" >
                                            <input onChange={(e) => onMedicationValue(e, data)} type="radio" value="Yes" name={data.drug_name} /> Yes
                                <input onChange={(e) => onMedicationValue(e, data)} type="radio" value="No" name={data.drug_name} /> No
                                </div>
                                    </div>

                                )
                            })
                        }






                    </div>
                </div>

            </div>
        </div>
    )
}

export default PreoperativeEvaluation