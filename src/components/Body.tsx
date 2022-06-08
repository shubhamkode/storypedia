import React from 'react';
import StoryList from './StoryList';

interface IBodyProps{

}

const Body:React.FC<IBodyProps> = ():JSX.Element =>{

    // const storyData = [
    //     {
    //     "id":"test_id",
    //     "headline":"This is a good start",
    //     "shortDesc":"Creating this app was a good idea",
    //     "longDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio necessitatibus accusamus mollitia quisquam. Ullam, nulla! A alias quod commodi? Itaque explicabo quam quo sit ab tempora, nihil architecto eveniet? Nobis nesciunt tenetur a et facilis sunt! Rerum natus numquam odit voluptatibus, molestias cupiditate, quisquam qui exercitationem, error delectus porro",
    //     "dateCreated": new Date().toDateString(),
    //     },
    //     {
    //     "id":"test_id2",
    //     "headline":"This is a good start",
    //     "shortDesc":"Creating this app was a good idea",
    //     "longDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio necessitatibus accusamus mollitia quisquam. Ullam, nulla! A alias quod commodi? Itaque explicabo quam quo sit ab tempora, nihil architecto eveniet? Nobis nesciunt tenetur a et facilis sunt! Rerum natus numquam odit voluptatibus, molestias cupiditate, quisquam qui exercitationem, error delectus porro",
    //     "dateCreated": new Date().toDateString(),
    //     },
    //     {
    //     "id":"test_id3",
    //     "headline":"This is a good start",
    //     "shortDesc":"Creating this app was a good idea",
    //     "longDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio necessitatibus accusamus mollitia quisquam. Ullam, nulla! A alias quod commodi? Itaque explicabo quam quo sit ab tempora, nihil architecto eveniet? Nobis nesciunt tenetur a et facilis sunt! Rerum natus numquam odit voluptatibus, molestias cupiditate, quisquam qui exercitationem, error delectus porro",
    //     "dateCreated": new Date().toDateString(),
    //     },
    //     {
    //     "id":"test_id4",
    //     "headline":"This is a good start",
    //     "shortDesc":"Creating this app was a good idea",
    //     "longDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio necessitatibus accusamus mollitia quisquam. Ullam, nulla! A alias quod commodi? Itaque explicabo quam quo sit ab tempora, nihil architecto eveniet? Nobis nesciunt tenetur a et facilis sunt! Rerum natus numquam odit voluptatibus, molestias cupiditate, quisquam qui exercitationem, error delectus porro",
    //     "dateCreated": new Date().toDateString(),
    //     },
    //     {
    //     "id":"test_id5",
    //     "headline":"This is a good start",
    //     "shortDesc":"Creating this app was a good idea",
    //     "longDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio necessitatibus accusamus mollitia quisquam. Ullam, nulla! A alias quod commodi? Itaque explicabo quam quo sit ab tempora, nihil architecto eveniet? Nobis nesciunt tenetur a et facilis sunt! Rerum natus numquam odit voluptatibus, molestias cupiditate, quisquam qui exercitationem, error delectus porro",
    //     "dateCreated": new Date().toDateString(),
    //     },
    //     {
    //     "id":"test_id6",
    //     "headline":"This is a good start",
    //     "shortDesc":"Creating this app was a good idea",
    //     "longDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio necessitatibus accusamus mollitia quisquam. Ullam, nulla! A alias quod commodi? Itaque explicabo quam quo sit ab tempora, nihil architecto eveniet? Nobis nesciunt tenetur a et facilis sunt! Rerum natus numquam odit voluptatibus, molestias cupiditate, quisquam qui exercitationem, error delectus porro",
    //     "dateCreated": new Date().toDateString(),
    //     },
    // ]

    const storyData = new Array(10).fill(
        {
            "id":`${Date.toString()}`,
            "headline":`This was a good Start`,
            "shortDesc":"Testing the app for problems",
            "longDesc": " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur tempora error perspiciatis voluptate doloremque sint dolore temporibus suscipit recusandae",
            "dateCreated":new Date().toDateString(),

        }
    );


    return (
        <div className='relative top-[6rem] text-white p-3 rounded-full'>
            <div className="">
                <div className="">
                    <StoryList storyData={storyData}/>
                </div>
            </div>
        </div>
    )
}
export default Body;