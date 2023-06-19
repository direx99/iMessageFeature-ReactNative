import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {BlurView} from 'react-native-blur';
import more from './assets/more.png';
import reply from './assets/reply.png';
import translate from './assets/translate.png';
import copy from './assets/copy.png';
import heart from './assets/heart.png';
import like from './assets/like.png';
import likeb from './assets/likeb.png';

const ContentView = () => {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const [selectIcon, setSelectedIcon] = useState('');

  const [select, setSelected] = useState(0);
  const [blur, setBlur] = useState(0);

  const ReactBar = () => {
    return (
      <View style={styles.ReactBar}>
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
      <View>
        <TouchableOpacity
          onPress={() => setSelectedIcon(props.name)}
          style={[styles.rimgcon]}>
          <Image source={props.imgb} style={styles.rimg} />
        </TouchableOpacity>
      </View>
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

  const MsgArea = id => {
    return (
      <View
        style={{
          paddingTop: blur == 0 ? 0 : 150,
        }}>
            {blur == 3 ? (
          <TouchableOpacity style={{zIndex: 999}}>
            <SelectedMsg2 txt="Hello Dinith 😃" id={2} />

            <RespondBox />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setBlur(3)}>
            <RecMsg txt="Hello Dinith 😃" id={3} />
          </TouchableOpacity>
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
        {blur == 5 ? (
          <TouchableOpacity style={{zIndex: 999}}>
            <SelectedMsg2 txt="Hay Amashi !!" id={5} />

            <RespondBox />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setBlur(5)}>
            <RecMsg txt="Wtsupp" id={5} />
          </TouchableOpacity>
        )}
        {blur == 9 ? (
          <TouchableOpacity style={{zIndex: 999}}>
            <SelectedMsg2 txt="Just Coding 😜" id={9} />

            <RespondBox />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setBlur(9)}>
            <SelectedMsg txt="Just Coding 😜" id={9} />
          </TouchableOpacity>
        )}
        {blur == 3 ? (
          <TouchableOpacity style={{zIndex: 999}}>
            <SelectedMsg2 txt="Hay Amashi !!" id={2} />

            <RespondBox />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setBlur(3)}>
            <RecMsg txt="Cool" id={3} />
          </TouchableOpacity>
        )}
        {blur == 88 ? (
          <TouchableOpacity style={{zIndex: 999}}>
            <SelectedMsg2 txt="🤙" id={88} />

            <RespondBox />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setBlur(88)}>
            <SelectedMsg txt="🤙" id={88} />
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
              blurAmount={100}
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
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <View style={styles.SenderMsg}>
          <Text style={styles.msg}>{props.txt}</Text>
        </View>
      </View>
    );
  };
  const SelectedMsg2 = props => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
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

  return (
    <View style={styles.BlurView}>
      {blur !== 0 ? (
        <View></View>
      ) : (
        <BlurView
          style={{
            height: 150,
          }}
          blurType="dark"
          blurAmount={100}
        />
      )}
      <View>
        <MsgArea />
      </View>

      {blur !== 0 ? (
        <View></View>
      ) : (
        <BlurView
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 100,
          }}
          blurType="dark"
          blurAmount={100}
        />
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
    fontSize: 16,
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
    width: 15,
    height: 15,
  },
  rimgcon: {
    width: 25,
    height: 25,
    backgroundColor: '#1488FE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
