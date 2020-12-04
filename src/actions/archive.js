import {STORY_ARCHIVE} from '../constants/actionTypes';

const doArchiveStory = (id) => {
    return (
        {
            type: STORY_ARCHIVE,
            id,
        }
    );
};

export  { doArchiveStory };