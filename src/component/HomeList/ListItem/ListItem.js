import React, { useState, useCallback } from 'react';
import { Divider, Segment} from "semantic-ui-react";
import ImageViewer from 'react-simple-image-viewer';
import PostIcon from "../../Icon/Post/PostIcon";
import styles from "./ListItem.module.scss";


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
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
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
          <img src={src} alt="opis tekst" className={styles.postImage} />
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


