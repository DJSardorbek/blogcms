import React, {useEffect, useState} from 'react';
import {getComments} from "@/services";
import moment from "moment";

function Comments({slug}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(slug)
            .then(res => setComments(res))
    },[])
    return (
        <>
            {comments.length > 0 && (
                <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
                    <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                        {comments.length}
                        {" "}
                        Comments
                    </h3>
                    {comments.map((comment, index) => (
                        <div className='border-b border-gray-100 mb-4 pb-4' key={index}>
                            <p className='mb-4'>
                                <span className='font-semibold'>{comment.name}</span>
                                {" "}
                                on
                                {" "}
                                {moment(comment.createdAt).format("MMM DD, YYYY")}
                            </p>
                            <p className='whitespace-pre-line text-gray-600 w-full'>
                                {comment.comment}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Comments;