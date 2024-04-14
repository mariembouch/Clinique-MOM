
import Header from '../../component/Head/Header';
import AddAssistants from '../Admin/AddAssistants.js';
import AddDoctors from '../Admin/AddDoctors.js';
import Profile from '../../component/Profile/Profile';
import AddAddressForm from './AddAddressForm.js';
import AllData from './AllData.js';

const Admin = () => {


    return (
        <>
            <Header />
            <br />
            <br />
            
                    <Profile />
                   
              
                <AddAssistants />
                <br /> <br />
            <br /> <br />
            <br /> <br />
            <br />
            <br />
                <AddDoctors />
                <br />
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <br />
                <AllData />
                <br /> <br />
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <br />
            <br />
                <AddAddressForm /> <br />
            <br /> <br />
            <br />
                
        </>
    );
};



export default Admin;
