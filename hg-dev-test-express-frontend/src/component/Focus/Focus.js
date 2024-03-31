import React, { useEffect } from 'react';
import points from '../../image/points.png';
import './Focus.scss';
import FocusPoint from '../FocusPoint/focuspoint';
import EditFocusModal from '../modal/edit-modal';
import axios from 'axios';
const Focus = () => {
  const [isOpenModal, setOpenModal] = React.useState(false);
  const [components, setComponents] = React.useState([]);
  const [selectedFocus, setSelectedFocus] = React.useState(false);
  const [title, settitle] = React.useState('title');
  const [description, setdescription] = React.useState('description');
  const [editingindex, seteditingindex] = React.useState(0);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios
      .get('http://localhost:5000/focus/load')
      .then((response) => {
        const responseData = response.data;
        setComponents(responseData);
        if (responseData.length !== 0) {
          const para = document.getElementById('desc');
          para.classList.add('hidden');
          setOpenModal(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleshow = () => {
    setOpenModal(true);
  };

  const Onsettitle = (e) => {
    settitle(e.target.value);
  };

  const OnsetDesc = (e) => {
    setdescription(e.target.value);
  };

  const handleEdit = async (index) => {
    seteditingindex(index);
    setSelectedFocus(true);
    settitle(components[index].title);
    setdescription(components[index].description);
    setOpenModal(true);
    //console.log(selectedFocus);
  };

  const handleModalOK = () => {
    console.log(selectedFocus);
    handleaddFocus();
    setdescription('');
    settitle('');
    setOpenModal(false);
  };
  const handledeleteFocus = () => {
    const deleteFocuspoints = [...components];
    const deletefocus = {
      id: editingindex - 1
    };
    deleteFocuspoints[editingindex] = deletefocus;
    axios
      .post('http://localhost:5000/focus/delete', deletefocus)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleaddFocus = () => {
    if (!selectedFocus) {
      const newfocus = {
        id: editingindex + 1,
        title: title,
        description: description,
        user: 0,
        fizz: 200
      };
      console.log(newfocus);
      axios
        .post('http://localhost:5000/focus/create', newfocus)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      setComponents([...components, newfocus]);
    } else {
      const updateFocuspoints = [...components];
      const newfocus = {
        id: editingindex + 1,
        title: title,
        description: description
      };
      console.log(newfocus);
      updateFocuspoints[editingindex] = newfocus;
      axios
        .post('http://localhost:5000/focus/edit', newfocus)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      setComponents(updateFocuspoints);
      setSelectedFocus(false);
    }
    const para = document.getElementById('desc');
    para.classList.add('hidden');
    setOpenModal(false);
  };
  const handleModalCancel = () => {
    setdescription('');
    settitle('');
    setOpenModal(false);
  };
  // Update the state to include the new component

  return (
    <React.Fragment>
      <div className="focus-menu">
        <div className="focus-title">
          <button>In progress</button>
          <button>completed</button>
        </div>
        <div className="focus-main">
          <div className="focus-head">
            <div className="tex-g">
              <h6>Focus Points</h6>{' '}
              <div className="tex-1">
                <p>12, 254</p>
                <img src={points} alt=" " />
              </div>
            </div>
            <button
              type="button"
              className="btn-add"
              onClick={() => handleshow()}
            >
              + Add new focus point
            </button>
          </div>
          <div className="hr"></div>
          <div className="focus-field">
            {/* Render the list of components */}

            <p id="desc">
              No Focus Points added <br />
              <span>
                Focus Point to start you Journey towards <br />
                self-development !
              </span>
            </p>
            {components.map((focuspoint, index) => (
              <FocusPoint
                key={index}
                title={focuspoint.title}
                description={focuspoint.description}
                onEdit={() => handleEdit(index)}
                onDelete={() => handledeleteFocus()}
              />
            ))}

            <button className="morebutton">Load More</button>
          </div>
        </div>
      </div>
      {isOpenModal &&
        (!selectedFocus ? (
          <EditFocusModal
            onCreate={() => handleModalOK()}
            onClose={() => handleModalCancel()}
            DescChange={OnsetDesc}
            TitleChange={Onsettitle}
          />
        ) : (
          <EditFocusModal
            title={title}
            description={description}
            onCreate={() => handleModalOK()}
            onClose={() => handleModalCancel()}
            DescChange={OnsetDesc}
            TitleChange={Onsettitle}
          />
        ))}
    </React.Fragment>
  );
};

export default Focus;
