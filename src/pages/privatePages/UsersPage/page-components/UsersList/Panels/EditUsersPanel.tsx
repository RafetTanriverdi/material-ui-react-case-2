import { RTInput } from "@rt/components/Inputs/Index";
import { User } from "@rt/pages/privatePages/UsersPage/page-components/AddNewUsers/AddNewUsersButton";
import React from "react";

interface EditUsersPanelProps {
  setUser: (value: User) => void;
  user: User;
}

const EditUsersPanel: React.FC<EditUsersPanelProps> = ({ setUser, user }) => {
  return (
    <>
      <RTInput.text
        value={user.userName}
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
        fullWidth
        label="User Name"
        variant="outlined"
        required
        placeholder="Enter new user name"
      />
      <RTInput.text
        value={user.role}
        onChange={(e) => setUser({ ...user, role: e.target.value })}
        fullWidth
        label="User Role"
        variant="outlined"
        required
        placeholder="Enter new user Role"
      />

      <RTInput.text
        fullWidth
        value={user.experience}
        onChange={(e) => setUser({ ...user, experience: e.target.value })}
        label="Experience"
        variant="outlined"
        required
        type="number"
        inputMode="numeric"
      />

      <RTInput.text
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        fullWidth
        label="Email"
        variant="outlined"
        required
        placeholder="Enter new E-mail"
      />

      <RTInput.text
        fullWidth
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
        label="Phone"
        variant="outlined"
        required
        type="number"
        inputMode="numeric"
      />
    </>
  );
};

export default EditUsersPanel;
