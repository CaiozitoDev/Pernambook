import styled from 'styled-components'


export default styled.div`
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
`