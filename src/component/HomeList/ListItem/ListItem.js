import React, { useState, useCallback } from 'react';
import { Divider, Segment} from "semantic-ui-react";
import { 
  makeStyles,
  Modal,
  Backdrop,
  Fade
} from "@material-ui/core";
import ImageViewer from 'react-simple-image-viewer';
import PostIcon from "../../Icon/Post/PostIcon";
import styles from "./ListItem.module.scss";

const useStyles = makeStyles((theme) => ({
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundcolor: "red"
    }
  },
  img: {
    outline: "none"
  }
}));



const ListItem = ({
  title,
  src,
  text1,
  text2,
  text3,
  text4,
  text5,
  gallery
}) => { 

  let data = {gallery}.gallery;
  let dataItems = data.map(item=> item.src)
  let dataItem = dataItems.map(i=> i)
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("false");

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (value) => {
    setImage(value);
    setOpen(true);
  };

  const images = dataItems;
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };



 return (
    <Segment className={styles.wrapper}>
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <PostIcon /> <h3 className={styles.postHeaderTitle}>{title} </h3>
        </div>
        <Divider />        
        <div className={styles.description}>
          <p className={styles.descriptionText}>{text1}</p>
          <p className={styles.descriptionText}>{text2}</p>          
            <img
              src={src} alt="opis tekst" 
              onClick={(e) => handleImage()}
              className={styles.postImage}              
            />
          
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open} timeout={500} className={classes.img}>
          <img
            src={src}
            alt="opis tekst" 
            style={{ maxHeight: "80%", maxWidth: "80%" }}
          />
        </Fade>
      </Modal>







   
          <p className={styles.descriptionText}>{text3}</p>
          <p className={styles.descriptionText}>{text4}</p>
          <p className={styles.descriptionText}>{text5}</p>         
        </div>       
      </div>
      
        {dataItem.length ? (

          <div className={styles.gallery}> <p>______________ </p>
          <div className={styles.galleryWrapper}>
          {dataItem.map((item, index) => <img key={index} className={styles.galleryItemPhoto} src={item} alt='Ilustracja do tekstu' onClick={ () => openImageViewer(index) }/>) }</div></div>
          ) : null
        }
      
      {isViewerOpen && (
        <ImageViewer
          src={ images }         
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    
    </Segment> 
  );
};

export default ListItem;


