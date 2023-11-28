import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

import format from "date-fns/format";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BsFillCalendar2Fill } from "react-icons/bs"

const DateRangeComp = ({ range, setRange }) => {

    const [open, setOpen] = useState(false);

    const refOne = useRef(null);

    useEffect(() => {
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true);
    }, []);

    // hide dropdown on ESC press
    const hideOnEscape = (e) => {
        if (e.key === "Escape") {
            setOpen(false);
        }
    };

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false);
        }
    };

    return (
        <div className="calendarWrap">
            <div className={`${!open && "flex items-center gap-2"} `}>
                {!open && <BsFillCalendar2Fill onClick={() => setOpen((open) => !open)} className="cursor-pointer" />}
                <input
                    value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
                        range[0].endDate,
                        "MM/dd/yyyy"
                    )}`}
                    readOnly
                    className="outline-none cursor-pointer inputBox"
                    onClick={() => setOpen((open) => !open)}
                />
            </div>

            <div ref={refOne}>
                {open && (
                    <DateRange
                        onChange={(item) => setRange([item.selection])}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={1}
                        direction="horizontal"
                        className="calendarElement"
                    />
                )}
            </div>
        </div>
    );
};

export default DateRangeComp;
