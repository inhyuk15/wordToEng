import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity,
styleSheet, containerStyle, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import {setId, setName} from './userInfo';


const Login = ({navigation})=>{
  const dispatch = useDispatch();
// Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [authenticated, setAuthenticated] = useState(false);
  const [typedEmail, setTypedEmail] = useState("");
  const [typedPassword, setTypedPassword] = useState("");

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const onAnonymousLogin = ()=>{
      auth().signInAnonymously()
      .then(()=>{
            console.log(`Login successfully`);
            alert('환영합니다');
            setAuthenticated(true);
            goHomepage({navigation});
      })
      .catch((error)=>{
          console.log(`Login failed. error = ${error}`);
          alert("로그인 실패");
      });
  }
  const onRegister = () => {
    auth()
        .createUserWithEmailAndPassword(typedEmail, typedPassword)
        .then((user) => {
            setUser(user);
            console.log(`Register with user : ${JSON.stringify(user)}`);
        }).catch((error) => {
            console.log(`Register fail with error: ${error}`);
            alert(`등록 실패  ${error}`);
        });
  }
  const onLogin = () => {
    auth()
        .signInWithEmailAndPassword(typedEmail, typedPassword)
        .then((user) => {
            // console.log(`Login with user : ${JSON.stringify(user)}`);
            console.log("로그인 성공");
 
            const reg = /^(.+)/;
            if(reg.test(typedEmail)){
                const id = typedEmail.replace(/@.+/, '');
                console.log("로그인 성공");
                dispatch(setId(id));
                alert(`환영합니다!  ${id} 님`);
                setAuthenticated(true);
                goHomepage({navigation});
            }
            else{
                alert("이메일 형식이 잘못되었습니다.");
            }
            
        }).catch((error) => {
            console.log(`Login fail with error: ${error}`);
            alert(`로그인 실패   ${error}`);
        });
  }

  const goHomepage = ({navigation})=>{
    navigation.navigate("Home");
  }

  return (
    <View
        style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'white',
        }}
    >
        <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 40
        }}> 말이 트이는 영어 </Text>
        
        
        {authenticated == true ? (
            <View>
                <Text style={{textAlign:'center', padding : 5, bottom:10}}> 로그인 되었습니다. </Text>
                <TouchableOpacity
                    onPress={()=>{
                        auth()
                        .signOut()
                        .then(() =>{
                            console.log('User signed out!');
                            setAuthenticated(false);
                        })
                    }}
                >
                    <Text style ={{padding : 5, textAlign: 'center'}}>로그아웃</Text>
                </TouchableOpacity>
            </View>
        ):null}
        
        { authenticated == false ?(
        <View>  
            <TextInput
                style={{
                    height: 40,
                    width: 200,
                    margin: 10,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1,
                    color: 'black'
                }}
                keyboardType='email-address'
                placeholder='Enter your email'
                autoCapitalize='none'
                onChangeText={
                    (text) => {
                        setTypedEmail(text);
                    }
                }
            />
            <TextInput
                style={{
                    height: 40,
                    width: 200,
                    margin: 10,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1,
                    color: 'black'
                }}
                keyboardType='default'
                placeholder='Enter your password'
                secureTextEntry={true}
                onChangeText={
                    (text) => {
                        setTypedPassword(text);
                    }
                }
            />
            
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity
                        style ={{padding : 10, flex: 1}}
                        onPress={()=> {
                            if(typedEmail.length > 0 && typedPassword.length > 0)
                                onRegister();
                            else
                                alert("이메일, 비밀번호를 입력하십시오");
                        }}
                    >
                        <Text style ={{textAlign: 'center'}}>등록</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style ={{padding : 10, flex: 1}}
                        onPress={()=> {
                            if(typedEmail.length > 0 && typedPassword.length > 0)
                                onLogin();
                            else
                                alert("이메일, 비밀번호를 입력하십시오");
                        }} 
                    >
                        <Text style ={{textAlign: 'center'}}>로그인</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress ={()=> onAnonymousLogin()}
                    // onPress= {()=>{
                    //     console.log("??");
                    // }}
                    style = {{backgroundColor: '#eee', padding :5, margin : 5}}
                >
                    <Text style ={{textAlign: 'center'}}>익명으로 로그인</Text>
                </TouchableOpacity>
                <Text>
                    {typedEmail}
                </Text>
            </View>
        ) : null}
    </View>

    
  );

}

export default Login;