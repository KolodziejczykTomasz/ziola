import React from "react";
import { Divider, Segment, Image} from "semantic-ui-react";
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



 return (
    <Segment className={styles.wrapper}>
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <PostIcon /> <h3 className={styles.postHeaderTitle}>{title} </h3>
        </div>
        <Divider />
        <Image src={src} alt="opis tekst" className={styles.postImage} />
        <div className={styles.description}>
          <p className={styles.descriptionText}>{text1}</p>
          <p className={styles.descriptionText}>{text2}</p>
          <p className={styles.descriptionText}>{text3}</p>
          <p className={styles.descriptionText}>{text4}</p>
          <p className={styles.descriptionText}>{text5}</p>         
        </div>       
      </div>
      
        {dataItem.length ? (

          <div className={styles.gallery}> <p>______________ </p>
          <div className={styles.galleryWrapper}>
          {dataItem.map((item, index) => <img key={index} className={styles.galleryItemPhoto} src={item} alt='Ilustracja do tekstu'/>) }</div></div>
          ) : null
        }
      
    
    </Segment> 
  );
};

export default ListItem;


