import React, { useState } from 'react'
import Image from 'next/image';
import CustomInput from '@/components/common/CustomInput';
import CustomButton from '@/components/common/CustomButton';
import { useDispatch } from 'react-redux'
import { setProbMatchAdd } from '@/store/ProbMatchSlice';
import CustomSwitch from '@/components/common/CustomSwitch';

const ProbabilisticAdd = ({ onClose }) => {
    const [formData, setFormData] = useState({})
    const dispatch = useDispatch()

    const handleClose = () => {
        onClose()
    }

    const handleFromData = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value
        })

    }

    const handleSave = () => {
        console.log(formData);

        /*  const data =   {
           columns: [
             {
               column: formData?.attribute,
               general: {
                 block_size: formData?.blocksize,
                 distances: formData?.distances,
                 leading_column: formData?.leadingcolumn,
                 min_partition_size: formData,
                 min_char_count: formData?.mincharcount,
                 path_model_input: formData?.pathmodelinput,
                 path_model_output: formData?.pathmodeloutput,
                 path_test_file: formData?.pathtestfile,
                 path_test_result: formData?.pathtestresult,
                 removing_strings: {
                   common_words: [
                    formData?.removingstrings
                   ]
                 }
               },
               model: {
                 general: {
                   hyper_parameter_tuning: formData?.hyperparametertuning,
                   model_object: formData?.modelobject
                 },
                 model_params: {
                   JaccardDistance: formData?.jaccardDistance,
                   JaroWinkler: formData?.jarowinkler,
                   JaroWinklerSet: formData?.jarowinklerset,
                   LevenshteinDistance: formData?.levenshteinDistance,
                   LevenshteinDistanceSet: formData?.levenshteinDistanceSet,
                   MasiDistance: formData?.masidistance,
                   MetaphoneDistance: formData?.metaphonedistance,
                   threshold: formData?.colwight
                 }
               }
             },
           ],
           rules: [
             {
               column_rule: [
                 {
                   col_weight: null,
                   min_match: null,
                   name: null
                 },
                 {
                   col_weight: null,
                   min_match: null,
                   name: null
                 },
                 {
                   col_weight: null,
                   min_match: null,
                   name: null
                 },
                 {
                   col_weight: null,
                   min_match: null,
                   name: null
                 },
                 {
                   col_weight: null,
                   min_match: null,
                   name: null
                 }
               ]
             }
           ],
           total_threshold: 0.7
         } */



        dispatch(setProbMatchAdd(formData))
        setFormData({})
        onClose()
    }


    return (
        <div className='flex flex-col gap-5 px-5'>
            <div className='w-full h-full'>
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
            </div>
            <div>
                <h2 className='text-xl font-bold '> Add new attribute for - Rule 1 </h2>
                {/* <CustomSwitch id="mySwitch" onChange={(e) => handleFromDatass(e)} name="ndgsddsbvdsame"  /> */}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3'>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        Attribute
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="attribute"
                            value={formData?.attribute}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        Min-match
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="minmatch"
                            value={formData?.minmatch}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3'>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%] gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        Block-size
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="blocksize"
                            value={formData?.blocksize}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        Path-model-input
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="pathmodelinput"
                            value={formData?.pathmodelinput}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        Hyper-parameter-tuning
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="hyperparametertuning"
                            value={formData?.hyperparametertuning}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        LevenshteinDistance
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="levenshteinDistance"
                            value={formData?.levenshteinDistance}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        Distances
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="distances"
                            value={formData?.distances}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        Path-model-output
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="pathmodeloutput"
                            value={formData?.pathmodeloutput}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        Model-object
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="modelobject"
                            value={formData?.modelobject}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        LevenshteinDistanceSet
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="levenshteinDistanceSet"
                            value={formData?.levenshteinDistanceSet}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        Leading-column
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="leadingcolumn"
                            value={formData?.leadingcolumn}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        Path-test-file

                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="pathtestfile"
                            value={formData?.pathtestfile}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        JaccardDistance
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="jaccardDistance"
                            value={formData?.jaccardDistance}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        MasiDistance
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="masidistance"
                            value={formData?.masidistance}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        Min-partition-size
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="minpartitionsize"
                            value={formData?.minpartitionsize}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        Path-test-result
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="pathtestresult"
                            value={formData?.pathtestresult}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        JaroWinkler
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="jarowinkler"
                            value={formData?.jarowinkler}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        MetaphoneDistance
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="metaphonedistance"
                            value={formData?.metaphonedistance}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        Min_char_count
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="mincharcount"
                            value={formData?.mincharcount}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        Removing-strings
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="removingstrings"
                            value={formData?.removingstrings}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        JaroWinklerSet
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="jarowinklerset"
                            value={formData?.jarowinklerset}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        Col_weight
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="colwight"
                            value={formData?.colwight}
                            onChange={(e) => handleFromData(e)}
                        />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-end gap-5 pb-5'>
                <div className="w-full max-w-[150px]" >
                    <CustomButton
                        name="Save"
                        handleClick={() => handleSave()}
                        isDisable={false}
                        isLoading={false}
                    />
                </div>
                <div className="w-full max-w-[150px]" >
                    <CustomButton
                        name="Close"
                        handleClick={() => handleClose()}
                        isDisable={false}
                        isLoading={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProbabilisticAdd