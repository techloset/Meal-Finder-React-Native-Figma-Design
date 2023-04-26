import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {pixelSizeHorizontal} from '../../utils/ResponsiveDesign';
const {width, height} = Dimensions.get('window');
const SnapCarousel = () => {
  const carouselItems = [
    {title: require('../../assets/images/1.png')},
    {title: require('../../assets/images/1.png')},
    {title: require('../../assets/images/1.png')},
    {title: require('../../assets/images/1.png')},
  ];
  return (
    <>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={carouselItems}
          renderItem={({item, index}) => (
            <Image
              source={item.title}
              style={{
                marginRight:
                  index == carouselItems.length - 1
                    ? 0
                    : pixelSizeHorizontal(12),
                width: width * 0.7,
                height: height * 0.26,
                borderRadius: index != 0 ? 10 : 0,
              }}
            />
          )}></FlatList>
      </View>
    </>
  );
};

export default SnapCarousel;
