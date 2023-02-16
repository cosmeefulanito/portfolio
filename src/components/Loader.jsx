import { Comment } from 'react-loader-spinner';
const Loader = () => {
    return (
        <>
            <Comment
                visible={true}
                height="150"
                width="150"
                ariaLabel="comment-loading"
                wrapperStyle={{}}
                wrapperClass="comment-wrapper"
                color="#fff"
                backgroundColor="#FF4400"
            />
        </>
    )
}

export default Loader