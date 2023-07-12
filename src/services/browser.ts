//@ts-nocheck

class Browser {
  isOpera: boolean = false;
  isFirefox: boolean = false;
  isSafari: boolean = false;
  isIE: boolean = false;
  isEdge: boolean = false;
  isChrome: boolean = false;
  isBlink: boolean = false;
  isArch: boolean = false;
  constructor() {
    if (typeof window !== 'undefined') {
      // Opera 8.0+
      this.isOpera =
        (!!window.opr && !!opr.addons) ||
        !!window.opera ||
        navigator.userAgent.indexOf(' OPR/') >= 0;

      // Firefox 1.0+
      this.isFirefox = typeof InstallTrigger !== 'undefined';

      // Safari 3.0+ "[object HTMLElementConstructor]"
      this.isSafari =
        /constructor/i.test(window.HTMLElement) ||
        (function (p) {
          return p.toString() === '[object SafariRemoteNotification]';
        })(
          !window['safari'] ||
            (typeof safari !== 'undefined' && safari.pushNotification)
        );

      // Internet Explorer 6-11
      this.isIE = /*@cc_on!@*/ false || !!document.documentMode;

      // Edge 20+
      this.isEdge = !this.isIE && !!window.StyleMedia;

      // Chrome 1 - 71
      this.isChrome =
        !!window.chrome &&
        (!!window.chrome.webstore || !!window.chrome.runtime);

      // Blink engine detection
      this.isBlink = (this.isChrome || this.isOpera) && !!window.CSS;

      // Arch Browser
      this.isArch = getComputedStyle(document.documentElement).getPropertyValue(
        '--arc-palette-title'
      );
    }
  }
}

export default new Browser();
