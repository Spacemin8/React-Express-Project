import React from 'react';
import { Modal } from 'react-bootstrap';
import '../modal/modal.scss';

const EditFocusModal = ({
  title,
  description,
  onCreate,
  onClose,
  DescChange,
  TitleChange
}) => {
  return (
    <Modal className="edit-focus-modal" show={true} onHide={() => onClose()}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h4>Create New Focus Point</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="input-size">
          <div className="input-group spacing">
            <input
              id="title"
              type="text"
              className="input-control"
              onChange={TitleChange}
              placeholder="Insert your title..."
              value={title}
            ></input>
          </div>
          <div className="input-grouparea spacing">
            <textarea
              id="message"
              name="message"
              rows="10"
              cols="100"
              onChange={DescChange}
              placeholder=" Insert your description ..."
              value={description}
            ></textarea>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn-mod" onClick={onCreate}>
          create
        </button>
        <button className="btn-mod" onClick={() => onClose()}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default EditFocusModal;
