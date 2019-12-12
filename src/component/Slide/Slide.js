import React, { useState } from 'react';
import Sjad1 from '../../assets/images/slider/slide1.jpg';
import Sjad2 from '../../assets/images/slider/slide2.jpg';
import Sjad3 from '../../assets/images/slider/slide3.jpg';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import styles from "./Slide.module.scss";

const items = [
    {
        src: Sjad1,
        altText: 'Zielarska Wieś Blanki',
        caption: 'Zapraszamy do nas'
    },
    {
        src: Sjad2,
        altText: 'Zielarska Wieś Blanki',
        caption: 'Zapraszamy do nas'
    },
    {
        src: Sjad3,
        altText: 'Zielarska Wieś Blanki',
        caption: 'Zapraszamy do nas'
    }
];

const Slide = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className={styles.carousel}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img className={styles.carouselimage} src={item.src} alt={item.altText} />
                <CarouselCaption className={styles.carouselimageCaption} captionText={item.caption} captionHeader={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Slide;

