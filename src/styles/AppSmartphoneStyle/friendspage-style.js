import styled from 'styled-components'


export default styled.div`
.Friends {
    height: 100%;
    min-height: 100vh;
}
.FriendsContent h2 {
    text-align: center;
}
.FriendRequestArea {
    display: flex;
    flex-direction: column;

    background: linear-gradient(to right, #fceabb, #f8b500);

    border-radius: 20px;
    border: 2px solid white;

    padding: 10px;

    margin-bottom: 5%;

    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.322); 
}
    .FriendRequestArea h5 {
        margin: auto;
    }
    .FriendRequestList {
        display: flex;
        flex-wrap: wrap;

        padding: 5px 0;
    }
    .FriendRequest {
        display: flex;

        border-radius: 100px;

        padding: 5px;

        margin-bottom: 5px;

        background-color: pink;

        width: 100%;

        align-items: center;

        border: 2px solid white;
    }
        .FriendRequest img {
            margin-right: 15px;
        }
        
        .Friend li {
            display: flex;

            border-radius: 100px;
        
            border: 1px solid white;
        
            margin-bottom: 20px;
        
            align-items: center;
        
            padding: 5px 10px;
        }
        .Friend a {
            text-decoration: none;

            width: 100%;
        }
        .Friend * {
            display: flex;
        }
        .Friend img {
            height: 70px;
            width: 70px;
        
            border-radius: 100%;
            border: 2px solid white;
        
            margin-right: 20px;
        }
        .Friend .UserInfo * {
            margin: 0;

            align-items: center;
        }
        .FriendButtons {
        margin-left: auto;
        }
        .DeleteFriendButton, .ChatFriendButton {
            background-color: transparent;
            border: none;

            outline: 0;

            margin: 0 5px;

            color: white;

            align-items: center;
        }
        .DeleteFriendButton svg {
            height: 30px;
            width: 30px;
        }
`