import ACTIONS from "../actions/TweetAction";
export default (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case ACTIONS.SET_QUERY:
      return { ...state, query: payload };

    case ACTIONS.SET_TWEETS:
      const newTweets = Array.from(state.tweets).slice(0, 10);
      newTweets.unshift(payload.data);
      return { ...state, tweets: newTweets };

    case ACTIONS.SET_SENTIMENTS:
      const current = Date.now();
      if (current - payload.timerRef.current > 5000) {
        const newSentiments = Array.from(state.sentiment).slice(-10);
        newSentiments.push(payload.data.totalAvg);
        payload.timerRef.current = Date.now();
        return {
          ...state,
          sentiment: newSentiments,
          goodWords: { words: payload.data.positive },
          badWords: { words: payload.data.negative },
        };
      }
      return state;

    case ACTIONS.SET_HISTORY_SENTIMENT:
      const historySentiment = payload.map((snapShot) => {
        const time = new Date(snapShot.date);
        return {
          name: time.toTimeString().split(" ")[0],
          value: snapShot.avgSentiment,
        };
      });
      return { ...state, historySentiment: historySentiment };

    case ACTIONS.SET_DATABASE_SNAPSHOT:
      return { ...state, databaseSnapshot: payload };

    case ACTIONS.SET_ALERT_MESSAGE:
      return { ...state, alertMessage: payload };

    case ACTIONS.SET_LIVE_QUERY:
      if (payload) {
        const mergedQuery = payload.reduce(
          (merged, query) => {
            return {
              keyword: [...merged.keyword, query.keyword],
              query: [...merged.sentiment, query.sentiment],
            };
          },
          { keyword: [], sentiment: [] }
        );
        return { ...state, liveQuery: mergedQuery };
      }
      return state;

    default:
      return state;
  }
};
