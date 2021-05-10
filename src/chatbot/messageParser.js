class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase();
    if (
      lowercase.includes('jaká je inkubační doba') ||
      lowercase.includes('jaka je inkubacni doba') ||
      lowercase.includes('inkubační doba') ||
      lowercase.includes('inkubacni doba') ||
      lowercase.includes('inkubační') ||
      lowercase.includes('inkubacni')
    ) {
      this.actionProvider.incubation_time();
    } else if (lowercase.includes('ahoj')) {
      this.actionProvider.ahoj();
    } else {
      this.actionProvider.fallback();
    }
  }
}

export default MessageParser;
