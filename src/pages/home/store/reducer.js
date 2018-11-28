// import * as actionTypes from "./actionTypes";
import {fromJS} from "immutable";

// 这里修改state

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '摄影',
        imgUrl: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    }, {
        id: 2,
        title: '故事',
        imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    }, {
        id: 3,
        title: '读书',
        imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    }, {
        id: 4,
        title: '手绘',
        imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    }, {
        id: 5,
        title: '简书电影',
        imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    }, {
        id: 6,
        title: '自然科普',
        imgUrl: '//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    }, {
        id: 7,
        title: '旅行·在路上',
        imgUrl: '//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    }],
    articleList: [{
        id: 1,
        title: '霍建华退出微博：生而为人，我劝你嘴下积德',
        desc: '\n' +
            '昨天，霍建华的华杰工作室在微博和facebook宣布关闭运营账号。 工作室的声明里这样写道：从今以后，只想用最纯粹的方式和大家交流，就是用影...',
        imgUrl: '//upload-images.jianshu.io/upload_images/102559-867f8d0cfbe86f98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        nickname: '远近先生',
        comment: '484',
        yes: '1660'
    }, {
        id: 2,
        title: '你与这个世界的链接， 是从发现真实的自我开始的',
        desc: '“几乎没有谁真的需要别人出主意，他们真正需要的不过是别人的理解。理解源于了解。......交际的最高境界，不需要心理学技巧。”——摘自《滋...',
        imgUrl: '//upload-images.jianshu.io/upload_images/9008388-c3083aa342e8605f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        nickname: '贰阅心理',
        comment: '24',
        yes: '345'
    }, {
        id: 3,
        title: '这7款app全面提升你的生活质量！',
        desc: '每天被学业、工作压力压得喘不过气来？已经甘愿做一条咸鱼了？让这几款APP来拯救你吧，让你从此不再邋遢，让你从内在到外在提升品位，享受生活的乐趣~...',
        imgUrl: '//upload-images.jianshu.io/upload_images/2120619-7a22afe5e1f72510.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        nickname: '心潮减压',
        comment: '11',
        yes: '617'
    },]
});


export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};