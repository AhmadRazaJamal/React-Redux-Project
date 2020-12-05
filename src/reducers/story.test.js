import storyReducer from './story';
import deepFreeze from 'deep-freeze';

describe('story reducer', () => {
    it('adds stories to the story state', () => {
        // Arrange
        const stories = ["abc", "def", "hij"];

        const action = {
            type: 'STORIES_ADD',
            stories,
        }

        const prevState = { stories: [], error: null };
        const expectedNewState = { stories, error: null };

        // Act
        deepFreeze(prevState);
        const newState = storyReducer(prevState, action);

        // Assert
        expect(newState).toEqual(expectedNewState);
    });

    it("error occurs upon adding stoires", () => {
        // Arrange 
        const error = 'ERROR: 404';

        const action = {
            type: 'STORIES_FETCH_ERROR',
            error,
        }

        const prevState = { stories: [], error: null };
        const expectedNewState = { stories: [], error: error };

        // Act
        deepFreeze(prevState);
        const newState = storyReducer(prevState, action);

        // Assert
        expect(newState).toEqual(expectedNewState);
    });

    it("error is set to null upon adding stoires", () => {
        // Arrange 
        const error = 'ERROR: 404';
        const stories = ["abc", "def", "hij"];

        const action = {
            type: 'STORIES_ADD',
            stories,
        }

        const prevState = { stories: [], error: error };
        const expectedNewState = { stories: stories, error: null };

        // Act
        deepFreeze(prevState);
        const newState = storyReducer(prevState, action);

        // Assert
        expect(newState).toEqual(expectedNewState);
    });
});