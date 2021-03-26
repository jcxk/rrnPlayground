
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { RootStackParamList } from 'containers/NavigationContainer';
import {Post} from "@hooks/usePosts";
import {Project} from "@hooks/useInfiniteProjects";


export type DetailScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Detail'>;
  route: RouteProp<RootStackParamList, 'Detail'>;
};

type ShowPostDetailProps = {
    post: Post,
    type: string
}
type ShowProjectDetailProps = {
    project: Project,
    type: string
}


const ShowProjectDetail: React.FC<ShowProjectDetailProps> = ({project}) => {
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Id:</Text>
        <Text>{project.id}</Text>
        <Text>Body:</Text>
        <Text>{project.name}</Text>
    </View>);
}


const ShowPostDetail: React.FC<ShowPostDetailProps> = ({post}) => {
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title:</Text>
        <Text>{post.title}</Text>
        <Text>Body:</Text>
        <Text>{post.body}</Text>
    </View>);
}


export const DetailScreen: React.FC<DetailScreenProps> = ({route: { params: { type, item}}}) =>  {
    //const isPost = (itemToCheck: object): itemToCheck is Post => (itemToCheck as Post).title !== undefined;
    //console.log(isPost(item))
    switch(type) {
        case "post": {
            return <ShowPostDetail post={item}/>
        }
        case "project": {
            return <ShowProjectDetail project={item}/>
        }
        default:
            return <Text>No Detail</Text>
    }

}

export default DetailScreen;