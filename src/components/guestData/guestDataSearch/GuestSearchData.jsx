import { fetchSearchGeust } from "@/assets/data";
import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import SingleSelectDropDown from "@/components/common/SingleSelectDropDown";
import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import Select from "react-select";
import makeAnimated from "react-select/animated";

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

const is = [
  { label: "is", value: "is" },
  { label: "is Not", value: "isnot" },
];

const GuestSearchData = ({ handleRoeData, handleRestart }) => {
  const animatedComponents = makeAnimated();
  const [searchData, setSearchData] = useState([]);
  const [guestOption, setGuestOption] = useState([]);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchSearchGeust();
      if (data?.length > 0) {
        setRowData(data);
      }
    })();
  }, []);

  useEffect(() => {
    if (rowData?.length > 0) {
      const OptionData = Object.keys(rowData[0])?.map((key) => ({
        label: key,
        value: key,
      }));
      setGuestOption(OptionData);
    }
  }, [searchData, rowData]);

  const handleOnchange = (index, field, value) => {
    setSearchData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, data: { ...item.data, [field]: value } } : item
      )
    );

    const updateOption = guestOption?.filter(
      (opt) => opt.value !== value.value
    );

    setGuestOption(updateOption);
  };

  const handleAddRule = () => {
    setSearchData((prevData) => [
      ...prevData,
      {
        type: "AND",
        data: { Key: null, is: null, groupName: null },
      },
    ]);
  };

  const handleAddGroup = () => {
    setSearchData((prevData) => [
      ...prevData,
      {
        type: "OR",
        data: { Key: null, is: null, groupName: null },
      },
    ]);
  };

  const handleReset = () => {
    setSearchData([]);
    handleRestart();
  };

  const applyFilter = (rowData, condition) => {
    const { Key, is, groupName } = condition?.data;
    const operator = is?.value == "is" ? "==" : "!=";

    return rowData.filter((item) => {
      if (Key?.value == "goldenId") {
        if (operator == "==") {
          return item[Key?.value] == groupName;
        } else {
          return item[Key?.value] != groupName;
        }
      } else if (Key?.value == "isActiveFlag") {
        if (operator == "==") {
          return item[Key?.value] == (groupName?.toLowerCase() === "true");
        } else {
          return item[Key?.value] != (groupName?.toLowerCase() === "true");
        }
      } else {
        if (operator == "==") {
          return item[Key?.value]?.toLowerCase() == groupName?.toLowerCase();
        } else {
          return item[Key?.value]?.toLowerCase() != groupName?.toLowerCase();
        }
      }
    });
  };

  // Function to make the array unique based on a specific key
  const makeArrayUnique = (array, key) => {
    const seen = new Set();
    return array.filter((item) => {
      const value = item[key];
      if (!seen.has(value)) {
        seen.add(value);
        return true;
      }
      return false;
    });
  };

  const handleSave = () => {
    const filterData = (rowData, searchData) => {
      let filteredData = rowData;

      searchData.forEach((condition) => {
        if (condition.type == "AND") {
          // AND condition
          filteredData = applyFilter(filteredData, condition);
        } else if (condition.type == "OR") {
          // OR condition
          filteredData = filteredData.concat(
            applyFilter(filteredData, condition)
          );
        }
      });

      return filteredData;
    };

    let result = filterData(rowData, searchData);
    result = makeArrayUnique(result, "goldenId");

    handleRoeData(result);
  };

  const handleClose = (index) => {
    const deleteSearchData = [...searchData];

    deleteSearchData?.splice(index, 1);

    setSearchData(deleteSearchData);

    /* const updateSearchData = searchData?.filter((item, i) => i !== index)
        setSearchData(updateSearchData); */
  };

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <span className="text-2xl font-semibold w-full">Search</span>

        <div className="w-full flex items-center justify-end  gap-4 px-8 ">
          <div className="w-full max-w-[150px]">
            <CustomButton
              name="Reset"
              handleClick={() => handleReset()}
              isDisable={false}
              isLoading={false}
            />
          </div>
          <div className="w-full max-w-[150px]">
            <CustomButton
              name="Search"
              handleClick={() => handleSave()}
              isDisable={false}
              isLoading={false}
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[23vh] flex justify-between gap-3 border border-gray-400 rounded-lg px-4 py-4 overflow-auto ">
        <div className="flex flex-col gap-3 w-full py-2">
          <div className="flex gap-4 w-full ">
            <div className="w-full max-w-[150px] lg:max-w-[15%] border flex items-center px-5 rounded">
              AND
            </div>
            <div>
              <div className="w-full max-w-[150px] ">
                <CustomButton
                  name="ADD"
                  handleClick={() => handleAddRule()}
                  isDisable={false}
                  isLoading={false}
                />
              </div>
            </div>
          </div>

          <div className="py-2 flex justify-center gap-2 flex-col">
            {searchData.map((item, index) => {
              return (
                <div key={index} className="">
                  {item.type === "AND" && (
                    <div className="flex gap-4 w-full items-center">
                      <div className="w-full max-w-[300px] lg:max-w-[20%]">
                        <Select
                          placeholder="Select a rule"
                          isMulti={false}
                          styles={customStyles}
                          name="Key"
                          options={guestOption}
                          value={item.data.Key}
                          onChange={(selectedOption) =>
                            handleOnchange(index, "Key", selectedOption)
                          }
                          components={animatedComponents}
                          className="capitalize"
                        />
                      </div>
                      <div className="w-full max-w-[300px] lg:max-w-[10%]">
                        <Select
                          placeholder="Select Type "
                          isMulti={false}
                          styles={customStyles}
                          name="is"
                          options={is}
                          value={item.data.is}
                          onChange={(selectedOption) =>
                            handleOnchange(index, "is", selectedOption)
                          }
                          components={animatedComponents}
                          className="capitalize"
                        />
                      </div>
                      <div className="w-full max-w-[300px] lg:max-w-[30%]">
                        <CustomInput
                          isNUmber={false}
                          isRequired={true}
                          isIcon={true}
                          label=""
                          placeholder=""
                          name="groupName"
                          value={item.data.groupName}
                          onChange={(e) =>
                            handleOnchange(index, "groupName", e.target.value)
                          }
                        />
                      </div>
                      <GrClose
                        className="w-5 h-5 font-bold cursor-pointer"
                        onClick={() => handleClose(index)}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/*   <div className="flex gap-4 w-full ">
                        <div className="w-full max-w-[150px] lg:max-w-[15%] border flex items-center px-5">
                            OR
                        </div>
                        <div>
                            <div className="w-full max-w-[150px]  ">
                                <CustomButton
                                    name="ADD"
                                    handleClick={handleAddGroup}
                                    isDisable={false}
                                    isLoading={false}
                                />
                            </div>
                        </div>
                    </div> */}

          {/*  <div className='py-2 flex justify-center gap-2 flex-col'>
                        {
                            searchData.map((item, index) => {
                                return (
                                    <div key={index} className=''>
                                        {
                                            item.type === 'OR' && <div className="flex gap-4 w-full items-center">
                                                <div className="w-full max-w-[300px] lg:max-w-[20%]">
                                                    <Select
                                                        placeholder="Guest_ID"
                                                        isMulti={false}
                                                        styles={customStyles}
                                                        name='Key'
                                                        options={guestOption}
                                                        value={item.data.Key}
                                                        onChange={(selectedOption) => handleOnchange(index, 'Key', selectedOption)}
                                                        components={animatedComponents}
                                                        className='capitalize'
                                                    />
                                                </div>
                                                <div className="w-full max-w-[300px] lg:max-w-[10%]">
                                                    <Select
                                                        placeholder="IS"
                                                        isMulti={false}
                                                        styles={customStyles}
                                                        name='is'
                                                        options={is}
                                                        value={item.data.is}
                                                        onChange={(selectedOption) => handleOnchange(index, 'is', selectedOption)}
                                                        components={animatedComponents}
                                                        className='capitalize'
                                                    />
                                                </div>
                                                <div className="w-full max-w-[300px] lg:max-w-[30%]">
                                                    <CustomInput
                                                        isNUmber={false}
                                                        isRequired={true}
                                                        isIcon={true}
                                                        label=""
                                                        placeholder=""
                                                        name="groupName"
                                                        value={item.data.groupName}
                                                        onChange={(e) => handleOnchange(index, 'groupName', e.target.value)}
                                                    />
                                                </div>
                                                <GrClose className="w-5 h-5 font-bold cursor-pointer" onClick={() => handleClose(index)} />
                                            </div>
                                        }
                                    </div>
                                ) 
                            })
                        }
                    </div> */}
        </div>
      </div>
    </>
  );
};

export default GuestSearchData;
