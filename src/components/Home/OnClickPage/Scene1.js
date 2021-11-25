import React, { useState } from 'react';
import {View, styleSheet, Text, Image, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import st1 from '../../../../assets/st1.jpeg';
import st2 from '../../../../assets/st2.png';
import mike from '../../../../assets/mike.png';
import voice1 from '../../../../assets/voice1.png';
import voice2 from '../../../../assets/voice2.png';
import vid from '../../../../assets/vid.mp4';
import fore from '../../../../assets/fore.png';

import VideoPlayer from 'react-native-video-player';



const imageSize = 120;
const styles = StyleSheet.create({
    other:{fontSize:15, fontWeight:'bold', padding : 3,},
    blue:{fontSize:15, fontWeight:'bold', padding : 3, color: 'powderblue'},
    green:{fontSize:15, fontWeight:'bold', padding : 3, color: '#7dca5c'},
    orange:{fontSize:15, fontWeight:'bold', padding : 3, color:'orange'},
    bold:{fontSize:15, fontWeight:'bold', padding : 3, color : 'black', },
  });  

const Scene1 = ()=>{
    
    const [toggle, setToggle] = useState(false);
    const PronounceImage =()=>{
        if(toggle){
            return(
                <View style ={{ alignItems: 'center'}}>
                    <View style = {{flexDirection: 'row'}}>
                        <Text style = {styles.other}>
                            and
                        </Text>
                        <Text style ={styles.green}>
                            caught
                        </Text>
                        <Text style = {styles.other}>
                            your flyer
                        </Text>
                    </View>
                    <View style = {{flexDirection: 'row', padding : 5, bottom : 10}}>
                        <Text style = {styles.other}>
                            out of the
                        </Text>
                        <Text style = {styles.blue}>
                            corner
                        </Text>
                        <Text style = {styles.other}>
                            of my eye.
                        </Text>
                    </View>
                    <View style = {{flexDirection: 'row', left : 10, bottom: 10, backgroundColor : '#ddd', borderRadius: 10, padding : 5}}>
                        <View>
                                <View style = {{flexDirection: 'row'}}>
                                    <Text style = {styles.other}>c</Text>
                                    <Text style = {styles.green}> augh</Text>
                                    <Text style = {styles.other}>t    </Text>
                                </View>
                                <Text style = {styles.other}>
                                    kɔ  가   a로 들렸어요.
                                </Text>
                        </View>
                    </View>
                </View>
            );
        }
        return null;
    }
    const Triangle = () => {
        return (
        <View style ={{
            width: 0,
            height: 0,
            backgroundColor: "transparent",
            borderStyle: "solid",
            borderLeftWidth: 15,
            borderRightWidth: 15,
            borderBottomWidth: 30,
            top :10,
            left : 15,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: "#aaa",
            transform: [{ rotate: "90deg" }],
        }} 
        />);
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',
         }}>
            {/* <Image source={st1} style={{margin : 3, width: 300, height: 200,
            }}/> */}
            <VideoPlayer
                video={vid}
                thumbnail={fore}
                style={{margin : 3, width: 300, height: 200,
                }}
                autoplay={false}
                disableFullscreen={true}
                disableControlsAutoHide = {true}
            />
            <View style ={{flex: 2}}>
                <Text style ={{
                    backgroundColor: '#bbb'
                    ,color: '#eee'
                    ,fontSize: 18
                    ,width : 300
                    }}>Oh, okay, sorry. -Um, so who was right?</Text>
                <Text style ={{
                    backgroundColor: '#bbb'
                    ,color: '#eee'
                    ,fontSize: 18
                    ,width : 300
                    }}>I mean aboual all of this?</Text>
                <Text style ={{
                    backgroundColor: '#0047AB'
                    ,color: '#eee'
                    ,fontSize: 18
                    ,width : 300
                    }}>Jessica, only child. illinois Chicago,</Text>
                <FlatList
                    style ={{flex: 1, width : 300}}
                    data={[
                        {key: 'Muslims a little bit. Jews Christians, Buddhists'},
                        {key: 'John is go out?'},
                        ]}
                        renderItem={({item}) => <Text style ={{
                            backgroundColor: '#bbb'
                            ,color: '#eee'
                            ,fontSize: 18
                            ,flex: 1
                    }}>{item.key}</Text>}
                />
            </View>
            
            <PronounceImage />

            <Image source={voice1} style={{margin : 3,
                height: imageSize * 0.5, width: imageSize * 1.5
            }}/>
            <Image source={voice2} style={{margin : 3,
                height: imageSize * 0.5, width: imageSize * 1.5
                ,padding : 3
            }}/>

            <TouchableOpacity onPress = {()=> setToggle(!toggle)}
                style ={{ flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                bottom: 10
            }}
            >
                <View style ={{
                    backgroundColor: '#ddd',
                    width : 180, height: 50,
                    borderRadius: 30,
                    flexDirection: 'row',
                }}>
                    <Triangle />
                    <Text style ={{textAlign: 'center', top : 15, left: 20,fontSize: 15}}>
                        녹음된 내 발음 듣기
                    </Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity
                style ={{ flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}
            >
                <Image source={mike} style={{margin : 3,
                    width: 80,
                    resizeMode: 'contain',
                }}/>
            </TouchableOpacity>
        </View>
      );
}

export default Scene1;