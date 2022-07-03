<template>
  <div data-vjs-player>
    <video id="vid1" class="video-js">
      <source src="//vjs.zencdn.net/v/oceans.mp4" />
    </video>
  </div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";
import PlayButton from "./PlayButton";
videojs.registerComponent("PlayButton", PlayButton);
export default {
  mounted() {
    const player = videojs("vid1", {
      controls: true,
      // autoplay: "muted",
      controlBar: true,
      preload: "auto",
      aspectRatio: "16:9",
      fluid: true,
      notSupportedMessage: "视频不支持",
      playbackRates: [0.5, 1, 1.5, 2],
      // 自定义插件
    });
    // 换台必备
    // player.src({
    //   url: "//vjs.zencdn.net/v/oceans.mp4",
    // });
    player.addChild("PlayButton", { text: "play" });

    player.on("ready", () => {
      console.log("ready");
    });
    console.log(player);
  },
};
</script>

<style lang="less">
.video-js .vjs-title-bar {
  background: rgba(0, 0, 0, 0.5);
  color: white;

  /*
    By default, do not show the title bar.
  */
  font-size: 2em;
  padding: 0.5em;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  &.has-played {
    display: none;
  }
}
</style>
