import { writable } from 'svelte/store';

export const styles = [
    { Value: 'default', Text: 'Default', SubText: 'Default Template', Icon: null },
    { Value: 'matrix', Text: 'Matrix', SubText: 'Matrix Template', Icon: null }
];
export const styleClass = writable(styles[0]);