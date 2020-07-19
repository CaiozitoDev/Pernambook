import styled from 'styled-components'


export default styled.div`
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
`