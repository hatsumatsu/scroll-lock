export default class ScrollLock {
    constructor() {
        this.scrollTop = 0;
        this.isActive = false;

        window.addEventListener('resize', this._onResize);
        this._onResize();

        document.head.insertAdjacentHTML(
            'beforeEnd',
            `<style data-ScrollLock-role="style">
  html.scrollLock-active {
  height: calc(var(--scrollLock--window-inner-height) - 1px);
  overflow: hidden;
  }
  html.scrollLock-active body {
  overflow: hidden;
  height: calc(var(--scrollLock--window-inner-height) - 1px);    
  }
  </style>`
        );
    }

    enable() {
        if (this.isActive) {
            return;
        }

        this.scrollTop = document.scrollingElement.scrollTop;

        document.documentElement.classList.add('scrollLock-active');

        const scrollLockWrapper = this._wrap(document.body.children);

        scrollLockWrapper.style.position = `relative`;
        scrollLockWrapper.style.top = `-${this.scrollTop}px`;

        document.scrollingElement.addEventListener('pointermove', this.preventDefault);
        document.scrollingElement.addEventListener('touchmove', this.preventDefault);

        this.isActive = true;
    }

    disable() {
        if (!this.isActive) {
            return;
        }

        document.documentElement.classList.remove('scrollLock-active');

        document.scrollingElement.removeEventListener('pointermove', this.preventDefault);
        document.scrollingElement.removeEventListener('touchmove', this.preventDefault);

        this._unwrap();

        document.scrollingElement.scrollTop = this.scrollTop;

        this.isActive = false;
    }

    destroy() {
        window.removeEventListener('resize', this._onResize);

        document.scrollingElement.removeEventListener('pointermove', this._preventDefault);
        document.scrollingElement.removeEventListener('touchmove', this._preventDefault);

        this._unwrap();

        document.querySelector('[data-ScrollLock-role="style"]').remove();

        this.isActive = false;
    }

    _wrap(nodes) {
        const wrapper = document.createElement('div');
        wrapper.setAttribute('data-ScrollLock-role', 'wrapper');

        Array.from(nodes).forEach((node) => {
            wrapper.appendChild(node);
        });

        document.body.appendChild(wrapper);

        return wrapper;
    }

    _unwrap() {
        const wrapper = document.querySelector('[data-ScrollLock-role="wrapper"]');

        if (!wrapper) {
            return;
        }

        wrapper.replaceWith(...wrapper.children);
    }

    _onResize() {
        document.documentElement.style.setProperty('--scrollLock--window-inner-height', `${window.innerHeight}px`);
    }

    _preventDefault(event) {
        event.eventDefault();
    }
}
