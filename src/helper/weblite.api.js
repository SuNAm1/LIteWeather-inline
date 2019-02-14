// W && R
const { W } = window;

export default vueRoot => {
  W.setHooks({
    wappWillStart(start) {
      /* Load Data */
      W.loadData().then(({ customize }) => {
        vueRoot.overcast = customize.overcast;
        vueRoot.currentTemp = customize.currentTemp;
        vueRoot.icon = customize.icon;
        vueRoot.minTemp = customize.minTemp;
        vueRoot.maxTemp = customize.maxTemp;

        start();
      });
    }
  });
};
