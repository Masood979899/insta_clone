import {View, Text, FlatList, Image, useWindowDimensions} from 'react-native';
import React, { useRef, useState } from 'react';
import colors from '../theme/colors';

interface ICarousel {
  images: string[];
}

const ImageCarousel = ({images}: ICarousel) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex,setActiveImageIndex] =useState(0);
  
const onviewabilityConfig={
    itemVisiblePercentThreshold:51,
}
const onViewableItemsChanged= useRef(({viewableItems})=>{
    if(viewableItems.length > 0){
        setActiveImageIndex(viewableItems[0].index);
    }
})



  console.log(images);
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={{width, aspectRatio: 1/1}} />
        )}
        horizontal={true}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={onviewabilityConfig}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              aspectRatio: 1,
              width: '3%',
              borderRadius: 10,
              backgroundColor: activeImageIndex===index?colors.primary :'white',
              margin: '2%',
              marginHorizontal: '1.5%',
            }}></View>
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
