import CustomButton from '@/components/common/CustomButton'
import React from 'react'
import CrossRefTable from './CrossRefTable'

const GuestDataCrossRef = () => {
  return (
    <div className='p-5 flex flex-col justify-between gap-5'>
      <div className='flex items-center justify-between'>
        <div>Cross Reference</div>
        <div className='flex items-center justify-center gap-10'>
          <div className="w-full max-w-[150px]" >
            <CustomButton
              name="Un-Merge"
              handleClick={() => {}}
              isDisable={false}
              isLoading={false}
            />
          </div>
          <div className="w-full max-w-[150px]" >
            <CustomButton
              name="Merge"
              handleClick={() => {}}
              isDisable={false}
              isLoading={false}
            />
          </div>
        </div>
      </div>
      <div className='h-full w-full'>
        <CrossRefTable />
      </div>
    </div>
  )
}

export default GuestDataCrossRef