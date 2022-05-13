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
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <label for="booking-modal" className='btn btn-sm btn-circle absolute right-2 top-2'>X</label>
                    <h3 class="font-bold text-lg">Booking name: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-center mt-2' action="">
                        <input type="text" disabled value={format(date, 'PP')} placeholder="Type here" class="input input-ghost w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            <option disabled selected>Choose your slot</option>
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" placeholder="Your name" class="input input-ghost w-full max-w-xs" />
                        <input type="text" placeholder="Email Address" class="input input-ghost w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" class="input input-ghost w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn button" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookModal;