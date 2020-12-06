import styled from 'styled-components'

export default styled.div`
.PostArea a, .LeftMenuOptions a, .DownMenu a {
    text-decoration: none;
    color: white;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.377);
}

p {
    color: white;
}

h1, h2, h3, h4, h5, h6 { 
    color: white;
    font-family: 'Roboto', sans-serif;
}

/* HOME */
.Home {
    height: 100%;

    background-repeat: no-repeat;
    background-size: 100%;
}

/* LEFT */
.Left {
    visibility: hidden;

    position: fixed;
    
    width: 100%;
    height: 100%;

    z-index: 5;

    transition: 0.5s ease-in;
}

.isLeftClicked {     /* CRIAR ANIMAÇÃO DO FUNDO DESFOCADO*/
    visibility: visible;

    background-color: rgba(0, 0, 0, 0.253);
    backdrop-filter: blur(5px);
}

    /* LEFT MENU */
    .LeftMenu {
        display: flex;
        flex-direction: column;

        background: linear-gradient(to left, #ee0979, #ff6a00);

        width: 250px;
        height: 100%;

        padding: 10px;

        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;

        box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.459);

        overflow-y: scroll;

        position: relative;
        right: 100%;

        transition: 0.5s ease-in;
    }
    .LeftMenu a {
        text-decoration: none;
    }

    .isLeftMenuClicked {  /* CRIAR ANIMAÇÃO DE SLIDE DO MENU */
        right: 0%;
    }

    .LeftMenu::-webkit-scrollbar, .ChatMessages::-webkit-scrollbar {
        display: none;
    }
        .LeftMenuHeader {
            display: flex;
            border-bottom: 2px solid white;

            margin-bottom: 20px;

            align-items: center;

            padding-bottom: 10px;
        }
            .LeftMenuHeader h2 {
                margin: 0;
            }
            .LeftMenuHeader .LeftMenuCloseButton {
                margin-left: auto;

                padding: 5px;

                border: 2px solid white;
                border-radius: 100%;
            }
            .LeftMenuCloseButton svg {
                height: 30px;
                width: 30px;
            }

        .LeftMenu .MyProfile {
            display: flex;
            flex-direction: column;

            margin-bottom: 30px;
        }
            .MyProfile .UserDiv {
                display: flex;
            }
                .UserDiv img {
                    margin-right: 10px;
                }
                .UserInfo {
                    align-items: center;
                }
                .LeftMenu .MyProfile p {
                    text-align: left;
                }
    
        .LeftMenuOptions {
            margin-bottom: auto;
        }
        .LeftMenuOptions ul {
            padding-left: 10px;
        }
        .LeftMenuOptions li {
            list-style: none;
            margin-bottom: 30px;
        }
            .LeftMenuOptions li a {
                display: flex;
            }
                .LeftMenuOptions li a svg {
                    margin-right: 10px;
                
                    height: 30px;
                    width: 30px;
                }

        .LeftMenu footer {
            text-align: center;

            border-top: 2px solid white;

            padding-top: 20px;

            color: white;
        }




/* NEW POST FORM ADD BUTTON */
.NewPostFormAddButton {
    height: 70px;
    width: 70px;

    border-radius: 100%;

    box-shadow: -2px 3px 5px rgba(0, 0, 0, 0.342);

    position: fixed;

    right: 0;
    bottom: 15%;

    margin-right: 5px;

    background-color: rgba(255, 0, 0, 0.884);

    text-align: center;
    
    padding-top: 20px;

    z-index: 1;
}
    .NewPostFormAddButton svg {
        height: 30px;
        width: 30px;
    }


/* NEW POST FORM */
.NewPostForm {
    visibility: hidden;

    position: fixed;

    height: 100%;
    width: 100%;

    padding: 20px;

    z-index: 2;

    transition: 0.3s ease-in;
}
.isNewPostFormClicked {
    visibility: visible;

    background-color: rgba(0, 0, 0, 0.262);
    backdrop-filter: blur(5px);
}

    .NewPostFormHeader {
        display: flex;

        align-items: center;
        justify-content: space-around;
    }
        
        .NewPostFormHeader .ReturnPostButton {
            position: absolute;
            left: 10px;
            
            background: transparent;
            border: 2px solid white;

            border-radius: 100%;

            height: 50px;
            width: 50px;

            padding-top: 3px

        }
        .NewPostFormHeader svg {
            height: 40px;
            width: 40px;
        }
        .NewPostFormHeader h1 {
            margin: 0 30px;
        }

    .NewPostFormHeader, .NewPostForm form {
        position: relative;
        text-align: center;
    
        top: 25%;

        margin-bottom: 10px;
    }

    .NewPostForm .AddPostButton, .NewCommentForm button {
        position: absolute;
        bottom: -10px;
        right: 20px;

        border: none;
        border-radius: 100%;
        background-color: #fae7cb;
    
        width: 60px;
        height: 60px;
    
        outline: none;
    
        box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.356);
    }
    .NewPostForm textarea {
        resize: none;
        width: 100%;

        border-radius: 50px;
        
        outline: 0;
        border: 2px solid #fae7cb;
    
        padding: 20px 25px;
    
        font-size: 1.4rem;
    }
        .NewPostForm textarea::placeholder {
            padding-left: 5%;
            padding-top: 0px;
            color: black;
            font-size: 1.2rem;
        }


/* POST AREA */
.PostArea {
    margin: 0;
    width: 100%;
    padding: 10px 4% 100px;

    min-height: 100vh;
}
    .PostArea h1 {
        text-align: center;
        padding-top: 60px;
    }

        /* HEADER */
        .Header {
            position: fixed;

            width: 100%;

            display: flex;

            z-index: 1;
        }

    /* MY PROFILE */
    .HeaderMyProfile {
        display: flex;

        width: 200px;

        padding: 5px 10px 10px 5px;

        border: 2px solid white;
        border-left: none;

        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.445);

        position: relative;

        background: linear-gradient(to right, #eb3349, #f45c43);

        backdrop-filter: blur(5px);

        left: 0;
        top: 0;

        border-bottom-right-radius: 9999px;
        border-top-right-radius: 9999px;

        z-index: 1;
    }
        .HeaderMyProfile * {
            margin: 0;
            align-items: center;
        }
        .HeaderMyProfile img {
            margin-right: 10px;
            height: 40px;
            width: 40px;
        }
        .HeaderUserInfo {
            display: flex;
            align-items: center;
        }

    
    /* LOGOFF */
    .LogOff {
        background: linear-gradient(to right, #eb3349, #f45c43);

        backdrop-filter: blur(5px);

        border-top-left-radius: 100%;
        border-bottom-left-radius: 100%;

        border: 2px solid white;
        border-right: none;

        height: 60px;
        width: 60px;

        padding-left: 20px;
        padding-top: 15px;

        position: relative;

        right: 0;
        top: 0;

        margin-left: auto;

        box-shadow: -2px 3px 5px rgba(0, 0, 0, 0.342);

        transition: 0.5s ease-in;
    }
        .LogOff svg {
            height: 30px;
            width: 30px;
        }

        .LogOffConfirm {
            visibility: hidden;

            display: flex;

            position: fixed;

            height: 100%;
            width: 100%;

            z-index: 1;

            transition: 0.3s ease-in;
        }

        .isLogOffClicked {
            visibility: initial;

            background-color: rgba(0, 0, 0, 0.349);
            backdrop-filter: blur(5px);
        }

            .LogOffReturn {
                display: flex;
            
                width: 50px;
                height: 50px;
            
                margin: auto;
            
                text-align: center;
                padding: 0px;
            
                border-radius: 100%;
                border: 2px solid white;
            }
            .LogOffReturn svg {
                height: 40px;
                width: 40px;
            
                margin: auto;
            }

        .LogOffConfirmMenu {
            margin: auto;
            text-align: center;
        }
            .LogOffConfirmMenu h2 {
                text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.719);
            
                margin: 20px 0px;
            }
                .LogOffConfirmButtons button {
                    padding: 10px 40px;
                
                    border-radius: 50px;
                    background-color: red;
                
                    border: 2px solid white;
                
                    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.767);
                
                    font-size: 1.4rem;
                    color: white;
                    font-weight: bold;
                
                    outline: 0;
                }

    /* POST */
    .Post {
        border-radius: 30px;
        margin-bottom: 30px;

        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.322);

        background: linear-gradient(to right, #ffaa5a, #ffd194);

        border: 3px double rgb(240, 183, 183);
    }
        .PostHeader, .PostFooter {
            display: flex;
            align-items: center;
            padding-left: 2%;
        }
            .PostHeader * {
                margin: 10px 10px 10px 0;
            }
            .PostHeaderDate {
                font-size: 0.8rem;
                color: black;
            }
            .PostHeader a {
                display: flex;
                flex-direction: column;

                flex-wrap: wrap;
                margin-right: auto;

                text-decoration: none;

                color: white;
            }
            .PostHeader a * {
                margin: 0;
            }
                .PostUserIcon {
                    height: 50px;
                    width: 50px;
                    border-radius: 100%;
                
                    border: 2px solid white;
                }
                button.AddFriendPost {
                    margin: 0;
                    background: transparent;
                    border: none;

                    outline: 0;
                }
        .PostBody, .PostFooter {
            padding: 10px;
        }
        .PostBody {
            border: none;
            border-top: 1px solid white;
            border-bottom: 1px solid white;;
        }
        .PostBody p {
            color: black;
            word-break: break-word;
        }
        .PostFooter {
            padding: 0;
            justify-content: space-around;
        }
            .PostFooter button {
                background: transparent;
                border: none;

                width: 100%;
                height: 100%;

                outline: 0;
                padding: 10px 10px 0;
            }
            .LikeDiv, .LoveDiv, .CommentDiv {
                display: flex;
                flex-direction: column;
                width: 100%;
            }
            .LikeDiv span, .LoveDiv span, .CommentDiv span {
                font-size: 0.7rem;
                font-weight: bold;
                margin: 0 auto;
            }
            .LovDiv {
                border-left: 2px solid white;
                border-right: 2px solid white;
            }
    .LoadingImage {
        display: flex;
        
        height: 30px;
        width: 30px;

        margin: auto;
    }
    


.Down {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;

    padding: 0 10px 10px;

    z-index: 1;
}
    /* DOWN MENU*/
    .DownMenu {
        background-color: rgba(255, 0, 0, 0.274);

        backdrop-filter: blur(5px);

        border-radius: 100px;

        height: 100%;

        padding: 5px;

        box-shadow: 0px -3px 5px rgba(0, 0, 0, 0.295) ;
        border: 2px solid white;

        display: flex;
        align-items: center;
    }

        /* DOWN MENU COMPONENTS */
        .DownMenuComponents {
            width: 100%;
            height: 100%;
        }
            .DownMenuComponents * {
                display: flex;
            }
            .DownMenuComponents ul {
                justify-content: space-around;
                margin: 0;
                padding: 0;

                height: 100%;
            }
                .DownMenuComponents li {
                    list-style: none;
                    
                    height: 100%;
                    width: 100%;

                    position: relative;

                    align-items: center;
                }
                .DownMenuComponents li svg {
                    height: 30px;
                    width: 30px;
                }
                .Notification {            
                    position: absolute;
                    bottom: 2px;
                    right: -4px;

                    height: 20px;
                    width: 20px;

                    font-weight: bold;
                    color: red;

                    background-color: white;

                    border-radius: 100px;
                    border: 1px solid red;

                    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.356);

                    align-items: center;
                    justify-content: space-around;
                }











.SearchContent, .ProfileContent, .FriendsContent, .MessagesContent, .CommentArea {
    padding: 150px 5% 100px;

}



/* *******SEARCH PAGE********** */
.SearchPage {
    min-height: 100vh;
    height: 100%;
}
.SearchPageHeader {
    background: linear-gradient(to right, #ec008e94, #fc67679a);

    height: 90px;
    width: 100%;

    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;

    position: fixed;

    top: 0;

    z-index: 1;

    padding-top: 5px;

    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.397);

    backdrop-filter: blur(5px);
}
.SearchPageHeader .SearchMenuIcon {
    position: absolute;
    left: 10px;

    height: 40px;
    width: 40px;

    border-radius: 100px;
    border: 2px solid white;
}
.SearchPageHeader h5 {
    text-align: center;
}
    .SearchMenu {
        width: 70%;
        display: flex;

        border-radius: 100px;

        padding: 5px;

        border: 2px solid white;

        margin: 0 auto 10px;
    }
        .SearchMenu input {
            width: 100%;
            border: none;
            color: white;

            outline: 0;

            background-color: transparent;
        }
            .SearchMenu input::placeholder {
                color: white;
                font-weight: bold;
                text-align: center;
                padding-right: 30px;
            }
        .SearchMenu span {
            align-self: center;
            height: 100%;
            margin-right: 5px;

            background-color: transparent;
        }

.SearchTab {
    position: initial;
    top: 50px;
    
    width: 90%;
    height: 50vh;

    margin: 0 auto;

    padding: 15px;

    border-radius: 30px;
    border: 4px solid white;

    background: linear-gradient(to right, #fe003fde, #ff6b66d3);

    backdrop-filter: blur(5px);

    z-index: 5;

    overflow-y: scroll;

    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.529);
}
    .SearchTab h4 {
        text-align: center;
    }
    .UserFiltered {
        border: 2px solid white;
        border-radius: 30px;

        margin: 15px 0;
        padding: 5px 10px;
    }
        .UserFiltered a {
            display: flex;
            align-items: center;
            text-decoration: none;
        }
            .UserFiltered img {
                margin-right: 5px;
                position: initial;
            }



/* TOP TRENDING POST */
.TopTrendingPost {
    background: linear-gradient(to right, #eb3349, #f45c43);
    border-radius: 30px;

    text-align: center;
    margin-bottom: 30px;

    border: 2px solid white;

    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.322); 

    position: relative;
}
    .TopTrendingPost * {
        padding: 10px;
    }
    .TopTrendingPost img {
        height: 100px;
        width: 100px;

        border-radius: 100%;
    }

    .TopOneSpan {
        position: absolute;
        left: 20px;

        font-size: 3rem;
        font-weight: bolder;

        color: white;
    }
    .TopTrendingPost h2, .TopTrendingPost h5 {
        text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.377); 
    }
    


/* TRENDING */
.Trending, .FriendsMenu, .Message, .UserProfile{
   /*  background-color: rgb(238, 175, 39); */
   background: linear-gradient(to right, #f09819, #edde5d); 

    border-radius: 20px;

    padding: 5%;

    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.322); 
}
    .Trending h2 {
        text-align: center;
    }
    .Trending h6, .Trending p {
        text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.377); 
    }

    .Quotation {
        font-style: italic;
        font-size: 1.5rem;
    }
    .TopPost {
        border-top: 2px solid #fae7cb;
        padding: 20px 0;

    }
        .TopPost p, .TopTrendingPost p {
            word-break: break-word;
        }
        .TopPost:last-child {
            border-bottom: 1px solid #fae7cb;
        }
        .TopPost .PostUserIcon {
            float: left;
            margin: 0 10px 0 0;
            border: 2px solid #fae7cb;

            height: 60px;
            width: 60px;
        }
        .TopPost p {
            line-height: 1.3;
        }







/* FRIENDS PAGE */
.Friends {
    height: 100%;
    min-height: 100vh;
}
.FriendsContent h1 {
    text-align: center;
    background: linear-gradient(to right, #eacda3, #d6ae7b);
    border-radius: 100px;
    border: 5px outset white;

    margin-bottom: 20px;
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
        .FriendButtons a {
        align-items: center;
        color: white;
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






/* MESSAGES PAGE */
.MessagesContent {
    height: 100%;
    min-height: 100vh;
}
    .MessageTitle {
        border-radius: 30px;
        border: 2px solid white;

        background: linear-gradient(to right, #fe003fde, #ff6b66d3);

        margin-bottom: 50px;
    }
    .MessagesContent h1 {
        text-align: center;
    }
    .Message {
        padding: 15px 10px;

        margin-bottom: 30px;

        align-items: center;
    }
    .Message a {
        text-decoration: none;
        display: flex;
    }
    .Message p {
        margin: 0;
        color: white;
    }
    .Message:last-child {
        border-bottom: none;
        margin-bottom: 0;
    }
    .Message img {
        height: 70px;
        width: 70px;

        border-radius: 100%;

        border: 2px solid white;

        margin-right: 20px;
    }




/* PROFILE PAGE */

.ProfileContent {
    display: flex;
    flex-direction: column;

    height: 100%;
    min-height: 100vh;

    min-height: 800px;
}
    .UserProfile {
        display: flex;
        flex-direction: column;

        padding: 30px 15px;

        border-radius: 30px;

        margin: auto 0 20px;

        background-color: burlywood;

        text-align: center;

        min-height: 500px;

        border: 2px solid white;
    }
    .ProfileHeader img {
        height: 100px;
        width: 100px;

        border-radius: 100%;

        border: 2px solid white;

        margin: 10px auto;
    }
    .UserExtraInfo {
        display: flex;
        width: 100%;
        min-height: 200px;
    }
        .UserExtraInfo table {
            height: 100%;
            width: 100%;
        }
        .UserExtraInfo td {
            padding: 5%;
        }
        .TableTitle {
            margin-right: auto;
        }
        .UserExtraInfo h4 {
            margin: 0;
            border: 2px solid wheat;

            border-radius: 100px;
        }
.ProfileContent h2 {
    text-align: center;
}
.SeeFriends {
    margin-top: 30px;
}




      
/* LOGIN PAGE */
.LoginPage {
    padding: 5%;
    
    height: 100vh;

    min-height: 700px;
    min-width: 500px;
}
    .LoginMenu {
        background: linear-gradient(to right, #f09819, #edde5d); 

        border-radius: 30px;

        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.445);

        border: 2px double wheat;

        height: 100%;

        display: flex;
        flex-direction: column;
    }
        
        .LoginMenu .Brand {
            text-align: center;
            align-items: center;

            height: 30%;

            padding: 20px;
        }
        .LoginMenu .Brand img {
            width: 100px;
            height: 100px;

            margin-bottom: 0;
        }
        .LoginMenu .Brand h1 {
            width: 100%;
            font-size: 3rem;
        }
        
        .LoginRegisterData {
            height: 70%;

            display: flex;
            flex-direction: column;

            padding: 5% 5% 2px;

            margin: 0;

            background-color: white;

            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;

            position: initial;
        }
            .LoginRegisterData h1 {
                text-align: center;

                margin-bottom: 20px;
                
                color: black;

                text-shadow: none;
            }
            .UsernameField, .PasswordField, .LoginField {
                display: flex;

                border: 1px solid black;

                border-radius: 100px;

                padding: 10px;

                margin-bottom: 5%;
            }
                .UsernameField svg, .PasswordField svg, .LoginField svg {
                    margin-right: 10px;
                }
                .UsernameField input, .PasswordField input, .LoginField input {
                    border: none;

                    width: 100%;

                    outline: none;
                }
            .FacebookField {
                margin-top: auto;
            }
            .FaebookField button {
                display: flex;

                padding: 15px;

                align-items: center;
            }
            .FacebookField svg {
                height: 30px;
                width: 30px;
                margin-right: 20px;
            }
            .SwitchPageButton {
                position: relative;
                bottom: 10px;
                margin: 30px auto 0;
            }




/* LOADING PAGE */

.LoadingPage {
    display: flex;

    height: 100%;
    min-height: 100vh;

    padding: 0 5%;
}
    .LoadingContent {
        height: 100%;
        width: 100%;

        margin: auto 0;

        text-align: center;

        background: linear-gradient(to right, #f09819, #edde5d);
        border-radius: 50px;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.377);
        border: 2px solid white;

        padding: 5% 0;
    }
    .LoadingContent .Brand {
        margin-bottom: 20px;
        flex-direction: column;
    }
    .LoadingContent img {
        height: 150px;
        width: 150px;
    }
    .LoadingContent img:last-child {
        height: 100px;
        width: 100px;
    }
    .LoadingContent h1 {
        margin-bottom: 5%;
    }






/* WELCOME PAGE */

.WelcomePage {
    display: flex;

    height: 100%;
    min-height: 100vh;

    padding: 5%;
}
    .WelcomeContent {
        display: flex;
        flex-direction: column;

        min-height: 70vh;
        
        width: 100%;

        margin: auto 0;

        text-align: center;

        background: linear-gradient(to right, #f2994a, #f2c94c);
        border-radius: 40px;
        border: 2px solid white;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.336);
    }
        .WelcomePage div {
            padding: 15px;
        }
        .WelcomePage .Brand img {
            height: 100px;
            width: 100px;
        }
        .WelcomeText {
            margin: auto;
        }
        .WelcomeButtons {
            display: flex;
            flex-wrap: wrap;

            justify-content: space-around;

            padding: 10px 5%;
        }
        .WelcomeButtons a {
            width: 100%;
        }
        .WelcomeButtons button {
            height: 70px;
            width: 100%;
        }



/* NOT AUTHORIZED PAGE */

.NotAuthorizedPage {
    display: flex;

    padding: 5%;

    height: 100vh;
}
    .NotAuthorizedContent svg {
        height: 100px;
        width: 100px;
    }
    .NotAuthorizedContent {
        text-align: center;

        margin: auto;
    }
    .NotAuthorizedButtons {
        display: flex;

        justify-content: space-around;

        margin: 20px;
    }





/*   PAGE */
.CommentPage {
    min-height: 100vh;
    height: 100%;
}
.CommentContent {
    background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);

    padding: 3% 5%;

    border-radius: 30px;

    border: 1px solid white;

    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.603);
}
    .Comments {
        display: flex;
        flex-direction: column;

        margin-bottom: auto;
    }
        .Comment {
            display: flex;
            flex-wrap: wrap;

            background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);

            border: 2px solid white;
            border-radius: 20px;

            padding: 10px;

            margin-bottom: 10px;
        }
            .Comment a {
                margin-right: 10%;
            }
        .Comment:last-child {
            margin-bottom: auto;
        }
            .CommentHeader {
                display: flex;
            }
                .CommentHeader img {
                    height: 30px;
                    width: 30px;

                    margin-right: 10px;
                }
            .CommentBody p, h6 {
                margin: 0;
                align-items: center;
            }
        .NewCommentForm {
            position: relative;

            margin-top: 5%;
        } 
            .NewCommentForm textarea {
                width: 100%;

                border-radius: 20px;

                outline: none;

                padding: 5px;

                resize: none;

                border: 2px solid bisque;
            }


.ChatPage {
    height: 100%;
    min-height: 100vh;
}
.ChatContent {
    padding: 150px 3% 80px;
}
        .ChatHeader, .ChatMessages, .NewChatForm {
            display: flex;
        }
        .ChatHeader {
            position: fixed;
            top: 100px;

            padding: 5px 10px;

            background-image: linear-gradient(to right bottom, #ff5900, #ff6c00, #ff7d00, #ff8c00, #ff9b00);

            align-items: center;

            border-radius: 30px;
            border: 1px solid white;

            width: 93%;

            box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.603);
        }
            .ChatHeader a {
                position: absolute;
                left: 10px;
                color: white;
            }
            .ChatHeader svg {
                height: 40px;
                width: 40px;
            }
            .ChatHeader .PostUserIcon {
                margin-right: 10px;

                height: 40px;
                width: 40px;
            }
            .ChatHeader h4 {
                margin: 0;
            }
                .ChatHeaderInfo {
                    display: flex;
                    margin: auto;
                }
                    .ChatHeaderInfo a {
                        display: flex;

                        align-items: center;
                        text-decoration: none;

                        position: initial;
                    }
        .ChatMessages {
            height: 100%;
            flex-direction: column;

            padding-top: 10px;
        }
            .ChatMessage {
                background-image: linear-gradient(to right bottom, #ff4e00, #ff5b00, #ff6600, #ff7000, #ff7a00);

                border-radius: 30px;
                border: 1px solid white;

                max-width: 80%;

                padding: 10px 15px;

                margin-bottom: 10px;

                box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.603);

                overflow-wrap: break-word;

            }
                .ChatMessage img {
                    float: left;
                    height: 40px;
                    width: 40px;

                    margin-right: 10px;
                }
                .ChatMessage p {
                    display: inline;
                }
            .MyMessage {
                margin-left: auto;
                background-color: green;

                background-image: linear-gradient(to right bottom, #fff400, #ffde00, #ffc700, #ffb100, #ff9b00);
            }
                .MyMessage img {
                    float: right;
                    margin-right: 0;
                    margin-left: 10px;
                }
            .OtherMessage {
                margin-right: auto;
            }
        .NewChatForm {
            width: 100%;

            align-items: center;
        }
            .NewChatForm textarea {
                width: 85%;

                resize: none;
                outline: 0;

                border-radius: 30px;

                padding: 5px 15px;
            }
            .NewChatForm textarea::placeholder {
                font-weight: bold;
            }
            .NewChatForm button {
                outline: 0;

                height: 60px;
                width: 60px;

                margin: 0 auto;
            }
`