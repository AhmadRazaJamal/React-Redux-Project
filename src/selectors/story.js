function isNotArchived(archivedIds) {
    return function (story) {
        return archivedIds.indexOf(story.objectID) === -1;
    };
}

function getReadableStories({ storyState, archiveState }) {
    return storyState.filter(isNotArchived(archiveState));
}

export {
    getReadableStories,
};