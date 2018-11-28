import styled from 'styled-components';

export const HomeWrapper = styled.div`
    max-width: 960px;
    margin: 30px auto;
    padding: 0 15px;
    overflow: hidden;
`;

export const HomeMain = styled.div`
    box-sizing: border-box;
    padding: 0 15px;
    float: left;
    width: 625px;
    img{
        max-width: 100%;
    }
`;


export const HomeSide = styled.div`
    box-sizing: border-box;
    padding: 0 15px;
    float: right;
    width: 335px;
    height: 100px;
    background: #cccccc;
`;

export const TopicWrapper = styled.div`
    padding: 15px 0;
    margin-left: -15px;
    margin-top: -15px;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
`;
// topic
export const TopicItem = styled.div`
    display: inline-block;
    padding-right: 10px;
    margin-left: 15px;
    margin-top: 15px;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: rgb(28,28,28);
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    cursor: pointer;
    img{
        display: block;
        float: left;
        margin-right: 10px;
        height: 32px;
        width: 32px;
        background: rgb(28,28,28);
    }
`;

// article

export const ListItem = styled.div`
      padding: 20px 0;
      border-bottom: 1px solid #dcdcdc;
      overflow: hidden;
      img{
        display: block;
        float: right;
        margin-left: 15px;
        width: 150px;
        height: 100px;
        border-radius: 4px;
        border: 1px solid rgb(230,230,230);
      }
`;

export const ListInfo = styled.div`
    h3{
        padding-bottom: 10px;
        font-size: 18px;
        font-weight: bold;
    }
    p{
        margin-bottom: 10px;
        font-size: 13px;
        line-height: 24px;
        color: rgb(130,130,130);
    }
`;

export const ListMeta = styled.div`
    margin-bottom: 10px;
    font-size: 12px;
    span{
        padding-right: 15px;
        color: rgb(130,130,130);
    }
`;

