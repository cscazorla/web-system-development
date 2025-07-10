const Note = ({ note }) => {
  return (
    <li>
      {note.content} {note.important ? '(important)' : ''}
    </li>
  );
};

export default Note;
