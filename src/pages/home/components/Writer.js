import React, {PureComponent} from 'react';
import {
    WriterWrapper,
    WriterItem
} from "../style";

class Writer extends PureComponent {
    render() {
        return (
            <WriterWrapper>
                <WriterItem>
                    <img
                        src="//upload.jianshu.io/users/upload_avatars/2998364/9f8351c3734b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                        alt=""/>
                    <div className="desc">
                        <h4>道长是名思维贩子</h4>
                        <p>写了191.3k字 · 49.5k喜欢</p>
                    </div>
                    <span>+关注</span>
                </WriterItem>
            </WriterWrapper>
        )
    }
}

export default Writer;