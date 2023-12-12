import React, { useState, useEffect, useRef } from "react";
import { View, ScrollView, Image } from "react-native";

import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

import styles from "./SliderStyles";

const slides = [
  {
    image:
      "https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",
  },
];

function Slider() {
  const [index, setIndex] = useState(0);

  const timerRef = useRef(null);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setIndex(currentIndex);
  };

  const renderSlides = () => {
    return slides.map((slide, i) => {
      const image = slide.image;
      return (
        <View key={i} style={[styles.slide, { backgroundColor: slide.color }]}>
          <Image
            style={{ width: "100%", height: 200 }}
            source={{
              uri: image,
            }}
          />
        </View>
      );
    });
  };

  const renderIndicators = () => {
    return slides.map((slide, i) => {
      return (
        <View
          key={i}
          style={[
            styles.indicator,
            index === i ? styles.activeIndicator : styles.inactiveIndicator,
          ]}
        />
      );
    });
  };

  useEffect(() => {
    // Start the timer when the component mounts
    timerRef.current = setInterval(() => {
      // Calculate the next index
      const nextIndex = (index + 1) % slides.length;
      // Move the scroll view to the next position
      scrollViewRef.current.scrollTo({ x: nextIndex * width, animated: true });
      // Update the state
      setIndex(nextIndex);
    }, 3000); // Change the interval as you wish
    // Return a cleanup function to stop the timer when the component unmounts
    return () => {
      clearInterval(timerRef.current);
    };
  }, [index]); // Re-run the effect when the index changes

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        pagingEnabled={true}
        horizontal={true}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      >
        {renderSlides()}
      </ScrollView>
      <View style={styles.indicatorContainer}>{renderIndicators()}</View>
    </View>
  );
}

export default Slider;
