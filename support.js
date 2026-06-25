// Support library for Mas Leads website
// Provides utility functions and component logic

class DCLogic {
  constructor(props = {}) {
    this.props = props;
    this.state = {};
  }

  setState(update) {
    if (typeof update === 'function') {
      this.state = { ...this.state, ...update(this.state) };
    } else {
      this.state = { ...this.state, ...update };
    }
    this.forceUpdate?.();
  }

  componentDidMount() {}
  componentWillUnmount() {}
  forceUpdate() {
    // Trigger re-render if using a framework
  }
}

// Export for use in the page
if (typeof window !== 'undefined') {
  window.DCLogic = DCLogic;
}
