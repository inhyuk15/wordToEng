import React , {useState, useEffect}from 'react';
import {View, StyleSheet, Text, Image, Grid, FlatList
  , TouchableOpacity 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScrollView} from 'react-native-gesture-handler';

import mv1 from '../../../assets/mv1.png';
import mv2 from '../../../assets/mv2.png';
import mv3 from '../../../assets/mv3.png';
import mv4 from '../../../assets/mv4.png';
import mv5 from '../../../assets/mv5.png';
import mv6 from '../../../assets/mv6.png';

const styles = StyleSheet.create({
  other:{fontSize:18, fontWeight:'bold', padding : 3,},
  blue:{fontSize:15, fontWeight:'bold', padding : 3, color: '#088F8F'},
  orange:{fontSize:15, fontWeight:'bold', padding : 3, color:'#088F8F'},
  bold:{fontSize:15, fontWeight:'bold', padding : 3, color : 'black', },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    padding : 5,
    right:5
  },
});



const Interest = () => {
  const imageWidth = 30;
  const imageHeight = 30;
  const videoSize = 90;
  const [dataSource, setDataSource] = useState([]);

  useState(() => {
    let items = Array.apply(null, Array(8)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
    });
    setDataSource(items);
  }, []);
    return (
      <SafeAreaView style ={{backgroundColor: '#fff', flex:2}}>
          <View style = {{width : '100%', flex : 7}}>
              <View style = {{flexDirection:'row', padding :8}}>
                <Text style={styles.other} >좋아요한 컨텐츠</Text>
              </View>
              <FlatList
                data={dataSource}
                numColumns ={2}
                renderItem={({ item }) => (
                  <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                    <Image style={styles.imageThumbnail} source={mv4} />
                    <Text>주토피아 #4</Text>
                    <Text>The only thing we have ...</Text>
                  </View>
                )}
                
                keyExtractor={(item, index) => index}
              />
          </View>
        </SafeAreaView>
    );
}

export default Interest;