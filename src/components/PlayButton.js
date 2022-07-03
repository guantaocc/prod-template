import videojs from "video.js";

const Component = videojs.getComponent("Button");

class PlayButton extends Component {
  // The constructor of a component receives two arguments: the
  // player it will be associated with and an object of options.
  constructor(player, options = {}) {
    // It is important to invoke the superclass before anything else,
    // to get all the features of components out of the box!
    super(player, options);

    // If a `text` option was passed in, update the text content of
    // the component.
    if (options.text) {
      this.updateTextContent(options.text);
    }
    this.on(player, "play", (e) => this.handlePlay(e));
    this.on(player, "pause", (e) => this.handlePause(e));
  }

  handlePlay() {
    this.addClass("has-played");
    this.addClass("vjs-playing");
  }

  handlePause() {
    this.removeClass("has-played");
  }
  // The `createEl` function of a component creates its DOM element.
  createEl() {
    return videojs.dom.createEl("button", {
      // Prefixing classes of elements within a player with "vjs-"
      // is a convention used in Video.js.
      className: "vjs-title-bar",
    });
  }

  // 播放视频
  handleClick() {
    if (this.player_.paused()) {
      this.player_.play();
    } else {
      this.player_.pause();
    }
  }

  // This function could be called at any time to update the text
  // contents of the component.
  updateTextContent(text) {
    // If no text was provided, default to "Title Unknown"
    if (typeof text !== "string") {
      text = "play";
    }

    // Use Video.js utility DOM methods to manipulate the content
    // of the component's element.
    videojs.emptyEl(this.el());
    videojs.appendContent(this.el(), text);
  }
}

export default PlayButton;
