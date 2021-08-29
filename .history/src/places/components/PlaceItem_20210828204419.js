import React, { useState } from "react";

import Card from "../../shared/UIElements/Card";
import Button from "../../shared/FormElements/Button";
import Modal from "../../shared/UIElements/Modal";
import Map from "../../shared/UIElements/Map";

import "./PlaceItem.css";

function PlaceItem(props) {
  const [showMap, setShowMap] = useState(false);
  const [showDeleteModal, setShowDeleteModel] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowDeleteModel(true);
  };

  const cancelDeleteWarningHandler = () => {
    setShowDeleteModel(false);
  };
  const confirmDeleteHandler = () => {
    console.log("deleting");
  };

  return (
    <>
      <Modal
        show={showDeleteModal}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showDeleteModal}
        header="Are you sure"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse>CANCEL</Button>
            <Button danger>DELETE</Button>
          </React.Fragment>
        }
      >
        <p>Sure, you wanna delete?</p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
}

export default PlaceItem;
