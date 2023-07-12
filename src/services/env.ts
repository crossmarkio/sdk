class Env {
  isAndroid: boolean = false;
  isIos: boolean = false;
  isOpera: boolean = false;
  isWindows: boolean = false;
  isSSR: boolean = false;
  isXApp: boolean = false;
  isMobile: boolean = false;
  isDesktop: boolean = false;
  constructor() {
    if (typeof window !== 'undefined') {
      this.isAndroid = Boolean(window?.navigator.userAgent.match(/Android/i));
      this.isIos = Boolean(
        window?.navigator.userAgent.match(/iPhone|iPad|iPod/i)
      );
      this.isOpera = Boolean(window?.navigator.userAgent.match(/Opera Mini/i));
      this.isWindows = Boolean(window?.navigator.userAgent.match(/IEMobile/i));
      this.isSSR = Boolean(window?.navigator.userAgent.match(/SSR/i));
      this.isXApp = Boolean(window?.navigator.userAgent.match(/xumm/i));
      this.isMobile = Boolean(
        this.isAndroid || this.isIos || this.isOpera || this.isWindows
      );
      this.isDesktop = Boolean(!this.isMobile && !this.isSSR);
    }
  }
}

export default new Env();
