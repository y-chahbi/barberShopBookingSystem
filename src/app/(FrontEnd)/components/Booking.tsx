import React, { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbArrowsLeftRight } from "react-icons/tb";

const generateHours = () => {
    const hours = [];
    let startTime = new Date();
    startTime.setHours(9, 30, 0, 0);
    const endTime = new Date();
    endTime.setHours(22, 30, 0, 0);

    while (startTime <= endTime) {
      const hour = startTime.getHours().toString().padStart(2, "0");
      const minutes = startTime.getMinutes().toString().padStart(2, "0");
      hours.push(`${hour}:${minutes}`);
      startTime.setMinutes(startTime.getMinutes() + 60);
    }

    return hours;
  };

  const calculateDaysInMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };


const Booking = ({isModel=false, width="", height=""}) => {
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const Hours = generateHours();
    const Days = calculateDaysInMonth();

    return (
        <div className='BookingHolder'>
            <div className='border-2 border-[var(--maincolor)] text-[var(--maincolor)] bg-black/40 pb-2' style={{width: width, height: height}}>
                <div className='flex justify-center py-6 font-bold text-2xl'>
                    BOOKING
                </div>
                <div className='Date my-6 justify-center flex flex-row items-center '>
                    <div className='Day'>
                        <div className='Day text-center'>Day</div>
                        <select className='w-56 border-b-2 bg-transparent outline-none border-[var(--maincolor)]'>
                        {Array.from({ length: Days }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div className='Symbel mx-10'>
                        <TbArrowsLeftRight />
                    </div>
                    <div className='Hour'>
                        <div className='text-center'>Hour</div>
                        <select className='w-56 border-b-2 bg-transparent outline-none border-[var(--maincolor)]'>
                            {Hours.map((item, key) => {
                                return <option key={key} value={item}>{item}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className='Service my-6 justify-center flex flex-row items-center '>
                    <div className='Service'>
                        <div className='text-center'>Service</div>
                            <select name="haircutServices" id="haircutServices" className='w-56 border-b-2 bg-transparent outline-none border-[var(--maincolor)]'>
                                <option value="basic">Basic Haircut</option>
                                <option value="fade">Fade</option>
                                <option value="trim">Beard Trim</option>
                                <option value="shave">Shave</option>
                                <option value="style">Styling</option>
                                <option value="kids">Kids Haircut</option>
                                <option value="color">Hair Coloring</option>
                                <option value="treatment">Hair Treatment</option>
                            </select>
                    </div>
                    <div className='mx-12'></div>
                    <div className='Persons'>
                        <div className='text-center'>Persons</div>
                            <select name="personCategory" id="personCategory" className='w-56 border-b-2 bg-transparent outline-none border-[var(--maincolor)]'>
                                <option value="adult">Adult</option>
                                <option value="kid">Kid</option>
                                <option value="teen">Teen</option>
                                <option value="senior">Senior</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                </div>
                <div className='Submet flex justify-end mr-1'>
                    <button className='border-[1px] py-2 pl-4 pr-1 border-[var(--maincolor)] flex justify-between items-center'>
                        BOOK NOW <MdOutlineKeyboardArrowRight/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Booking;