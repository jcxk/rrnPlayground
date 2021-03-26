import * as React from 'react';
import {  useQuery , useQueryClient} from 'react-query';
import {
	AccessibilityInfo,
	ActivityIndicator,
	Alert,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import axios from "axios";
import {usePosts, Post}  from "@hooks/usePosts";
import {useInfinitePlayers, Player}  from "@hooks/useInfinitePlayers";
import { useNavigation } from '@react-navigation/native';
import useInfiniteProjects, {Project} from "@hooks/useInfiniteProjects";
import _ from "lodash";



//https://github.com/filipemerker/flatlist-performance-tips

//1.Use simple components
//2.Use light components
//3.Use shouldComponentUpdate
//4.Use cached optimized images
//5.react-native-fast-image ( Every image in your list is a new Image() instance. The faster it reaches the loaded hook, the faster your Javascript thread will be free again.)
//6.Use getItemLayout 
/*
getItemLayout = (data, index) => ({
	length: 70,
	offset: 70 * index,
	index
  })
  */
//7.Use keyExtractor
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: 8,
		backgroundColor: "white",
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontWeight: '600',
		fontSize: 16,
	},
})

type PostItemProps = {
	item: Post
}

type ProjectItemProps = {
	item: Project
}

const ProjectItem: React.FC<ProjectItemProps> = ({item}) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity key={item.id} onPress={() => navigation.navigate('Detail', {type: "project",item: item})}>
			<View style={{ flex: 1, padding: 20}}>
				<Text>{item.id} -  {item.name}</Text>
			</View>
		</TouchableOpacity>

	)
}

const PostItem: React.FC<PostItemProps> = ({item}) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity key={item.id} onPress={() => navigation.navigate('Detail', {type: "post",item: item})}>
			<View style={{ flex: 1, paddingTop: 22}}>
				<Text>{item.id} - {item.title}</Text>
			</View>
		</TouchableOpacity>

	)
}
type FlatListRQueryInfiniteProps = {
    limit: number
}
export const FlatListRQueryInfinite: React.FC<FlatListRQueryInfiniteProps> = ({limit = 8}) => {

	const { status, data, error, isLoading, refetch, fetchNextPage, hasNextPage, hasPreviousPage, isSuccess } = useInfiniteProjects();

	 if (isLoading) return <ActivityIndicator animating={isLoading}/>;
	 if (status === "error") return <Text style={styles.text}>{error?.message}</Text>;
	 //if (hasNextPage)
	 console.log(hasNextPage, "hasNext",data)
	 //let minTosee = data.projects.length > 10;
	 return   (


				<FlatList
								//removeClippedSubviews={false}
								//maxToRenderPerBatch={5}
								//initialNumToRender={5}
								data={data?.projects}
								keyExtractor={item => {
									return item.id.toString()
									}
								}
								renderItem={({item} ) => {
									return <ProjectItem key={item.id} item={item}/>
								}}
								//onRefresh={refetch}
								refreshing={isLoading}
								progressViewOffset={100}
								onEndReached={(end) => {
									if (hasNextPage) {
										fetchNextPage()
									}

								}}
				/>


		)

/*
		return (
			<div>
				<h1>Infinite Loading</h1>
				{status === 'loading' ? (
					<p>Loading...</p>
				) : status === 'error' ? (
					<span>Error: {error.message}</span>
				) : (
					<>
						<div>
							<button
								onClick={() => fetchPreviousPage()}
								disabled={!hasPreviousPage || isFetchingPreviousPage}
							>
								{isFetchingNextPage
									? 'Loading more...'
									: hasNextPage
										? 'Load Older'
										: 'Nothing more to load'}
							</button>
						</div>
						{data.pages.map(page => (
							<React.Fragment key={page.nextId}>
								{page.data.map(project => (
									<p
										style={{
											border: '1px solid gray',
											borderRadius: '5px',
											padding: '10rem 1rem',
											background: `hsla(${project.id * 30}, 60%, 80%, 1)`,
										}}
										key={project.id}
									>
										{project.name}
									</p>
								))}
							</React.Fragment>
						))}
						<div>
							<button
								ref={loadMoreButtonRef}
								onClick={() => fetchNextPage()}
								disabled={!hasNextPage || isFetchingNextPage}
							>
								{isFetchingNextPage
									? 'Loading more...'
									: hasNextPage
										? 'Load Newer'
										: 'Nothing more to load'}
							</button>
						</div>
						<div>
							{isFetching && !isFetchingNextPage
								? 'Background Updating...'
								: null}
						</div>
					</>
				)}


			</div>
		)
*/

}


export const FlatListRQuery: React.FC = () => {
	const { status, data, error, isFetching } = usePosts();

	if (status === 'error') {
		return <Text>Error: {error.message}</Text>
	}
	if (status === 'loading') {
		return <ActivityIndicator />
	}


	return (
				<FlatList

					data={data}
					keyExtractor={item => item.id.toString()}
					renderItem={({ item }) => (
						<PostItem
							item={item}
						/>
					)}
					//onRefresh={refetch}
					//refreshing={isLoading}
					///progressViewOffset={100}
					//onEndReached={() => fetchNextPage()}
				/>
	);

}





