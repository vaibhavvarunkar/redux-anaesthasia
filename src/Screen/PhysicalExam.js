import React, { useState } from 'react'
import Header from '../CustomComponent/Header'
import '../css/PhysicalExam.css'
import Select from 'react-select'

const PhysicalExam = (props) => {
    const [mood, setmood] = useState(null)
    const [Mouth_opening, setMouth_opening] = useState(null)
    const [cervical_spine_mobility, setcervical_spine_mobility] = useState(null)
    const [cervical_spine_mobility_subcategory, setcervical_spine_mobility_subcategory] = useState([])
    const [cervical_spine_mobility_sub_type, setcervical_spine_mobility_sub_type] = useState(null)
    const [teeth, setteeth] = useState(null)
    const [temporomandibular_joint_mobility_type, settemporomandibular_joint_mobility_type] = useState(null)
    const [thyromental_distance_type, setthyromental_distance_type] = useState(null)
    const [teethSubCategory, setteethSubCategory] = useState([])
    const [teethSubSubCategory, setteethSubSubCategory] = useState([])
    const [teethSubSubCategoryType, setteethSubSubCategoryType] = useState(null)
    const [auscultationType, setauscultationType] = useState([])
    const [auscultationSubType, setauscultationSubType] = useState([])
    const [auscultationSubSubType, setauscultationSubSubType] = useState([])
    const [auscultation_for_murmurs, setauscultation_for_murmurs] = useState([])
    const [auscultation_for_murmurs_type, setauscultation_for_murmurs_type] = useState([])
    const [auscultation_for_murmurs_sub_type, setauscultation_for_murmurs_sub_type] = useState([])
    const optionforMood = [
        { value: 'No acute distress', label: 'No acute distress' },
        { value: 'Mild distress', label: 'Mild distress' },
        { value: 'Moderate distress', label: 'Moderate distress' },
        { value: 'Severe Distress', label: 'Severe Distress' }
    ]
    const optionforMouthOpening = [
        { value: 'Adequate mouth opening', label: 'Adequate mouth opening' },
        { value: 'Inadequate mouth opening', label: 'Inadequate mouth opening' },
        { value: 'Microstomia', label: 'Microstomia' },
        { value: 'Micrognathia', label: 'Micrognathia' },
        { value: 'Retrognathia', label: 'Retrognathia' },
        { value: 'Prognathism', label: 'Prognathism' }
    ]
    const optionforcervical_spine_mobility = [
        { value: 'Full range of motion', label: 'Full range of motion' },
        { value: 'Decreased Flexion', label: 'Decreased Flexion' },
        { value: 'Decreased Extension', label: 'Decreased Extension' },
        { value: 'C-collar', label: 'C-collar' },
        { value: 'History of C-spine surgery', label: 'History of C-spine surgery', subCategory: [{ value: 'With C-spine hardware', label: 'With C-spine hardware' }, { value: 'Without c-spine hardware', label: 'Without c-spine hardware' }] },


    ]
    const temporomandibular_joint_mobility = [
        { value: 'Good', label: 'Good' },
        { value: 'OTHER', label: 'OTHER' },

    ]

    const optionforteeth = [
        { value: 'Within normal limits', label: 'Within normal limits' },
        { value: 'Loose', label: 'Loose' },
        { value: 'Cracked', label: 'Cracked' },
        { value: 'Chipped', label: 'Chipped' },
        { value: 'Missing', label: 'Missing' },
        { value: 'Edentulous', label: 'Edentulous' },
        { value: 'Dentures', label: 'Dentures', subCategory: [{ value: 'Full', label: 'Full', subCategory: [{ value: 'Upper', label: 'Upper' }, { value: 'Lower', label: 'Lower' }] }, { value: 'Partial', label: 'Partial', subCategory: [{ value: 'Upper', label: 'Upper' }, { value: 'Lower', label: 'Lower' }] }] }


    ]

    const thyromental_distance = [
        { value: 'Class I: > 6.5 cm', label: 'Class I: > 6.5 cm' },
        { value: 'Class II: 6-6.5 cm', label: 'Class II: 6-6.5 cm' },
        { value: 'Class III: < 6cm', label: 'Class III: < 6cm' },

    ]

    const optionforauscultation = [
        {
            value: 'Clear to auscultation', label: 'Clear to auscultation',
            subCategory: [
                { value: 'Bilaterally', label: 'Bilaterally' },
                { value: 'Left is clear only', label: 'Left is clear only', subCategory: [{ value: 'Right', label: 'Right', subCategory: [{ value: 'Crackles', label: 'Crackles' }, { value: 'Diminished', label: 'Diminished' }, { value: 'Rales', label: 'Rales' }, { value: 'Rhonchi', label: 'Rhonchi' }, { value: 'Pleural friction rub', label: 'Pleural friction rub' }, { value: 'Prolonged expiration phase', label: 'Prolonged expiration phase' }, { label: 'Strider', value: 'Strider' }, { value: 'Wheezes - expiratory', label: 'Wheezes - expiratory' }, { value: 'Wheezes - inspiratory', label: 'Wheezes - inspiratory' }] }] },
                { value: 'Right is clear only', label: 'Right is clear only', subCategory: [{ value: 'Left', label: 'Left', subCategory: [{ value: 'Crackles', label: 'Crackles' }, { value: 'Diminished', label: 'Diminished' }, { value: 'Rales', label: 'Rales' }, { value: 'Rhonchi', label: 'Rhonchi' }, { value: 'Pleural friction rub', label: 'Pleural friction rub' }, { value: 'Prolonged expiration phase', label: 'Prolonged expiration phase' }, { label: 'Strider', value: 'Strider' }, { value: 'Wheezes - expiratory', label: 'Wheezes - expiratory' }, { value: 'Wheezes - inspiratory', label: 'Wheezes - inspiratory' }] }] }
            ]
        },
        {
            value: 'Not clear to auscultation', label: 'Not clear to auscultation',
            subCategory: [
                { value: 'Bilaterally', label: 'Bilaterally', subCategory: [{ value: 'Right', label: 'Right', subCategory: [{ value: 'Crackles', label: 'Crackles' }, { value: 'Diminished', label: 'Diminished' }, { value: 'Rales', label: 'Rales' }, { value: 'Rhonchi', label: 'Rhonchi' }, { value: 'Pleural friction rub', label: 'Pleural friction rub' }, { value: 'Prolonged expiration phase', label: 'Prolonged expiration phase' }, { label: 'Strider', value: 'Strider' }, { value: 'Wheezes - expiratory', label: 'Wheezes - expiratory' }, { value: 'Wheezes - inspiratory', label: 'Wheezes - inspiratory' }] }, { value: 'Left', label: 'Left', subCategory: [{ value: 'Crackles', label: 'Crackles' }, { value: 'Diminished', label: 'Diminished' }, { value: 'Rales', label: 'Rales' }, { value: 'Rhonchi', label: 'Rhonchi' }, { value: 'Pleural friction rub', label: 'Pleural friction rub' }, { value: 'Prolonged expiration phase', label: 'Prolonged expiration phase' }, { label: 'Strider', value: 'Strider' }, { value: 'Wheezes - expiratory', label: 'Wheezes - expiratory' }, { value: 'Wheezes - inspiratory', label: 'Wheezes - inspiratory' }] }] },
                { value: 'Left is abnormal only', label: 'Left is abnormal only', subCategory: [{ value: 'Crackles', label: 'Crackles' }, { value: 'Diminished', label: 'Diminished' }, { value: 'Rales', label: 'Rales' }, { value: 'Rhonchi', label: 'Rhonchi' }, { value: 'Pleural friction rub', label: 'Pleural friction rub' }, { value: 'Prolonged expiration phase', label: 'Prolonged expiration phase' }, { label: 'Strider', value: 'Strider' }, { value: 'Wheezes - expiratory', label: 'Wheezes - expiratory' }, { value: 'Wheezes - inspiratory', label: 'Wheezes - inspiratory' }] },
                { value: 'Right is abnormal only', label: 'Right is abnormal only', subCategory: [{ value: 'Crackles', label: 'Crackles' }, { value: 'Diminished', label: 'Diminished' }, { value: 'Rales', label: 'Rales' }, { value: 'Rhonchi', label: 'Rhonchi' }, { value: 'Pleural friction rub', label: 'Pleural friction rub' }, { value: 'Prolonged expiration phase', label: 'Prolonged expiration phase' }, { label: 'Strider', value: 'Strider' }, { value: 'Wheezes - expiratory', label: 'Wheezes - expiratory' }, { value: 'Wheezes - inspiratory', label: 'Wheezes - inspiratory' }] }
            ]
        },


    ]



    const optionforthoracic_expansion = [
        { value: 'Symmetric expansion', label: 'Symmetric expansion' },
        { value: 'Asymmetric expansion', label: 'Asymmetric expansion' },

    ]

    const optionforMotor_and_Sensory_function = [
        { value: 'Normal sensory', label: 'Normal sensory' },
        { value: 'Normal motor function', label: 'Normal motor function' },
        { value: 'No focal deficits', label: 'No focal deficits' },
        { value: 'Gag reflex normal', label: 'Gag reflex normal' },
        { value: 'OTHER', label: 'OTHER' },

    ]

    const optionforcognitive_function = [
        { value: 'Alert', label: 'Alert' },
        { value: 'Oriented', label: 'Oriented' },
        { value: 'OTHER', label: 'OTHER' },

    ]


    const physicalexamcategory = [
        {
            name: 'VITAL SIGNS'
        },
        {
            name: 'GENERAL APPEARANCE'
        },
        {
            name: 'AIRWAY'
        },
        {
            name: 'PULMONARY'
        },
        {
            name: 'CARDIOVASCULAR'
        },
        {
            name: 'NEUROLOGIC'
        },
        {
            name: 'HEMATOLOGIC'
        },
        {
            name: 'VASCULAR ACCESS'
        }
    ]

    const optionforauscultation_for_murmurs = [
        { value: 'No murmur', label: 'No murmur' },
        {
            value: 'Murmur present', label: 'Murmur present',
            subCategory: [
                { value: 'Murmur type', label: 'Murmur type', subCategory: [{ value: 'Systolic murmur', label: 'Systolic murmur' }, { value: 'Diastolic murmur', label: 'Diastolic murmur' }, { value: 'OTHER', label: 'OTHER' }] },
                { value: 'Murmur location', label: 'Murmur location', subCategory: [{ value: 'Right upper sternal border', label: 'Right upper sternal border' }, { value: 'Left upper sternal border', label: 'Left upper sternal border' }, { value: 'Left lower sternal border', label: 'Left lower sternal border' }, { value: 'Left lateral 5th intercostal space', label: 'Left lateral 5th intercostal space' }, { value: 'OTHER', label: 'OTHER' }] },

            ]
        },


    ]

    const Catheter_type=[
        {value:'Single lumen',label:'Single lumen'},
        {value:'Double lumen',label:'Double lumen'},
        {value:'Triple lumen',label:'Triple lumen'},
        {value:'Sheath',label:'Sheath'},
        {value:'SLIC',label:'SLIC'},
        {value:'PICC',label:'PICC'},
        {value:'OTHER',label:'OTHER'}
    ]

    const Location=[
        {value:'Left',label:'Left'},
        {value:'Right',label:'Right'},
        {value:'Radial',label:'Radial'},
        {value:'Femoral',label:'Femoral'},
        {value:'Brachial',label:'Brachial'},
        {value:'OTHER',label:'OTHER'},
        
    ]

    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }

    const handleChangeMood = selectedOption => {
        setmood(selectedOption);

    };

    const handleChangeMouthOpeing = selectedOption => {
        setmood(selectedOption);

    };

    const handleChangeCervicalSpineMobility = selectedOption => {
        setcervical_spine_mobility(selectedOption)
        for (var j = 0; j < optionforcervical_spine_mobility.length; j++) {
            if (optionforcervical_spine_mobility[j].value === selectedOption.value) {
                setcervical_spine_mobility_subcategory(optionforcervical_spine_mobility[j].subCategory)

            }

        }

    }

    const handleChangetemporomandibular_joint_mobility = selectedOption => {
        settemporomandibular_joint_mobility_type(selectedOption);

    };

    const handleChangeteeth = selectedOption => {
        setteeth(selectedOption);
        for (var j = 0; j < optionforteeth.length; j++) {
            if (optionforteeth[j].value === selectedOption.value) {
                setteethSubCategory(optionforteeth[j].subCategory)

            }

        }

    };

    const handleChangeSubteethCategory = selectedOption => {
        setteeth(selectedOption);
        for (var j = 0; j < teethSubCategory.length; j++) {
            if (teethSubCategory[j].value === selectedOption.value) {
                setteethSubSubCategory(teethSubCategory[j].subCategory)

            }

        }

    };

    const handleChangeSubteethCategoryType = selectedOption => {
        setteethSubSubCategoryType(selectedOption);

    };




    const handleChangeCervicalSpineMobilitySubType = selectedOption => {
        setcervical_spine_mobility_sub_type(selectedOption.value)
    }

    const handleChangethyromental_distance = selectedOption => {
        setthyromental_distance_type(selectedOption);

    };

    const handleChangeauscultation = selectedOption => {
        for (var j = 0; j < optionforauscultation.length; j++) {
            if (optionforauscultation[j].value === selectedOption.value) {
                setauscultationType(optionforauscultation[j].subCategory)

            }

        }

    };

    const handleChangeauscultationType = selectedOption => {
        for (var j = 0; j < auscultationType.length; j++) {
            if (auscultationType[j].value === selectedOption.value) {
                setauscultationSubType(auscultationType[j].subCategory)

            }

        }

    };

    const handleChangeauscultationSubType = selectedOption => {
        for (var j = 0; j < auscultationSubType.length; j++) {
            if (auscultationSubType[j].value === selectedOption.value) {
                setauscultationSubSubType(auscultationSubType[j].subCategory)

            }

        }

    };

    const handleChangeauscultationmurmursType = selectedOption => {
        for (var j = 0; j < optionforauscultation_for_murmurs.length; j++) {
            if (optionforauscultation_for_murmurs[j].value === selectedOption.value) {
                setauscultation_for_murmurs(optionforauscultation_for_murmurs[j].subCategory)

            }

        }

    };

    const handleChangeauscultationmurmursSubType = selectedOption => {
        for (var j = 0; j < auscultation_for_murmurs.length; j++) {
            if (auscultation_for_murmurs[j].value === selectedOption.value) {
                setauscultation_for_murmurs_sub_type(auscultation_for_murmurs[j].subCategory)

            }

        }

    };







    return (
        <div>
            <Header onMenuClick={() => burgerMenuClick()} />
            <div className="physical-exam-main-container" >
                <div className="physical-exam-question-container" >

                    <div className="vital-signs-header-container" >
                        VITAL SIGNS
                        </div>
                    <div className="vital-signs-input-container" >
                        <div className="blood-pressure-container" >
                            Blood Pressure
                           <div className="blood-pressure-container-subcontainer" >
                                <div>Systolic BP</div>
                                <input className="input-container" placeholder="enter systolic BP..." />
                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>Diastolic BP</div>
                                <input className="input-container" placeholder="enter diastolic BP..." />
                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>Weight</div>
                                <input className="input-container" placeholder="enter weight..." />
                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>Height</div>
                                <input className="input-container" placeholder="enter height..." />
                            </div>
                        </div>
                    </div>
                    <div className="vitalsign-next-button-container" >
                        <div className="vitalsign-next-button" >
                            BACK
                            </div>



                    </div>
                </div>

                <div className="physical-exam-question-container" >

                    <div className="vital-signs-header-container" >
                        GENERAL APPEARANCE
                        </div>
                    <div className="vital-signs-input-container" >
                        <div className="blood-pressure-container" >

                            <div className="blood-pressure-container-subcontainer" >
                                <div>mood</div>
                                <Select onChange={(value) => handleChangeMood(value)} placeholder="select mood..." className="gender-dropdown" id="age" options={optionforMood} />

                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>BMI</div>
                                <input className="input-container" placeholder="enter diastolic BP..." />
                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>Jaundice</div>
                                <div className="option-box-container" >
                                    <input type="radio" value="" name="Jaundice" /> Yes
                                <input type="radio" value="No" name="Jaundice" /> No
                                </div>
                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>OTHER/NOT LISTED</div>
                                <input className="input-container" placeholder="enter other/not listed..." />
                            </div>
                        </div>
                    </div>
                    <div className="vitalsign-next-button-container" >
                        <div className="vitalsign-next-button" >
                            BACK
                            </div>



                    </div>
                </div>


                <div className="physical-exam-question-container" >

                    <div className="vital-signs-header-container" >
                        AIRWAY
                    </div>
                    <div className="vital-signs-input-container" >
                        <div className="blood-pressure-container" >
                            <div className="blood-pressure-container-subcontainer" >
                                <div>Mallampati score</div>

                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>Mouth opening</div>
                                <Select onChange={(value) => handleChangeMouthOpeing(value)} placeholder="select mouth opening..." className="gender-dropdown" id="age" options={optionforMouthOpening} />

                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>Bearded</div>
                                <div className="option-box-container" >
                                    <input type="radio" value="" name="Jaundice" /> Yes
                                    <input type="radio" value="No" name="Jaundice" /> No
                                </div>
                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>cervical spine mobility</div>
                                <Select onChange={(value) => handleChangeCervicalSpineMobility(value)} placeholder="select cervical spine mobility..." className="gender-dropdown" id="age" options={optionforcervical_spine_mobility} />
                                <Select onChange={(value) => handleChangeCervicalSpineMobilitySubType(value)} placeholder="select cervical spine mobility type..." className="gender-dropdown" id="age" options={cervical_spine_mobility_subcategory} />

                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>neck circumference</div>
                                <div>{"> 42 cm ?"}</div>
                                <div className="option-box-container" >
                                    <input type="radio" value="" name="Jaundice" /> Yes
                                    <input type="radio" value="No" name="Jaundice" /> No
                                </div>
                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>temporomandibular joint mobility</div>
                                <Select onChange={(value) => handleChangetemporomandibular_joint_mobility(value)} placeholder="select temporomandibular joint mobility..." className="gender-dropdown" id="age" options={temporomandibular_joint_mobility} />

                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>teeth</div>
                                <Select onChange={(value) => handleChangeteeth(value)} placeholder="select teeth..." className="gender-dropdown" id="age" options={optionforteeth} />
                                <Select onChange={(value) => handleChangeSubteethCategory(value)} placeholder="select teeth..." className="gender-dropdown" id="age" options={teethSubCategory} />
                                <Select onChange={(value) => handleChangeSubteethCategoryType(value)} placeholder="select teeth..." className="gender-dropdown" id="age" options={teethSubSubCategory} />

                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>thyromental distance</div>
                                <Select onChange={(value) => handleChangethyromental_distance(value)} placeholder="select thyromental distance..." className="gender-dropdown" id="age" options={thyromental_distance} />

                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>OTHER/NOT LISTED</div>
                                <input className="input-container" placeholder="enter other/not listed..." />
                            </div>





                        </div>
                    </div>
                    <div className="vitalsign-next-button-container" >
                        <div className="vitalsign-next-button" >
                            BACK
                        </div>



                    </div>
                </div>

                <div className="physical-exam-question-container" >

                    <div className="vital-signs-header-container" >
                        PULMONARY
                        </div>
                    <div className="vital-signs-input-container" >
                        <div className="blood-pressure-container" >

                            <div className="blood-pressure-container-subcontainer" >
                                <div>auscultation</div>
                                <Select onChange={(value) => handleChangeauscultation(value)} placeholder="select auscultation..." className="gender-dropdown" id="age" options={optionforauscultation} />
                                <Select onChange={(value) => handleChangeauscultationType(value)} placeholder="select auscultation..." className="gender-dropdown" id="age" options={auscultationType} />
                                <Select onChange={(value) => handleChangeauscultationSubType(value)} placeholder="select auscultation..." className="gender-dropdown" id="age" options={auscultationSubType} />
                                <Select onChange={(value) => handleChangeMood(value)} placeholder="select auscultation..." className="gender-dropdown" id="age" options={auscultationSubSubType} />

                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>Coughing</div>
                                <input className="input-container" placeholder="enter diastolic BP..." />
                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>thoracic expansion</div>
                                <Select onChange={(value) => handleChangeauscultation(value)} placeholder="select auscultation..." className="gender-dropdown" id="age" options={optionforthoracic_expansion} />

                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>oxygen saturation on room air</div>
                                <input className="input-container" placeholder="enter oxygen saturation on room air..." />
                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>OTHER/NOT LISTED</div>
                                <input className="input-container" placeholder="enter oxygen saturation on room air..." />
                            </div>

                        </div>
                    </div>
                    <div className="vitalsign-next-button-container" >
                        <div className="vitalsign-next-button" >
                            BACK
                            </div>
                    </div>
                </div>


                <div className="physical-exam-question-container" >

                    <div className="vital-signs-header-container" >
                        CARDIOVASCULAR
                    </div>
                    <div className="vital-signs-input-container" >
                        <div className="blood-pressure-container" >
                            <div className="blood-pressure-container-subcontainer" >
                                <div>pulse rate</div>
                                <input className="input-container" placeholder="enter pulse rate..." />
                            </div>

                            <div className="blood-pressure-container-subcontainer" >
                                <div>auscultation for murmurs</div>
                                <Select onChange={(value) => handleChangeauscultationmurmursType(value)} placeholder="select auscultation..." className="gender-dropdown" id="age" options={optionforauscultation_for_murmurs} />
                                <Select onChange={(value) => handleChangeauscultationmurmursSubType(value)} placeholder="select auscultation..." className="gender-dropdown" id="age" options={auscultation_for_murmurs} />
                                <Select onChange={(value) => handleChangeauscultationSubType(value)} placeholder="select auscultation..." className="gender-dropdown" id="age" options={auscultation_for_murmurs_sub_type} />

                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>Edema - lower extremity</div>
                                <div className="option-box-container" >
                                    <input type="radio" value="" name="Jaundice" /> Yes
                                <input type="radio" value="No" name="Jaundice" /> No
                                </div>
                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>Jugular venous distension</div>
                                <div className="option-box-container" >
                                    <input type="radio" value="" name="Jaundice" /> Yes
                                <input type="radio" value="No" name="Jaundice" /> No
                                </div>
                            </div>


                            <div className="blood-pressure-container-subcontainer" >
                                <div>BP (including postural drop if relevant)/heart rate/rhythm</div>
                                <input className="input-container" placeholder="enter oxygen saturation on room air..." />
                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>OTHER/NOT LISTED</div>
                                <input className="input-container" placeholder="enter OTHER/NOT LISTED..." />
                            </div>

                        </div>
                    </div>
                    <div className="vitalsign-next-button-container" >
                        <div className="vitalsign-next-button" >
                            BACK
                            </div>



                    </div>
                </div>


                <div className="physical-exam-question-container" >

                    <div className="vital-signs-header-container" >
                        NEUROLOGIC
                    </div>
                    <div className="vital-signs-input-container" >
                        <div className="blood-pressure-container" >

                            <div className="blood-pressure-container-subcontainer" >
                                <div>Motor and Sensory function</div>
                                <Select onChange={(value) => handleChangeMood(value)} placeholder="select mood..." className="gender-dropdown" id="age" options={optionforMotor_and_Sensory_function} />

                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>cognitive function</div>
                                <Select onChange={(value) => handleChangeMood(value)} placeholder="select mood..." className="gender-dropdown" id="age" options={optionforcognitive_function} />

                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>OTHER/NOT LISTED</div>
                                <input className="input-container" placeholder="enter other/not listed..." />
                            </div>
                        </div>
                    </div>
                    <div className="vitalsign-next-button-container" >
                        <div className="vitalsign-next-button" >
                            BACK
                            </div>



                    </div>
                </div>

                <div className="physical-exam-question-container" >

                    <div className="vital-signs-header-container" >
                        HEMATOLOGIC
                    </div>
                    <div className="vital-signs-input-container" >
                        <div className="blood-pressure-container" >

                            <div className="blood-pressure-container-subcontainer" >
                                <div>petechiae</div>
                                <div className="option-box-container" >
                                    <input type="radio" value="" name="Jaundice" /> Yes
                                <input type="radio" value="No" name="Jaundice" /> No
                                </div>
                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>bruising</div>
                                <div className="option-box-container" >
                                    <input type="radio" value="" name="Jaundice" /> Yes
                                <input type="radio" value="No" name="Jaundice" /> No
                                </div>
                            </div>
                            <div className="blood-pressure-container-subcontainer" >
                                <div>clinical evidence of anemia</div>
                                <div className="option-box-container" >
                                    <input type="radio" value="" name="Jaundice" /> Yes
                                <input type="radio" value="No" name="Jaundice" /> No
                                </div>
                            </div>

                            <div className="blood-pressure-container-subcontainer" >
                                <div>OTHER/NOT LISTED</div>
                                <input className="input-container" placeholder="enter other/not listed..." />
                            </div>
                        </div>
                    </div>
                    <div className="vitalsign-next-button-container" >
                        <div className="vitalsign-next-button" >
                            BACK
                            </div>



                    </div>
                </div>

                <div className="physical-exam-question-container" >

                    <div className="vital-signs-header-container" >
                        VASCULAR ACCESS
                    </div>
                    <div className="vital-signs-input-container" >
                        <div className="blood-pressure-container" >

                            <div className="blood-pressure-container-subcontainer" >
                                <div>Peripheral IV</div>
                                <Select onChange={(value) => handleChangeMood(value)} placeholder="select mood..." className="gender-dropdown" id="age" options={optionforMotor_and_Sensory_function} />

                            </div>
                            <div className="central-iv-container" >
                                <div>Central IV</div>
                                <div className="central-iv-subcontainer" >
                                    <div>Catheter type</div>
                                    <Select onChange={(value) => handleChangeMood(value)} placeholder="select mood..." className="gender-dropdown" id="age" options={Catheter_type} />

                                </div>

                                <div className="central-iv-subcontainer" >
                                    <div>Ultrasound for line placement</div>
                                    <div className="option-box-container" >
                                    <input type="radio" value="" name="Jaundice" /> Yes
                                <input type="radio" value="No" name="Jaundice" /> No
                                </div>
                            
                                </div>
                            
                                <div className="central-iv-subcontainer" >
                                    <div>Pulmonary Arterial Catheter</div>
                                    <div className="option-box-container" >
                                    <input type="radio" value="" name="Jaundice" /> Yes
                                <input type="radio" value="No" name="Jaundice" /> No
                                </div>
                            
                                </div>
                            
                            </div>

                            <div className="central-iv-container" >
                                <div>Arterial</div>
                                
                                <div className="central-iv-subcontainer" >
                                    <div>Ultrasound for line placement</div>
                                    <div className="option-box-container" >
                                    <input type="radio" value="" name="Jaundice" /> Yes
                                <input type="radio" value="No" name="Jaundice" /> No
                                </div>
                            
                                </div>
                            
                                <div className="central-iv-subcontainer" >
                                    <div>Gauge</div>
                                    <input className="input-container" placeholder="enter other/not listed..." />
                            
                                </div>

                                <div className="central-iv-subcontainer" >
                                    <div>Location</div>
                                    <Select onChange={(value) => handleChangeMood(value)} placeholder="select mood..." className="gender-dropdown" id="age" options={Location} />

                                </div>

                                
                            
                            </div>
                            
                            <div className="blood-pressure-container-subcontainer" >
                                <div>OTHER/NOT LISTED</div>
                                <input className="input-container" placeholder="enter other/not listed..." />
                            </div>
                        </div>
                    </div>
                    <div className="vitalsign-next-button-container" >
                        <div className="vitalsign-next-button" >
                            BACK
        </div>



                    </div>
                </div>






            </div>
        </div>
    )
}

export default PhysicalExam