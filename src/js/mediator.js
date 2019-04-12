const Mediator = (function mediatorBuilder() {
    const mainTopics = {};
  
    return class {
      // Getter, keep topics updated
      // //////
      static get topicsGetter() {
        return Object.keys(mainTopics);
      }
  
      // Subscriber, set a new Topic an a Callback
      // //////////
      static Subscribe(topic, callback) {
        // If topic does not exist, set a new topic
        // ////////
        if (!mainTopics.hasOwnProperty(topic)) mainTopics[topic] = [];
  
        // register the callback with its topic
        // ////////
        mainTopics[topic].push(callback);
  
        // returns the unsubscribe method
        return () => Mediator.Unsubscribe(topic, callback);
      }
  
      static Unsubscribe(topic, callback) {
        if (!mainTopics.hasOwnProperty(topic)) return false;
  
        // remove the callback for the topic
        mainTopics[topic] = mainTopics[topic].filter(c => c !== callback);
  
        return true;
      }
  
      // Publish, will trigger the callback for each subscribed element
      // Data parameter is used as element on callback
      // //////////////
      static Publish(topic, data) {
        if (!mainTopics.hasOwnProperty(topic)) return false;
        mainTopics[topic].forEach(callback => callback(data));
        return true;
      }
    };
}());