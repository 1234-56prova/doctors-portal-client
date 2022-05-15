import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import format from 'date-fns/format';
import {toast} from 'react-toastify' 
const BookModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    const handleBooking = event => {
        event.preventDefault()
        const formatedDate = format(date, 'PP')
        const slot = event.target.slot.value;
        
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot: slot,
            patient: user?.email,
            patientName: user?.displayName || user?.name,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                toast(`appointment is set, ${formatedDate} at ${slot}`)
            }
            else {
                toast.error('You already have an appointment that time')
            }
            refetch()
            setTreatment(null);
        })

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
                        <input type="text" required disabled value={user?.displayName || ''} placeholder="Your name" className="input input-ghost w-full max-w-xs" />
                        <input type="text" required disabled value={user?.email || ''} placeholder="Email Address" className="input input-ghost w-full max-w-xs" />
                        <input type="text" name='phone' required placeholder="Phone Number" className="input input-ghost w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn button" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookModal;