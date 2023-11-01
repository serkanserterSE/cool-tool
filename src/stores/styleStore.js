import { writable } from 'svelte/store';

export const styles = ['default', 'matrix']; 
export const styleClass = writable(0);