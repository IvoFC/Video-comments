import { v4 } from 'node-uuid';

export function addComment(comment) {
    return {
        type: 'comment/add',
        comment: {
            id: v4(),
            video: comment.video,
            time: comment.time,
            comment: comment.comment,
            replys: [
                {
                    time: c,
                    comment: 'dfagafsfsaf dsafsd fsagfsa'
                }
            ]
        },
    };
}