import styled from 'styled-components';

export const Header = styled.div`
    background: #eeeeee;
    img{
        height: 112px;
        width: 200px;
    }
`;

export const LoginWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 112px;
    background: #eeeeee;
    z-index: -1;
`;

export const LoginBox = styled.div`
    box-sizing: border-box;
    width: 400px;
    margin: 80px auto;
    padding: 30px 60px;
    background: #ffffff;
    box-shadow: 0 0 8px rgba(0,0,0,0.1);
`;

export const Input = styled.input`
    display: block;
    box-sizing: border-box;
    margin: auto;
    padding: 4px 12px 4px 35px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #777777;
    border: 1px solid #dddddd;
    &:first-of-type{
        border-bottom: none;
        border-radius: 4px 4px 0 0;
    }
    &:last-of-type{
        border-radius: 0 0 4px 4px;
    }
`;

export const Button = styled.button`
    margin: 50px 0 0;
    width: 100%;
    background: #3194d0;
    height: 44px;
    border-radius: 22px;
    color: #ffffff;
    border: none;
    font-size: 16px;
    transition: background 0.3s ease-in;
    cursor: pointer;
    &:hover{
        background: #187cb7;
    }
`;