interface Doctor {
    id: number;
    fname: string;
    lname: string;
    rut: string;
    age: number;
    specialty_name: string;
    experience: number;
    available: boolean;
    photo: string;
    biography: string;
    contact: {
        phone: string;
        email: string;
    };
    hours: {
        am: string;
        pm: string;
    };
}

const DoctorProfile = ({ doctor }: { doctor: Doctor }) => {

    return (
        <div className="doctor-profile">
            <h1>Doctor Profile</h1>
            <img src={doctor.photo} alt={`${doctor.fname} ${doctor.lname}`} style={{ width: '150px', borderRadius: '50%' }} />
            <h2>{doctor.fname} {doctor.lname}</h2>
            <p><strong>RUT:</strong> {doctor.rut}</p>
            <p><strong>Age:</strong> {doctor.age}</p>
            <p><strong>Specialty:</strong> {doctor.specialty_name}</p>
            <p><strong>Experience:</strong> {doctor.experience} years</p>
            <p><strong>Available:</strong> {doctor.available ? 'Yes' : 'No'}</p>
            <h3>Contact Information</h3>
            <p><strong>Phone:</strong> {doctor.contact.phone}</p>
            <p><strong>Email:</strong> {doctor.contact.email}</p>
            <h3>Working Hours</h3>
            <p><strong>Morning:</strong> {doctor.hours.am}</p>
            <p><strong>Afternoon:</strong> {doctor.hours.pm}</p>
            <h3>Biography</h3>
            <p>{doctor.biography}</p>
        </div>
    );
};

export default DoctorProfile;
export type { Doctor };