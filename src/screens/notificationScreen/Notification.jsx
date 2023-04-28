import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveDesign.jsx';
import CustomButtom from '../../components/button/CustomButton';
import FeedbackHeader from '../../components/feedbackHeader/FeedbackHeader.jsx';
const {width, height} = Dimensions.get('window');
const List = ({item}) => {
  console.log();
  return (
    <>
      <View style={styles.listContainer}>
        <Image
          source={require('../../assets/images/tick.png')}
          style={styles.tickImg}></Image>
        <Text style={styles.listTxt}>{item.title}</Text>
      </View>
    </>
  );
};
const Notification = () => {
  const data = [
    {id: '1', title: 'New daily meal reminders'},
    {id: '2', title: 'Motivational messages'},
    {id: '3', title: 'Personalized guideline'},
  ];
  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <View>
          <FeedbackHeader navigateThroughSkip={'feedback'} navigate="StepTwo" />
        </View>
        <View>
          <Text style={styles.heading}>
            {`Do you want to turn\non notifications?`}
          </Text>
          <View style={styles.notificationContainer}>
            <View style={styles.NotificationPurpleInsideViewContainer}>
              <View
                style={styles.NotificationPurpleInsideViewContainerChildOne}>
                <View
                  style={
                    styles.NotificationPurpleInsideViewContainerChildTwo
                  }></View>
              </View>
              <Text style={styles.nowTxt}>now</Text>
            </View>
            <View style={styles.notificationContainerTxt}>
              <Text style={styles.notificationContainerTxtHeading}>
                Notification Title
              </Text>
              <Text style={styles.notificationContainerTxtContent}>
                {`Notification text would be placed right here.\nThis is where notification text would be placed.`}
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex:1,justifyContent:'center',}}>

        <View style={styles.FlatListContainer}>
          <FlatList
            data={data}
            renderItem={List}
            keyExtractor={item => item.id}
           
            />
        </View>
            </View>
      </View>
      <View style={styles.enableBtnContainer}>
        <CustomButtom
          text="Enable"
          navigate="Feedback"
          btnContainer={styles.btnContainer}
          btnText={styles.btnText}
        />
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  enableBtnContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  FlatListContainer: {
   marginBottom:pixelSizeVertical(34),
   paddingBottom:2
  },
  notificationContainerTxtContent: {
    fontSize: fontPixel(7.7),
    color: 'rgba(0, 0, 0, 1)',
    lineHeight: fontPixel(10.3),
  },
  notificationContainerTxtHeading: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: fontPixel(7.7),
    fontFamily: 'SF-Pro-Display-Semibold',
  },
  notificationContainerTxt: {
    paddingTop: pixelSizeVertical(4),
    fontSize: fontPixel(7.5),
  },
  NotificationPurpleInsideViewContainerChildTwo: {
    backgroundColor: '#8D54E0',
    width: widthPixel(7.6),
    height: widthPixel(7.6),
    borderRadius: 10000,
  },
  NotificationPurpleInsideViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  NotificationPurpleInsideViewContainerChildOne: {
    backgroundColor: 'black',
    padding: pixelSizeHorizontal(1.3),
    width: widthPixel(10.3),
    height: widthPixel(10.3),
    borderRadius: fontPixel(2.23),
  },
  listTxt: {
    fontSize: fontPixel(9.5),
    color: 'rgba(96, 15, 212, 1)',
    fontFamily: 'SF-Pro-Display-Medium',
  },
  tickImg: {
    width: pixelSizeHorizontal(12.3),
    height: pixelSizeHorizontal(11.3),
    marginLeft: pixelSizeHorizontal(5),
    resizeMode: 'contain',
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeHorizontal(11),
    paddingVertical: pixelSizeVertical(9),
    borderBottomColor: 'rgba(138, 71, 235, 1)',
    borderBottomWidth: 1,
  },
  nowTxt: {color: 'rgba(63, 63, 63, 0.5)', fontSize: fontPixel(6.7)},
  footer: {marginBottom: height * 0.03},
  container: {
    flex: 1,
    backgroundColor: '#F6F0FF',

    paddingHorizontal: pixelSizeHorizontal(15),
  },

  heading: {
    color: '#600FD4',
    fontSize: fontPixel(14.7),
    lineHeight: fontPixel(18.3),
    marginTop: pixelSizeVertical(10),
    fontFamily: 'SF-Pro-Display-Semibold',
  },
  notificationContainer: {
    borderColor: 'black',
    borderWidth: 1,
    paddingRight: pixelSizeHorizontal(8),
    paddingLeft: pixelSizeHorizontal(5),
    paddingTop: pixelSizeVertical(5.15),
    paddingBottom: pixelSizeVertical(8),
    borderRadius: pixelSizeHorizontal(7),
    marginTop: pixelSizeVertical(28),
    backgroundColor: 'white',
  },
  btnContainer: {
    backgroundColor: 'rgba(138, 71, 235, 1)',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: pixelSizeVertical(20),
  },
  btnText: {
    fontSize: fontPixel(10),
    color: 'white',
    paddingVertical: pixelSizeVertical(8),
    fontFamily: 'SF-Pro-Display-Bold',
  },
});
