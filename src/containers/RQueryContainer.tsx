
import React, { Component } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";


type Props = {
  debug?: boolean
  queryClient?: QueryClient
}

const defaultQueryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 60 * 24,
			onError: error => console.log(error),
		},
		mutations: {
			onError: error => console.log(error),
		},
	},
})



const RQueryContainer: React.FC<Props> = ({debug=false,queryClient=defaultQueryClient, children}) => {
  
  return (
   
    <QueryClientProvider client={queryClient != undefined ? queryClient: defaultQueryClient}>
      {children}
	  {debug ? <ReactQueryDevtools initialIsOpen /> : ""}
    </QueryClientProvider>
  );
}

export default RQueryContainer;