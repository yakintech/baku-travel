import { ScrollView, Text, View, Dimensions, StyleSheet, TouchableOpacity, FlatList,Image } from "react-native";
import React, { Fragment, useRef, useState } from "react";
import { storage } from "../helpers/AsyncStorage";

const Index = ({ data, renderItem, renderButtonStyle, setIsShow }) => {

    const scrollRef = useRef();
    const [currentPage, setCurrentPage] = useState(0);
    const { width } = Dimensions.get('screen');

    const scroll = (event) => {
        const x = event.nativeEvent.contentOffset.x;
        setCurrentPage(Math.round(x / width));

    }
    const nextSlide = () => {
        scrollRef.current.scrollTo({ x: (currentPage + 1) * width, animated: true })
    }
    const skip = () => {
        scrollRef.current.scrollToEnd({ animated: true });
    }

    const hide = () => {
        setIsShow(false);
        storage.set('onboarding', false);
    }
    
    return (
        <>
            <ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={(e) => scroll(e)}
            >
                {data.map((item, index) => {
                    return <Fragment key={index}>
                        {
                            renderItem(item)
                        }
                    </Fragment>
                })}

            </ScrollView>
            <FlatList
                data={data}
            />
            <View style={{
                position: 'absolute',
                top: 50,
                right: 10,
                flexDirection: 'row',
                padding:10
            }}>

                {data.map((v, index) =>
                
                    <View key={index} style={{
                        width: currentPage == index ? 37 : 17,
                        height: 4,
                        opacity: currentPage == index ? 1 : 0.4,
                        marginLeft: 5,
                        borderRadius: 2,
                        backgroundColor: '#fff',
                        
                    }} />
                )}

            </View>
            <Text style={{color:'white',fontSize:15,position:'absolute',padding:10,fontWeight:'500',top:40,left:10}}>
                    Skip
                </Text>
            <TouchableOpacity
                style={renderButtonStyle}
                onPress={() => {
                    currentPage != data.length - 1 ?
                        nextSlide() : hide();
                }}
            >
                <Text>{currentPage != data.length - 1 ? "Next" : "Get Started"}</Text>
            </TouchableOpacity>
        </>
    );
};


export default Index;

const styles = StyleSheet.create({});
