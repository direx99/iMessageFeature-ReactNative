import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {BlurView} from 'react-native-blur';
import more from './assets/more.png';
import reply from './assets/reply.png';
import translate from './assets/translate.png';
import copy from './assets/copy.png';
import heart from './assets/heart.png';
import like from './assets/like.png';
import likeb from './assets/likeb.png';
import git from './assets/git.png';


const ContentView = () => {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const [selectIcon, setSelectedIcon] = useState('');

  const [select, setSelected] = useState(0);
  const [blur, setBlur] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const FadeInView = (props) => {
  
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);
  
    return (
      <Animated.View
        style={{
          ...props.style,
          opacity: fadeAnim,
        }}
      >
        {props.children}
      </Animated.View>
    );
  };
  


  const Git = ()=>{
    return(
      <View style={{width:160,height:210,backgroundColor:'#3B3B3D'
      ,alignSelf:'flex-end',
      alignItems:'center',

      margin:10,
      borderRadius:15
      }}>
<View style={{width:160,height:160,backgroundColor:'#3B3B3D',padding:10,
backgroundColor:'#fff',justifyContent:'center',alignItems:'center',borderTopLeftRadius:15,borderTopEndRadius:15}}>

        <Image source={git} style={{width:120,height:120,alignSelf:'center'}}/>
        </View>

        <Text style={{alignSelf:'flex-start',paddingLeft:10,color:'#fff',fontWeight:500,fontSize:18,paddingTop:5}}>direx99</Text>
        <Text style={{alignSelf:'flex-start',paddingLeft:10,color:'#757575',fontWeight:400,fontSize:14}}>github.com</Text>
        <Text style={{alignSelf:'flex-end',paddingLeft:10,color:'#757575',fontWeight:500,fontSize:1,marginTop:14,marginRight:5}}>Read</Text>




      </View>
    )
  }



  

  const ReactBar = () => {
    return (
      <FadeInView style={styles.ReactBar}>
        <ReactIcon name="heart" imgb={likeb} img={like} />
        <ReactIcon name="like" imgb={likeb} img={like} />
        <ReactIcon name="like" imgb={likeb} img={like} />
        <ReactIcon name="like" imgb={likeb} img={like} />
        <ReactIcon name="like" imgb={likeb} img={like} />
        <ReactIcon name="like" imgb={likeb} img={like} />
      </FadeInView>
    );
  };
  const ReactBar2 = () => {
    return (
      <View style={styles.ReactBar2}>
        
        <ReactIcon name="heart" imgb={likeb} img={like} />
        <ReactIcon name="like" imgb={likeb} img={like} />
        <ReactIcon name="like" imgb={likeb} img={like} />
        <ReactIcon name="like" imgb={likeb} img={like} />
        <ReactIcon name="like" imgb={likeb} img={like} />
        <ReactIcon name="like" imgb={likeb} img={like} />
      </View>
    );
  };

  const Reacted = props => {
    return (
      <FadeInView>
        <TouchableOpacity
          onPress={() => setSelectedIcon(props.name)}
          style={[styles.rimgcon]}>
          <Image source={props.imgb} style={styles.rimg} />
        </TouchableOpacity>
      </FadeInView>
    );
  };

  const ReactIcon = props => {
    return (
      <View>
        {selectIcon == props.name ? (
          <TouchableOpacity
            onPress={() => setSelectedIcon('')}
            style={styles.ReactImgCon}>
            <Image source={props.imgb} style={styles.ReactImg} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setSelectedIcon(props.name)}
            style={[styles.ReactImgCon, {backgroundColor: '#3A3A3C'}]}>
            <Image source={props.img} style={styles.ReactImg} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const RespondBox = () => {
    return (
      <BlurView blurType="dark" blurAmount={100} style={styles.RespondBox}>
        <View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}>
              <Text style={{color: '#fff', fontSize: 16, marginBottom: 10}}>
                Reply
              </Text>
              <Image style={styles.imgicon} source={reply} />
            </View>
          </View>
          <View
            style={{width: '100%', height: 0.4, backgroundColor: '#5D5D5D'}}
          />
        </View>
        <View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  marginBottom: 10,
                  marginTop: 3,
                }}>
                Copy
              </Text>
              <Image style={styles.imgicon} source={copy} />
            </View>
          </View>
          <View
            style={{width: '100%', height: 0.2, backgroundColor: '#5D5D5D'}}
          />
        </View>
        <View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  marginBottom: 10,
                  marginTop: 3,
                }}>
                Translate
              </Text>
              <Image style={styles.imgicon} source={translate} />
            </View>
          </View>
          <View
            style={{width: '100%', height: 0.4, backgroundColor: '#5D5D5D'}}
          />
        </View>
        <View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}>
              <Text style={{color: '#fff', fontSize: 16}}>More</Text>
              <Image style={styles.imgicon} source={more} />
            </View>
          </View>
        </View>
      </BlurView>
    );
  };

  const RespondBox2 = () => {
    return (
      <BlurView blurType="dark" blurAmount={100} style={styles.RespondBox2}>
        <View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}>
              <Text style={{color: '#fff', fontSize: 16, marginBottom: 10}}>
                Reply
              </Text>
              <Image style={styles.imgicon} source={reply} />
            </View>
          </View>
          <View
            style={{width: '100%', height: 0.4, backgroundColor: '#5D5D5D'}}
          />
        </View>
        <View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  marginBottom: 10,
                  marginTop: 3,
                }}>
                Copy
              </Text>
              <Image style={styles.imgicon} source={copy} />
            </View>
          </View>
          <View
            style={{width: '100%', height: 0.2, backgroundColor: '#5D5D5D'}}
          />
        </View>
        <View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  marginBottom: 10,
                  marginTop: 3,
                }}>
                Translate
              </Text>
              <Image style={styles.imgicon} source={translate} />
            </View>
          </View>
          <View
            style={{width: '100%', height: 0.4, backgroundColor: '#5D5D5D'}}
          />
        </View>
        <View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}>
              <Text style={{color: '#fff', fontSize: 16}}>More</Text>
              <Image style={styles.imgicon} source={more} />
            </View>
          </View>
        </View>
      </BlurView>
    );
  };

  const MsgArea = id => {
    return (
      <View
        style={{
          paddingTop: blur == 0 ? 0 : 150,
        }}>
         
        



       


{blur == 34 ? (
          <TouchableOpacity style={{zIndex: 999}}>
            <RecMsg txt="Thank you soo much 🙈" id={34} />


   <RespondBox2 />
   <ReactBar2 />

          
          </TouchableOpacity>
        ) : (
          <View>
          <TouchableOpacity onPress={() => setBlur(34)}>
            
            <RecMsg txt="Thank you soo much 🙈"  id={34} />
          </TouchableOpacity>
       </View>
         
        )}
        
        {blur == 2 ? (
          <TouchableOpacity style={{zIndex: 999}}>
            {selectIcon == 'heart' ? (
                                 <SelectedMsg2 txt="Hay Amashi !!" id={2} />
                                 

            ) : (
                <SelectedMsg2 txt="Hay Amashi !!" id={2} />

            )}
            <RespondBox />
            <ReactBar />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setBlur(2)}>
            <View style={styles.Reaction}>
              <View style={{marginRight: -10}}>
                {selectIcon == '' ? (
                  <View></View>
                ) : (
                  <Reacted name="heart" imgb={likeb} img={like} />
                )}
              </View>
              <SelectedMsg txt="Hay Amashi !!" id={2} />
            </View>
          </TouchableOpacity>
        )}

{blur == 76 ? (
          <TouchableOpacity style={{zIndex: 999}}>
            <RecMsg txt="Hii Dinithh" id={76} />


   <RespondBox2 />
   <ReactBar2 />

          
          </TouchableOpacity>
        ) : (
          <View>
          <TouchableOpacity onPress={() => setBlur(32)}>
            
            <RecMsg txt="Hii Dinithh" id={32} />
          </TouchableOpacity>
       </View>
         
        )}

{blur == 90 ? (
          <TouchableOpacity style={{zIndex: 999}}>
            {selectIcon == 'heart' ? (
                                 <SelectedMsg2 txt="I saw your latest project , Its Awesome" id={90} />
                                 

            ) : (
                <SelectedMsg2 txt="I saw your latest project , Its Awesome" id={90} />

            )}
            <RespondBox />
            <ReactBar />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setBlur(90)}>
            <View style={styles.Reaction}>
             
              <SelectedMsg txt="I saw your latest project , Its Awesome" id={90} />
            </View>
          </TouchableOpacity>
        )}

