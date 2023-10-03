import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import AddUser from './components/addUser/addUser'
import EditUser from './components/editUser/editUser';
import AddUserStatus from './components/addUserStatus/addUseStatus';
import AddDocumentType from './components/addDocument/addDocType';

const App = () => {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Add-User" element={<AddUser />} />
      <Route path="/Edit-Project" element={<EditUser />} />
      <Route path="/Add-DocumentType" element={<AddDocumentType />} />
      <Route path="/Add-UserStatus" element={<AddUserStatus />} />

    </Routes>
  );
}

export default App;
