export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }
  onSrat(event) {
    event.preventDefault();
    this.wrapper.addEventListener("mousemove", this.onMove);
  }

  onMove(event) {}

  onEnd(event) {
    this.wrapper.removeEventListener("mousemove", this.onMove);
  }

  addSlideEvent() {
    this.wrapper.addEventListener("mousedown", this.onSrat);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }

  baidEvents() {
    this.onSrat = this.onSrat.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.baidEvents();
    this.addSlideEvent();
    return this;
  }
}