{blur == 34 ? (
          <TouchableOpacity style={{zIndex: 999}}>
            <RecMsg txt="Thank you soo much 🙈" id={34} />


   <RespondBox2 />
   <ReactBar2 />

          
          </TouchableOpacity>
        ) : (
          <View>
          <TouchableOpacity onPress={() => setBlur(34)}>
            
            <RecMsg txt="Thank you soo much 🙈"  id={34} />
          </TouchableOpacity>
       </View>
         
        )}
        {blur == 33 ? (
          <TouchableOpacity style={{zIndex: 999}}>
            <RecMsg txt="Did u try React ?" id={33} />

            {selectIcon == 'heart' ? (
                                 <RecMsg2 txt="Did u try React ?" id={33} />
                                 

            ) : (
              <RecMsg2 txt="Did u try React ?" id={33} />

            )}
   <RespondBox2 />
   <ReactBar2 />

          
          </TouchableOpacity>
        ) : (
          <View>
          <TouchableOpacity onPress={() => setBlur(33)}>
            
            <RecMsg txt="Did u try React ?"  id={33} />
          </TouchableOpacity>
       </View>
         
        )}
{blur == 12 ? (
          <TouchableOpacity style={{zIndex: 999}}>
            {selectIcon == 'heart' ? (
                                 <SelectedMsg2 txt="Yep , I just started" id={12} />
                                 

            ) : (
                <SelectedMsg2 txt="Yep , I just started" id={12} />

            )}
            <RespondBox />
            <ReactBar />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setBlur(12)}>
            <View style={styles.Reaction}>
             
              <SelectedMsg txt="Yep , I just started" id={12} />
            </View>
          </TouchableOpacity>
        )}



