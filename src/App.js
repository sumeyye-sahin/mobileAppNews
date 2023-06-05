import React from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet,ScrollView, Image, Dimensions} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard/NewsCard';
import news_banner_data from './news_banner_data.json';

function App(){
// çok veri olduğunda renderItem Şu şekilde kullanılması daha optimum olur:
// function App in içinde "const renderNews = {({item})=> <NewsCard news={item}/>}" deyip
//return içinde "renderItem = {renderNews}" demek daha uygun . Tekrar tekrar fonksiyon oluşturmak yerine bir kez oluşturulup istenen kadar çağırılır.
// aynı şeyi keyExtractor için de yapabiliriz.
  return(
    <View style={styles.container}>
      <Text style={styles.mainTitle}>
         NEWS
      </Text>

        <FlatList
           ListHeaderComponent={
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              news_banner_data.map(bannerNews =>(
                <Image
                  
                  style={styles.banner_image}
                  source={{uri: bannerNews.imageUrl}}
                />
              ))
            }
            </ScrollView>
           }
           keyExtractor={(item, index)=> item.u_id.toString()}
           data={news_data}
           renderItem={({item})=> <NewsCard news={item}/>}       
        />
    </View>
   

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e0e0e0',
  },
  mainTitle:{
    fontSize:40,
    fontWeight:'bold',
  },
  banner_image:{
    height:Dimensions.get('window').height/5,
    width: Dimensions.get('window').width/2,
  },
});

export default App;