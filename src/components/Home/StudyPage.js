import React , {useState, useEffect}from 'react';
import {View, StyleSheet, Text, Image, Grid, FlatList
  , TouchableOpacity 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import eng from '../../../assets/eng.png';
import anim from '../../../assets/anim.png';
import talk from '../../../assets/friend.png';
import movie from '../../../assets/movie.png';

import mv1 from '../../../assets/mv1.png';
import mv2 from '../../../assets/mv2.png';
import mv3 from '../../../assets/mv3.png';
import mv4 from '../../../assets/mv4.png';
import mv5 from '../../../assets/mv5.png';
import mv6 from '../../../assets/mv6.png';

import mov1 from '../../../assets/mov1.png';
import mov2 from '../../../assets/mov2.png';
import mov3 from '../../../assets/mov3.png';
import mov4 from '../../../assets/mov4.png';

import { ScrollView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  other:{fontSize:15, fontWeight:'bold', padding : 3,},
  blue:{fontSize:15, fontWeight:'bold', padding : 3, color: 'powderblue'},
  orange:{fontSize:15, fontWeight:'bold', padding : 3, color:'orange'},
  bold:{fontSize:15, fontWeight:'bold', padding : 3, color : 'black', },
});

const StudyPage = ({navigation}) => {
  const imageWidth = 30;
  const imageHeight = 30;
  const videoSize = 90;
  const [currentTab, setCurrentTab] = useState('애니');
  const [onClick, setOnClick] = useState('false');

  if(currentTab == '미드'){
    return(
      <SafeAreaView style ={{backgroundColor: '#fff', flex:2}}>
          <View style={{ flex: 1, justifyContent: 'space-around',
            flexDirection: 'row', top : 15, bottom : 15,
            alignItem: 'center'
          }}>
            <TouchableOpacity onPress ={()=>{
              setCurrentTab('미드');
            }}
              style ={{backgroundColor: currentTab == '미드' ? '#aaa' : 'transparent',
              borderRadius:100, height:60,
            }}
            >
              <Image source={eng} style={{ margin : 3,
                width : imageWidth, height : imageHeight}} />
                <Text style = {{textAlign: 'center'}}>미드</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={()=>{
              setCurrentTab('애니');
            }}
            style ={{backgroundColor: currentTab == '애니' ? '#aaa' : 'transparent',
            borderRadius:100, height:60,}}
            >
                <Image source={anim} style={{margin : 3,
                  width : imageWidth, height : imageHeight}}/>
                  <Text style = {{textAlign: 'center'}}>애니</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={()=>{
              setCurrentTab('토크');
            }}
            style ={{backgroundColor: currentTab == '토크' ? '#aaa' : 'transparent',
            borderRadius:100, height:60,}}
            >
              <Image source={talk} style={{margin : 3,
                width : imageWidth, height : imageHeight}}/>
                <Text style = {{textAlign: 'center'}}>토크</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={()=>{
              setCurrentTab('영화');
            }}
            style ={{backgroundColor: currentTab == '영화' ? '#aaa' : 'transparent',
            borderRadius:100, height:60,}}
            >
              <Image source={movie} style={{margin : 3,
                width : imageWidth, height : imageHeight}}/>
                <Text style = {{textAlign: 'center'}}>영화</Text>
            </TouchableOpacity>
          </View>
          <View style = {{width : '100%', flex : 7}}>
            
              <ScrollView horizontal={true} style ={{flex:1}}>
              <TouchableOpacity onPress = {()=>{
                navigation.navigate('OnClickPage');
              }}>
                  <Image source={mov4} style={{margin : 5, padding : 5,
                  width : 125, height : 75}}/>
                  <Text>윌터의 상상은 현실이 된다.</Text>
                  <Text>I was on my way to ...</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=>{
                  navigation.navigate('OnClickPage');
                }}>
                  <Image source={mov1} style={{margin : 5, padding : 5,
                  width : 125, height : 75}}/>
                  <Text>인셉션</Text>
                  <Text>You must not be afraid to ...</Text>
                </TouchableOpacity>
              </ScrollView>
              <ScrollView horizontal={true} style ={{flex:1}}>
              <TouchableOpacity onPress = {()=>{
                navigation.navigate('OnClickPage');
              }}>
                  <Image source={mov2} style={{margin : 5,
                  width : 125, height : 75}}/>
                  <Text>윌터의 상상은 현실이 된다.</Text>
                  <Text>The only thing we have ...</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=>{
                  navigation.navigate('OnClickPage');
                }}>
                  <Image source={mov3} style={{margin : 5,
                  width : 125, height : 75,}}/>
                  <Text>인셉션</Text>
                  <Text>The only thing we have ...</Text>
                </TouchableOpacity>
              </ScrollView>
              
              <View
                style = {{flex:0.1}}
              >
              </View>

              <View style = {{flexDirection:'row'}}>
                <Text style={styles.orange} >같은</Text>
                <Text style={styles.other}>콘텐츠를</Text>
                <Text style={styles.orange} >학습</Text>
                <Text style={styles.other} >하는 유저들의</Text>
                <Text style={styles.other} >최근 학습 컨텐츠</Text>
              </View>
              
              <ScrollView horizontal={true} style ={{flex:1}}>
                <View style>
                  <Image source={mov1} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>인셉션 #11</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mov1} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>윌터의 상상은 현실이 된다 #3</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mov3} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>윌터의 상상은 현실이 된다 #2</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mov2} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>올림포스 #21</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mov4} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>윌터의 상상은 현실이 된다 #1</Text>
                  <Text>The only thing we have ...</Text>
                </View>
              </ScrollView>
              <ScrollView horizontal={true} style ={{flex:1}}>
                <View style>
                  <Image source={mov2} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>올림포스 #21</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mov4} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>윌터의 상상은 현실이 된다 #1</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mov2} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>라푼젤 #3</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mov1} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>인셉션 #11</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mov4} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>윌터의 상상은 현실이 된다 #3</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mov3} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>윌터의 상상은 현실이 된다 #2</Text>
                  <Text>The only thing we have ...</Text>
                </View>
              </ScrollView>
          </View>
        </SafeAreaView>
    )
  }

    return (
        <SafeAreaView style ={{backgroundColor: '#fff', flex:2}}>
          <View style={{ flex: 1, justifyContent: 'space-around',
            flexDirection: 'row', top : 15, bottom : 15,
            alignItem: 'center'
          }}>
            <TouchableOpacity onPress ={()=>{
              setCurrentTab('미드');
            }}
              style ={{backgroundColor: currentTab == '미드' ? '#aaa' : 'transparent',
              borderRadius:100, height:60,
            }}
            >
              <Image source={eng} style={{ margin : 3,
                width : imageWidth, height : imageHeight}} />
                <Text style = {{textAlign: 'center'}}>미드</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={()=>{
              setCurrentTab('애니');
            }}
            style ={{backgroundColor: currentTab == '애니' ? '#aaa' : 'transparent',
            borderRadius:100, height:60,}}
            >
                <Image source={anim} style={{margin : 3,
                  width : imageWidth, height : imageHeight}}/>
                  <Text style = {{textAlign: 'center'}}>애니</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={()=>{
              setCurrentTab('토크');
            }}
            style ={{backgroundColor: currentTab == '토크' ? '#aaa' : 'transparent',
            borderRadius:100, height:60,}}
            >
              <Image source={talk} style={{margin : 3,
                width : imageWidth, height : imageHeight}}/>
                <Text style = {{textAlign: 'center'}}>토크</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={()=>{
              setCurrentTab('영화');
            }}
            style ={{backgroundColor: currentTab == '영화' ? '#aaa' : 'transparent',
            borderRadius:100, height:60,}}
            >
              <Image source={movie} style={{margin : 3,
                width : imageWidth, height : imageHeight}}/>
                <Text style = {{textAlign: 'center'}}>영화</Text>
            </TouchableOpacity>
          </View>
          <View style = {{width : '100%', flex : 7}}>
              <View style = {{flexDirection:'row'}}>
                <Text style={styles.other} >현재</Text>
                <Text style={styles.blue} >수강중인</Text>
                <Text style={styles.other} >컨텐츠</Text>
              </View>
              <ScrollView horizontal={true} style ={{flex:1}}>
              <View style>
                  <Image source={mv5} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>주토피아 #4</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mv1} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>니모 #4</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mv4} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>헨젤 #3</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mv2} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>올림포스 #21</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mv4} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>주토피아 #1</Text>
                  <Text>The only thing we have ...</Text>
                </View>
              </ScrollView>
              <View style = {{flexDirection:'row'}}>
                <Text style={styles.bold} >김은수</Text>
                <Text style={styles.other}>님을 위한</Text>
                <Text style={styles.other} >컨텐츠</Text>
              </View>
              <ScrollView horizontal={true} style ={{flex:1}}>
                <View style>
                  <Image source={mv1} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>인셉션 #11</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mv6} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>니모 #3</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mv3} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>주토피아 #2</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mv2} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>올림포스 #21</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mv4} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>주토피아 #1</Text>
                  <Text>The only thing we have ...</Text>
                </View>
              </ScrollView>
              <View style = {{flexDirection:'row'}}>
                <Text style={styles.other} >같은 컨텐츠를</Text>
                <Text style={styles.orange} >좋아하는</Text>
                <Text style={styles.other} >유저들의 컨텐츠</Text>
              </View>
              <ScrollView horizontal={true} style ={{flex:1}}>
                <View style>
                  <Image source={mv2} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>올림포스 #21</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mv4} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>주토피아 #1</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mv5} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>라푼젤 #3</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mv1} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>인셉션 #11</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mv6} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>니모 #3</Text>
                  <Text>The only thing we have ...</Text>
                </View>
                <View style>
                  <Image source={mv3} style={{margin : 5,
                  width : videoSize * 1.5, height : videoSize}}/>
                  <Text>주토피아 #2</Text>
                  <Text>The only thing we have ...</Text>
                </View>
              </ScrollView>
          </View>
        </SafeAreaView>
    );
}
export default StudyPage;