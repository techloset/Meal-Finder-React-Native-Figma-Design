import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButtom from '../../components/button/CustomButton';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveDesign.jsx';
const StepOneBtns = ({data, state, setState}) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <Pressable
          key={item}
          style={[
            index == state ? styles.activeContainer : styles.nonActiveContainer,
            styles.btnContainer,
            styles[item.split(' ')[0]],
          ]}
          onPress={() => setState(index)}>
          <Text
            style={[
              index == state ? styles.activeTxt : styles.nonActiveTxt,
              ,
              styles.text,
            ]}>
            {item}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default StepOneBtns;

const styles = StyleSheet.create({
  Gluten: {
    width: pixelSizeHorizontal(57),

    paddingBottom: pixelSizeVertical(3),
    paddingTop: pixelSizeVertical(1.46),
  },
  Diary: {
    width: pixelSizeHorizontal(57),
  },
  Egg: {
    width: pixelSizeHorizontal(39),
  },
  Soy: {
    width: pixelSizeHorizontal(39),

    paddingBottom: pixelSizeVertical(3),
    paddingTop: pixelSizeVertical(1.46),
  },
  Peanut: {
    width: pixelSizeHorizontal(57),

    paddingBottom: pixelSizeVertical(3),
    paddingTop: pixelSizeVertical(1.46),
  },
  Wheat: {
    width: pixelSizeHorizontal(57),

    paddingBottom: pixelSizeVertical(3),
    paddingTop: pixelSizeVertical(1.46),
  },
  Milk: {
    width: pixelSizeHorizontal(57),

    paddingBottom: pixelSizeVertical(3),
    paddingTop: pixelSizeVertical(1.46),
  },
  Fish: {
    width: pixelSizeHorizontal(57.7),

    paddingBottom: pixelSizeVertical(3),
    paddingTop: pixelSizeVertical(1.46),
  },
  None: {
    width: pixelSizeHorizontal(57),

    paddingBottom: pixelSizeVertical(1.5),
    paddingTop: pixelSizeVertical(1.46),
  },
  Vegan: {
    width: pixelSizeHorizontal(52),

    paddingBottom: pixelSizeVertical(1.5),
    paddingTop: pixelSizeVertical(1.46),
  },
  Paleo: {
    width: pixelSizeHorizontal(41),

    paddingBottom: pixelSizeVertical(1.5),
    paddingTop: pixelSizeVertical(1.46),
  },
  Dukan: {
    width: pixelSizeHorizontal(48),

    paddingBottom: pixelSizeVertical(1.5),
    paddingTop: pixelSizeVertical(1.46),
  },
  Vegetarian: {
    width: pixelSizeHorizontal(73),

    paddingBottom: pixelSizeVertical(1.5),
    paddingTop: pixelSizeVertical(1.46),
  },
  Atkins: {
    width: pixelSizeHorizontal(60),

    paddingBottom: pixelSizeVertical(2),
    paddingTop: pixelSizeVertical(1.46),
  },
  Intermittent: {
    width: pixelSizeHorizontal(102),

    paddingBottom: pixelSizeVertical(2),
    paddingTop: pixelSizeVertical(1.46),
  },
  container: {
    marginRight: pixelSizeHorizontal(30),
    marginTop: pixelSizeVertical(25),
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: pixelSizeHorizontal(5),
    rowGap: pixelSizeVertical(10),
  },
  nonActiveContainer: {
    borderColor: 'black',
    borderWidth: 1,
  },
  activeContainer: {
    backgroundColor: '#8A47EB',
    borderWidth: 0,
  },
  btnContainer: {
    flexWrap: 'wrap',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',


    borderRadius: 100,
  },
  text: {
    fontSize: fontPixel(9),

    textAlign: 'center',
    width: '100%',
  },
  nonActiveTxt: {
    color: 'black',
  },
  activeTxt: {
    color: 'white',
  },
});
