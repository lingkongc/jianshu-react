import styled from 'styled-components';

export const DetailWrapper = styled.div`
    width: 620px;
    margin: 30px auto;
    overflow: hidden;
`;

export const Header = styled.div`
    margin-bottom: 30px;
    line-height: 44px;
    font-size: 34px;
    color: #333;
    font-weight: bold;
`;

export const Content = styled.div`
    color: #2f2f2f;
    img{
        width: 100%;
        border-radius: 4px;
    }
    p{
        margin: 15px 0;
        font-size: 16px;
        line-height: 1.75;
        text-align: justify;
    }
`;