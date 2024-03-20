import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import BASE_URL from '../url';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(null); // Initialize with null
    const [allUsers, setAllUsers] = useState([]); // Initialize with empty array
    const [userProductivity, setUserProductivity] = useState([]);

    useEffect(() => {
        // Fetch initial data
        getUser('EMP001');
        getUserProductivity('EMP001');
        getAllUsers();
    }, []);

    const getUser = async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/employees/${id}`);
            if(response){
                setUserData(response.data); // Set userData to response.data
                console.log(userData);
            }
        } catch (error) {
            console.log("Error fetching user:", error.message);
            // Handle error (e.g., display error message to the user)
        }
    };

    const getUserProductivity = async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/productivity/${id}`);
            if(response){
                setUserProductivity(response.data)
                console.log(userProductivity);
            }
        } catch (error) {
            console.log("Error fetching user productivity:", error.message);
            // Handle error (e.g., display error message to the user)
        }
    }

    const getAllUsers = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/employees`);
            if(response){
                setAllUsers(response.data); // Set allUsers to response.data
                console.log(allUsers)
            }
        } catch (error) {
            console.log("Error fetching all users:", error.message);
            // Handle error (e.g., display error message to the user)
        }
    };

    const getUsersByName = async (name) => {
        try {
            if(name == ""){
                getAllUsers();
            }else{
                const response = await axios.get(`${BASE_URL}/employees/name/${name}`);
                if(response){
                    setAllUsers(response.data); // Set allUsers to response.data
                    console.log(allUsers)
                }
            }
        } catch (error) {
            console.log("Error fetching all users:", error.message);
            // Handle error (e.g., display error message to the user)
        }
    };

    return (
        <UserContext.Provider value={{ userData, allUsers, userProductivity, getAllUsers, getUsersByName, getUserProductivity, getUser }}>
            {children}
        </UserContext.Provider>
    );
};

export  {UserContextProvider, UserContext};
