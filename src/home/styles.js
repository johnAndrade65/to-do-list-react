import styled from 'styled-components';

export const Container = styled.div`
    padding: 1em;
    background: #1C1C1C;
    width: 50vw;
    border-radius: 5px;

    & header{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 5px;
    }
`;
export const Cadastro = styled.header`
    display: flex;
    justify-content: space-between;

    & form{
        display: flex;
        width: 100%;

        & input{
            margin-right: 0.5em;
        }
        & ::placeholder{
            padding-left: 1.5px;
        }
    }

`;
export const List = styled.div`
    margin-top: 0.5em;
    max-height: 60vh;
    overflow: auto;

    &::-webkit-scrollbar{
        width: 0px;
    }
`;
export const ListItem = styled.span`
    display: flex;
    justify-content: space-between;
    margin-top: 0.5em;
    padding: 1em;
    background: #363636;
    border-radius: 3px;

    & :where(descent-override, svg){
        margin-left: 1em;
        cursor: pointer;
    }
`;
export const NameTask = styled.span`
    text-decoration: ${props => props.checked ? 'Line-through' : 'none'};
    font-weight: ${props => props.checked ? 'bold' : 'none'};
`;