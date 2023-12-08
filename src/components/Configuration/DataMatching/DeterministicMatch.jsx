import CustomButton from '@/components/common/CustomButton'
import { IoClose } from "react-icons/io5";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import CustomModal from '@/components/common/CustomModal';
import CustomInput from '@/components/common/CustomInput';
import SmCustomModal from '@/components/common/SmCustomModal';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import SingleSelectDropDown from '@/components/common/SingleSelectDropDown';
import { matchdata, matchdataValue } from '@/assets/data';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const customStyles = {
  option: (provided, state) => {
    return ({
      ...provided,
      backgroundColor: state.isSelected ? '#114391' : state?.isFocused ? "#CBDDF9" : '',
      color: state.isSelected ? 'white' : state.isHovered ? 'black' : 'black',
      cursor: "pointer",
    })
  },
  singleValue: (provided) => ({
    ...provided,
    color: 'black',
  }),
  control: (provided, state) => {
    return ({
      ...provided,
      boxShadow: state?.isFocused ? '0 0 0 1.5px #046e04' : "",
    })
  },
  indicatorSeparator: () => ({
    display: 'none',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#4A4A4A',
    fontSize: "17px",
    fontWeight: "400",
    fontFamily: "OpenSans"
  }),
};



const DeterministicMatch = () => {
  const animatedComponents = makeAnimated();
  const [isNewRuleModal, setIsNewRuleModal] = useState(false)

  const [dynamicFields, setDynamicFields] = useState([
    { name: '', value: "" }
  ]);

  const [rules, setRules] = useState([]);
  const [openRules, setOpenRules] = useState({});
  const [areAllRulesVisible, setAreAllRulesVisible] = useState(true);

  const handleAddField = () => [
    setDynamicFields((prevFields) => [...prevFields, { name: '', value: "" }])
  ]

  const handleNewRuleModal = () => {
    setIsNewRuleModal(true)
  }

  const closeModal = () => {
    setIsNewRuleModal(false);
    setDynamicFields([{ name: '', value: "" }])
  };

  /* const handleDynamicInputChange = (index, field, e) => {
    const { value } = e.target;
    setDynamicFields((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index] = { ...updatedFields[index], [field]: value, id: index };
      return updatedFields;
    });
  }; */
  /* console.log();
  const handleFromData = (data, target) => {
    console.log(data);
    console.log(target.name);

    // Use map to update the array
    setDynamicFields(prevFields => {
      return prevFields.map(field => {
        console.log(field.name, target.name);
        console.log({ ...field, [target.name]: data.value });
        // Update the target field with the new value
        // if (field.name === target) {
        console.log("enter this ");
        return { ...field, [target.name]: data.value };
        // }
        return field;
      });
    });
  }
 */
  console.log(dynamicFields);
  const handleFromData = (selectedOption, index, fieldKey) => {
    setDynamicFields((prevFields) => {
      const newFields = [...prevFields];
      newFields[index][fieldKey] = selectedOption;
      return newFields;
    });
  };

  /*   [
      {
        dynamicFields: [
          {
            name: { label: 'date_of_birth', value: 'date_of_birth' },
            value: { label: '0.2', value: '0.2' }
          }
        ]
      }
    ] */
  console.log(dynamicFields);
  console.log(rules);
  const handleSaveRule = () => {
    const newRule = {
      dynamicFields: dynamicFields.map(field => ({
        name: field?.name?.value,
        value: field?.value?.value,
      })),
    };

    setRules([...rules, newRule]);
    closeModal();
  };

  /*  [
     {
       dynamicFields: [
         {
           name: 'date_of_birth',
           value: '0.2',
         }
       ]
     }
   ] */

  const handleRemoveField = (ruleIndex, fieldIndex) => {
    setRules((prevRules) => {
      const updatedRules = [...prevRules];
      updatedRules[ruleIndex].dynamicFields.splice(fieldIndex, 1);
      // If dynamicFields is empty, remove the entire rule
      if (updatedRules[ruleIndex].dynamicFields.length === 0) {
        updatedRules.splice(ruleIndex, 1);
      }

      return updatedRules;
    });
  };

  const calculateTotalThreshold = (dynamicFields) => {
    // Calculate the sum of all field.values
    const sum = dynamicFields.reduce((total, field) => total + parseFloat(field.value || 0), 0);
    return sum.toFixed(2); // Adjust as needed
  };

  const handleToggleRule = (ruleIndex) => {
    setOpenRules((prevOpenRules) => ({
      ...prevOpenRules,
      [ruleIndex]: !prevOpenRules[ruleIndex],
    }));
  };

  useEffect(() => {
    // Set all rules to be open by default
    const initialOpenRules = {};
    rules.forEach((_, index) => {
      initialOpenRules[index] = true;
    });
    setOpenRules(initialOpenRules);
  }, [rules]);

  const handleToggleAllRules = () => {
    setAreAllRulesVisible(!areAllRulesVisible);
    setOpenRules((prevOpenRules) => {
      const updatedOpenRules = {};
      for (let index = 0; index < rules.length; index++) {
        updatedOpenRules[index] = !areAllRulesVisible;
      }
      return updatedOpenRules;
    });
  };

  return (
    <div className='border border-[#a6a6a6] rounded-lg w-full h-full'>
      <SmCustomModal type="Create" isopen={isNewRuleModal} onClose={closeModal} >
        <div className='w-full h-full '>
          <div className='flex justify-between border-b '>
            <button className='flex items-center flex-shrink-0 gap-6 px-6 '>
              <Image
                src="/images/icon/logo.png"
                alt='HOM-logo'
                width="212"
                priority
                height="40"
                className='flex-shrink-0  h-auto pb-2'
              />
            </button>
          </div>
          <div>
            <h1 className='pl-6'>Add New - Rule</h1>
            <div className='p-5 pl-6  h-[250px] overflow-auto flex flex-col  '>

              <div className='flex items-center gap-10'>
                <span className='w-52'>Attribute</span>
                <span className='w-52'>Col_weight</span>
              </div>

              <div className='flex flex-col gap-2'>
                {dynamicFields?.map((field, index) => {
                  return (
                    <div key={index} className='flex items-center gap-10'>
                      <div className='w-52'>
                        <Select
                          placeholder="Enter Data Source"
                          isMulti={false}
                          styles={customStyles}
                          name='name'
                          options={matchdata}
                          value={field?.name}
                          onChange={(selectedOption) =>
                            handleFromData(selectedOption, index, 'name')
                          }
                          components={animatedComponents}
                          className='capitalize'
                        />
                      </div>
                      <div className='w-52'>
                        <Select
                          placeholder="Enter Data Source"
                          isMulti={false}
                          styles={customStyles}
                          name='name'
                          options={matchdataValue}
                          value={field?.value}
                          onChange={(selectedOption) =>
                            handleFromData(selectedOption, index, 'value')
                          }
                          components={animatedComponents}
                          className='capitalize'
                        />
                      </div>
                      {index === dynamicFields.length - 1 && <div className="w-full max-w-[80px]" >
                        <CustomButton
                          name="Add"
                          handleClick={() => handleAddField()}
                          isDisable={false}
                          isLoading={false}
                        />
                      </div>}
                    </div>
                  )
                })}
              </div>


            </div>
          </div>

          <div className='flex items-center justify-end gap-10 pr-6'>
            <div className="w-full max-w-[150px]" >
              <CustomButton
                name="Save"
                handleClick={() => handleSaveRule()}
                isDisable={false}
                isLoading={false}
              />
            </div>
            <div className="w-full max-w-[150px]" >
              <CustomButton
                name="Cancel"
                handleClick={() => { }}
                isDisable={false}
                isLoading={false}
              />
            </div>
          </div>

        </div>
      </SmCustomModal>



      <div className='flex items-center justify-between p-3 border-b border-[#a6a6a6]'>
        <div className="w-full max-w-[150px]" >
          <CustomButton
            name={areAllRulesVisible ? "Hide All Rules" : "Show All Rules"}
            handleClick={() => handleToggleAllRules()}
            isDisable={false}
            isLoading={false}
            icon=""
          />
        </div>
        <div className="w-full max-w-[150px]" >
          <CustomButton
            name="Create New Rule"
            handleClick={() => handleNewRuleModal()}
            isDisable={false}
            isLoading={false}
            icon=""
          />
        </div>
      </div>

      <div className='p-3 border-b border-[#a6a6a6] flex justify-center flex-col gap-3 w-full h-full max-h-[680px] overflow-auto'>


        <div className='border border-[#a6a6a6] rounded-lg p-2 '>
          <div className="w-full max-w-[150px] " >
            <CustomButton
              name="Rules 1"
              handleClick={() => { }}
              isDisable={false}
              isLoading={false}
            />
          </div>
          <div className='flex items-center gap-10 '>
            <fieldset className='border pl-3 rounded-lg'>
              <legend className=''>Select Attribute</legend>
              <div className='flex items-center justify-start gap-5 p-3'>
                <div className='flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1 '>
                  <span>Name</span>
                  <IoClose className='w-5 h-5 flex-shrink-0' />
                </div>
                <div className='flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1'>
                  <span>date_of_birth</span>
                  <IoClose className='w-5 h-5 flex-shrink-0' />
                </div>
                <div className='flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1'>
                  <span>Aadhar</span>
                  <IoClose className='w-5 h-5 flex-shrink-0' />
                </div>
                <div className='flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1'>
                  <span>Passport</span>
                  <IoClose className='w-5 h-5 flex-shrink-0' />
                </div>
                <div className='flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1'>
                  <span>Driving_License</span>
                  <IoClose className='w-5 h-5 flex-shrink-0' />
                </div>
              </div>
            </fieldset>
            <div className='flex flex-col items-start'>
              <span>Total-threshold </span>
              <span className='flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1 '>0.2</span>
            </div>
          </div>
        </div>


        {rules.map((rule, index) => (
          <div key={index} className='border border-[#a6a6a6] rounded-lg p-2'>
            <div className='w-full max-w-[150px]'>
              <CustomButton
                name={`Rules ${index + 1}`}
                handleClick={() => handleToggleRule(index)}
                isDisable={false}
                isLoading={false}
                icon={areAllRulesVisible && openRules[index] ? <FaAngleUp /> : <FaAngleDown />}
              />
            </div>
            {areAllRulesVisible && openRules[index] && <div className='flex items-center gap-10 '>
              <fieldset className='border pl-3 rounded-lg'>
                <legend className=''>Select Attribute</legend>
                <div className='flex items-center justify-start gap-5 p-3'>
                  {rule.dynamicFields.map((field, fieldIndex) => (
                    field?.name && <div key={fieldIndex} className='flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1 '>
                      <span>{field?.name}</span>
                      <IoClose className='w-5 h-5 flex-shrink-0 cursor-pointer'
                        onClick={() => handleRemoveField(index, fieldIndex)} />
                    </div>
                  ))}
                </div>
              </fieldset>
              <div className='flex flex-col items-start'>
                <span>Total-threshold </span>
                <span className='flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1 '>{calculateTotalThreshold(rule.dynamicFields)}</span>
              </div>
            </div>}
          </div>
        ))}

      </div>

      <div className=' flex items-center justify-end gap-8 p-3 border-b border-[#a6a6a6]'>
        <div className="w-full max-w-[150px]" >
          <CustomButton
            name="Save"
            handleClick={() => { }}
            isDisable={false}
            isLoading={false}
          />
        </div>
        <div className="w-full max-w-[150px]" >
          <CustomButton
            name="Cancel"
            handleClick={() => { }}
            isDisable={false}
            isLoading={false}
          />
        </div>
      </div>
    </div>
  )
}

export default DeterministicMatch