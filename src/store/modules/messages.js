const messages = {
  namespaced: true,
  state: {
    // last action result
    actionResult: {
      status: null,
      message: null,
    },

    // completing state
    actionProgress: 0,

    // loading spinner
    loading: 0,

    // application error messages
    errors: [],
  },
  mutations: {
    /**
     * Set the result of the action
     * when the message exists
     * @param state
     * @param status
     * @param message
     */
    setActionResult(state, { status, message }) {
      state.actionResult.status = status;
      state.actionResult.message = message;
    },

    /**
     * Clear action result
     * @param state
     */
    clearActionResult(state) {
      state.actionResult.status = null;
      state.actionResult.message = null;
    },

    /**
     * Progress Bar (%) - upload..
     * @param state
     * @param progress
     */
    setProgress(state, progress) {
      state.actionProgress = progress;
    },

    /**
     * Clear progress
     * @param state
     */
    clearProgress(state) {
      state.actionProgress = 0;
    },

    /**
     * Add new action
     * @param state
     */
    addLoading(state) {
      state.loading += 1;
    },

    /**
     * Action finish
     * @param state
     */
    subtractLoading(state) {
      state.loading -= 1;
    },

    /**
     * Clear
     * @param state
     */
    clearLoading(state) {
      state.loading = 0;
    },

    /**
     * Set error message
     * @param state
     * @param error
     */
    setError(state, error) {
      if (error.response) {
        state.errors.push({
          status: error.response.status,
          message: error.response.data.message || error.response.statusText,
        });
      } else if (error.request) {
        state.errors.push({
          status: error.request.status,
          message: error.request.statusText || 'Network error',
        });
      } else {
        state.errors.push({
          status: 0,
          message: error.message,
        });
      }
    },

    /**
     * Clear errors
     * @param state
     */
    clearErrors(state) {
      state.errors = [];
    },
  },
};

export default messages;
