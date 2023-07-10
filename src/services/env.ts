class Env {
  isAndroid = Boolean(navigator.userAgent.match(/Android/i));
  isIos = Boolean(navigator.userAgent.match(/iPhone|iPad|iPod/i));
  isOpera = Boolean(navigator.userAgent.match(/Opera Mini/i));
  isWindows = Boolean(navigator.userAgent.match(/IEMobile/i));
  isSSR = Boolean(navigator.userAgent.match(/SSR/i));
  isXApp = Boolean(navigator.userAgent.match(/xumm/i));
  isMobile = Boolean(
    this.isAndroid || this.isIos || this.isOpera || this.isWindows
  );
  isDesktop = Boolean(!this.isMobile && !this.isSSR);
}

export default new Env();
