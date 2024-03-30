import {describe, it, expect} from 'vitest';
import {setupCounter, setupRootAppContent} from './counter';


describe('Counter', async() => {
    it('Deve ter um h1', async () => {
        const app = document.createElement('div');
        app.innerHTML = setupRootAppContent();
        const h1 = app.querySelector('h1');
        expect(hq.textContent).toBe('Hello Vite!');
    });
});

describe('Counter', async() => {
    it('Deve ter um botão com id counter', async () => {
        const app = document.createElement('div');
        app.innerHTML = setupRootAppContent();
        const b = app.querySelector('#counter');
        expect(b).toBeEmptyDOMElement();
        setupCounter(b);
        expect(b.textContent).toBe('count is 0');
    });
});

describe('Counter', async () => {

    it('Ao clicar no botão, ele deve incrementar o contador', async () => {
        const app = document.createElement('div');
        app.innerHTML = setupRootAppContent();
        const b = app.querySelector('#counter');
        setupCounter(b);
        b.click();
        b.click();
        b.click();
        expect(b.textContent).toBe('count is 3');
    });
});