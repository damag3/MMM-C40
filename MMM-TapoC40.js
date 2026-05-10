Module.register("MMM-TapoC40", {
  defaults: {
    url: "http://192.168.1.48:1984/stream.html?src=tapo&mode=webrtc",
    width: "354px",
    height: "240px",
    refreshInterval: 0
  },


  start() {
    this.visible = true;
  },

  getDom() {
    const wrapper = document.createElement("div");

    const iframe = document.createElement("iframe");
    iframe.src = this.config.url;

    iframe.style.width = this.config.width;
    iframe.style.height = this.config.height;
    iframe.style.border = "none";
    iframe.allow = "autoplay; fullscreen";

    wrapper.appendChild(iframe);
    return wrapper;
  }
});
