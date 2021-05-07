import React, { useState, useEffect } from 'react';
import Header from '../CustomComponent/Header';
import { useSelector, useDispatch } from 'react-redux';
import {
    setAgee,
    setAgeType,
    setAsaps,
    setCategorySurgeryName,
    setEmergency,
    setGenderType,
    setMedicalHistory,
    setPatientHeight,
    setPatientHeightType,
    setPatientsType,
    setPatientWeight,
    setPatientWeightType,
    setSubSurgeryName,
    setSurgeryName,
} from '../redux/caseSummaryActions';
import '../css/AllAction.css';
import '../css/casesummary.css';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import SaveCaseModal from '../CustomComponent/SaveCaseModal';
import SaveCaseNameModal from '../CustomComponent/SaveCaseNameModal';
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal';
import { API_ROOT } from '../constants';

const optionsforage = [
    { value: 'Y', label: 'Year' },
    { value: 'M', label: 'Month' },
    { value: 'W', label: 'Week' },
    { value: 'D', label: 'Day' },
];
const optionsforgender = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
];

const optionsForHeight = [
    { value: 'CM', label: 'Centimeters' },
    { value: 'IN', label: 'Inches' },
];

const optionsForWeight = [
    { value: 'KG', label: 'Kilogram' },
    { value: 'P', label: 'Pounds' },
];

const optionsforEmergency = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
];

const optionForNPOStatus = [
    { value: 'H', label: 'Hours' },
    { value: 'M', label: 'Minutes' },
];

const ingestedMaterialArray = [
    { label: 'Clear Fluid' },
    { label: 'Breast Milk' },
    { label: 'Infant Formula' },
    { label: 'Non-human Milk' },
    { label: 'Light Meal' },
    { label: 'Heavy Meal' },
];

