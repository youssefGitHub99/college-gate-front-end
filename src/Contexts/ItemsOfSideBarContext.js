import {createContext, useContext} from "react";
import {STUDENT_HOME_LINK, STUDENT_COURSES_LINK, STUDENT_WARNINGS_LINK, PROFESSOR_MESSAGES_OVERVIEW_LINK, PROFESSOR_COURSES_LINK} from '../Constants';
import { AuthContext } from "./AuthContext";
export const ItemsOfSideBarContext = createContext();

const ItemsOfSideBarContextProvider = ({children}) => {

    let listOfItems = [];

    const {user} = useContext(AuthContext);

    console.log(user);
    switch (user.type) {

        case "Student":
            listOfItems = [
                {text:"Home", link:STUDENT_HOME_LINK, id: 1}, 
                {text:"Courses", link:STUDENT_COURSES_LINK, id: 2}, 
                {text:"Warnings", link:STUDENT_WARNINGS_LINK, id: 3}
            ]
            break;
        case "Professor":
            listOfItems = [

                {text:"Messages Overview", link:PROFESSOR_MESSAGES_OVERVIEW_LINK, id: 1}, 
                {text:"Courses", link:PROFESSOR_COURSES_LINK, id: 2}
                
            ]
            break;

        default:
            listOfItems = [

                {text:"Warnings", link:PROFESSOR_MESSAGES_OVERVIEW_LINK, id: 1} 
                
            ]
            break;
    }

    return (  
        <ItemsOfSideBarContext.Provider value={{listOfItems}}>

            {children}
            
        </ItemsOfSideBarContext.Provider>
    );
}
 
export default ItemsOfSideBarContextProvider;