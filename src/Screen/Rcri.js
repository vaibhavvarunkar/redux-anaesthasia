import React,{useState} from 'react'
import Header from '../CustomComponent/Header'
import '../css/ApfelScore.css'
const Rcri=(props)=>{
    const [Elevated_risk_surgery,setElevated_risk_surgery]=useState(null)
    const [History_of_ischemic_heart_disease,setHistory_of_ischemic_heart_disease]=useState(null)
    const [History_of_cerebrovascular_disease,setHistory_of_cerebrovascular_disease]=useState(null)
    const [Pre_operative_treatment_with_insulin,setPre_operative_treatment_with_insulin]=useState(null)
    const [Pre_operative_creatinine ,setPre_operative_creatinine]=useState(null)
    
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }

    const onClickElevatedrisksurgery=(value)=>{
        setElevated_risk_surgery(value)
    }

    const onClickHistory_of_ischemic_heart_disease=(value)=>{
        setHistory_of_ischemic_heart_disease(value)
    }

    const onClickHistory_of_cerebrovascular_disease=(value)=>{
        setHistory_of_cerebrovascular_disease(value)
    }

    const onClickPre_operative_treatment_with_insulin=(value)=>{
        setPre_operative_treatment_with_insulin(value)
    }

    const onClickPre_operative_creatinine=(value)=>{
        setPre_operative_creatinine(value)
    }


    return(
        <div>
            <Header onMenuClick={() => burgerMenuClick()} />
            <div className="risk-evalution-question-container" >
                <div className="risk-evalution-question-container-indivisual" >
                    <div className="apfel-score-question-container" >
                            <div>Elevated-risk surgery</div>
                            <p>
                            Intraperitoneal; intrathoracic; suprainguinal vascular (see 2014 ACC/AHA Guideline)
                            </p>
                    </div>
                    <div className="yes-no-option-continer" >
                        <div className="no-option-container" onClick={()=>onClickElevatedrisksurgery("No")}  >No</div>
                        <div className="yes-option-container" onClick={()=>onClickElevatedrisksurgery("Yes")} >Yes</div>
                    
                    </div>
                </div>
                
                <div className="risk-evalution-question-container-indivisual" >
                    <div className="apfel-score-question-container" >
                            <div>History of ischemic heart disease</div>
                            <p>
                            History of myocardial infarction (MI); history of positive exercise test; current chest pain considered due to myocardial ischemia; use of nitrate therapy or ECG with pathological Q waves
                            </p>
                    </div>
                    <div className="yes-no-option-continer" >
                        <div className="no-option-container" onClick={()=>onClickHistory_of_ischemic_heart_disease("No")}  >No</div>
                        <div className="yes-option-container" onClick={()=>onClickHistory_of_ischemic_heart_disease("Yes")} >Yes</div>
                    
                    </div>
                </div>
                
                <div className="risk-evalution-question-container-indivisual" >
                    <div className="apfel-score-question-container" >
                            <div>History of cerebrovascular disease</div>
                            <p>
                            Prior transient ischemic attack (TIA) or stroke
                            </p>
                    </div>
                    <div className="yes-no-option-continer" >
                        <div className="no-option-container" onClick={()=>onClickHistory_of_cerebrovascular_disease("No")}  >No</div>
                        <div className="yes-option-container" onClick={()=>onClickHistory_of_cerebrovascular_disease("Yes")} >Yes</div>
                    
                    </div>
                </div>
                
                <div className="risk-evalution-question-container-indivisual" >
                    <div className="apfel-score-question-container" >
                            <div>Pre-operative treatment with insulin</div>
                    </div>
                    <div className="yes-no-option-continer" >
                        <div className="no-option-container" onClick={()=>onClickPre_operative_treatment_with_insulin("No")} >No</div>
                        <div className="yes-option-container" onClick={()=>onClickPre_operative_treatment_with_insulin("Yes")} >Yes</div>
                    
                    </div>
                </div>

                <div className="risk-evalution-question-container-indivisual" >
                    <div className="apfel-score-question-container" >
                            <div>{"Pre-operative creatinine >2 mg/dL / 176.8 µmol/L"}</div>
                    </div>
                    <div className="yes-no-option-continer" >
                        <div className="no-option-container" onClick={()=>onClickPre_operative_creatinine("No")} >No</div>
                        <div className="yes-option-container" onClick={()=>onClickPre_operative_creatinine("Yes")} >Yes</div>
                    
                    </div>
                </div>
                
                
            </div>

            <div className="apfel-score-result-container" >
                <div className="point-result-container" >
                    O points<br/>
                    Class | Risk
                </div>
                <div className="percentage-result-container" >
                3.9 %<br/>
30-day risk of death, MI, or cardiac arrest<br/>

From Duceppe 2017, based on pooled data from 5 high quality external validations (4 prospective). These numbers are higher than those often quoted from the now-outdated original study (Lee 1999). See Evidence for details.
                </div>
            </div>
            <div className="reference-container" >
                <div>
                ORIGINAL/PRIMARY REFERENCE
                </div>
                <div className="reference-container-card" >
                    <div className="reference-img" >
                    <img src="https://cdn-web-img.mdcalc.com/icons/resource-pubmed.png" alt="Research Paper" />
               
                    </div>
                    <p className="reference-paragraph" >Lee TH, Marcantonio ER, Mangione CM, Thomas EJ, Polanczyk CA, Cook EF, Sugarbaker DJ, Donaldson MC, Poss R, Ho KK, Ludwig LE, Pedan A, Goldman L. Derivation and prospective validation of a simple index for prediction of cardiac risk of major noncardiac surgery. Circulation. 1999 Sep 7;100(10):1043-9.</p>
                </div>

                <div className="reference-container-card" >
                    <div className="reference-img" >
                    <img src="https://cdn-web-img.mdcalc.com/icons/resource-pubmed.png" alt="Research Paper" />
               
                    </div>
                    <p className="reference-paragraph" >Lee TH, Marcantonio ER, Mangione CM, Thomas EJ, Polanczyk CA, Cook EF, Sugarbaker DJ, Donaldson MC, Poss R, Ho KK, Ludwig LE, Pedan A, Goldman L. Derivation and prospective validation of a simple index for prediction of cardiac risk of major noncardiac surgery. Circulation. 1999 Sep 7;100(10):1043-9.</p>
                </div>

                <div className="reference-container-card" >
                    <div className="reference-img" >
                    <img src="https://cdn-web-img.mdcalc.com/icons/resource-pubmed.png" alt="Research Paper" />
               
                    </div>
                    <p className="reference-paragraph" >Lee TH, Marcantonio ER, Mangione CM, Thomas EJ, Polanczyk CA, Cook EF, Sugarbaker DJ, Donaldson MC, Poss R, Ho KK, Ludwig LE, Pedan A, Goldman L. Derivation and prospective validation of a simple index for prediction of cardiac risk of major noncardiac surgery. Circulation. 1999 Sep 7;100(10):1043-9.</p>
                </div>
            
            
            </div>

           
        </div>
    )
}

export default Rcri