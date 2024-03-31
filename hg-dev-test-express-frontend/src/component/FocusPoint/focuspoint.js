import React from 'react';
import './focuspoint.scss';
import edit from '../../image/Frame 1000003654.png';
import save from '../../image/Frame 1000003663.png';
import del from '../../image/Frame 1000003660.png';
import user2 from '../../image/users-02.png';
import fizz from '../../image/FIZZ.png';

import EditModal from '../../component/modal/edit-modal';
const FocusPoint = ({ title, description, onEdit, onDelete }) => {
  const [isOpenEModal, setOpenEModal] = React.useState(false);
  return (
    <React.Fragment>
      <div className="focuspoint">
        <div>{title}</div>
        <div>
          <span>{description}</span>
        </div>
        <button id="user">
          <img src={user2} alt=""></img>
          1234
        </button>
        <button id="fizz">
          <img src={fizz} alt=""></img>1010
        </button>
        <img src={edit} alt="" id="edit" onClick={onEdit}></img>
        <img src={save} alt="" id="save" onClick={onDelete}></img>
        <img src={del} alt="" id="del"></img>
      </div>
      {isOpenEModal && <EditModal onClose={() => setOpenEModal(false)} />}
    </React.Fragment>
  );
};

export default FocusPoint;
