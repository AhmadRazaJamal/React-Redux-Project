import React from 'react';
import Story from './Story';
import './Stories.css';
import { connect } from 'react-redux';
import { getReadableStories, getFetchError } from '../selectors/story';

const COLUMNS = {
    title: {
        label: 'Title',
        width: '40%',
    },
    author: {
        label: 'Author',
        width: '30%',
    },
    comments: {
        label: 'Comments',
        width: '10%',
    },
    points: {
        label: 'Points',
        width: '10%',
    },
    archive: {
        label: 'Buttons',
        width: '10%',
    },
};

const mapStateToProps = state => ({
    stories: getReadableStories(state),
    error: getFetchError(state),
});

const Stories = ({ stories, error }) => {
    return (
        <div className='stories'>
            <StoriesHeader columns={COLUMNS} />
            { error && <p className="error">Something went wrong ...</p> }
            
            {(stories || []).map(story =>
                <Story
                    key={story.objectID}
                    story={story}
                    columns={COLUMNS}
                />
            )}
        </div>
    );
}

const StoriesHeader = ({ columns }) =>
    <div className="stories-header">
        {Object.keys(columns).map(key =>
            <span
                key={key}
                style={{ width: columns[key].width }}
            >
                {columns[key].label}
            </span>
        )}
    </div>

export default connect(mapStateToProps)(Stories);