import React from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Textarea from "@material-tailwind/react/Textarea";
import { makeStyles } from "@material-ui/core";
import Input from "@material-tailwind/react/Input";
import { useState } from "react";
import axios from "axios";


const useStyle = makeStyles({
  input: {
    width: "200px",
  },
  button: {
    backgroundColor: '#496480',
  }
});

export default function NewProject() {
  const classes = useStyle();
  const [showModal, setShowModal] = React.useState(false);
  // const [imageUrl, setImageUrl] = useState("");
  const [portfolio, setPortfolio] = useState({
    title: "",
    description: "",
    image: "",
    like: 0,
  });
  const handleClickOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const handleChange = (e) => {
    setPortfolio({ ...portfolio, [e.target.name]: e.target.value });
  };
  const handleClickAdd = async () => {
    await axios
      .post("http://localhost:3031/portfolio", portfolio)
      .then((response) => {
        setPortfolio(response.data);
        setShowModal(false);
        window.location.reload();
      });
  };

  return (
    <>
      <Button
        className={classes.button}
        type="button"
        onClick={(e) => setShowModal(true)}
        ripple="light"
        size="lg"
      >
        + Add new project to the portfolio
      </Button>

      <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>
        <ModalHeader toggler={() => setShowModal(false)}>
          Add new project <br />
        </ModalHeader>
        <ModalBody>
          Title
          <Input
            type="text"
            color="lightBlue"
            size="lg"
            outline={false}
            name="title"
            value={portfolio.title}
            onChange={handleChange}
            style={{width: '1000px'}}
          />
          Description
          <Textarea color="lightBlue" size="regular" outline={false}
          name="description"
          value={portfolio.description}
          onChange={handleChange}
          />
          Lien de l'image
            <Input
            type="text"
            color="lightBlue"
            size="lg"
            outline={false}
            name="image"
            value={portfolio.image}
            onChange={handleChange}
          />
          {/* {imageUrl ? (
            <a href={imageUrl} download>
              <img src={imageUrl} alt="upload" href={imageUrl} download />
            </a>
          ) : null}
          <Input type="file" color="lightBlue" size="lg" outline={false} /> */}
        </ModalBody>
        <ModalFooter>
          <Button
            color="red"
            buttonType="link"
            onClick={handleClose}
            ripple="dark"
          >
            Cancel
          </Button>

          <Button color="green" onClick={handleClickAdd} ripple="light">
            Definitely post this!
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
