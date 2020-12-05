import { getReadableStories } from './story';

describe('story selector', () => {
    it('retrieves readable stories', () => {
        // Arrange
        const storyState = {
            stories: [
                {objectID: '1', title: 'story1'},
                {objectID: '2', title: 'story2'}
            ],
            error: null,
        }
        const archiveState = ['1'];
        const state = { storyState, archiveState };

        const expectedReadableStories = [{ objectID: '2', title: 'story2'}];

        // Act
        const results = getReadableStories(state);
        
        // Assert
        expect (results).toEqual(expectedReadableStories);

    });
});