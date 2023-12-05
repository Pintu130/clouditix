import CustomButton from '@/components/common/CustomButton'
import CustomInput from '@/components/common/CustomInput'
import React from 'react'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

const ProbabilisticMore = ({ onClose }) => {
    const MoreData = useSelector(state => state?.ProbMatch?.data)
    const handleClose = () => {
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
                <h2 className='text-xl font-bold '> More Details - {MoreData?.attribute} </h2>
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        RMin-partition-size
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
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
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full items-start lg:max-w-[70%] 2xl:max-w-[80%]  gap-1 custom-select">
                    <label
                        htmlFor="speciality"
                        className="text-[#5A5A5A] text-base w-[140px] lg:w-auto font-Inter font-normal whitespace-nowrap"
                    >
                        Col_weighr
                    </label>
                    <div className="w-full max-w-[300px] lg:max-w-[100%]">
                        <CustomInput
                            isNUmber={false}
                            isRequired={true}
                            isIcon={true}
                            label=""
                            placeholder=""
                            name="ruleParameters"
                            // value={formData?.ruleParameters}
                            onChange={(e) => handleFromData(e.target.value, 'ruleParameters')}
                        />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-end'>
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

export default ProbabilisticMore