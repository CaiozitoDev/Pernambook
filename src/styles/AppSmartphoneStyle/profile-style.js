import styled from 'styled-components'


export default styled.div`
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
`