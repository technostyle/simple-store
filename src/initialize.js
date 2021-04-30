class Initializer {
  initData = {};
  start = (data) => {
    this.initData = { ...this.initData, ...data };
  };

  getInitData = () => this.initData;
}

export const app = new Initializer();
