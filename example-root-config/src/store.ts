interface Window {
  mfe: any
}

window.mfe = {}

window.mfe.storeCounter = {}

window.mfe.storeCounter = {
  count: 0,
  addToCount() {
    window.mfe.storeCounter.count += 1;
    window.dispatchEvent(new Event('countChange'));
  },
};
