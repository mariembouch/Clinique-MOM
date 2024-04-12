
import Header from '../../component/Head/Header';
import AddAssistants from '../Admin/AddAssistants.js';
import AddDoctors from '../Admin/AddDoctors.js';
import Profile from '../../component/Profile/Profile';
import AddDeleteTableRows from '../../component/table/AddDeleteTableRows.js';
import AddAddressForm from './AddAddressForm.js';
import AllData from './AllData.js';

const Admin = () => {


    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <div className="admin-container">
                <div className="content">
                    <Profile />
                    <br />
                    <br />
                </div>
            </div>
            <AddDeleteTableRows />
            <div>
                <h4>Welcome home</h4>
                <h3>Your account: {localStorage.getItem('account')}</h3>
                <h3>Your email: {localStorage.getItem('email')}</h3>
                <AddAssistants />
                <AddDoctors />
                <AllData />
                <AddAddressForm />
                
            </div>
        </>
    );
};

const button = {
    width: 100,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    cursor: 'pointer',
    fontSize: 17,
    color: 'white',
    backgroundColor: 'blue',
    border: 'none',
};

export default Admin;
