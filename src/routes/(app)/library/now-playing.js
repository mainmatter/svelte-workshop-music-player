class PlayStateChangeEvent extends Event {
	constructor(playState) {
		super('playStateChange');
		this.playState = playState;
	}
}

// this is a wrapper for the SoundCloud integration widget
export class Widget extends EventTarget {
	isPlaying = false;
	widget = undefined;

	constructor(container, options = {}) {
		super();
		const iframe = document.createElement('iframe');
		iframe.width = options?.width ?? '100%';
		iframe.height = options?.height ?? '120px';
		iframe.setAttribute('scrolling', 'no');
		iframe.setAttribute('frameborder', 'no');
		iframe.setAttribute('allow', 'autoplay');
		iframe.setAttribute('data-testid', 'nowplaying-iframe');

		container.innerHTML = '';
		container.append(iframe);

		this.iframe = iframe;
	}

	load(trackId, options) {
		return new Promise(async (resolve) => {
			const trackURL = `https://api.soundcloud.com/tracks/${trackId}`;

			options = {
				color: '#f00',
				auto_play: false,
				show_teaser: false,
				visual: false,
				buying: false,
				sharing: false,
				download: false,
				show_artwork: false,
				show_playcount: false,
				start_track: 0,
				single_active: false,
				...options,
			};

			if (!this.widget) {
				await new Promise((resolve) => {
					if (globalThis.SC) {
						resolve();
						return;
					}

					const script = document.createElement('script');
					script.src = 'https://w.soundcloud.com/player/api.js';
					script.onload = resolve;
					document.head.append(script);
				});

				const src = new URL('https://w.soundcloud.com/player/');

				src.searchParams.set('url', trackURL);

				for (const [k, v] of Object.entries(options)) {
					src.searchParams.set(k, v);
				}

				this.iframe.setAttribute('src', src);

				const widget = globalThis.SC.Widget(this.iframe);

				widget.bind(SC.Widget.Events.PLAY, () => {
					widget.setVolume(10);
					this.isPlaying = true;
					this.dispatchEvent(new PlayStateChangeEvent('playing'));
				});

				widget.bind(SC.Widget.Events.PAUSE, () => {
					this.isPlaying = false;
					this.dispatchEvent(new PlayStateChangeEvent('paused'));
				});

				this.widget = widget;

				resolve(widget);
				return;
			}

			this.widget.load(trackURL, {
				...options,
				callback: resolve(this.widget),
			});
		});
	}

	play() {
		if (!this.widget) {
			return;
		}

		this.isPlaying = true;
		this.dispatchEvent(new PlayStateChangeEvent('playing'));

		this.widget.play();
	}

	pause() {
		if (!this.widget) {
			return;
		}

		this.isPlaying = false;
		this.dispatchEvent(new PlayStateChangeEvent('paused'));

		this.widget.pause();
	}

	toggle() {
		this.isPlaying = !this.isPlaying;

		this.widget.toggle();
	}
}
