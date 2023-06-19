import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {BlurView} from 'react-native-blur';



const ContentView = () => {
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

    const [select,setSelected] = useState(0)
    const [blur,setBlur] = useState(0)




    const MsgArea = (id) => {
        return(
            <View style={{   
        }}>


{
    blur == 2 ?(
        <TouchableOpacity style={{zIndex:999}} >
<SelectedMsg  txt='mmmmm' id={2}/>
</TouchableOpacity>
   ):(
        <TouchableOpacity  onPress={()=>setBlur(2)}>
        <SelectedMsg  txt='mmmmm' id={2}/>
        </TouchableOpacity>
    )
}
{
    blur == 3 ?(
        <TouchableOpacity style={{zIndex:999}}  >
<RecMsg txt='hhhh' id={3}/>
</TouchableOpacity>
   ):(
        <TouchableOpacity  onPress={()=>setBlur(3)}>
        <RecMsg  txt='hhhh' id={3}/>
        </TouchableOpacity>
    )
}
{
    blur == 4 ?(
        <TouchableOpacity style={{zIndex:999}} >
<SelectedMsg txt='llll' id={4}/>
</TouchableOpacity>
   ):(
        <TouchableOpacity  onPress={()=>setBlur(4)}>
        <SelectedMsg  txt='llll' id={4}/>
        </TouchableOpacity>
    )
}



    {
        blur == 0 ?(<View></View>):
        (
            <TouchableOpacity 
            style={{
                position:'absolute',
                bottom:0,
                
                width:screenWidth,
                height:screenHeight,
                left:0,
                zIndex:99,
                right:0,
                top:0,}}
            onPress={()=>setBlur(0)}>
        <BlurView
        style={{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        top:0,}}
        blurType="dark"
        blurAmount={100}
        />
        </TouchableOpacity>
        )
    }


          

            </View>
        )
    }


    const SenderMsg = (props) => {
        return(
           
            <TouchableOpacity onPress={()=>setSelected(1)}  style={styles.SenderMsg}>
                <Text>Hello Dinith</Text>
            </TouchableOpacity>
            
        )
    }

    const SelectedMsg = (props)=>{

        return(
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <View  style={styles.SenderMsg}>
            <Text style={styles.msg}>{props.txt}</Text>
            </View>
        </View>
        )

    }

    const RecMsg = (props)=>{

        return(
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <View  style={styles.RecMsg}>
            <Text style={styles.msg}>{props.txt}</Text>
            </View>
        </View>
        )

    }



  return (
    <View  style={styles.BlurView}>
     <BlurView
style={{ width:'100',
    height:150,}}
blurType="dark"
blurAmount={100}
/>
<MsgArea />
<Text style={{color:'#fff',fontSize:20}}>{select}</Text>
<Text style={{color:'#fff',fontSize:20}}>{blur}</Text>

<BlurView
style={{ width:'100',
position:'absolute',
bottom:0,
left:0,
right:0,
    height:100,}}
blurType="dark"
blurAmount={100}
/>
    </View>
  )
}

export default ContentView

const styles = StyleSheet.create({
    BlurView:{
        flex:1,
        justifyContent:'flex-between',
    },
    SenderMsg:{
        backgroundColor:'#1488FE',
        paddingVertical:6,
    paddingHorizontal:12,
    flexDirection:'row',
    marginRight:10,
    marginTop:10,
    borderRadius:30,
},
RecMsg:{
    backgroundColor:'#3B3B3D',
    paddingVertical:6,
    paddingHorizontal:12,
    flexDirection:'row',
    marginLeft:10,
    marginTop:10,
    borderRadius:30,
},
msg:{
    fontSize:16,
    color:'#fff'
}
    
        
})