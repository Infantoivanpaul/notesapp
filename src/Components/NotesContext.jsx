import React, { useState } from 'react'
import deleteIcon from '../image/delete.svg'
import editIcon from '../image/edit.svg'
import notesBlueIcon from '../image/notes-blueIcon.svg' 
import { useNavigate } from 'react-router-dom';
export const NotesDataContext = React.createContext();
function NotesContext({ children }) {
    const [data, setData] = useState(
        [
            {
                title: 'FEEDBACK',
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                editIcon: editIcon,
                deleteIcon: deleteIcon,
                date: "5 days ago"
            },
            {
                title: 'WEEKLY TASK',
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                editIcon: editIcon,
                deleteIcon: deleteIcon,
                date: "2 weeks ago"
            }, {
                title: 'LYRICS',
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                editIcon: editIcon,
                deleteIcon: deleteIcon,
                date: "3 weeks ago"
            }, {
                title: 'IVAN',
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                editIcon: editIcon,
                deleteIcon: deleteIcon,
                date: "4 weeks ago"
            },
        ])

    const [title, SetTittle] = useState('')
    const [body, SetBody] = useState('')
    const [addOrEdit, setAddOrEdit] = useState('add');
    const [editIndex,setEditindex]=useState();
    const navigate=useNavigate();
    return (
        <NotesDataContext.Provider value=
        {{ data, setData, title, SetTittle, body, 
        SetBody, addOrEdit ,setAddOrEdit,editIndex
        ,setEditindex,navigate,deleteIcon,editIcon,notesBlueIcon}}>
            {children}
        </NotesDataContext.Provider>
    )
}

export default NotesContext