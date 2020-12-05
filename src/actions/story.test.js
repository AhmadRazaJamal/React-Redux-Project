import { doAddStories } from './story';

describe('story action creators', () => {
    it('add stories action creator', () => {
        // Arrange 
        const stories = ['a', 'b', 'c'];
        
        const expectedAction = {
            type: 'STORIES_ADD',
            stories,
        }

        // Act
        const action = doAddStories(stories);

        // Assert
        expect(action).toEqual(expectedAction);
    });
});