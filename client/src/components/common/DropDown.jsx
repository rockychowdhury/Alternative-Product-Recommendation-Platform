import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

const DropDown = ({ selected, options, setSelected }) => {
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);
    useEffect(() => {
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close);
    }, []);
    return (
        <div ref={dropDownRef} className="relative mx-auto w-fit text-white">
            <button onClick={() => setOpen((prev) => !prev)} className="inline-flex items-center overflow-hidden rounded-md border bg-white">
                <div
                    className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                >
                    {selected}
                </div>
                <div className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </button>
            <ul className={`${open ? 'visible' : 'invisible'} absolute top-12 z-50 min-w-full space-y-1`}>
                {options.map((item, idx) => (
                    <li
                        key={idx}
                        className={`rounded-sm font-semibold bg-marble text-zinc-950 p-2 ${open ? 'opacity-100 duration-500' : 'opacity-0 duration-150'} hover:bg-action/90 cursor-pointer hover:text-white`}
                        style={{ transform: `translateY(${open ? 0 : (idx + 1) * 10}px)` }}
                        onClick={(e)=>{setSelected(e.target.innerText)}}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
DropDown.propTypes = {
    options: PropTypes.array,
    selected: PropTypes.string,
    setSelected: PropTypes.func,
}
export default DropDown;