import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../actionTypes/notesConstants';

const Notes = (notes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      console.log(action.payload);
      return action.payload;

    case CREATE:
      console.log(notes);
      return [...notes, action.payload];

    case UPDATE:
      return notes.map((post) => (post._id === action.payload._id ? action.payload : post));

    case DELETE:
      return notes.filter((post) => post._id !== action.payload);

    
    default:
      console.log(notes);
      return notes;
      
  }
};

export default Notes;