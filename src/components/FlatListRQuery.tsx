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

type PostItemProps = {
	item: Post
}

type PlayerItemProps = {
	item: Player
}

const PlayerItem: React.FC<PlayerItemProps> = ({item}) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity key={item.id} onPress={() => navigation.navigate('Detail', {type: "player",item: item})}>
			<View style={{ flex: 1, paddingTop: 22}}>
				<Text>{item.firstName} {item.lastName}</Text>
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

export const FlatListRQueryInfinite: React.FC = () => {

		const {
			status,
			data,
			error,
			isFetching,
			isFetchingNextPage,
			isFetchingPreviousPage,
			fetchNextPage,
			fetchPreviousPage,
			hasNextPage,
			hasPreviousPage,
		} = useInfiniteProjects();

		const loadMoreButtonRef = React.useRef()

		useIntersectionObserver({
			target: loadMoreButtonRef,
			onIntersect: fetchNextPage,
			enabled: hasNextPage,
		})

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
				<hr />
				<Link href="/about">
					<a>Go to another page</a>
				</Link>
				<ReactQueryDevtools initialIsOpen />
			</div>
		)
	}

}


export const FlatListRQuerySimple: React.FC = () => {
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
						<PlayerItem
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