{blur == 35 ? (
          <TouchableOpacity style={{zIndex: 999}}>
            <RecMsg txt="Send repo to me"  id={35} />


            {selectIcon == '11' ? (
                                 <RecMsg2 xt="Send repo to me" id={35} />
                                 

            ) : (
              <RecMsg2 txt="Send repo to me" id={35} />

            )}
   <RespondBox2 />
   <ReactBar2 />

          
          </TouchableOpacity>
        ) : (
          <View>
          <TouchableOpacity onPress={() => setBlur(35)}>
            
            <RecMsg txt="Send repo to me"  id={35} />
          </TouchableOpacity>
       </View>
         
        )}
        {blur == 47 ? (
          <TouchableOpacity style={{zIndex: 999}}>
            {selectIcon == 'heart' ? (
                                 <SelectedMsg2 txt="Sure 🙌" id={47} />
                                 

            ) : (
                <SelectedMsg2 txt="Sure 🙌" id={47} />

            )}
            <RespondBox />
            <ReactBar />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setBlur(47)}>
            <View style={styles.Reaction}>
             
              <SelectedMsg txt="Sure 🙌" id={47} />
            </View>
          </TouchableOpacity>
        )}

        {blur == 31 ? (
          <TouchableOpacity style={{zIndex: 999}}>
            <RecMsg txt="Cool" id={31} />


   <RespondBox2 />
   <ReactBar2 />

          
          </TouchableOpacity>
        ) : (
          <View>
          <TouchableOpacity onPress={() => setBlur(31)}>
            
            <RecMsg txt="Cool" id={31} />
          </TouchableOpacity>
       </View>
         
        )}
        {blur == 88 ? (
          <TouchableOpacity style={{zIndex: 999}}>
            <SelectedMsg2 txt="🤙" id={88} />

            <RespondBox />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setBlur(88)}>
           <Git/>
          </TouchableOpacity>
        )}

        {blur == 0 ? (
          <View></View>
        ) : (
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 0,

              width: screenWidth,
              height: screenHeight,
              left: 0,
              zIndex: 99,
              right: 0,
              top: 0,
            }}
            onPress={() => setBlur(0)}>
            <BlurView
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
              }}
              blurType="dark"
              blurAmount={200}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const SenderMsg = props => {
    return (
      <TouchableOpacity onPress={() => setSelected(1)} style={styles.SenderMsg}>
        <Text>Hello Dinith</Text>
      </TouchableOpacity>
    );
  };

  const SelectedMsg = props => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'flex-end',width:'100%'}}>
        <View style={styles.SenderMsg}>
          <Text style={styles.msg}>{props.txt}</Text>
        </View>
      </View>
    );
  };
  const SelectedMsg2 = props => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'flex-end',width:'100%',marginTop:-140}}>
        <View style={styles.SenderMsg}>
          <Text style={styles.msg2}>{props.txt}</Text>
        </View>
      </View>
    );
  };

  const RecMsg = props => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <View style={styles.RecMsg}>
          <Text style={styles.msg}>{props.txt}</Text>
        </View>
      </View>
    );
  };

  const RecMsg2 = props => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'flex-start',marginTop:-140}}>
        <View style={styles.RecMsg}>
          <Text style={styles.msg}>{props.txt}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.BlurView}>
       
      {blur !== 0 ? (
        <View></View>
      ) : (
        <BlurView
          style={{
            position:'absolute',
            top:0,
            height: 140,
            left:0,
            right:0,
            zIndex:1
          }}
          blurType="dark"
          blurAmount={100}
        >

        </BlurView>
      )}
      
             <MsgArea />


      {blur !== 0 ? (
        <View></View>
      ) : (
        <BlurView

          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 140,
            zIndex:1
          }}
          blurType="dark"
          blurAmount={100}
        >
          <View style={{width:'100%',height:38,backgroundColor:'#000',flexDirection:'row'}}>
            <TextInput  placeholder='iMessage' style={{width:200,height:32,paddingHorizontal:15,borderColor:'#3B3B3D',borderWidth:1,borderRadius:20,}}></TextInput>
          </View>
        </BlurView>
      )}
    </View>
  );
};

