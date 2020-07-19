import styled from 'styled-components'


export default styled.div`
.LoginPage {
    padding: 5%;
    
    height: 100vh;

    min-height: 700px;
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
            .UsernameField, .PasswordField {
                display: flex;

                border: 1px solid black;

                border-radius: 100px;

                padding: 10px;

                margin-bottom: 5%;
            }
                .UsernameField svg, .PasswordField svg {
                    margin-right: 10px;
                }
                .UsernameField input, .PasswordField input {
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

`