import React, {Component, useRef, useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions, StatusBar, Image, ImageBackground, TextInput, FlatList} from 'react-native';
import carousel from 'react-native-anchor-carousel';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Carousel from "react-native-anchor-carousel";
import {renderAndEnforceStrictMode} from "react-native/Libraries/Utilities/ReactNativeTestTools";


const image = {
  uri: "https://images.redbox.com/Images/EPC/boxartvertical/208377.jpg",
  name: 'Avengers: End game',
  stat: '',
  desc: ''
};

const [gallery, setGallery] = useState(
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Sonic_the_Hedgehog_poster.jpg/220px-Sonic_the_Hedgehog_poster.jpg',
    title: 'your movie title here',
    released: 'Release Date here',
    desc: 'Movie Description here',
    key: '1'
  }
)


export default class home extends Component {
  render() {


    const carouselRef = useRef(0);
    const {width, height} = Dimensions.get('window')

    const renderItem = ({item, index}) => {
      return (
        <View>
          <TouchableOpacity>
            <Image source={{uri: item.image}} style={styles.carouselImage}/>
            <Text style={styles.carouselText}>{item.title}</Text>
            <MaterialIcons name={'library-add'} size={26} color={'white'} style={styles.carouselIcon}/>
          </TouchableOpacity>
        </View>
      )
    };
    return (
      <ScrollView>
        <View style={styles.carouselContainer}>
          <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
            <ImageBackground source={image} style={styles.ImageBg} blurRadius={3}>
              <View style={styles.searchBoxContainer}>
                <TextInput
                  placeholder={'Search movie'}
                  placeholderTextColor={'#666'}
                  style={styles.SearchBox}
                />
                  <Feather name={'search'} size={26} color={'#666'} style={styles.searchBoxIcon}/>
              </View>
              <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginVertical: 10}}>
                Top picks this weeks
              </Text>
              <View style={styles.carouselContainerView}>
                <Carousel  style={styles.Carousel}
                           data={gallery}
                           renderItem={renderItem}
                           itemWidth={200}
                           containerWidth={width - 20}
                           separatorWidth={0}
                           ref={carouselRef}
                           inActiveOpacity={0.4}
                />
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: 720,
    paddingHorizontal: 14
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: 'flex-start'
  },
  searchBoxContainer: {
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 4,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  SearchBox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16
  },
  searchBoxIcon: {
    position: 'absolute',
    right: 20,
    top: 14
  },
  carouselContainerView: {
    height:350,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Carousel: {
    flex: 1,
    overflow: 'visible'
  },
  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  carouselText: {
    padding: 14,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15
  }
})

