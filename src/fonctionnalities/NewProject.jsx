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
  const [portfolio, setPortfolio] = useState({
    title: "",
    description: "",
    image: "",
    like: 0,
  });

  const handleClose = () => {
    setShowModal(false);
  };
  const handleChange = (e) => {
    setPortfolio({ ...portfolio, [e.target.name]: e.target.value });
  };
  const handleClickAdd = async () => {
    await axios
      .post("http://localhost:3031/api", portfolio)
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
        + New project
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
          Image(s)'s link
            <Input
            type="text"
            color="lightBlue"
            size="lg"
            outline={false}
            name="image"
            value={portfolio.image}
            onChange={handleChange}
          />
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
            Post
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
