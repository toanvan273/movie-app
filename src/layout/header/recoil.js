import { atom } from 'recoil';

export const searchMovieAtom = atom({
    key: 'searchMovieAtom',
    default: {},
});

export const switchGridViewAtom = atom({
    key: 'switchGridViewAtom',
    default: true,
});