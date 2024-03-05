import CustomButton from "@/components/common/CustomButton";
import { IoClose } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CustomInput from "@/components/common/CustomInput";
import SmCustomModal from "@/components/common/SmCustomModal";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {
  fetchDeterministicMatch,
  fetchDeterministic_Config,
  matchdata,
} from "@/assets/data";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { MdClose } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  option: (provided, state) => {
    return {
      ...provided,
      backgroundColor: state.isSelected
        ? "#114391"
        : state?.isFocused
          ? "#CBDDF9"
          : "",
      color: state.isSelected ? "white" : state.isHovered ? "black" : "black",
      cursor: "pointer",
    };
  },
  singleValue: (provided) => ({
    ...provided,
    color: "black",
  }),
  control: (provided, state) => {
    return {
      ...provided,
      boxShadow: state?.isFocused ? "0 0 0 1.5px #046e04" : "",
    };
  },
  indicatorSeparator: () => ({
    display: "none",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#4A4A4A",
    fontSize: "17px",
    fontWeight: "400",
    fontFamily: "OpenSans",
  }),
};

const DeterministicMatch = ({ accLevel }) => {
  const animatedComponents = makeAnimated();
  const [isNewRuleModal, setIsNewRuleModal] = useState(false);
  const [isEditruleModal, setIsEditruleModal] = useState(false);
  const [editRule, setEditRule] = useState({});

  const [dynamicFields, setDynamicFields] = useState([{ name: "", value: "" }]);
  const [editMatchRules, setEditMatchRules] = useState("");
  const [rules, setRules] = useState([]);
  const [openRules, setOpenRules] = useState({});
  const [areAllRulesVisible, setAreAllRulesVisible] = useState(true);
  const [createRuleData, setCreateRuleData] = useState([]);
  const [isOption, setIsOption] = useState(matchdata);
  const [forUpdate, setForUpdate] = useState({});
  const [fieldErrors, setFieldErrors] = useState([]);
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(false);

  useEffect(() => {
    const existingOptions = matchdata.filter(
      (option) =>
        !dynamicFields.some((field) => field.name.label === option.label)
    );
    setIsOption(existingOptions);
  }, [dynamicFields]);

  const handleAddField = () => {
    const isAnyFieldEmpty = dynamicFields.some((field, index) => {
      if (!field.name) {
        setFieldErrors((prevErrors) => {
          const newErrors = [...prevErrors];
          newErrors[index] = "Please select Attribute";
          return newErrors;
        });
        return true;
      }
      return false;
    });

    if (isAnyFieldEmpty) {
      setSaveButtonDisabled(true);
      return;
    }

    setDynamicFields((prevFields) => [...prevFields, { name: "", value: "" }]);
    setFieldErrors([]);
    setSaveButtonDisabled(false);
  };

  const handleNewRuleModal = () => {
    setIsNewRuleModal(true);
    setEditMatchRules("Create");
  };

  const closeModal = () => {
    setIsNewRuleModal(false);
    setDynamicFields([{ name: "", value: "" }]);
    setIsEditruleModal();
    setIsOption(matchdata);
    setEditMatchRules("");
    setFieldErrors([]);
    setSaveButtonDisabled(false);
  };

  useEffect(() => {
    (async () => {
      const data = await fetchDeterministicMatch();
      if (data?.match_rules?.length > 0) {
        setRules(data?.match_rules);
        setCreateRuleData(data);
      }
    })();
  }, [forUpdate]);

  const handleFromData = (selectedOption, index, fieldKey) => {
    if (selectedOption?.value) {
      setDynamicFields((prevFields) => {
        const newFields = [...prevFields];
        newFields[index][fieldKey] = selectedOption;
        return newFields;
      });
    }
    setFieldErrors([]);
    setSaveButtonDisabled(false);
  };

  const handleRemove = (index) => {
    const removeAttribute = dynamicFields
      .slice(0, index)
      .concat(dynamicFields.slice(index + 1));

    if (removeAttribute.length > 0) {
      setDynamicFields(removeAttribute);
    } else {
      setDynamicFields([{ name: "", value: "" }]);
    }
  };

  const handleSaveRule = async () => {
    const isAnyFieldEmpty = dynamicFields.some((field, index) => {
      if (!field.name) {
        // Set error message for the empty field
        setFieldErrors((prevErrors) => {
          const newErrors = [...prevErrors];
          newErrors[index] = "Please select Attribute";
          return newErrors;
        });
        return true;
      }
      return false;
    });

    if (isAnyFieldEmpty) {
      setSaveButtonDisabled(true);
      return;
    }

    if (editMatchRules === "Create") {
      const matchRule = `rule_${createRuleData?.match_rules?.length + 1}`;
      const upDateDynamicFields = {
        match_rule: matchRule,
        columns: dynamicFields?.map((columnItem) => {
          if (columnItem?.name?.value?.length > 0) {
            return {
              column: columnItem?.name?.value,
              general: {
                "block-size": "10",
                distances: [
                  "JaroWinkler",
                  "LevenshteinDistanceSet",
                  "JaroWinklerSet",
                  "JaccardDistance",
                  "MasiDistance",
                  "LevenshteinDistance",
                ],
                "leading-column": "true",
                "min-partition-size": "500",
                min_char_count: "5",
                "path-model-input": "None",
                "path-model-output": "None",
                "path-test-file": "None",
                "path-test-result": "None",
                "removing-strings": {
                  "common-words": [
                    "company",
                    "inc",
                    "corp.",
                    "corp",
                    "co",
                    "ltd",
                    "LTD",
                    "INC",
                    "pvt",
                  ],
                },
              },
              model: {
                general: {
                  "hyper-parameter-tuning": "false",
                  "model-object": "LinearDecisionFixedWeights",
                },
                "model-params": {
                  JaccardDistance: "0.3",
                  JaroWinkler: "0.3",
                  JaroWinklerSet: "0.3",
                  LevenshteinDistance: "0",
                  LevenshteinDistanceSet: "0.1",
                  MasiDistance: "0",
                  MetaphoneDistance: "0",
                  threshold: "0.5",
                },
              },
            };
          }
        }),
        rules: [
          {
            column_rule: Array(dynamicFields?.length).fill({
              col_weight: null,
              min_match: null,
              name: null,
            }),
          },
        ],
        "total-threshold": "0.8",
      };

      if (createRuleData?.match_rules?.length > 0) {
        const CreateJson = {
          match_rules:
            dynamicFields[0]?.name?.value.length > 0
              ? [...createRuleData?.match_rules, upDateDynamicFields]
              : [...createRuleData?.match_rules],
        };

        if (dynamicFields[0]?.name?.value.length > 0) {
          const CreateApi = await fetchDeterministic_Config(CreateJson);

          if (CreateApi?.isSuccess) {
            toast.success("Create New Rulls", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              toastId: "toastId",
            });
            closeModal();
            setForUpdate(CreateApi);
          }
        } else {
          closeModal();
        }
      }
    } else {
      const filteredDynamicFields = dynamicFields.filter(
        (field) => field.name !== ""
      );
      const matchRule = editMatchRules;

      const upDateDynamicFields = {
        match_rule: matchRule,
        columns: dynamicFields?.map((columnItem) => {
          if (columnItem?.name?.value?.length > 0) {
            return {
              column: columnItem?.name?.value,
              general: {
                "block-size": "10",
                distances: [
                  "JaroWinkler",
                  "LevenshteinDistanceSet",
                  "JaroWinklerSet",
                  "JaccardDistance",
                  "MasiDistance",
                  "LevenshteinDistance",
                ],
                "leading-column": "true",
                "min-partition-size": "500",
                min_char_count: "5",
                "path-model-input": "None",
                "path-model-output": "None",
                "path-test-file": "None",
                "path-test-result": "None",
                "removing-strings": {
                  "common-words": [
                    "company",
                    "inc",
                    "corp.",
                    "corp",
                    "co",
                    "ltd",
                    "LTD",
                    "INC",
                    "pvt",
                  ],
                },
              },
              model: {
                general: {
                  "hyper-parameter-tuning": "false",
                  "model-object": "LinearDecisionFixedWeights",
                },
                "model-params": {
                  JaccardDistance: "0.3",
                  JaroWinkler: "0.3",
                  JaroWinklerSet: "0.3",
                  LevenshteinDistance: "0",
                  LevenshteinDistanceSet: "0.1",
                  MasiDistance: "0",
                  MetaphoneDistance: "0",
                  threshold: "0.5",
                },
              },
            };
          }
        }),
        rules: [
          {
            column_rule: Array(filteredDynamicFields?.length).fill({
              col_weight: null,
              min_match: null,
              name: null,
            }),
          },
        ],
        "total-threshold": "0.8",
      };

      const EditRule = createRuleData?.match_rules?.map((item) =>
        item?.match_rule === editMatchRules ? upDateDynamicFields : item
      );

      const EditJson = {
        match_rules: EditRule,
      };

      const EditApi = await fetchDeterministic_Config(EditJson);

      if (EditApi?.isSuccess) {
        toast.success("Edits Rulls", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: "toastId",
        });
        closeModal();
        setForUpdate(EditApi);
      }
    }

    setFieldErrors([]);
    setSaveButtonDisabled(false);
  };

  const handleRemoveField = async (field, rule) => {
    if (accLevel !== 'View') {
      const updatedData = createRuleData?.match_rules?.map((item) => {
        if (item.match_rule === rule.match_rule) {
          const updatedColumns = item.columns.filter(
            (Colitem) => Colitem.column !== field.column
          );
          /* if (updatedColumns.length === 0) {
            return null;
          } */
          const updatedRules = [
            {
              column_rule: Array(updatedColumns?.length).fill({
                col_weight: null,
                min_match: null,
                name: null,
              }),
            },
          ];

          return { ...item, columns: updatedColumns, rules: updatedRules };
        } else {
          return item;
        }
      }); /* .filter(item => item !== null) */

      const EditJson = {
        match_rules: updatedData,
      };
      const EditApi = await fetchDeterministic_Config(EditJson);
      if (EditApi?.isSuccess) {
        toast.success("Remove Attribute", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: "toastId",
        });
        closeModal();
        setForUpdate(EditApi);
      }
    }
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

  const calculatedcolwegth = () => {
    const total_col_weigth = 1.0;
    const col_weigth = total_col_weigth / dynamicFields.length;
    return col_weigth.toFixed(2);
  };

  const handleEditRules = (data) => {
    setIsEditruleModal(true);

    setEditRule(data);
    if (Object.keys(data)?.length > 0) {
      const modifydata = data?.columns?.map((item) => ({
        name: { label: item?.column, value: item?.column },
      }));

      setDynamicFields(modifydata);
      setEditMatchRules(data?.match_rule);
    }
  };

  return (
    <div className="border border-[#a6a6a6] rounded-lg w-full h-full">
      <SmCustomModal type="Create" isopen={isNewRuleModal} onClose={closeModal}>
        <div className="w-full h-full ">
          <div className="flex justify-between border-b ">
            <button className="flex items-center flex-shrink-0 gap-6 px-6 ">
              <Image
                src="/images/logo.png"
                alt="HOM-logo"
                width="212"
                priority
                height="40"
                className="flex-shrink-0  h-auto pb-2"
              />
            </button>
          </div>
          <div>
            <h1 className="pl-6">Add New - Rule</h1>
            <div className="p-5 pl-6  h-[250px] overflow-auto flex flex-col custom-scroll  ">
              <div className="pb-5">
                <div className="flex items-center gap-10">
                  <span className="w-52">Select Attribute</span>
                  <span className="w-52">Col_weight</span>
                </div>

                <div className="flex flex-col gap-2">
                  {dynamicFields?.map((field, index) => {
                    return (
                      <div key={index} className="flex items-start gap-10">
                        <div className="w-52">
                          <Select
                            placeholder="Select Attribute"
                            isMulti={false}
                            styles={customStyles}
                            name="name"
                            options={isOption}
                            value={field?.name}
                            onChange={(selectedOption) =>
                              handleFromData(selectedOption, index, "name")
                            }
                            components={animatedComponents}
                            className="capitalize"
                          />
                          {fieldErrors[index] && (
                            <span className="text-red-500 text-sm">
                              {fieldErrors[index]}
                            </span>
                          )}
                        </div>
                        <div className="w-24">
                          <CustomInput
                            placeholder="Col_weight"
                            name="Col_weight"
                            value={calculatedcolwegth()}
                            isdisablad={true}
                          />
                        </div>
                        <MdClose
                          className="cursor-pointer"
                          onClick={() => handleRemove(index)}
                        />
                        {index === dynamicFields.length - 1 && (
                          <div className="w-full max-w-[80px]">
                            <CustomButton
                              name="Add"
                              handleClick={() => handleAddField()}
                              isDisable={false}
                              isLoading={false}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-10 pr-6">
            <div className="w-full max-w-[150px]">
              <CustomButton
                name="Save"
                handleClick={() => handleSaveRule()}
                isDisable={saveButtonDisabled}
                isLoading={false}
              />
            </div>
            <div className="w-full max-w-[150px]">
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

      <SmCustomModal
        type="Create"
        isopen={isEditruleModal}
        onClose={closeModal}
      >
        <div className="w-full h-full ">
          <div className="flex justify-between border-b ">
            <button className="flex items-center flex-shrink-0 gap-6 px-6 ">
              <Image
                src="/images/logo.png"
                alt="HOM-logo"
                width="212"
                priority
                height="40"
                className="flex-shrink-0  h-auto pb-2"
              />
            </button>
          </div>
          <div>
            <h1 className="pl-6">Edit - {editRule?.match_rule}</h1>
            <div className="p-5 pl-6  h-[250px] overflow-auto flex flex-col custom-scroll  ">
              <div className="pb-5">
                <div className="flex items-center gap-10">
                  <span className="w-52">Select Attribute</span>
                  <span className="w-52">Col_weight</span>
                </div>

                <div className="flex flex-col gap-2">
                  {dynamicFields?.map((field, index) => {
                    return (
                      <div key={index} className="flex items-start gap-10">
                        <div className="w-52">
                          <Select
                            placeholder="Select Attribute"
                            isMulti={false}
                            styles={customStyles}
                            name="name"
                            options={isOption}
                            value={field?.name}
                            onChange={(selectedOption) =>
                              handleFromData(selectedOption, index, "name")
                            }
                            components={animatedComponents}
                            className="capitalize"
                          />
                          {fieldErrors[index] && (
                            <span className="text-red-500 text-sm">
                              {fieldErrors[index]}
                            </span>
                          )}
                        </div>
                        <div className="w-24">
                          <CustomInput
                            placeholder="Col_weight"
                            name="Col_weight"
                            value={calculatedcolwegth()}
                            isdisablad={true}
                          />
                        </div>
                        <MdClose
                          className="cursor-pointer"
                          onClick={() => handleRemove(index)}
                        />
                        {index === dynamicFields.length - 1 && (
                          <div className="w-full max-w-[80px]">
                            <CustomButton
                              name="Add"
                              handleClick={() => handleAddField()}
                              isDisable={false}
                              isLoading={false}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-10 pr-6">
            <div className="w-full max-w-[150px]">
              <CustomButton
                name="Save"
                handleClick={() => handleSaveRule()}
                isDisable={saveButtonDisabled}
                isLoading={false}
              />
            </div>
            <div className="w-full max-w-[150px]">
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

      <div className="flex items-center justify-between p-3 border-b border-[#a6a6a6] h-full">
        <div className="w-full max-w-[150px]">
          <CustomButton
            name={areAllRulesVisible ? "Hide All Rules" : "Show All Rules"}
            handleClick={() => handleToggleAllRules()}
            isDisable={false}
            isLoading={false}
            icon=""
          />
        </div>
        <div className="w-full max-w-[150px]">
          <CustomButton
            name="Create New Rule"
            handleClick={() => handleNewRuleModal()}
            isDisable={accLevel === 'View' ? true : false}
            isLoading={false}
            icon=""
          />
        </div>
      </div>

      <div className="w-full h-full max-h-[680px] overflow-auto custom-scroll">
        <div className="p-3 border-b border-[#a6a6a6] flex justify-center flex-col gap-3 w-full h-full ">
          {rules.map((rule, index) => (
            <div key={index} className="border border-[#a6a6a6] rounded-lg p-2">
              <div className="w-full max-w-[150px]">
                <CustomButton
                  name={rule?.match_rule}
                  handleClick={() => handleToggleRule(index)}
                  isDisable={false}
                  isLoading={false}
                  icon={
                    areAllRulesVisible && openRules[index] ? (
                      <FaAngleUp />
                    ) : (
                      <FaAngleDown />
                    )
                  }
                />
              </div>
              {areAllRulesVisible && openRules[index] && (
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-10 ">
                    <fieldset className="border pl-3 rounded-lg">
                      <legend className="">Select Attribute</legend>
                      <div className="flex items-center justify-start gap-5 p-3">
                        {rule.columns.map(
                          (field, fieldIndex) =>
                            field?.column && (
                              <div
                                key={fieldIndex}
                                className="flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1 "
                              >
                                <span>{field?.column}</span>
                                <IoClose
                                  className="w-5 h-5 flex-shrink-0 cursor-pointer"
                                  onClick={() => handleRemoveField(field, rule)}
                                />
                              </div>
                            )
                        )}
                      </div>
                    </fieldset>
                    <div className="flex flex-col items-start">
                      <span>Total-threshold </span>
                      {/* <span className='flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1 '>{calculateTotalThreshold(rule.columns)}</span> */}
                      <span className="flex items-center justify-center gap-3 border border-[#a6a6a6] px-1.5 rounded-md py-1 cursor-not-allowed ">
                        1.0
                      </span>
                    </div>
                  </div>

                  <div className="w-full max-w-[100px] pr-5">
                    <CustomButton
                      name="Edit"
                      handleClick={() => handleEditRules(rule)}
                      isDisable={accLevel === 'View' ? true : false}
                      isLoading={false}
                      icon=""
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className=" flex items-center justify-end gap-8 p-3 border-b border-[#a6a6a6]">
        <div className="w-full max-w-[150px]">
          <CustomButton
            name="Save"
            handleClick={() => { }}
            isDisable={accLevel === 'View' ? true : false}
            isLoading={false}
          />
        </div>
        <div className="w-full max-w-[150px]">
          <CustomButton
            name="Cancel"
            handleClick={() => { }}
            isDisable={false}
            isLoading={false}
          />
        </div>
      </div>
    </div>
  );
};

export default DeterministicMatch;