const CaseSummary = (props) => {
    ////////////////////////////////////////////////redux//////////////////////////////////////////////////////
    const agee = useSelector((state) => state.agee);
    const genderType = useSelector((state) => state.genderType);
    const ageeType = useSelector((state) => state.ageeType);
    const patientsType = useSelector((state) => state.patientsType);
    const patientsHeight = useSelector((state) => state.patientsHeight);
    const patientsHeightType = useSelector((state) => state.patientsHeightType);
    const patientsWeight = useSelector((state) => state.patientsWeight);
    const patientsWeightType = useSelector((state) => state.patientsWeightType);
    const patientsAsap = useSelector((state) => state.patientsAsap);
    const patientsEmergency = useSelector((state) => state.patientsEmergency);
    const surgeryName = useSelector((state) => state.surgeryName);
    const subSurgeryName = useSelector((state) => state.subSurgeryName);
    const categorySurgeryName = useSelector((state) => state.categorySurgeryName);
    const choiceAnswer = useSelector(state => state.choiceAnswer)
    const dispatch = useDispatch();

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const [ageType, setageType] = useState(null);
    const [ageTypeDisplay, setageTypeDisplay] = useState(null);
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState(null);
    const [genderDisplay, setgenderDisplay] = useState(null);
    const [patientTypeArray, setpatientTypeArray] = useState([]);
    const [patientType, setPatientType] = useState(null);
    const [patientTypeDisplay, setpatientTypeDisplay] = useState([]);

    const [height, setHeight] = useState(null);

    const [weight, setWeight] = useState(null);
    const [surgeryTypeArray, setsurgeryTypeArray] = useState([]);
    const [surgeryType, setsurgeryType] = useState([]);
    const [sub_surgeryArray, setsub_surgeryArray] = useState([]);
    const [surgerySubType, setsurgerySubType] = useState([]);
    const [anesthesia_type_list, setanesthesia_type_list] = useState([]);
    const [anesthesia_type, setanesthesia_type] = useState([]);
    const [anesthesiaSubType, setanesthesiaSubType] = useState([]);
    const [subanesthesia_type, setsubanesthesia_type] = useState([]);
    const [subQuestionClick, setsubQuestionClick] = useState(true);
    const [subQuestionNo, setsubQuestionNo] = useState(0);
    const [AsapaArray, setAsapaArray] = useState([]);
    const [asaps, setasaps] = useState([]);
    const [medicationsArray, setmedicationsArray] = useState([]);
    const [medication, setmedication] = useState([]);
    const [medicalHistory, setmedicalHistory] = useState([]);
    const [medicalSubHistory, setmedicalSubHistory] = useState([]);
    const [timeOfLastFoodOrDrink, settimeOfLastFoodOrDrink] = useState(null);
    const [ingestedMaterial, setingestedMaterial] = useState([]);
    const [nameVisble, setnameVisble] = useState(false);
    const [fileName, setFileName] = useState(null);
    const [surgeryHistoryArray, setsurgeryHistoryArray] = useState([]);

    const [surgeryHistory, setsurgeryHistory] = useState([]);
    const [sub_surgeryHistoryArray, setsub_surgeryHistoryArray] = useState([]);
    const [surgerySubHistory, setsurgerySubHistory] = useState([]);

    const [anesethesiaHistory, setanesethesiaHistory] = useState([]);
    const [anesethesiaSubHistory, setanesethesiaSubHistory] = useState([]);
    const [medicalHistoryArray, setmedicalHistoryArray] = useState([]);
    const [AllegriesArray, setAllegriesArray] = useState([]);
    const [allegries, setallegries] = useState([]);
    const [heightType, setheightType] = useState(null);
    const [heightTypeDisplay, setheightTypeDisplay] = useState(null);
    const [weightType, setweightType] = useState(null);
    const [weightTypeDisplay, setweightTypeDisplay] = useState(null);
    const [surgeryMultiSelection, setsurgeryMultiSelection] = useState(false);
    const [burgerMenu, setburgerMenu] = useState(false);
    const [casesummary_id, setcasesummary_id] = useState(null);
    const [emergency, setemergency] = useState(null);
    const [npo_status_time_type, setnpo_status_time_type] = useState(null);
    const [otherMedicationArray, setotherMedicationArray] = useState([]);
    const [categoryValue, setcategoryValue] = useState(null);
    const [otherSurgeryHistoryArray, setotherSurgeryHistoryArray] = useState([]);
    const [otherAllegriesArray, setotherAllegriesArray] = useState([]);
    const [refreshPage, setrefreshPage] = useState(null);
    const [otherSurgeryTypeArray, setotherSurgeryTypeArray] = useState([]);
    useEffect(() => {
        getCaseSummary();
    }, []);

    const getCaseSummary = async () => {
        var token = localStorage.getItem('token');

        fetch(
            API_ROOT + `case-summary-form-data?device_type=Android&device_token=123`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + token,
                },
            }
        )
            .then((response) => response.json())
            .then((res) => {
                if (res.status === 'true' && res.message === 'Case Summary Form Data') {
                    res.data.patientTypes.forEach((element) => {
                        element.value = element.id;
                        element.label = element.type_name;
                    });
                    setpatientTypeArray(res.data.patientTypes);
                    res.data.surgeryTypes.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });

                    setsurgeryHistoryArray(res.data.surgeryTypes);
                    setsurgeryTypeArray(res.data.surgeryTypes);
                    res.data.anesthesiaTypes.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });
                    setanesthesia_type_list(res.data.anesthesiaTypes);

                    res.data.asaPs.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });

                    setAsapaArray(res.data.asaPs);

                    res.data.drugList.forEach((element) => {
                        element.value = element.id;
                        element.label = element.drug_name;
                    });

                    setmedicationsArray(res.data.drugList);

                    setmedicalHistory(res.data.medicalHistories);
                    res.data.drugList.forEach((element) => {
                        element.value = element.id;
                        element.label = element.drug_name;
                    });

                    setAllegriesArray(res.data.drugList);

                    res.data.anesthesiaHistories.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });
                    setanesethesiaHistory(res.data.anesthesiaHistories);
                }
            });
    };
    const handleChangeAgeTpe = (selectedOption) => {
        setageTypeDisplay(selectedOption);
        setageType(selectedOption.value);
    };

    const handleChangeGender = (selectedOption) => {
        setgenderDisplay(selectedOption);
        setGender(selectedOption.value);
    };

    const handleChangePatientType = (selectedOption) => {
        setpatientTypeDisplay(selectedOption);
        setPatientType(selectedOption.value);
    };

    const handleChangeHeightType = (selectedOption) => {
        setheightTypeDisplay(selectedOption);
        setheightType(selectedOption.value);
    };

    const handleChangeWeightType = (selectedOption) => {
        setweightTypeDisplay(selectedOption);
        setweightType(selectedOption.value);
    };

    const handleChangeSurgeryType = (selectedOption) => {
        setsurgeryType(selectedOption);
        for (var j = 0; j < surgeryTypeArray.length; j++) {
            if (surgeryTypeArray[j].id === selectedOption.value) {
                console.log(surgeryTypeArray[j].surgery_sub_type);
                surgeryTypeArray[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });
                setsub_surgeryArray(surgeryTypeArray[j].surgery_sub_type);
            }
        }
    };

    const handleChangesub_surgeryType = (selectedOption) => {
        console.log(selectedOption);
        setsurgerySubType(selectedOption);
    };

    const handleChangeAnesethesiaType = (selectedOption) => {
        setanesthesia_type(selectedOption);
        for (var j = 0; j < anesthesia_type_list.length; j++) {
            for (var i = 0; i < selectedOption.length; i++) {
                if (anesthesia_type_list[j].id === selectedOption[i].value) {
                    anesthesia_type_list[j].anesthesia_sub_type.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });

                    console.log(anesthesia_type_list[j].anesthesia_sub_type);
                    setsubanesthesia_type(anesthesia_type_list[j].anesthesia_sub_type);
                }
            }
        }
    };

    const handleChangesub_anesthesia_type = (selectedOption) => {
        setanesthesiaSubType(selectedOption);
    };

    const handleChangesub_asapa = (selectedOption) => {
        setasaps(selectedOption);
    };

    const handleChangeMedication = (selectedOption) => {
        setmedication(selectedOption);
    };

    const handleChangeSurgeryHistory = (selectedOption) => {
        setsurgeryHistory(selectedOption);
        for (var j = 0; j < surgeryHistoryArray.length; j++) {
            if (surgeryHistoryArray[j].id === selectedOption.value) {
                surgeryHistoryArray[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });

                setsub_surgeryHistoryArray(surgeryHistoryArray[j].surgery_sub_type);
            }
        }
    };

    const handleChangesub_surgeryHistory = (selectedOption) => {
        setsurgerySubHistory(selectedOption);
    };

    const handleChangeAnesethesiaHistory = (selectedOption) => {
        setanesethesiaSubHistory(selectedOption);
    };

    const handleChangeAllegries = (selectedOption) => {
        setallegries(selectedOption);
    };

    const nextBtnClick = () => {
        setquestinNo(questinNo + 1);
    };

    const backBtnClick = () => {
        setquestinNo(0);
    };

    const prevBtnClick = () => {
        setquestinNo(questinNo - 1);
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const nameModalVisible = () => {
        closeModal();
        setnameVisble(true);
    };

    const handleChangeEmergency = (value) => {
        setemergency(value.value);
    };

    const handleChangeNPOStatus = (value) => {
        setnpo_status_time_type(value);
    };

    const callToCaseSummary = () => {
        let asa_ps_data = [];
        asaps.map((data) => {
            let obj = {
                id: '',
            };

            console.log(data.id);
            obj.id = data.id;
            asa_ps_data.push(obj);
        });

        let surgery_types_data = [];
        let objforsurgery_types_data = {
            id: '',
        };
        objforsurgery_types_data.id = surgerySubType.id;
        surgery_types_data.push(objforsurgery_types_data);

        let surgery_types_list_data = [];
        let objforsurgery_types_list_data = {
            id: '',
        };
        objforsurgery_types_list_data.id = surgeryType.id;
        surgery_types_list_data.push(objforsurgery_types_list_data);
        /* surgerySubType.map((data) => {
                             let obj = {
                                 id: ''
                             }
                 
                             obj.id = data.id
                             surgery_types_data.push(obj)
                         })
                 
                         let surgery_types_list_data = []
                         surgeryType.map((data) => {
                             let obj = {
                                 id: ''
                             }
                 
                             obj.id = data.id
                             surgery_types_list_data.push(obj)
                         })*/

        let anesthesia_types_data = [];
        anesthesiaSubType.map((data) => {
            let obj = {
                id: '',
            };

            obj.id = data.id;
            anesthesia_types_data.push(obj);
        });

        let anesthesia_types_list_data = [];
        anesthesia_type.map((data) => {
            let obj = {
                id: '',
            };

            obj.id = data.id;
            anesthesia_types_list_data.push(obj);
        });

        let medications_data = [];
        medication.map((data) => {
            let obj = {
                id: '',
            };

            obj.id = data.id;
            medications_data.push(obj);
        });

        let allergies_data = [];
        allegries.map((data) => {
            let obj = {
                id: '',
            };

            obj.id = data.id;
            allergies_data.push(obj);
        });

        let medical_histories_data = [];
        medicalHistoryArray.map((data) => {
            console.log(data);
            let obj = {
                id: '',
            };

            obj.id = data.id;
            medical_histories_data.push(obj);
        });

        let anesthesia_histories_data = [];
        anesethesiaSubHistory.map((data) => {
            let obj = {
                id: '',
            };

            obj.id = data.id;
            anesthesia_histories_data.push(obj);
        });

        let surgery_histories_data = [];
        let objforsurgery_histories_data = {
            id: '',
        };
        objforsurgery_histories_data.id = surgerySubHistory.id;
        surgery_histories_data.push(objforsurgery_histories_data);

        let surgical_histories_list_data = [];
        let objforsurgical_histories_list_data = {
            id: '',
        };
        objforsurgical_histories_list_data.id = surgeryHistory.id;
        surgical_histories_list_data.push(objforsurgical_histories_list_data);

        let custom_surgery_types_data = [];
        let objforcustom_surgery_types_data = {
            name: '',
        };
        otherSurgeryTypeArray.map((data) => {
            objforcustom_surgery_types_data.name = data;
            custom_surgery_types_data.push(objforcustom_surgery_types_data);
        });

        let custom_medications_data = [];
        let objforcustom_medications_data = {
            name: '',
        };
        otherMedicationArray.map((data) => {
            objforcustom_medications_data.name = data;
            custom_medications_data.push(objforcustom_medications_data);
        });

        let custom_allergies_data = [];
        otherAllegriesArray.map((data) => {
            let objforcustom_allergies_data = {
                name: '',
            };
            custom_allergies_data.push(objforcustom_allergies_data);
        });

        /* let surgery_histories_data = []
                         surgerySubHistory.map((data) => {
                             let obj = {
                                 id: ''
                             }
                 
                             obj.id = data.id
                             surgery_histories_data.push(obj)
                         })
                 
                         let surgical_histories_list_data = []
                         surgeryHistory.map((data) => {
                             let obj = {
                                 id: ''
                             }
                 
                             obj.id = data.id
                             surgical_histories_list_data.push(obj)
                         })*/

        //  console.log(surgery_types_data,surgery_types_list_data,surgery_histories_data,anesthesia_types_data,medical_histories_data,medications_data,anesthesia_histories_data)
        var token = localStorage.getItem('token');
        fetch(
            `http://admin.anesthesiaone.com/api/save-case-summary?token=${token}`,
            {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    age: age,
                    name: fileName,
                    gender: gender,
                    age_type: ageType,
                    height: height,
                    height_type: heightType,
                    weight: weight,
                    weight_type: weightType,
                    patient_types_id: patientType,
                    npo_status_time: timeOfLastFoodOrDrink,
                    npo_status_materials: ingestedMaterial,
                    asa_ps_data: asa_ps_data,
                    surgery_types_data: surgery_types_data,
                    surgical_histories_data: surgery_histories_data,
                    custom_surgery_types_data: custom_surgery_types_data,
                    anesthesia_types_data: anesthesia_types_data,
                    medications_data: medications_data,
                    custom_medications_data: custom_medications_data,
                    allergies_data: allergies_data,
                    custom_allergies_data: custom_allergies_data,
                    medical_histories_data: medical_histories_data,
                    anesthesia_histories_data: anesthesia_histories_data,
                }),
            }
        )
            .then((response) => response.json())
            .then((res) => {
                console.log(res);
                if (res.status === 'true') {
                    setnameVisble(false);
                    setcasesummary_id(res.data.id);
                    alert('case save successfully');
                    props.history.push(
                        `/actionsummary?caseSummaryId=${res.data.id}&caseName=${fileName}`
                    );
                }
            });
    };

    const onSiteChanged = (e, obj) => {
        if (e.target.value === 'Yes') {
            medicalHistoryArray.push(obj);
        }
    };
    const onAnesthesiaHistoryChanged = (e, obj) => {
        if (e.target.value === 'Yes') {
            anesethesiaSubHistory.push(obj);
        }
    };

    const onMedicationValue = (e, obj) => {
        if (e.target.value === 'Yes') {
            medication.push(obj);
        }
    };

    const closeNameModal = () => {
        setnameVisble(false);
    };

    const burgerMenuClick = () => {
        props.history.push('/drawer');
    };

    const changeCaseName = (value) => {
        setFileName(value);
        console.log(value);
    };
    const refresh = () => {
        setrefreshPage({});
    };

    const addotherIntoMedicationCategory = (value) => {
        otherMedicationArray.push(value);
        refresh();
    };

    const addotherIntoSurgeryHistoryCategory = (value) => {
        otherSurgeryHistoryArray.push(value);
        refresh();
    };

    const addotherIntoSurgeryTypeCategory = (value) => {
        otherSurgeryTypeArray.push(value);
        refresh();
    };

    const addotherIntoAllgriesCategory = (value) => {
        otherAllegriesArray.push(value);
        refresh();
    };

    const saveIngestedMaterial = (value) => {
        setingestedMaterial(value);
    };

    const [questinNo, setquestinNo] = useState(0);
    return (
        <div>
            <BurgerMenuModal modalIsOpen={burgerMenu} />
            <SaveCaseModal
                onClickSave={() => nameModalVisible()}
                modalIsOpen={modalIsOpen}
                onClose={() => closeModal()}
            />
            <SaveCaseNameModal
                onCaseNameChange={(value) => changeCaseName(value)}
                closeNameModal={() => closeNameModal()}
                postRequest={() => callToCaseSummary()}
                saveVisible={nameVisble}
                onClose={() => closeModal()}
            />
            <Header onMenuClick={() => burgerMenuClick()} />
            <div className='casename-container'>
                casename:{fileName === null ? '-' : fileName}
            </div>

            <div className='all-action-container'>
                <div className='tab-container'>
                    <Link to='/casesummary' className='tab-container-tabs active-tab'>
                        CASE SUMMARY
          </Link>

                    <Link className='tab-container-tabs' to='/actionsummary'>
                        ACTION SUMMARY
          </Link>
                </div>
                {questinNo == 0 ? (
                    <div className='result-container'>
                        <div onClick={() => setquestinNo(1)} className='answer-container'>
                            <div>1.AGE?</div>
                            <div>{age}</div>
                        </div>
                        <div onClick={() => setquestinNo(2)} className='answer-container'>
                            <div>2.GENDER?</div>
                            <div>{gender}</div>
                        </div>
                        <div onClick={() => setquestinNo(3)} className='answer-container'>
                            <div>3.PATIENT TYPE?</div>
                            <div>{patientTypeDisplay.label}</div>
                        </div>
                        <div onClick={() => setquestinNo(4)} className='answer-container'>
                            <div>4.HEIGHT?</div>
                            <div>{height}</div>
                        </div>
                        <div onClick={() => setquestinNo(5)} className='answer-container'>
                            <div>5. WEIGHT?</div>
                            <div>{weight}</div>
                        </div>
                        <div onClick={() => setquestinNo(6)} className='answer-container'>
                            <div>6. ASA-PS?</div>
                            <div>{asaps.label}</div>
                        </div>
                        <div onClick={() => setquestinNo(7)} className='answer-container'>
                            <div>7. SURGERY TYPE?</div>
                            <div>
                                {surgerySubType.length == 0 ? surgeryType.label : <></>}
                                {surgerySubType.label}
                            </div>
                        </div>
                        <div onClick={() => setquestinNo(8)} className='answer-container'>
                            <div>8. ANESTHESIA TYPE?</div>
                            <div>
                                {anesthesiaSubType.length == 0 ? (
                                    anesthesia_type.map((data) => {
                                        return <div>{data.label}</div>;
                                    })
                                ) : (
                                    <></>
                                )}

                                {anesthesiaSubType.map((data) => {
                                    return <div>{data.label}</div>;
                                })}
                            </div>
                        </div>
                        <div onClick={() => setquestinNo(14)} className='answer-container'>
                            <div>9. NPO STATUS?</div>
                            <div>{timeOfLastFoodOrDrink}</div>
                        </div>

                        <div onClick={() => setquestinNo(10)} className='answer-container'>
                            <div>10. MEDICATIONS?</div>
                            <div>
                                {medication.map((data) => {
                                    return <div>{data.drug_name}</div>;
                                })}
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(13)} className='answer-container'>
                            <div>11. ALLERGIES?</div>
                            <div>
                                {allegries.map((data) => {
                                    return <div>{data.label}</div>;
                                })}
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(9)} className='answer-container'>
                            <div>12. MEDICAL HISTORY?</div>
                            <div>
                                {medicalHistoryArray.map((data) => {
                                    return <div>{data.name},</div>;
                                })}
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(11)} className='answer-container'>
                            <div>13. SURGICAL HISTORY?</div>
                            <div>
                                {surgerySubHistory.length == 0 ? surgeryHistory.label : <></>}
                                {surgerySubHistory.label}
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(12)} className='answer-container'>
                            <div>14. ANESTHESIA HISTORY?</div>
                            <div>
                                {anesethesiaSubHistory.map((data) => {
                                    return <div>{data.name}</div>;
                                })}
                            </div>
                        </div>

                        <div className='next-button-container'>
                            {/*<div onClick={() => openModal()} className="next-button" >
                                    SAVE
                                </div>*/}

                            <div
                                onClick={() => nameModalVisible()}
                /*onClick={() => }*/ className='next-button'
                            >
                                NEXT
              </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 1 ? (
                    <div className='question-container'>
                        <div className='age-header-container'>
                            QUESTION {questinNo} OF 16- AGE?
            </div>
                        <div className='age-input-container'>
                            <input
                                value={age}
                                onChange={(e) => dispatch(setAgee(e.target.value))}
                                placeholder='ANSWER'
                                className='age-input'
                            />
                            {/*  <Select value={ageTypeDisplay} onChange={(value) => handleChangeAgeTpe(value)} placeholder="SELECT TYPE" className="age-type-dropdown" id="age" options={optionsforage} /> */}
                            {optionsforage.map((data) => {
                                if (data.value === ageeType.value) {
                                    return (
                                        <div
                                            className='age-selected-type-button'
                                            onClick={() => dispatch(setAgeType(data))}
                                        >
                                            {data.label}
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            className='age-type-button'
                                            onClick={() => dispatch(setAgeType(data))}
                                        >
                                            {data.label}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
              </div>
                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
              </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {questinNo == 2 ? (
                    <div className='question-container'>
                        <div className='gender-header-container'>
                            QUESTION {questinNo} OF 16- GENDER?
            </div>
                        <div className='gender-input-container'>
                            {/*<Select value={genderDisplay} onChange={(value) => handleChangeGender(value)} placeholder="GENDER" className="gender-dropdown" id="age" options={optionsforgender} />*/}
                            {optionsforgender.map((data) => {
                                if (data.value === genderType.value) {
                                    return (
                                        <div
                                            className='gender-selected-type-button'
                                            onClick={() => dispatch(setGenderType(data))}
                                        >
                                            {data.label}
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            className='gender-type-button'
                                            onClick={() => dispatch(setGenderType(data))}
                                        >
                                            {data.label}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
              </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
              </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 3 ? (
                    <div className='question-container'>
                        <div className='patientype-header-container'>
                            QUESTION {questinNo} OF 16- PATIENT TYPE?
            </div>
                        <div className='patientype-input-container'>
                            {/*  <Select value={patientTypeDisplay} onChange={(value) => handleChangePatientType(value)} placeholder="PATIENT TYPE" className="patientype-dropdown" id="patien-type" options={patientTypeArray} /> */}
                            <div className='patient-type-button-container'>
                                {patientTypeArray.map((data) => {
                                    if (data.id === patientsType.id) {
                                        return (
                                            <div
                                                className='patient-selected-type-button'
                                                onClick={() => dispatch(setPatientsType(data))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                className='patient-type-button'
                                                onClick={() => dispatch(setPatientsType(data))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                        <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
              </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
              </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 4 ? (
                    <div className='question-container'>
                        <div className='height-header-container'>
                            QUESTION {questinNo} OF 16- HEIGHT?
            </div>
                        <div className='height-input-container'>
                            <input
                                value={height}
                                onChange={(e) => dispatch(setPatientHeight(e.target.value))}
                                placeholder='ANSWER'
                                className='height-input'
                            />
                            {/*  <Select value={heightTypeDisplay} onChange={(value) => handleChangeHeightType(value)} placeholder="Height Type" className="height-type-dropdown" id="age" options={optionsForHeight} /> */}
                            {optionsForHeight.map((data) => {
                                if (data.value === patientsHeightType.value) {
                                    return (
                                        <div
                                            className='height-selected-type-button'
                                            onClick={() => dispatch(setPatientHeightType(data))}
                                        >
                                            {data.label}
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            className='height-type-button'
                                            onClick={() => dispatch(setPatientHeightType(data))}
                                        >
                                            {data.label}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
              </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
              </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 5 ? (
                    <div className='question-container'>
                        <div className='weight-header-container'>
                            QUESTION {questinNo} OF 16- WEIGHT?
            </div>
                        <div className='weight-input-container'>
                            <input
                                value={weight}
                                onChange={(e) => dispatch(setPatientWeight(e.target.value))}
                                placeholder='ANSWER'
                                className='weight-input'
                            />
                            {/*  <Select value={weightTypeDisplay} onChange={(value) => handleChangeWeightType(value)} placeholder="Weight Type" className="weight-type-dropdown" id="age" options={optionsForWeight} />*/}
                            {optionsForWeight.map((data) => {
                                if (data.value === patientsWeightType.value) {
                                    return (
                                        <div
                                            className='weight-selected-type-button'
                                            onClick={() => dispatch(setPatientWeightType(data))}
                                        >
                                            {data.label}
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            className='weight-type-button'
                                            onClick={() => dispatch(setPatientWeightType(data))}
                                        >
                                            {data.label}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
              </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
              </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 6 ? (
                    <div className='question-container'>
                        <div className='ASA-PS-header-container'>
                            QUESTION {questinNo} OF 16- ASA-PS?
            </div>
                        <div className='ASA-PS-input-container'>
                            <div className='asa-ps-button-container'>
                                {AsapaArray.map((data) => {
                                    if (data.id === patientsAsap.id) {
                                        return (
                                            <div
                                                className='asaps-selected-type-button'
                                                onClick={() => dispatch(setAsaps(data))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                className='asa-ps-type-button'
                                                onClick={() => dispatch(setAsaps(data))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                            <div>Emergency: </div>

                            {optionsforEmergency.map((data) => {
                                if (data.value === patientsEmergency.value) {
                                    return (
                                        <div
                                            className='emergency-selected-type-button'
                                            onClick={() => dispatch(setEmergency(data))}
                                        >
                                            {data.label}
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            className='weight-type-button'
                                            onClick={() => dispatch(setEmergency(data))}
                                        >
                                            {data.label}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
              </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
              </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 7 ? (
                    <div className='question-container'>
                        <div className='Surgery-type-header-container'>
                            QUESTION {questinNo} OF 16- SURGERY TYPE?
            </div>
                        <div className='Surgery-type-input-container'>
                            <Select
                                value={surgeryType}
                                onChange={(value) => handleChangeSurgeryType(value)}
                                placeholder='SURGERY-TYPE'
                                className='Surgery-type-dropdown'
                                id='patien-type'
                                options={surgeryTypeArray}
                            />
                        </div>
                        {sub_surgeryArray.length !== 0 ? (
                            <div className='Surgery-type-input-container'>
                                <Select
                                    value={subSurgeryName}
                                    onChange={(value) => dispatch(setSubSurgeryName(value))}
                                    placeholder='SURGERY-TYPE'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={sub_surgeryArray}
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className='medication-extra-type-container'>
                            <input
                                className='medication-input'
                                onChange={(e) =>
                                    dispatch(setCategorySurgeryName(e.target.value))
                                }
                                placeholder='enter not listed type'
                            />
                            <div
                                className='add-more-button'
                                onClick={() =>
                                    addotherIntoSurgeryTypeCategory(categorySurgeryName)
                                }
                            >
                                Add
              </div>
                        </div>
                        {otherSurgeryTypeArray.map((data) => {
                            return <div>{data}</div>;
                        })}

                        <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
              </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
              </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 8 ? (
                    <div className='question-container'>
                        <div className='ANESTHESIA-type-header-container'>
                            QUESTION {questinNo} OF 16- ANESTHESIA TYPE?
            </div>
                        <div className='ANESTHESIA-type-input-container'>
                            <Select
                                isMulti={true}
                                value={anesthesia_type}
                                onChange={(value) => handleChangeAnesethesiaType(value)}
                                placeholder='ANESTHESIA TYPE'
                                className='ANESTHESIA-type-dropdown'
                                id='patien-type'
                                options={anesthesia_type_list}
                            />
                        </div>

                        <div className='Surgery-type-input-container'>
                            {subanesthesia_type.length !== 0 ? (
                                <Select
                                    isMulti={true}
                                    onChange={(value) => handleChangesub_anesthesia_type(value)}
                                    placeholder='SURGERY-TYPE'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={subanesthesia_type}
                                />
                            ) : (
                                <></>
                            )}
                        </div>

                        <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
              </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
              </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 9 ? (
                    <div className='medical-history-question-container'>
                        <div className='medical-history-header-container'>
                            QUESTION {questinNo} OF 16- MEDICAL HISTORY?
            </div>
                        {subQuestionClick ? (
                            <div className='medical-history-main-container'>
                                {medicalHistory.map((data) => {
                                    return (
                                        <div style={{ width: '100%' }}>
                                            <div className='medical-history-question-header'>
                                                <div>
                                                    {data.id}.{data.name}
                                                </div>
                                            </div>

                                            <div className='medical-history-sub-question-sub-container'>
                                                {data.medical_history_sub_type.map((data1) => {
                                                    return (
                                                        <div className='sub-question-container'>
                                                            <div>{data1.name}</div>
                                                            {medicalHistoryArray.map((selecteddata) => {
                                                                if (selecteddata.name === data1.name) {
                                                                    return (
                                                                        <div>
                                                                            <div className='option-box-container'>
                                                                                <input
                                                                                    checked={
                                                                                        selecteddata.name === data1.name
                                                                                            ? true
                                                                                            : false
                                                                                    }
                                                                                    onChange={(e) =>
                                                                                        dispatch(setMedicalHistory(e, data1))
                                                                                    }
                                                                                    type='radio'
                                                                                    value='Yes'
                                                                                    name={data1.name}
                                                                                />{' '}
                                        Yes
                                        <input
                                                                                    onChange={(e) =>
                                                                                        dispatch(setMedicalHistory(e, data1))
                                                                                    }
                                                                                    type='radio'
                                                                                    value='No'
                                                                                    name={data1.name}
                                                                                />{' '}
                                        No
                                      </div>
                                                                        </div>
                                                                    );
                                                                } else {
                                                                    return (
                                                                        <div>
                                                                            <div className='option-box-container'>
                                                                                <input
                                                                                    checked={
                                                                                        selecteddata.name === data1.name
                                                                                            ? true
                                                                                            : false
                                                                                    }
                                                                                    onChange={(e) =>
                                                                                        dispatch(setMedicalHistory(e, data1))
                                                                                    }
                                                                                    type='radio'
                                                                                    value='Yes'
                                                                                    name={data1.name}
                                                                                />{' '}
                                        Yes
                                        <input
                                                                                    onChange={(e) =>
                                                                                        dispatch(setMedicalHistory(e, data1))
                                                                                    }
                                                                                    type='radio'
                                                                                    value='No'
                                                                                    name={data1.name}
                                                                                />{' '}
                                        No
                                      </div>
                                                                        </div>
                                                                    );
                                                                }
                                                            })}{' '}
                                                            {medicalHistoryArray.length === 0 ? (
                                                                <div className='option-box-container'>
                                                                    <input
                                                                        onChange={(e) =>
                                                                            dispatch(setMedicalHistory(e, data1))
                                                                        }
                                                                        type='radio'
                                                                        value='Yes'
                                                                        name={data1.name}
                                                                    />{' '}
                                  Yes
                                                                    <input
                                                                        onChange={(e) =>
                                                                            dispatch(setMedicalHistory(e, data1))
                                                                        }
                                                                        type='radio'
                                                                        value='No'
                                                                        name={data1.name}
                                                                    />{' '}
                                  No
                                                                </div>
                                                            ) : (
                                                                <></>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <></>
                        )}

                        <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
              </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
              </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 10 ? (
                    <div className='question-container'>
                        <div className='medications-header-container'>
                            QUESTION {questinNo} OF 16- MEDICATIONS?
            </div>
                        <div className='medications-input-container'>
                            {medicationsArray.map((data1) => {
                                return (
                                    <div className='sub-question-container'>
                                        <div>{data1.label}</div>
                                        {medication.map((selecteddata) => {
                                            if (selecteddata.drug_name === data1.drug_name) {
                                                return (
                                                    <div>
                                                        <div className='option-box-container'>
                                                            <input
                                                                checked={
                                                                    selecteddata.drug_name === data1.drug_name
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) => onSiteChanged(e, data1)}
                                                                type='radio'
                                                                value='Yes'
                                                                name={data1.drug_name}
                                                            />{' '}
                              Yes
                              <input
                                                                onChange={(e) => onSiteChanged(e, data1)}
                                                                type='radio'
                                                                value='No'
                                                                name={data1.drug_name}
                                                            />{' '}
                              No
                            </div>
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <div>
                                                        <div className='option-box-container'>
                                                            <input
                                                                checked={
                                                                    selecteddata.drug_name === data1.drug_name
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) => onSiteChanged(e, data1)}
                                                                type='radio'
                                                                value='Yes'
                                                                name={data1.drug_name}
                                                            />{' '}
                              Yes
                              <input
                                                                onChange={(e) => onSiteChanged(e, data1)}
                                                                type='radio'
                                                                value='No'
                                                                name={data1.drug_name}
                                                            />{' '}
                              No
                            </div>
                                                    </div>
                                                );
                                            }
                                        })}
                                        {medication.length === 0 ? (
                                            <div className='option-box-container'>
                                                <input
                                                    onChange={(e) => onMedicationValue(e, data1)}
                                                    type='radio'
                                                    value='Yes'
                                                    name={data1.drug_name}
                                                />{' '}
                        Yes
                                                <input
                                                    onChange={(e) => onMedicationValue(e, data1)}
                                                    type='radio'
                                                    value='No'
                                                    name={data1.drug_name}
                                                />{' '}
                        No
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                );
                            })}

                            <div className='medication-extra-type-container'>
                                <input
                                    className='medication-input'
                                    onChange={(e) => setcategoryValue(e.target.value)}
                                    placeholder='enter not listed type'
                                />
                                <div
                                    className='add-more-button'
                                    onClick={() => addotherIntoMedicationCategory(categoryValue)}
                                >
                                    Add
                </div>
                            </div>
                            {otherMedicationArray.map((data) => {
                                return <div>{data}</div>;
                            })}
                        </div>

                        <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
              </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
              </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 11 ? (
                    <div className='question-container'>
                        <div className='Surgery-type-header-container'>
                            QUESTION {questinNo} OF 16- SURGERY HISTORY?
            </div>
                        <div className='Surgery-type-input-container'>
                            <Select
                                value={surgeryHistory}
                                onChange={(value) => handleChangeSurgeryHistory(value)}
                                placeholder='SURGERY-HISTORY'
                                className='Surgery-type-dropdown'
                                id='patien-type'
                                options={surgeryHistoryArray}
                            />
                        </div>
                        <div className='Surgery-type-input-container'>
                            {sub_surgeryHistoryArray.length !== 0 ? (
                                <Select
                                    value={surgerySubHistory}
                                    onChange={(value) => handleChangesub_surgeryHistory(value)}
                                    placeholder='SURGERY-HISTORY-SUB-TYPE'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={sub_surgeryHistoryArray}
                                />
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className='medication-extra-type-container'>
                            <input
                                className='medication-input'
                                onChange={(e) => setcategoryValue(e.target.value)}
                                placeholder='enter not listed type'
                            />
                            <div
                                className='add-more-button'
                                onClick={() =>
                                    addotherIntoSurgeryHistoryCategory(categoryValue)
                                }
                            >
                                Add
              </div>
                        </div>
                        {otherSurgeryHistoryArray.map((data) => {
                            return <div>{data}</div>;
                        })}

                        <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
              </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
              </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 12 ? (
                    <div className='question-container'>
                        <div className='ANESTHESIA-type-header-container'>
                            QUESTION {questinNo} OF 16- ANESTHESIA HISTORY?
            </div>
                        <div className='ANESTHESIA-type-input-container'>
                            {anesethesiaHistory.map((data1) => {
                                return (
                                    <div className='sub-question-container'>
                                        <div>{data1.label}</div>
                                        {anesethesiaSubHistory.map((selecteddata) => {
                                            if (selecteddata.name === data1.name) {
                                                return (
                                                    <div>
                                                        <div className='option-box-container'>
                                                            <input
                                                                checked={
                                                                    selecteddata.name === data1.name
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) => onSiteChanged(e, data1)}
                                                                type='radio'
                                                                value='Yes'
                                                                name={data1.name}
                                                            />{' '}
                              Yes
                              <input
                                                                onChange={(e) => onSiteChanged(e, data1)}
                                                                type='radio'
                                                                value='No'
                                                                name={data1.name}
                                                            />{' '}
                              No
                            </div>
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <div>
                                                        <div className='option-box-container'>
                                                            <input
                                                                checked={
                                                                    selecteddata.name === data1.name
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) => onSiteChanged(e, data1)}
                                                                type='radio'
                                                                value='Yes'
                                                                name={data1.name}
                                                            />{' '}
                              Yes
                              <input
                                                                onChange={(e) => onSiteChanged(e, data1)}
                                                                type='radio'
                                                                value='No'
                                                                name={data1.name}
                                                            />{' '}
                              No
                            </div>
                                                    </div>
                                                );
                                            }
                                        })}

                                        {anesethesiaSubHistory.length === 0 ? (
                                            <div className='option-box-container'>
                                                <input
                                                    onChange={(e) => onAnesthesiaHistoryChanged(e, data1)}
                                                    type='radio'
                                                    value='Yes'
                                                    name={data1.name}
                                                />{' '}
                        Yes
                                                <input
                                                    onChange={(e) => onAnesthesiaHistoryChanged(e, data1)}
                                                    type='radio'
                                                    value='No'
                                                    name={data1.name}
                                                />{' '}
                        No
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                        {data1.label ===
                                            'HISTORY OF COMPLICATIONS WITH ANESTHESIA' ||
                                            data1.label ===
                                            'FAMILY HISTORY OF COMPLICATIONS WITH ANESTHESIA' ? (
                                            <div>
                                                <input placeholder='enter something...' />
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
              </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
              </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 13 ? (
                    <div className='question-container'>
                        <div className='ANESTHESIA-type-header-container'>
                            QUESTION {questinNo} OF 16- ALLERGIES?
            </div>
                        <div className='ANESTHESIA-type-input-container'>
                            <Select
                                value={allegries}
                                isMulti={true}
                                onChange={(value) => handleChangeAllegries(value)}
                                placeholder='ALLERGIES'
                                className='ANESTHESIA-type-dropdown'
                                id='patien-type'
                                options={AllegriesArray}
                            />
                            <div className='medication-extra-type-container'>
                                <input
                                    className='medication-input'
                                    onChange={(e) => setcategoryValue(e.target.value)}
                                    placeholder='enter not listed type'
                                />
                                <div
                                    className='add-more-button'
                                    onClick={() => addotherIntoAllgriesCategory(categoryValue)}
                                >
                                    Add
                </div>
                            </div>
                            {otherAllegriesArray.map((data) => {
                                return <div>{data}</div>;
                            })}
                        </div>

                        <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
              </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
              </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 14 ? (
                    <div className='question-container'>
                        <div className='age-header-container'>
                            QUESTION {questinNo} OF 16- NPO-STATUS?
            </div>
                        <div className='age-input-container'>
                            <input
                                type='number'
                                value={timeOfLastFoodOrDrink}
                                onChange={(e) => settimeOfLastFoodOrDrink(e.target.value)}
                                placeholder='TIME OF LAST FOOD OR DRINK'
                                className='age-input'
                            />
                            {optionForNPOStatus.map((data) => {
                                if (data.value === npo_status_time_type) {
                                    return (
                                        <div
                                            className='npo-time-type-selected-type-button'
                                            onClick={() => handleChangeNPOStatus(data.value)}
                                        >
                                            {data.label}
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            className='weight-type-button'
                                            onClick={() => handleChangeNPOStatus(data.value)}
                                        >
                                            {data.label}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <div>Ingested material</div>
                        <div className='ingested-input-container'>
                            {ingestedMaterialArray.map((data) => {
                                if (data === ingestedMaterial) {
                                    return (
                                        <div
                                            className='ingested-selected-type-button'
                                            onClick={() => saveIngestedMaterial(data)}
                                        >
                                            {data.label}
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            className='ingested-type-button'
                                            onClick={() => saveIngestedMaterial(data)}
                                        >
                                            {data.label}
                                        </div>
                                    );
                                }
                            })}
                        </div>

                        <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
              </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
              </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
              </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 15 ? (
                    <div className='result-container'>
                        <div onClick={() => setquestinNo(1)} className='answer-container'>
                            <div>1.AGE?</div>
                            <div>{age}</div>
                        </div>
                        <div onClick={() => setquestinNo(2)} className='answer-container'>
                            <div>2.GENDER?</div>
                            <div>{gender}</div>
                        </div>
                        <div onClick={() => setquestinNo(3)} className='answer-container'>
                            <div>3.PATIENT TYPE?</div>
                            <div>{patientTypeDisplay.label}</div>
                        </div>
                        <div onClick={() => setquestinNo(4)} className='answer-container'>
                            <div>4.HEIGHT?</div>
                            <div>{height}</div>
                        </div>
                        <div onClick={() => setquestinNo(5)} className='answer-container'>
                            <div>5. WEIGHT?</div>
                            <div>{weight}</div>
                        </div>
                        <div onClick={() => setquestinNo(6)} className='answer-container'>
                            <div>6. ASA-PS?</div>
                            <div>{asaps.label}</div>
                        </div>
                        <div onClick={() => setquestinNo(7)} className='answer-container'>
                            <div>7. SURGERY TYPE?</div>
                            <div>
                                {surgerySubType.length == 0 ? surgeryType.label : <></>}
                                {surgerySubType.label}
                            </div>
                        </div>
                        <div onClick={() => setquestinNo(8)} className='answer-container'>
                            <div>8. ANESTHESIA TYPE?</div>
                            <div>
                                {anesthesiaSubType.length == 0 ? (
                                    anesthesia_type.map((data) => {
                                        return <div>{data.label}</div>;
                                    })
                                ) : (
                                    <></>
                                )}

                                {anesthesiaSubType.map((data) => {
                                    return <div>{data.label}</div>;
                                })}
                            </div>
                        </div>
                        <div onClick={() => setquestinNo(14)} className='answer-container'>
                            <div>9. NPO STATUS?</div>
                            <div>{timeOfLastFoodOrDrink}</div>
                        </div>

                        <div onClick={() => setquestinNo(10)} className='answer-container'>
                            <div>10. MEDICATIONS?</div>
                            <div>
                                {medication.map((data) => {
                                    return <div>{data}</div>;
                                })}
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(13)} className='answer-container'>
                            <div>11. ALLERGIES?</div>
                            <div>
                                {allegries.map((data) => {
                                    return <div>{data.label}</div>;
                                })}
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(9)} className='answer-container'>
                            <div>12. MEDICAL HISTORY?</div>
                            <div>
                                {medicalHistoryArray.map((data) => {
                                    return <div>{data},</div>;
                                })}
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(11)} className='answer-container'>
                            <div>13. SURGICAL HISTORY?</div>
                            <div>
                                {surgerySubHistory.length == 0 ? surgeryHistory.label : <></>}
                                {surgerySubHistory.label}
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(12)} className='answer-container'>
                            <div>14. ANESTHESIA HISTORY?</div>
                            <div>
                                {anesethesiaSubHistory.map((data) => {
                                    return <div>{data}</div>;
                                })}
                            </div>
                        </div>

                        <div className='next-button-container'>
                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
              </div>

                            {/*<div onClick={() => openModal()} className="next-button" >
                                    SAVE
                                </div>*/}

                            <div
                                onClick={() => nameModalVisible()}
                /*onClick={() => }*/ className='next-button'
                            >
                                NEXT
              </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                <div className='crises-button'>CRISES</div>
            </div>
        </div>
    );
};

export default CaseSummary;
