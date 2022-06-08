import React from 'react';
import StoryCard from "./StoryCard";
import InfiniteScroll from "react-infinite-scroll-component";

interface IStoryListProps{
    storyData: any[],
}

const StoryList:React.FC<IStoryListProps> = ({storyData}):JSX.Element =>{
    return (
        // <div className="flex-wrap justify-center gap-4 md:flex md:mt-16">
        //     {storyData.map((story) => (
        //         <StoryCard key={story.id} story={story}/>)
        //     )
        //     }
        // </div>
        <div id="scrollableDiv"
            className="flex flex-col h-screen overflow-auto md:mt-16 md:h-full">
            <InfiniteScroll
                dataLength={storyData.length}
                className="flex flex-col-reverse gap-4 md:flex-wrap md:flex-row"
                hasMore={false}
                scrollableTarget="scrollableDiv"
                next={() => {console.log("Trying to fetch more") }}
                loader={<h4> Loading... </h4>}>
                {storyData.map(story => (
                    <div key={story.id}>
                        <StoryCard story={story} />
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
}
export default StoryList;