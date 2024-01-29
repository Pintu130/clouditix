import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import CustomInput from '@/components/common/CustomInput';
import CustomButton from '@/components/common/CustomButton';
import { useSelector } from 'react-redux'


const ProbabilisticEdit = ({ onClose, handleEditInApi }) => {
    const [formData, setFormData] = useState({});

    const MoreData = useSelector(state => state?.ProbMatch?.data);
    
    useEffect(() => {
        ; (() => {
            if (MoreData?.column?.length > 0) {


                const data = {
                    attribute: MoreData?.column,
                    minmatch: '',
                    blocksize: MoreData?.general?.hasOwnProperty("block-size") ? MoreData?.general["block-size"] : "",
                    pathmodelinput: MoreData?.general?.hasOwnProperty("path-model-input") ? MoreData?.general["path-model-input"] : "",
                    hyperparametertuning: MoreData?.model?.general?.hasOwnProperty("hyper-parameter-tuning") ? MoreData?.model?.general["hyper-parameter-tuning"] : "",
                    levenshteinDistance: MoreData?.model?.hasOwnProperty("model-params") ? MoreData?.model?.["model-params"]?.LevenshteinDistance : "",
                    distances: MoreData?.general?.hasOwnProperty("distances") ? MoreData?.general["distances"] : "",
                    pathmodeloutput: MoreData?.general?.hasOwnProperty("path-model-output") ? MoreData?.general["path-model-output"] : "",
                    modelobject: MoreData?.model?.general?.hasOwnProperty("model-object") ? MoreData?.model?.general["model-object"] : "",
                    levenshteinDistanceSet: MoreData?.model?.hasOwnProperty("model-params") ? MoreData?.model["model-params"]?.LevenshteinDistanceSet : "",
                    leadingcolumn: MoreData?.general?.hasOwnProperty("leading-column") ? MoreData?.general["leading-column"] : "",
                    pathtestfile: MoreData?.general?.hasOwnProperty("path-test-file") ? MoreData?.general["path-test-file"] : "",
                    jaccardDistance: MoreData?.model?.hasOwnProperty("model-params") ? MoreData?.model["model-params"]?.JaccardDistance : "",
                    masidistance: MoreData?.model?.hasOwnProperty("model-params") ? MoreData?.model["model-params"]?.MasiDistance : "",
                    minpartitionsize: MoreData?.general?.hasOwnProperty("min-partition-size") ? MoreData?.general["min-partition-size"] : "",
                    pathtestresult: MoreData?.general?.hasOwnProperty("path-test-result") ? MoreData?.general["path-test-result"] : "",
                    jarowinkler: MoreData?.model?.hasOwnProperty("model-params") ? MoreData?.model["model-params"]?.JaroWinkler : "",
                    metaphonedistance: MoreData?.model?.hasOwnProperty("model-params") ? MoreData?.model["model-params"]?.MetaphoneDistance : "",
                    mincharcount: MoreData?.general?.hasOwnProperty("min_char_count") ? MoreData?.general["min_char_count"] : "",
                    removingstrings: MoreData?.general?.["removing-strings"]?.["common-words"].length > 0 ? MoreData?.general?.["removing-strings"]?.["common-words"] : "",
                    jarowinklerset: MoreData?.model?.hasOwnProperty("model-params") ? MoreData?.model["model-params"]?.JaroWinklerSet : "",
                    colwight: MoreData?.model?.hasOwnProperty("model-params") ? MoreData?.model["model-params"]?.threshold : ""
                }

                setFormData(data)

            }
        })()
    }, [MoreData])

    const handleClose = () => {
        onClose()

        setFormData({
            attribute: '',
            minmatch: '',
            blocksize: '',
            pathmodelinput: '',
            hyperparametertuning: '',
            levenshteinDistance: '',
            distances: [
                ''
            ],
            pathmodeloutput: '',
            modelobject: '',
            levenshteinDistanceSet: '',
            leadingcolumn: '',
            pathtestfile: '',
            jaccardDistance: '',
            masidistance: '',
            minpartitionsize: '',
            pathtestresult: '',
            jarowinkler: '',
            metaphonedistance: '',
            mincharcount: '',
            removingstrings: '',
            jarowinklerset: '',
            colwight: ''
        })
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

        const data = {
            column: formData?.attribute,
            general: {
                "block-size": formData?.blocksize,
                distances: formData?.distances,
                "leading-column": formData?.leadingcolumn,
                "min-partition-size": formData?.minpartitionsize,
                "min-char-count": formData?.mincharcount,
                "path-model-input": formData?.pathmodelinput,
                "path-model-output": formData?.pathmodeloutput,
                "path-test-file": formData?.pathtestfile,
                "path-test-result": formData?.pathtestresult,
                "removing-strings": formData?.removingstrings.length > 1 ? {
                    "common-words": Array.isArray(formData?.removingstrings) ? formData?.removingstrings : [formData?.removingstrings]
                } : null
            },
            model: {
                general: {
                    "hyper-parameter-tuning": formData?.hyperparametertuning,
                    "model-object": formData?.modelobject
                },
                "model-params": {
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

        }

        handleEditInApi(data);
        onClose()
        setFormData({
            attribute: '',
            minmatch: '',
            blocksize: '',
            pathmodelinput: '',
            hyperparametertuning: '',
            levenshteinDistance: '',
            distances: [
                ''
            ],
            pathmodeloutput: '',
            modelobject: '',
            levenshteinDistanceSet: '',
            leadingcolumn: '',
            pathtestfile: '',
            jaccardDistance: '',
            masidistance: '',
            minpartitionsize: '',
            pathtestresult: '',
            jarowinkler: '',
            metaphonedistance: '',
            mincharcount: '',
            removingstrings: '',
            jarowinklerset: '',
            colwight: ''
        })
    }


    console.log(formData?.removingstrings);


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

export default ProbabilisticEdit