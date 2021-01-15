import React from 'react'
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';


function Feed() {
    return (
        <div className="feed"> 
            <StoryReel />
            <MessageSender />
            <Post
                profilePic="https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/131105331_887525055326464_6491875453977856133_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeGH1F7nko4iR3a3C5vqWllXHg5tUExdzEAeDm1QTF3MQEGIIHmg4OuGt3cC50RpHq5WJOIMnnRYYyhQAJTdVTcm&_nc_ohc=RrPoHbpeie8AX_CXgjE&_nc_ht=scontent.fcrk3-1.fna&oh=626a45b3ffde8c6c79dc3d617b394968&oe=60255014"
                message="Wow this works!"
                timestamp="This is timestamp"
                username="rachelabbie_"
                image="https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/106931597_371679350474754_676568967857196946_n.jpg?_nc_cat=103&ccb=2&_nc_sid=a4a2d7&_nc_eui2=AeGGyWgGTcBPxBkPFYxIsQtYgqJmcymdXIqComZzKZ1civ1nsohS1a4pHNeOBepP13JAqjgfiFzGk3ou1tilxY5H&_nc_ohc=NFKqSY9iuXoAX_sb8YO&_nc_ht=scontent.fcrk3-1.fna&oh=b73f2f0206b94e635b86a969d6e55bd7&oe=60284128"
            />
            <Post
                profilePic="https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/131105331_887525055326464_6491875453977856133_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeGH1F7nko4iR3a3C5vqWllXHg5tUExdzEAeDm1QTF3MQEGIIHmg4OuGt3cC50RpHq5WJOIMnnRYYyhQAJTdVTcm&_nc_ohc=RrPoHbpeie8AX_CXgjE&_nc_ht=scontent.fcrk3-1.fna&oh=626a45b3ffde8c6c79dc3d617b394968&oe=60255014"
                message="Wow this works!"
                timestamp="This is timestamp"
                username="rachelabbie_"
                image="https://scontent.fcrk3-1.fna.fbcdn.net/v/t1.0-9/106931597_371679350474754_676568967857196946_n.jpg?_nc_cat=103&ccb=2&_nc_sid=a4a2d7&_nc_eui2=AeGGyWgGTcBPxBkPFYxIsQtYgqJmcymdXIqComZzKZ1civ1nsohS1a4pHNeOBepP13JAqjgfiFzGk3ou1tilxY5H&_nc_ohc=NFKqSY9iuXoAX_sb8YO&_nc_ht=scontent.fcrk3-1.fna&oh=b73f2f0206b94e635b86a969d6e55bd7&oe=60284128"
            />

            
        </div>
    )
}

export default Feed
