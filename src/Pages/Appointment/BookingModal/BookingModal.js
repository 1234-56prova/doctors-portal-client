import React from 'react';
import format from 'date-fns/format';
const BookModal = ({ date, treatment, setTreatment }) => {
    const { name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <label for="booking-modal" className='btn btn-sm btn-circle absolute right-2 top-2'>X</label>
                    <h3 className="font-bold text-lg">Booking name: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-center mt-2' action="">
                        <input type="text" disabled value={format(date, 'PP')} placeholder="Type here" className="input input-ghost w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Choose your slot</option>
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Your name" className="input input-ghost w-full max-w-xs" />
                        <input type="text" placeholder="Email Address" className="input input-ghost w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" className="input input-ghost w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn button" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookModal;