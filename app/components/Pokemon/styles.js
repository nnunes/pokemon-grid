import styled from 'styled-components'

export const ContainerWild = styled.button`
    height: 100px;
    width: 100px;
    padding: 5px;
    border:0;
    background-color: inherit;
    &:hover{
        background-color: #ca94bd;
        cursor: pointer;
    }
`
export const ContainerCatched = styled.button`
    height: 100px;
    width: 100%;
    padding: 5px;
    border:0;
    background-color: inherit;
    display:flex;
    align-items: center;
    &:hover{
        background-color: #ecf4dc;
        cursor: pointer;
    }
`

export const Info = styled.div`
    text-align: left;
    line-height: 1.5;
    font-size: smaller;
    padding-left: 10px;
`