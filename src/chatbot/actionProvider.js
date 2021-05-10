class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  fallback = () => {
    const message = this.createChatBotMessage('Omlouvám sem, nerozuměl jsem Vaší otázce.');
    this.setChatbotMessage(message);
  };

  incubation_time = () => {
    const message = this.createChatBotMessage('Inkubační doba je 2 - 14 dní.');
    this.setChatbotMessage(message);
  };

  ahoj = () => {
    const message = this.createChatBotMessage('Zdaaaar');
    this.setChatbotMessage(message);
  };

  setChatbotMessage = (message) => {
    this.setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };
}

export default ActionProvider;
