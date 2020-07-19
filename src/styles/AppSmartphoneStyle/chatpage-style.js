import styled from 'styled-components'


export default styled.div`
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