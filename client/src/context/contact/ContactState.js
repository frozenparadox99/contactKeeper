import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";
import contactContext from "./contactContext";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Naruto",
        email: "theseventh@gmail.com",
        phone: "111-111-1111",
        type: "professional"
      },
      {
        id: 2,
        name: "Sasuke",
        email: "chidori@gmail.com",
        phone: "222-222-2222",
        type: "personal"
      },
      {
        id: 3,
        name: "Sakura",
        email: "ilovesasuke@gmail.com",
        phone: "333-333-3333",
        type: "personal"
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //Add contact

  //delete contact

  //set current contact

  //clear current contact

  //update contact

  //filter contacts

  //clear filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
