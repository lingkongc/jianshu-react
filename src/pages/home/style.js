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
        height: 270px;
        max-width: 100%;
        border-radius: 4px;
    }
`;


export const HomeSide = styled.div`
    box-sizing: border-box;
    padding: 0 15px;
    float: right;
    width: 335px;
    height: 100px;
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

export const LoadMore = styled.div`
    margin: 30px 0;
    max-width: 100%;
    height: 40px;
    border-radius: 20px;
    background-color: rgb(180,180,180);
    text-align: center;
    line-height: 40px;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease-out;
    &:hover{
        background-color: rgb(130,130,130);
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

// 推荐
export const RecommendWrapper = styled.div`
    margin-bottom: 15px;
`;

export const RecommendItem = styled.a`
    display:block;
    margin-bottom: 5.5px;
    height: 50px;
    border-radius: 4px;
    background-size: contain;
    // background-color: rgb(130,130,130);
    background-image: url(${(props) => props.imgUrl});
    cursor: pointer;
`;

// 作者推荐
export const WriterWrapper = styled.div`
    
`;

export const WriterItem = styled.div`
    overflow: hidden;
    h4{
        margin-top: 5px;
        font-size: 14px;
    }
    p{
        margin-top: 10px;
        color: rgb(130,130,130);
        font-size: 12px;
    }
    img{
        float: left;
        margin-right: 10px;
        height: 48px;
        width: 48px;
        border-radius: 50%;
        border: 1px solid rgb(230,230,230);
    }
    span{
        float: right;
        margin-top: 5px;
        font-size: 13px;
        color: #42c02e;
    }
    .desc{
        float: left;
    }
`;

export const BackTop = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    border: 2px solid rgb(220,220,220);
    font-size: 60px;
    line-height: 58px;
    text-align: center;
    color: rgb(130,130,130);
    cursor: pointer;
`;