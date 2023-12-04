import React, { useState } from 'react'
import ProbabilisticMatch from './ProbabilisticMatch';
import DeterministicMatch from './DeterministicMatch';

const DataMatchingRules = () => {
    const [subSelectedTab, setSubSelectedTab] = useState("deterministicmatch");
    const [selectedTabs] = useState([
        {
            id: 0,
            title: "Deterministic Match",
            selected: true,
            key: "deterministicmatch",
        },
        {
            id: 1,
            title: "Probabilistic Match",
            selected: true,
            key: "probabilisticmatch",
        },
    ]);
    return (
        <div>
            {selectedTabs?.length > 0 && <div className="flex items-center justify-between h-full gap-4 px-3 border-b max-h-12 border-gray-G20 ">
                <div className="flex w-full max-w-[80vw] large:max-w-[1620px]  pt-6 custom-scroll overflow-x-auto">
                    {selectedTabs?.length > 0 && selectedTabs.map((tab, index) => {
                        return (
                            <div
                                key={index}
                                className={`px-4 pb-2 transition-all duration-300 first-letter:uppercase ${subSelectedTab === tab?.key
                                    ? 'border-b-4 border-[#046e04]'
                                    : 'border-b-4 border-transparent'
                                    }`}
                                onClick={() => setSubSelectedTab(tab?.key)}
                            >
                                <span
                                    className={`whitespace-nowrap ${subSelectedTab === tab?.key
                                        ? 'text-[#046e04] font-bold'
                                        : 'text-gray-G60 font-normal'
                                        } md:text-[16px] leading-4 font-OpenSans block cursor-pointer`}
                                >
                                    {tab.title}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>}
            <div className={`text-lg h-full py-3 px-5 custom-scroll  font-semibold overflow-auto md:max-h-[92%] '}`}>
                {subSelectedTab === "deterministicmatch" ?
                    <DeterministicMatch  />
                    :
                    <ProbabilisticMatch  />
                }
            </div>
        </div>
    )
}

export default DataMatchingRules