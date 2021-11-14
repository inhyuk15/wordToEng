import React from 'react';
import {View, styleSheet, Text, Image, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import voice1 from '../../../../assets/voice1.png';
import voice2 from '../../../../assets/voice2.png';
import arrow from '../../../../assets/arrow.png';

const styles = StyleSheet.create({
    other:{fontSize:15, fontWeight:'bold', padding : 3,},
    blue:{fontSize:15, fontWeight:'bold', padding : 3, color: 'powderblue'},
    green:{fontSize:15, fontWeight:'bold', padding : 3, color: '#7dca5c'},
    orange:{fontSize:15, fontWeight:'bold', padding : 3, color:'orange'},
    bold:{fontSize:15, fontWeight:'bold', padding : 3, color : 'black', },
  });  

const Scene2 = ()=>{
    const imageSize = 120;
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
            top : 20,
            left : 15,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: "#aaa",
            transform: [{ rotate: "90deg" }],
        }} 
        />);
    };

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
            <View style ={{
                backgroundColor: '#ddd',
                width : 230, height: 70,
                borderRadius: 30,
                flexDirection: 'row',
            }}>
                <Triangle />
                <Text style ={{textAlign: 'center', top: 25, left: 20,fontSize: 15}}>
                    녹음된 내 발음 듣기
                </Text>
            </View>
            <View style ={{
                top : 10,
                backgroundColor: '#ddd',
                width : 230, height: 170,
                borderRadius: 30,
            }}>
                <Text style ={{textAlign: 'center', fontSize: 15}}>
                </Text>
                <FlatList
                    data={[
                        {key: '  단어         발음'},
                        ]}
                        renderItem={({item}) => <Text style ={{
                            backgroundColor: '#ddd'
                            ,fontSize: 16
                            ,left : 20
                        }}>{item.key}</Text>}
                        style ={{}}
                />
                <View style = {{flexDirection: 'row', bottom : 80, left : 10}}>
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

            <Image source={arrow} style={{margin : 3,
            height : 50, width: 73,transform: [{ rotate: '90deg'}],
            }}/>
            <Image source={voice1} style={{margin : 3,
            height: imageSize * 0.5, width: imageSize * 1.5
            }}/>
            <Image source={voice2} style={{margin : 3,
            height: imageSize * 0.5, width: imageSize * 1.5
            }}/>
        </View>
    );
}

export default Scene2;