export default ContentView;

const styles = StyleSheet.create({
  BlurView: {
    flex: 1,
    justifyContent: 'flex-between',
  },
  SenderMsg: {
    backgroundColor: '#1488FE',
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    marginRight: 10,
    marginTop: 10,
    borderRadius: 30,
    maxWidth:'60%',
    marginBottom:5
  },
  RecMsg: {
    backgroundColor: '#3B3B3D',
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 30,
  },
  msg: {
    fontSize: 18,
    color: '#fff',
  },
  msg2: {
    fontSize: 18,
    color: '#fff',
  },
  RespondBox: {
    position: 'absolute',
    top: 50,
    right: 0,
    width: 180,
    alignSelf: 'flex-end',
    margin: 10,
    borderRadius: 15,
    paddingVertical: 10,
    gap: 5,
    marginTop:-130
  },
  RespondBox2: {
    position: 'absolute',
    top: 40,
    left: 0,
    width: 180,
    alignSelf: 'flex-end',
    margin: 10,
    borderRadius: 15,
    paddingVertical: 10,
    gap: 5,
    marginTop:-130

  },
  imgicon: {
    width: 20,
    height: 20,
  },
  ReactBar: {
    position: 'absolute',
    top: -60,
    right: 0,
    backgroundColor: '#3A3A3C',
    margin: 10,
    borderRadius: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 7,
    gap: 5,
    marginTop:-130
  },
  ReactBar2: {
    position: 'absolute',
    top: -60,
    left: 0,
    backgroundColor: '#3A3A3C',
    margin: 10,
    borderRadius: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 7,
    gap: 5,
    marginTop:-130

  },
  ReactImg: {
    width: 20,
    height: 20,
  },
  ReactImgCon: {
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1488FE',
  },
  Reaction: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    
  },
  rimg: {
    width: 12,
    height: 12,
  },
  rimgcon: {
    width: 23,
    height: 23,
    backgroundColor: '#3B3C3C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    position:'absolute',
    top:291,
    left:144,

  },
});
