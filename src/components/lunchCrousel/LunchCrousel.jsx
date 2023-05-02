import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,Button
} from 'react-native';
import { useCallback } from 'react';
import Carousel from 'react-native-snap-carousel';
import { useRef } from 'react';
import {pixelSizeHorizontal} from '../../utils/ResponsiveDesign';
const {width, height} = Dimensions.get('window');
const SnapCarousel = ({ state,setState}) => {
  const flatListRef = useRef(null)
  const carouselItems = [
    {title: require('../../assets/images/1.png')},
    {title: require('../../assets/images/alternate.png')},
    {title: require('../../assets/images/1.png')},
    {title: require('../../assets/images/alternate.png')},
  ];
  const onScrollEndDrag = useCallback(({ nativeEvent }) => {
    const slideSize = width * 0.7 + pixelSizeHorizontal(12);
    const offset = nativeEvent.contentOffset.x;
    const index = Math.round(offset / slideSize);
    setState(index);
  }, []);
  
  
  
  if (flatListRef.current) {

    flatListRef.current.scrollToIndex({index: state}) // Scroll to day 10
}
  return (
    <>
      <View>
        <FlatList
         ref={flatListRef} // add ref
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={carouselItems}
          onScrollEndDrag={onScrollEndDrag}
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
                borderRadius: index != 0 ? pixelSizeHorizontal(9.5 ): 0,
                borderTopRightRadius:pixelSizeHorizontal(9.5 ),
                borderBottomRightRadius:pixelSizeHorizontal(9.5 ),
              }}
            />
          )}></FlatList>
           
      </View>
      
    </>
  );
};

export default SnapCarousel;
