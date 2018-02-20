import { v4 } from 'node-uuid';

export function addComment(comment) {
    return {
        type: 'comment/add',
        comment: {
            id: v4(),
            replys: [],
            ...comment
             {
                    video: 'https://www.youtube.com/embed/mHlaRJvNjsA',
                    time: '',
                    comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis",
                    replys: [
                        {
                            time: '',
                            comment: 'dfagafsfsaf dsafsd fsagfsa'
                        }
                    ]
                }
            ]
        },
    };
}